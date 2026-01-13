
# ApiKeyResponse


## Properties

Name | Type
------------ | -------------
`userId` | string
`name` | string
`scopes` | Array&lt;string&gt;
`rateLimit` | number
`rateLimitWindow` | number
`expiresAt` | Date
`isActive` | boolean
`id` | string
`key` | string
`prefix` | string
`lastUsedAt` | Date
`lastUsedIp` | string
`requestCount` | number
`keyMetadata` | object
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ApiKeyResponse } from '@konpro/js-sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "name": null,
  "scopes": null,
  "rateLimit": null,
  "rateLimitWindow": null,
  "expiresAt": null,
  "isActive": null,
  "id": null,
  "key": null,
  "prefix": null,
  "lastUsedAt": null,
  "lastUsedIp": null,
  "requestCount": null,
  "keyMetadata": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ApiKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


