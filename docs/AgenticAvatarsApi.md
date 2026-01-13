# AgenticAvatarsApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAgenticAvatar**](AgenticAvatarsApi.md#createagenticavatar) | **POST** /v1/agentic-avatars/ | Create Agentic Avatar |
| [**deleteAgenticAvatar**](AgenticAvatarsApi.md#deleteagenticavatar) | **DELETE** /v1/agentic-avatars/{avatar_id} | Delete Agentic Avatar |
| [**getAgenticAvatar**](AgenticAvatarsApi.md#getagenticavatar) | **GET** /v1/agentic-avatars/{avatar_id} | Get Agentic Avatar |
| [**listAgenticAvatars**](AgenticAvatarsApi.md#listagenticavatars) | **GET** /v1/agentic-avatars/ | List Avatars |



## createAgenticAvatar

> SuccessResponseAgenticAvatarResponse createAgenticAvatar(agenticAvatarCreate)

Create Agentic Avatar

### Example

```ts
import {
  Configuration,
  AgenticAvatarsApi,
} from '@konpro/js-sdk';
import type { CreateAgenticAvatarRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgenticAvatarsApi(config);

  const body = {
    // AgenticAvatarCreate
    agenticAvatarCreate: ...,
  } satisfies CreateAgenticAvatarRequest;

  try {
    const data = await api.createAgenticAvatar(body);
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
| **agenticAvatarCreate** | [AgenticAvatarCreate](AgenticAvatarCreate.md) |  | |

### Return type

[**SuccessResponseAgenticAvatarResponse**](SuccessResponseAgenticAvatarResponse.md)

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


## deleteAgenticAvatar

> any deleteAgenticAvatar(avatarId)

Delete Agentic Avatar

### Example

```ts
import {
  Configuration,
  AgenticAvatarsApi,
} from '@konpro/js-sdk';
import type { DeleteAgenticAvatarRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgenticAvatarsApi(config);

  const body = {
    // string
    avatarId: avatarId_example,
  } satisfies DeleteAgenticAvatarRequest;

  try {
    const data = await api.deleteAgenticAvatar(body);
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
| **avatarId** | `string` |  | [Defaults to `undefined`] |

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


## getAgenticAvatar

> SuccessResponseAgenticAvatarResponse getAgenticAvatar(avatarId)

Get Agentic Avatar

### Example

```ts
import {
  Configuration,
  AgenticAvatarsApi,
} from '@konpro/js-sdk';
import type { GetAgenticAvatarRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgenticAvatarsApi(config);

  const body = {
    // string
    avatarId: avatarId_example,
  } satisfies GetAgenticAvatarRequest;

  try {
    const data = await api.getAgenticAvatar(body);
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
| **avatarId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SuccessResponseAgenticAvatarResponse**](SuccessResponseAgenticAvatarResponse.md)

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


## listAgenticAvatars

> PaginatedResponseAgenticAvatarResponse listAgenticAvatars(page, pageSize)

List Avatars

Get all user agentic avatars

### Example

```ts
import {
  Configuration,
  AgenticAvatarsApi,
} from '@konpro/js-sdk';
import type { ListAgenticAvatarsRequest } from '@konpro/js-sdk';

async function example() {
  console.log("🚀 Testing @konpro/js-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgenticAvatarsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListAgenticAvatarsRequest;

  try {
    const data = await api.listAgenticAvatars(body);
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

[**PaginatedResponseAgenticAvatarResponse**](PaginatedResponseAgenticAvatarResponse.md)

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

