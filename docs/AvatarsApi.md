# AvatarsApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAvatar**](AvatarsApi.md#deleteavatar) | **DELETE** /v1/avatars/{avatar_id} | Delete My Avatar |
| [**getAvatar**](AvatarsApi.md#getavatar) | **GET** /v1/avatars/{avatar_id} | Get Avatar Details |
| [**listAvatars**](AvatarsApi.md#listavatars) | **GET** /v1/avatars/ | List Avatars |



## deleteAvatar

> SuccessResponseAvatarDeleteResponse deleteAvatar(avatarId)

Delete My Avatar

Delete your own avatar (requires API key authentication)

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'konpro-sdk';
import type { DeleteAvatarRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarsApi(config);

  const body = {
    // string | Avatar ID
    avatarId: avatarId_example,
  } satisfies DeleteAvatarRequest;

  try {
    const data = await api.deleteAvatar(body);
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
| **avatarId** | `string` | Avatar ID | [Defaults to `undefined`] |

### Return type

[**SuccessResponseAvatarDeleteResponse**](SuccessResponseAvatarDeleteResponse.md)

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


## getAvatar

> SuccessResponseAvatarResponse getAvatar(avatarId)

Get Avatar Details

Get detailed information about a specific avatar

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'konpro-sdk';
import type { GetAvatarRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarsApi(config);

  const body = {
    // string | Avatar ID
    avatarId: avatarId_example,
  } satisfies GetAvatarRequest;

  try {
    const data = await api.getAvatar(body);
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
| **avatarId** | `string` | Avatar ID | [Defaults to `undefined`] |

### Return type

[**SuccessResponseAvatarResponse**](SuccessResponseAvatarResponse.md)

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


## listAvatars

> PaginatedResponseAvatarResponse listAvatars(scope, page, pageSize)

List Avatars

Get all public avatars with optional inclusion of your own avatars

### Example

```ts
import {
  Configuration,
  AvatarsApi,
} from 'konpro-sdk';
import type { ListAvatarsRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarsApi(config);

  const body = {
    // 'all' | 'public' | 'private' | Include your own avatars (both public and private) - requires API key (optional)
    scope: scope_example,
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListAvatarsRequest;

  try {
    const data = await api.listAvatars(body);
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
| **scope** | `all`, `public`, `private` | Include your own avatars (both public and private) - requires API key | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, public, private] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**PaginatedResponseAvatarResponse**](PaginatedResponseAvatarResponse.md)

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

