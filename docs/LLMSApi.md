# LLMSApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listLlms**](LLMSApi.md#listllms) | **GET** /v1/llms/ | List all the llms |



## listLlms

> any listLlms()

List all the llms

### Example

```ts
import {
  Configuration,
  LLMSApi,
} from 'konpro-sdk';
import type { ListLlmsRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new LLMSApi(config);

  try {
    const data = await api.listLlms();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

