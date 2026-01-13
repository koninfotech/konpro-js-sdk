
# Avatar


## Properties

Name | Type
------------ | -------------
`name` | string
`gender` | string
`occupation` | string
`cdnUrl` | string
`previewImage` | string
`isPublic` | boolean
`id` | string
`userId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Avatar } from '@konpro/js-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "gender": null,
  "occupation": null,
  "cdnUrl": null,
  "previewImage": null,
  "isPublic": null,
  "id": null,
  "userId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Avatar

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Avatar
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


