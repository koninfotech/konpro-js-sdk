/**
 * KonPro TypeScript SDK
 * Official type-safe SDK for interacting with KonPro's Public API
 */

import axios, { AxiosInstance, AxiosError } from "axios";

// ============================================================================
// Type Definitions
// ============================================================================

export type UUID = string;

// Base Response Types
export type BaseResponse<T> = {
  data: T;
  status?: string;
  message?: string;
};

export type PaginationMeta = {
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  has_next: boolean;
  has_prev: boolean;
};

export type BaseResponseWithPagination<T> = {
  data: T;
  meta: PaginationMeta;
  status?: string;
  message?: string;
};

// Avatar Types
export interface Avatar {
  id: string;
  user_id?: UUID | null;
  name: string;
  gender: string;
  occupation: string;
  url: string;
  cdn_url: string;
  object_key: string;
  is_public: boolean;
  created_at: string;
  updated_at?: string | null;
}

export interface AvatarDeleteResponse {
  success: boolean;
  message: string;
  deleted_id: string;
}

// Voice Types
export interface Voice {
  id: UUID;
  user_id?: UUID | null;
  name: string;
  gender: string;
  description?: string | null;
  elevenlabs_voice_id: string;
  preview_url?: string | null;
  is_public: boolean;
  created_at: string;
  updated_at?: string | null;
}


// Brain Types
export interface Brain {
  id: UUID;
  name: string;
  system_prompt: string;
  llm_name: string;
  knowledge_base_id?: UUID | null;
  is_public: boolean;
  is_active: boolean;
  user_id?: UUID | null;
  created_at: string;
  updated_at?: string | null;
}


// Knowledge Base Types
export interface KnowledgeBase {
  id: UUID;
  user_id?: UUID | null;
  knowledge_base_name: string;
  knowledge_base_description?: string | null;
  content_type: string;
  content_url?: string | null;
  content_object_key?: string | null;
  pinecone_namespace: string;
  is_public: boolean;
  is_processed: boolean;
  created_at: string;
  updated_at?: string | null;
}

// Agentic Avatar Types
export interface AgenticAvatar {
  id: UUID;
  name: string;
  description?: string | null;
  user_id?: UUID | null;
  avatar_id: string;
  voice_id: UUID;
  brain_id: UUID;
  brain?: Brain | null;
  voice?: Voice | null;
  avatar?: Avatar | null;
  created_at: string;
  updated_at: string;
}

export interface AgenticAvatarCreate {
  name: string;
  description?: string | null;
  avatar_id: string;
  voice_id: UUID;
  brain_id: UUID;
}

// API Key Types
export interface ApiKey {
  id: UUID;
  user_id: UUID;
  name: string;
  key: string; // Masked key
  prefix: string;
  scopes: string[];
  rate_limit: number;
  rate_limit_window: number;
  expires_at?: string | null;
  is_active: boolean;
  last_used_at?: string | null;
  last_used_ip?: string | null;
  request_count: number;
  key_metadata?: Record<string, any> | null;
  created_at: string;
  updated_at?: string | null;
}

export interface ApiKeyValidationResponse {
  valid: boolean;
  key?: ApiKey | null;
  message: string;
}

// Widget Session Types
export interface WidgetSession {
  id: UUID;
  session_id: string;
  user_id: UUID;
  agentic_avatar_id: UUID;
  api_key_id: UUID;
  user_metadata?: Record<string, any> | null;
  allowed_origins?: string[] | null;
  expires_at: string;
  is_revoked: boolean;
  created_at: string;
}

export interface WidgetSessionCreate {
  agentic_avatar_id: string;
  user_metadata?: Record<string, any>;
  allowed_origins?: string[];
}

export interface WidgetSessionResponse {
  session_token: string;
  session_id: string;
  expires_at: string;
  expires_in: number;
  websocket_url: string;
  user_id: string;
  avatar: Record<string, any>;
}

// Paginated Response Types
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

// List Options
export interface ListOptions {
  scope?: "all" | "my";
  page?: number;
  limit?: number;
}

// SDK Options
export interface KonProSDKOptions {
  baseURL?: string;
  timeout?: number;
}

// Error Response
export interface KonProError extends Error {
  status?: number;
  data?: any;
}

// ============================================================================
// SDK Implementation
// ============================================================================

export class KonProSDK {
  private apiKey: string;
  private baseURL: string;
  private timeout: number;
  private client: AxiosInstance;

  public agenticAvatars: AgenticAvatarsService;
  public avatars: AvatarsService;
  public voices: VoicesService;
  public brains: BrainsService;
  public knowledgeBases: KnowledgeBasesService;
  public widgets: WidgetsService;
  public apiKeys: APIKeysService;

  constructor(apiKey: string, options: KonProSDKOptions = {}) {
    if (!apiKey) {
      throw new Error("API key is required");
    }

    this.apiKey = apiKey;
    this.baseURL = options.baseURL || "https://api.konpro.ai";
    this.timeout = options.timeout || 30000;

    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {
        "X-API-Key": this.apiKey,
        "Content-Type": "application/json",
      },
    });

    // Initialize service modules
    this.agenticAvatars = new AgenticAvatarsService(this.client);
    this.avatars = new AvatarsService(this.client);
    this.voices = new VoicesService(this.client);
    this.brains = new BrainsService(this.client);
    this.knowledgeBases = new KnowledgeBasesService(this.client);
    this.widgets = new WidgetsService(this.client);
    this.apiKeys = new APIKeysService(this.client);
  }

  /**
   * Validate the API key
   */
  async validateKey(): Promise<ApiKeyValidationResponse> {
    try {
      const response = await this.client.post<BaseResponse<ApiKeyValidationResponse>>(
        "/v1/api-keys/validate"
      );
      return response.data.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Test connection to the API
   */
  async testConnection(): Promise<any> {
    try {
      const response = await this.client.get("/");
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): KonProError {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        const err = new Error(
          (axiosError.response.data as any)?.message || "API Error"
        ) as KonProError;
        err.status = axiosError.response.status;
        err.data = axiosError.response.data;
        return err;
      } else if (axiosError.request) {
        return new Error("No response received from server") as KonProError;
      }
    }
    return error as KonProError;
  }
}

// ============================================================================
// Service Classes
// ============================================================================

/**
 * Agentic Avatars Service
 */
export class AgenticAvatarsService {
  constructor(private client: AxiosInstance) { }

  /**
   * Create a new agentic avatar
   */
  async create(data: AgenticAvatarCreate): Promise<AgenticAvatar> {
    const response = await this.client.post<BaseResponse<AgenticAvatar>>(
      "/v1/agentic-avatars",
      data
    );
    return response.data.data;
  }

  /**
   * Get all agentic avatars
   */
  async list(): Promise<AgenticAvatar[]> {
    const response = await this.client.get<BaseResponseWithPagination<AgenticAvatar[]>>(
      "/v1/agentic-avatars"
    );
    return response.data.data;
  }

  /**
   * Get a specific agentic avatar by ID
   */
  async get(id: UUID): Promise<AgenticAvatar> {
    const response = await this.client.get<BaseResponse<AgenticAvatar>>(
      `/v1/agentic-avatars/${id}`
    );
    return response.data.data;
  }

  /**
   * Delete an agentic avatar
   */
  async delete(id: UUID): Promise<{ success: boolean; message: string }> {
    const response = await this.client.delete<BaseResponse<{ success: boolean; message: string }>>(
      `/v1/agentic-avatars/${id}`
    );
    return response.data.data;
  }
}

/**
 * Avatars Service
 */
export class AvatarsService {
  constructor(private client: AxiosInstance) { }

  /**
   * Get all avatars
   */
  async list(options: ListOptions = {}): Promise<Avatar[]> {
    const params = new URLSearchParams();
    if (options.scope) params.append("scope", options.scope);
    if (options.page) params.append("page", options.page.toString());
    if (options.limit) params.append("limit", options.limit.toString());

    const response = await this.client.get<BaseResponseWithPagination<Avatar[]>>(
      `/v1/avatars?${params.toString()}`
    );
    return response.data.data;
  }

  /**
   * Get a specific avatar by ID
   */
  async get(id: string): Promise<Avatar> {
    const response = await this.client.get<BaseResponse<Avatar>>(`/v1/avatars/${id}`);
    return response.data.data;
  }

  /**
   * Delete an avatar
   */
  async delete(id: string): Promise<AvatarDeleteResponse> {
    const response = await this.client.delete<BaseResponse<AvatarDeleteResponse>>(
      `/v1/avatars/${id}`
    );
    return response.data.data;
  }

}

/**
 * Voices Service
 */
export class VoicesService {
  constructor(private client: AxiosInstance) { }

  /**
   * Get all voices
   */
  async list(options: ListOptions = {}): Promise<Voice[]> {
    const params = new URLSearchParams();
    if (options.scope) params.append("scope", options.scope);

    const response = await this.client.get<BaseResponseWithPagination<Voice[]>>(
      `/v1/voices?${params.toString()}`
    );
    return response.data.data;
  }

  /**
   * Get a specific voice by ID
   */
  async get(id: UUID): Promise<Voice> {
    const response = await this.client.get<BaseResponse<Voice>>(`/v1/voices/${id}`);
    return response.data.data;
  }

}

/**
 * Brains Service
 */
export class BrainsService {
  constructor(private client: AxiosInstance) { }

  /**
   * Get all brains
   */
  async list(): Promise<Brain[]> {
    const response = await this.client.get<BaseResponseWithPagination<Brain[]>>("/v1/brains");
    return response.data.data;
  }

  /**
   * Get a specific brain by ID
   */
  async get(id: UUID): Promise<Brain> {
    const response = await this.client.get<BaseResponse<Brain>>(`/v1/brains/${id}`);
    return response.data.data;
  }

  /**
   * Delete a brain
   */
  async delete(id: UUID): Promise<{ success: boolean; message: string }> {
    const response = await this.client.delete<BaseResponse<{ success: boolean; message: string }>>(
      `/v1/brains/${id}`
    );
    return response.data.data;
  }
}

/**
 * Knowledge Bases Service
 */
export class KnowledgeBasesService {
  constructor(private client: AxiosInstance) { }

  /**
   * Get all knowledge bases
   */
  async list(): Promise<KnowledgeBase[]> {
    const response = await this.client.get<BaseResponseWithPagination<KnowledgeBase[]>>(
      "/v1/knowledge-bases"
    );
    return response.data.data;
  }

  /**
   * Get a specific knowledge base by ID
   */
  async get(id: UUID): Promise<KnowledgeBase> {
    const response = await this.client.get<BaseResponse<KnowledgeBase>>(
      `/v1/knowledge-bases/${id}`
    );
    return response.data.data;
  }

  /**
   * Delete a knowledge base
   */
  async delete(id: UUID): Promise<{ success: boolean; message: string }> {
    const response = await this.client.delete<BaseResponse<{ success: boolean; message: string }>>(
      `/v1/knowledge-bases/${id}`
    );
    return response.data.data;
  }
}

/**
 * Widgets Service
 */
export class WidgetsService {
  constructor(private client: AxiosInstance) { }

  /**
   * Create a widget session token
   */
  async createSession(
    data: WidgetSessionCreate
  ): Promise<WidgetSessionResponse> {
    const response = await this.client.post<BaseResponse<WidgetSessionResponse>>(
      "/v1/widget/sessions",
      data
    );
    return response.data.data;
  }

  /**
   * Get session information
   */
  async getSession(sessionId: string): Promise<WidgetSession> {
    const response = await this.client.get<BaseResponse<WidgetSession>>(
      `/v1/widget/sessions/${sessionId}`
    );
    return response.data.data;
  }

  /**
   * Delete a session
   */
  async deleteSession(
    sessionId: string
  ): Promise<{ success: boolean; message: string }> {
    const response = await this.client.delete<BaseResponse<{ success: boolean; message: string }>>(
      `/v1/widget/sessions/${sessionId}`
    );
    return response.data.data;
  }
}

/**
 * API Keys Service
 */
export class APIKeysService {
  constructor(private client: AxiosInstance) { }

  /**
   * Get all API keys
   */
  async list(): Promise<ApiKey[]> {
    const response = await this.client.get<BaseResponseWithPagination<ApiKey[]>>("/v1/api-keys");
    return response.data.data;
  }

  /**
   * Validate API key
   */
  async validate(): Promise<ApiKeyValidationResponse> {
    const response = await this.client.post<BaseResponse<ApiKeyValidationResponse>>(
      "/v1/api-keys/validate"
    );
    return response.data.data;
  }
}

// ============================================================================
// Export Default
// ============================================================================

export default KonProSDK;