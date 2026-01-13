# VoicesApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listVoices**](VoicesApi.md#listvoices) | **GET** /v1/voices/ | List Voices |



## listVoices

> any listVoices(scope, page, pageSize)

List Voices

List voices - public API endpoint - API Key required for all scopes - Set &#x60;scope&#x60; to \&quot;all\&quot; to include your own voices - Set &#x60;scope&#x60; to \&quot;public\&quot; to get only public voices - Set &#x60;scope&#x60; to \&quot;private\&quot; to get only your own private voices

### Example

```ts
import {
  Configuration,
  VoicesApi,
} from '@konpro/js-sdk';
import type { ListVoicesRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new VoicesApi(config);

  const body = {
    // 'all' | 'public' | 'private' | Include your own voices (both public and private) - requires API key (optional)
    scope: scope_example,
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListVoicesRequest;

  try {
    const data = await api.listVoices(body);
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
| **scope** | `all`, `public`, `private` | Include your own voices (both public and private) - requires API key | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, public, private] |
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

