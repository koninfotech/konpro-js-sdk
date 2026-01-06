
# Brain


## Properties

Name | Type
------------ | -------------
`name` | string
`systemPrompt` | string
`llmName` | string
`knowledgeBaseId` | string
`isPublic` | boolean
`isActive` | boolean
`id` | string
`userId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Brain } from 'konpro-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "systemPrompt": null,
  "llmName": null,
  "knowledgeBaseId": null,
  "isPublic": null,
  "isActive": null,
  "id": null,
  "userId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Brain

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Brain
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


