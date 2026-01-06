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
import { KonPro } from '@konpro/js-sdk';

// Initialize SDK (server-side only!)
const konpro = new KonPro({ apiKey: 'your-api-key-here' });

// List available avatars
const avatars = await konpro.avatars.listAvatars();
console.log(avatars.data);

// List available voices
const voices = await konpro.voices.listVoices();

// Create an agentic avatar
const avatar = await konpro.agenticAvatars.createAgenticAvatar({
  agenticAvatarCreate: {
    name: 'Customer Support Agent',
    description: 'Helpful AI assistant',
    avatarId: 'avatar-123',
    voiceId: 'voice-uuid',
    brainId: 'brain-uuid'
  }
});

// Create a widget session
const session = await konpro.widget.createWidgetSession({
  widgetSessionCreate: {
    agenticAvatarId: avatar.data.id,
    userMetadata: { userId: 'user-123' }
  }
});

console.log(session.data.websocketUrl); // Use this for real-time chat
```

## Features

- ✅ **Fully Type-Safe** - Complete TypeScript definitions
- ✅ **Promise-Based** - Modern async/await API
- ✅ **Complete Coverage** - All KonPro API endpoints
- ✅ **Auto Case Conversion** - snake_case API → camelCase TypeScript
- ✅ **Zero Dependencies** - Uses native fetch (Node 18+)
- ✅ **Server-Side Only** - Designed for backend security

## API Reference

### Initialize SDK

```typescript
import { KonPro } from '@konpro/js-sdk';

const konpro = new KonPro({
  apiKey: 'your-api-key',      // Required
  basePath: 'https://api.konpro.ai'  // Optional, this is the default
});
```

### API Endpoints

All URIs are relative to `https://api.konpro.ai`

| Service | Method | HTTP Request | Description |
|---------|--------|--------------|-------------|
| `avatars` | `listAvatars()` | GET /v1/avatars/ | List Avatars |
| `avatars` | `getAvatar({ avatarId })` | GET /v1/avatars/{avatar_id} | Get Avatar Details |
| `avatars` | `deleteAvatar({ avatarId })` | DELETE /v1/avatars/{avatar_id} | Delete My Avatar |
| `agenticAvatars` | `listAgenticAvatars()` | GET /v1/agentic-avatars/ | List Agentic Avatars |
| `agenticAvatars` | `getAgenticAvatar({ avatarId })` | GET /v1/agentic-avatars/{avatar_id} | Get Agentic Avatar |
| `agenticAvatars` | `createAgenticAvatar({ ... })` | POST /v1/agentic-avatars/ | Create Agentic Avatar |
| `agenticAvatars` | `deleteAgenticAvatar({ avatarId })` | DELETE /v1/agentic-avatars/{avatar_id} | Delete Agentic Avatar |
| `brains` | `listBrains()` | GET /v1/brains/ | List Brains |
| `brains` | `createBrain({ ... })` | POST /v1/brains/ | Create Brain |
| `brains` | `deleteBrain({ brainId })` | DELETE /v1/brains/{brain_id} | Delete Brain |
| `voices` | `listVoices()` | GET /v1/voices/ | List Voices |
| `knowledgeBases` | `listKnowledgeBases()` | GET /v1/knowledge-bases/ | List Knowledge Bases |
| `llms` | `listLlms()` | GET /v1/llms/ | List Available LLMs |
| `widget` | `createWidgetSession({ ... })` | POST /v1/widget/sessions | Create Widget Session |
| `widget` | `getWidgetSessionStatus({ sessionId })` | GET /v1/widget/sessions/{session_id} | Get Session Status |
| `widget` | `revokeWidgetSession({ sessionId })` | DELETE /v1/widget/sessions/{session_id} | Revoke Session |
| `apiKeys` | `validateApiKey()` | POST /v1/api-keys/ | Validate API Key |

### Models

All response models use **camelCase** properties:

```typescript
interface AvatarResponse {
  id: string;
  name: string;
  gender: string;
  occupation: string;
  cdnUrl: string;           // Note: camelCase
  previewImage?: string;
  isPublic: boolean;
  createdAt: Date;          // Automatically parsed as Date
  updatedAt?: Date;
}

interface AgenticAvatarResponse {
  id: string;
  name: string;
  description?: string;
  avatarId: string;
  voiceId: string;
  brainId: string;
  brain?: Brain;
  voice?: Voice;
  avatar?: Avatar;
  createdAt: Date;
  updatedAt: Date;
}

interface WidgetSessionResponse {
  sessionToken: string;
  sessionId: string;
  expiresAt: string;
  expiresIn: number;
  websocketUrl: string;
  userId: string;
  avatar: object;
  audioOnly: boolean;
}
```

## TypeScript Support

Full TypeScript support with exported types:

```typescript
import { 
  KonPro,
  KonProClientConfig,
  AvatarResponse,
  AgenticAvatarResponse,
  AgenticAvatarCreate,
  BrainCreate,
  Voice,
  Brain,
  WidgetSessionCreate,
  WidgetSessionResponse,
  PaginatedResponseAvatarResponse,
  PaginationMeta
} from '@konpro/js-sdk';
```

## Error Handling

```typescript
import { KonPro, KonProError } from '@konpro/js-sdk';

const konpro = new KonPro({ apiKey: 'your-api-key' });

try {
  const avatar = await konpro.avatars.getAvatar({ avatarId: 'invalid-id' });
} catch (error) {
  if (error instanceof KonProError) {
    console.error('Status:', error.status);      // 404
    console.error('Code:', error.code);          // "NOT_FOUND"
    console.error('Message:', error.message);    // "Avatar not found"
    console.error('Request ID:', error.requestId);
  }
}
```

### Common Error Codes

| Status | Code | Description |
|--------|------|-------------|
| 401 | `MISSING_API_KEY` | No API key provided |
| 401 | `INVALID_API_KEY` | API key is invalid or expired |
| 404 | `NOT_FOUND` | Resource not found |
| 422 | `VALIDATION_ERROR` | Invalid request parameters |
| 429 | `RATE_LIMIT_EXCEEDED` | Too many requests |

## Environment Variables

**For Node.js projects:**

```bash
# .env
KONPRO_API_KEY=your-api-key-here
```

```typescript
import { KonPro } from '@konpro/js-sdk';

const konpro = new KonPro({ 
  apiKey: process.env.KONPRO_API_KEY! 
});
```

⚠️ **Never expose `.env` files or commit them to version control!**

## Examples

### Create Complete Avatar Pipeline

```typescript
import { KonPro } from '@konpro/js-sdk';

const konpro = new KonPro({ apiKey: process.env.KONPRO_API_KEY! });

// 1. Get available voices and avatars
const { data: avatars } = await konpro.avatars.listAvatars();
const { data: voices } = await konpro.voices.listVoices();
const { data: brains } = await konpro.brains.listBrains();

// 2. Create agentic avatar
const { data: agenticAvatar } = await konpro.agenticAvatars.createAgenticAvatar({
  agenticAvatarCreate: {
    name: 'Support Agent',
    description: 'Helpful customer support AI',
    avatarId: avatars[0].id,
    voiceId: voices[0].id,
    brainId: brains[0].id
  }
});

// 3. Create session for widget
const { data: session } = await konpro.widget.createWidgetSession({
  widgetSessionCreate: {
    agenticAvatarId: agenticAvatar.id,
    userMetadata: { visitorId: 'visitor-123' }
  }
});

console.log('WebSocket URL:', session.websocketUrl);
```

### List with Pagination

```typescript
// List avatars with pagination
const result = await konpro.avatars.listAvatars({ 
  page: 1, 
  pageSize: 20,
  scope: 'all'  // 'all' | 'public' | 'private'
});

console.log('Avatars:', result.data);
console.log('Total:', result.meta.total);
console.log('Has next page:', result.meta.hasNext);
```

### Validate API Key

```typescript
const konpro = new KonPro({ apiKey: 'sk_live_xxx' });

const { data } = await konpro.apiKeys.validateApiKey();

if (data.valid) {
  console.log('API key is valid!');
  console.log('Key name:', data.key?.name);
  console.log('Scopes:', data.key?.scopes);
} else {
  console.error('Invalid API key:', data.message);
}
```

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
import { KonPro } from '@konpro/js-sdk';

const konpro = new KonPro({ apiKey: process.env.KONPRO_API_KEY! });

app.get('/api/avatars', async (req, res) => {
  const result = await konpro.avatars.listAvatars();
  res.json(result.data);
});
```

**❌ Never do this:**
```typescript
// ❌ Bad - Exposing API key in frontend
const konpro = new KonPro({ apiKey: 'sk_live_xxx' }); // DON'T DO THIS IN BROWSER
```

## Requirements

- Node.js >= 18.0.0 (uses native fetch)
- TypeScript >= 5.0.0 (for TypeScript projects)

## Links

- **Get API Key**: [studio.konpro.ai/api-keys](https://studio.konpro.ai/api-keys)
- **Website**: [konpro.ai](https://konpro.ai)
- **Documentation**: [docs.konpro.ai](https://docs.konpro.ai)
- **Dashboard**: [studio.konpro.ai](https://studio.konpro.ai)
- **GitHub**: [github.com/koninfotech/konpro-js-sdk](https://github.com/koninfotech/konpro-js-sdk)
- **Support**: support@konpro.ai

## License

MIT © [KonInfotech](https://konpro.ai)
  
---

Made by [KonInfotech](https://konpro.ai)