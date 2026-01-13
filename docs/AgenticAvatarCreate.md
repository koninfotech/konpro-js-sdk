
# AgenticAvatarCreate


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`userId` | string
`avatarId` | string
`voiceId` | string
`brainId` | string

## Example

```typescript
import type { AgenticAvatarCreate } from '@konpro/js-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "userId": null,
  "avatarId": null,
  "voiceId": null,
  "brainId": null,
} satisfies AgenticAvatarCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgenticAvatarCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


