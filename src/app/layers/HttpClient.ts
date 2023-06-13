export interface HttpClient {
  get(
    url: string,
    query?: Record<string, unknown>,
    route?: Record<string, unknown>
  ): Promise<unknown>
  post(
    url: string,
    query?: Record<string, unknown>,
    route?: Record<string, unknown>,
    body?: unknown
  ): Promise<unknown>
}

export interface HttpClientError {
  message: string
  status: number
}
