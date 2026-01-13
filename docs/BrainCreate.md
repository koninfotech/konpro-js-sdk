
# BrainCreate


## Properties

Name | Type
------------ | -------------
`name` | string
`systemPrompt` | string
`llmName` | string
`knowledgeBaseId` | string
`isPublic` | boolean
`isActive` | boolean

## Example

```typescript
import type { BrainCreate } from '@konpro/js-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "systemPrompt": null,
  "llmName": null,
  "knowledgeBaseId": null,
  "isPublic": null,
  "isActive": null,
} satisfies BrainCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BrainCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


