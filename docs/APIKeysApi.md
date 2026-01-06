# APIKeysApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**validateApiKey**](APIKeysApi.md#validateapikey) | **POST** /v1/api-keys/ | Validate API Key |



## validateApiKey

> SuccessResponseApiKeyValidationResponse validateApiKey()

Validate API Key

Validate an API key and get its details

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from 'konpro-sdk';
import type { ValidateApiKeyRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  try {
    const data = await api.validateApiKey();
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

[**SuccessResponseApiKeyValidationResponse**](SuccessResponseApiKeyValidationResponse.md)

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

