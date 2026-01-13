# BrainsApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBrain**](BrainsApi.md#createbrain) | **POST** /v1/brains/ | Create a new brain |
| [**deleteBrain**](BrainsApi.md#deletebrain) | **DELETE** /v1/brains/{brain_id} | Delete a brain |
| [**listBrains**](BrainsApi.md#listbrains) | **GET** /v1/brains/ | List Brains |



## createBrain

> any createBrain(brainCreate)

Create a new brain

### Example

```ts
import {
  Configuration,
  BrainsApi,
} from '@konpro/js-sdk';
import type { CreateBrainRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrainsApi(config);

  const body = {
    // BrainCreate
    brainCreate: ...,
  } satisfies CreateBrainRequest;

  try {
    const data = await api.createBrain(body);
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
| **brainCreate** | [BrainCreate](BrainCreate.md) |  | |

### Return type

**any**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBrain

> any deleteBrain(brainId)

Delete a brain

### Example

```ts
import {
  Configuration,
  BrainsApi,
} from '@konpro/js-sdk';
import type { DeleteBrainRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrainsApi(config);

  const body = {
    // string
    brainId: brainId_example,
  } satisfies DeleteBrainRequest;

  try {
    const data = await api.deleteBrain(body);
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
| **brainId** | `string` |  | [Defaults to `undefined`] |

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


## listBrains

> any listBrains(scope, page, pageSize)

List Brains

List Brains - public API endpoint - API Key required for all scopes - Set &#x60;scope&#x60; to \&quot;all\&quot; to include your own Brains - Set &#x60;scope&#x60; to \&quot;public\&quot; to get only public Brains - Set &#x60;scope&#x60; to \&quot;private\&quot; to get only your own private Brains

### Example

```ts
import {
  Configuration,
  BrainsApi,
} from '@konpro/js-sdk';
import type { ListBrainsRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrainsApi(config);

  const body = {
    // 'all' | 'public' | 'private' | Include your own brains (both public and private) - requires API key (optional)
    scope: scope_example,
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListBrainsRequest;

  try {
    const data = await api.listBrains(body);
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
| **scope** | `all`, `public`, `private` | Include your own brains (both public and private) - requires API key | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, public, private] |
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

