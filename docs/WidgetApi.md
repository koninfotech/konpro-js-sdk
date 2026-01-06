# WidgetApi

All URIs are relative to *https://api.konpro.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWidgetSession**](WidgetApi.md#createwidgetsession) | **POST** /v1/widget/sessions | Create Widget Session |
| [**getWidgetSessionStatus**](WidgetApi.md#getwidgetsessionstatus) | **GET** /v1/widget/sessions/{session_id} | Get Widget Session Status |
| [**revokeWidgetSession**](WidgetApi.md#revokewidgetsession) | **DELETE** /v1/widget/sessions/{session_id} | Revoke Widget Session |



## createWidgetSession

> SuccessResponseWidgetSessionResponse createWidgetSession(widgetSessionCreate)

Create Widget Session

Generate a temporary session token for embedding the widget on external websites. This endpoint should be called by the customer\&#39;s backend with their API key.

### Example

```ts
import {
  Configuration,
  WidgetApi,
} from 'konpro-sdk';
import type { CreateWidgetSessionRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WidgetApi(config);

  const body = {
    // WidgetSessionCreate
    widgetSessionCreate: ...,
  } satisfies CreateWidgetSessionRequest;

  try {
    const data = await api.createWidgetSession(body);
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
| **widgetSessionCreate** | [WidgetSessionCreate](WidgetSessionCreate.md) |  | |

### Return type

[**SuccessResponseWidgetSessionResponse**](SuccessResponseWidgetSessionResponse.md)

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


## getWidgetSessionStatus

> any getWidgetSessionStatus(sessionId)

Get Widget Session Status

Check if a widget session is still valid

### Example

```ts
import {
  Configuration,
  WidgetApi,
} from 'konpro-sdk';
import type { GetWidgetSessionStatusRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WidgetApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies GetWidgetSessionStatusRequest;

  try {
    const data = await api.getWidgetSessionStatus(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

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


## revokeWidgetSession

> any revokeWidgetSession(sessionId)

Revoke Widget Session

Revoke a widget session token before expiry

### Example

```ts
import {
  Configuration,
  WidgetApi,
} from 'konpro-sdk';
import type { RevokeWidgetSessionRequest } from 'konpro-sdk';

async function example() {
  console.log("🚀 Testing konpro-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WidgetApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies RevokeWidgetSessionRequest;

  try {
    const data = await api.revokeWidgetSession(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

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

