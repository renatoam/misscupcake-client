export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type HttpClientRequestData = {
  method: HttpMethod
  url: string
  query?: Record<string, unknown>
  body?: unknown
}

export type HttpClientResponse<ResponseData = unknown> = {
  error: boolean
  message: string
  status: number
  data?: ResponseData
}

export interface HttpClient {
  request<ResponseData>(requestData: HttpClientRequestData): Promise<HttpClientResponse<ResponseData>>
}
