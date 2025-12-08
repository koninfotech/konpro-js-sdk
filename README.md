# @konpro/js-sdk

Official TypeScript/JavaScript SDK for [KonPro's Public API](https://konpro.ai).

Build AI-powered avatars with voice, appearance, and intelligent conversation capabilities.

## Installation

```bash
npm install @konpro/js-sdk
```

## 🔑 Getting Your API Key

1. Go to **[studio.konpro.ai/api-keys](https://studio.konpro.ai/api-keys)**
2. Generate a new API key
3. Copy and securely store your API key

⚠️ **Security Warning:** 
- **DO NOT** run this SDK on the client-side (browser)
- **DO NOT** expose your API key in frontend code
- Always use this SDK on your backend/server only
- Never commit API keys to version control

## Quick Start

```typescript
import KonProSDK from '@konpro/js-sdk';

// Initialize SDK (server-side only!)
const konpro = new KonProSDK('your-api-key-here');

// List available avatars
const avatars = await konpro.avatars.list();

// List available voices
const voices = await konpro.voices.list();

// Create an agentic avatar
const avatar = await konpro.agenticAvatars.create({
  name: 'Customer Support Agent',
  description: 'Helpful AI assistant',
  avatar_id: 'avatar-123',
  voice_id: 'voice-uuid',
  brain_id: 'brain-uuid'
});

// Create a widget session
const session = await konpro.widgets.createSession({
  agentic_avatar_id: avatar.id,
  user_metadata: { userId: 'user-123' }
});

console.log(session.websocket_url); // Use this for real-time chat
```

## Features

- ✅ **Fully Type-Safe** - Complete TypeScript definitions
- ✅ **Promise-Based** - Modern async/await API
- ✅ **Complete Coverage** - All KonPro API endpoints
- ✅ **Auto-Unwrapping** - Responses automatically parsed
- ✅ **Error Handling** - Comprehensive error types
- ✅ **Server-Side Only** - Designed for backend security

## API Reference

### Initialize SDK

```typescript
const konpro = new KonProSDK(apiKey, options?);
```

**Parameters:**
- `apiKey` (string, required) - Your KonPro API key from [studio.konpro.ai/api-keys](https://studio.konpro.ai/api-keys)
- `options` (object, optional):
  - `baseURL` - API base URL (default: https://api.konpro.ai)
  - `timeout` - Request timeout in ms (default: 30000)

### Services

#### Avatars

```typescript
// List avatars
konpro.avatars.list(options?)
// Returns: Promise<Avatar[]>

// Get avatar by ID
konpro.avatars.get(id)
// Returns: Promise<Avatar>

// Delete avatar
konpro.avatars.delete(id)
// Returns: Promise<AvatarDeleteResponse>
```

**Avatar Type:**
```typescript
interface Avatar {
  id: string;
  user_id?: string | null;
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
```

#### Voices

```typescript
// List voices
konpro.voices.list(options?)
// Returns: Promise<Voice[]>

// Get voice by ID
konpro.voices.get(id)
// Returns: Promise<Voice>
```

**Voice Type:**
```typescript
interface Voice {
  id: string;
  user_id?: string | null;
  name: string;
  gender: string;
  description?: string | null;
  elevenlabs_voice_id: string;
  preview_url?: string | null;
  is_public: boolean;
  created_at: string;
  updated_at?: string | null;
}
```

#### Brains

```typescript
// List brains
konpro.brains.list()
// Returns: Promise<Brain[]>

// Get brain by ID
konpro.brains.get(id)
// Returns: Promise<Brain>

// Create brain
konpro.brains.create(
  data: {
    name: string;
    system_prompt: string;
    llm_name: string;
    knowledge_base_id?: string;
  }
)
// Returns: Promise<Brain>

// Delete brain
konpro.brains.delete(id)
// Returns: Promise<{ success: boolean; message: string }>
```

**Brain Type:**
```typescript
interface Brain {
  id: string;
  name: string;
  system_prompt: string;
  llm_name: string;
  knowledge_base_id?: string | null;
  is_public: boolean;
  is_active: boolean;
  user_id?: string | null;
  created_at: string;
  updated_at?: string | null;
}
```

#### Agentic Avatars

```typescript
// List agentic avatars
konpro.agenticAvatars.list()
// Returns: Promise<AgenticAvatar[]>

// Get agentic avatar
konpro.agenticAvatars.get(id)
// Returns: Promise<AgenticAvatar>

// Create agentic avatar
konpro.agenticAvatars.create(data)
// Returns: Promise<AgenticAvatar>

// Delete agentic avatar
konpro.agenticAvatars.delete(id)
// Returns: Promise<{ success: boolean; message: string }>
```

**AgenticAvatar Type:**
```typescript
interface AgenticAvatar {
  id: string;
  name: string;
  description?: string | null;
  user_id?: string | null;
  avatar_id: string;
  voice_id: string;
  brain_id: string;
  brain?: Brain | null;
  voice?: Voice | null;
  avatar?: Avatar | null;
  created_at: string;
  updated_at: string;
}
```

#### Widget Sessions

```typescript
// Create widget session
konpro.widgets.createSession(data)
// Returns: Promise<WidgetSessionResponse>

// Get session details
konpro.widgets.getSession(id)
// Returns: Promise<WidgetSession>

// Delete session
konpro.widgets.deleteSession(id)
// Returns: Promise<{ success: boolean; message: string }>
```

**WidgetSessionResponse Type:**
```typescript
interface WidgetSessionResponse {
  session_token: string;
  session_id: string;
  expires_at: string;
  expires_in: number;
  websocket_url: string;
  user_id: string;
  avatar: Record<string, any>;
}
```

#### Knowledge Bases

```typescript
// List knowledge bases
konpro.knowledgeBases.list()
// Returns: Promise<KnowledgeBase[]>

// Get knowledge base
konpro.knowledgeBases.get(id)
// Returns: Promise<KnowledgeBase>

// Delete knowledge base
konpro.knowledgeBases.delete(id)
// Returns: Promise<{ success: boolean; message: string }>
```

**KnowledgeBase Type:**
```typescript
interface KnowledgeBase {
  id: string;
  user_id?: string | null;
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
```

#### API Keys

```typescript
// List API keys
konpro.apiKeys.list()
// Returns: Promise<ApiKey[]>

// Validate current API key
konpro.apiKeys.validate()
// Returns: Promise<ApiKeyValidationResponse>
```

## TypeScript Support

Full TypeScript support with exported types:

```typescript
import KonProSDK, {
  Avatar,
  Voice,
  Brain,
  AgenticAvatar,
  KnowledgeBase,
  WidgetSessionResponse,
  BaseResponse,
  PaginatedResponse,
  UUID
} from '@konpro/js-sdk';
```

## Error Handling

```typescript
try {
  const avatar = await konpro.avatars.get('invalid-id');
} catch (error: any) {
  console.error('Status:', error.status);   // HTTP status code
  console.error('Message:', error.message); // Error message
  console.error('Data:', error.data);       // Additional error info
}
```

## Environment Variables

**For Node.js projects:**

```bash
# .env
KONPRO_API_KEY=your-api-key-here
```

```typescript
import KonProSDK from '@konpro/js-sdk';

const konpro = new KonProSDK(process.env.KONPRO_API_KEY!);
```

⚠️ **Never expose `.env` files or commit them to version control!**

## Examples

### Create Complete Avatar Pipeline

```typescript
// 1. Get available voices and avatars
const voices = await konpro.voices.list();
const avatars = await konpro.avatars.list();

// 2. Create agentic avatar
const agenticAvatar = await konpro.agenticAvatars.create({
  name: 'Support Agent',
  description: 'Helpful customer support AI',
  avatar_id: avatars[0].id,
  voice_id: voices[0].id,
  brain_id: 'brain-uuid'
});

// 3. Create session for widget
const session = await konpro.widgets.createSession({
  agentic_avatar_id: agenticAvatar.id,
  user_metadata: { userId: 'user-123' }
});

console.log('WebSocket URL:', session.websocket_url);
```

### List and Filter Resources

```typescript
// List all public avatars
const allAvatars = await konpro.avatars.list({ scope: 'all' });

// List my avatars only
const myAvatars = await konpro.avatars.list({ scope: 'my' });

// List with pagination
const pagedAvatars = await konpro.avatars.list({ 
  scope: 'all',
  page: 1,
  limit: 20 
});
```

### Error Handling Pattern

```typescript
async function safelyCreateAvatar() {
  try {
    const avatar = await konpro.agenticAvatars.create({
      name: 'My Avatar',
      avatar_id: 'avatar-123',
      voice_id: 'voice-uuid',
      brain_id: 'brain-uuid'
    });
    
    console.log('Created:', avatar.id);
    return avatar;
  } catch (error: any) {
    if (error.status === 401) {
      console.error('Invalid API key');
    } else if (error.status === 404) {
      console.error('Resource not found');
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
}
```

## Response Format

All API responses follow this structure:

```typescript
{
  "data": { ... },      // Your actual data
  "status": "success",  // Optional status
  "message": "..."      // Optional message
}

// For paginated endpoints:
{
  "data": [...],
  "meta": {
    "page": 1,
    "page_size": 20,
    "total": 100,
    "total_pages": 5,
    "has_next": true,
    "has_prev": false
  }
}
```

The SDK automatically unwraps the `data` field for you!

## Security Best Practices

1. ✅ **Server-Side Only** - Never use this SDK in browser/frontend code
2. ✅ **Environment Variables** - Store API keys in `.env` files
3. ✅ **Never Commit Keys** - Add `.env` to `.gitignore`
4. ✅ **Use Backend Proxy** - Create API routes on your server
5. ✅ **Rotate Keys** - Regularly update API keys at [studio.konpro.ai/api-keys](https://studio.konpro.ai/api-keys)

### Backend Proxy Pattern (Recommended)

**Your Frontend:**
```typescript
// ✅ Good - Call your own backend
const response = await fetch('/api/avatars');
```

**Your Backend (Node.js/Express):**
```typescript
// ✅ Good - SDK on server
import KonProSDK from '@konpro/js-sdk';

const konpro = new KonProSDK(process.env.KONPRO_API_KEY);

app.get('/api/avatars', async (req, res) => {
  const avatars = await konpro.avatars.list();
  res.json(avatars);
});
```

**❌ Never do this:**
```typescript
// ❌ Bad - Exposing API key in frontend
const konpro = new KonProSDK('sk-1234...'); // DON'T DO THIS
```

## Requirements

- Node.js >= 18.0.0
- TypeScript >= 5.0.0 (for TypeScript projects)

## Links

- **Get API Key**: [studio.konpro.ai/api-keys](https://studio.konpro.ai/api-keys)
- **Website**: [konpro.ai](https://konpro.ai)
- **Documentation**: [docs.konpro.ai](https://docs.konpro.ai)
- **Dashboard**: [studio.konpro.ai](https://studio.konpro.ai)
- **GitHub**: [github.com/koninfotech/konpro-sdk](https://github.com/koninfotech/konpro-sdk)
- **Support**: support@konpro.ai

## License

MIT © [KonInfotech](https://konpro.ai)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

Made with ❤️ by [KonInfotech](https://konpro.ai)