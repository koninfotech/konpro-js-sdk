import { Configuration, ResponseError } from './runtime';
import {
    APIKeysApi,
    AgenticAvatarsApi,
    AvatarsApi,
    BrainsApi,
    KnowledgeBasesApi,
    LLMSApi,
    VoicesApi,
    WidgetApi,
} from './apis';

// Custom error with parsed API response
export class KonProError extends Error {
    status: number;
    code: string;
    requestId?: string;

    constructor(status: number, code: string, message: string, requestId?: string) {
        super(message);
        this.name = 'KonProError';
        this.status = status;
        this.code = code;
        this.requestId = requestId;
    }
}

export interface KonProClientConfig {
    apiKey: string;
    basePath?: string;
}

export class KonPro {
    private config: Configuration;
    private _apiKeys?: APIKeysApi;
    private _agenticAvatars?: AgenticAvatarsApi;
    private _avatars?: AvatarsApi;
    private _brains?: BrainsApi;
    private _knowledgeBases?: KnowledgeBasesApi;
    private _llms?: LLMSApi;
    private _voices?: VoicesApi;
    private _widget?: WidgetApi;

    constructor(options: KonProClientConfig) {
        this.config = new Configuration({
            basePath: options.basePath || 'https://api.konpro.ai',
            apiKey: options.apiKey,
            middleware: [{
                post: async (context) => {
                    if (!context.response.ok) {
                        await this.handleError(context.response);
                    }
                    return context.response;
                }
            }]
        });
    }

    private async handleError(response: Response): Promise<never> {
        let errorData: any = {};

        try {
            const body = await response.json();
            errorData = body.error || body;
        } catch {
            // Response body not JSON
        }

        throw new KonProError(
            response.status,
            errorData.code || `HTTP_${response.status}`,
            errorData.message || response.statusText || 'Request failed',
            errorData.request_id
        );
    }

    get apiKeys(): APIKeysApi {
        if (!this._apiKeys) this._apiKeys = new APIKeysApi(this.config);
        return this._apiKeys;
    }

    get agenticAvatars(): AgenticAvatarsApi {
        if (!this._agenticAvatars) this._agenticAvatars = new AgenticAvatarsApi(this.config);
        return this._agenticAvatars;
    }

    get avatars(): AvatarsApi {
        if (!this._avatars) this._avatars = new AvatarsApi(this.config);
        return this._avatars;
    }

    get brains(): BrainsApi {
        if (!this._brains) this._brains = new BrainsApi(this.config);
        return this._brains;
    }

    get knowledgeBases(): KnowledgeBasesApi {
        if (!this._knowledgeBases) this._knowledgeBases = new KnowledgeBasesApi(this.config);
        return this._knowledgeBases;
    }

    get llms(): LLMSApi {
        if (!this._llms) this._llms = new LLMSApi(this.config);
        return this._llms;
    }

    get voices(): VoicesApi {
        if (!this._voices) this._voices = new VoicesApi(this.config);
        return this._voices;
    }

    get widget(): WidgetApi {
        if (!this._widget) this._widget = new WidgetApi(this.config);
        return this._widget;
    }
}

export default KonPro;