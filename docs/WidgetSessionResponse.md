
# WidgetSessionResponse


## Properties

Name | Type
------------ | -------------
`sessionToken` | string
`sessionId` | string
`expiresAt` | string
`expiresIn` | number
`websocketUrl` | string
`userId` | string
`avatar` | object
`audioOnly` | boolean

## Example

```typescript
import type { WidgetSessionResponse } from '@konpro/js-sdk'

// TODO: Update the object below with actual values
const example = {
  "sessionToken": null,
  "sessionId": null,
  "expiresAt": null,
  "expiresIn": null,
  "websocketUrl": null,
  "userId": null,
  "avatar": null,
  "audioOnly": null,
} satisfies WidgetSessionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WidgetSessionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


