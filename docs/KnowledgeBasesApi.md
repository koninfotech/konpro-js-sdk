# KnowledgeBasesApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listKnowledgeBases**](KnowledgeBasesApi.md#listknowledgebases) | **GET** /v1/knowledge-bases/ | List knowledge bases |



## listKnowledgeBases

> any listKnowledgeBases(page, pageSize)

List knowledge bases

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from 'konpro-sdk';
import type { ListKnowledgeBasesRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBasesApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListKnowledgeBasesRequest;

  try {
    const data = await api.listKnowledgeBases(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

**any**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

