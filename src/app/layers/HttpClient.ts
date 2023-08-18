export interface HttpClient<Response = unknown, Error = never> {
  get(
    url: string,
    query?: Record<string, unknown>,
    route?: Record<string, unknown>
  ): Promise<Response | Error extends never ? never : HttpClientError>

  post(
    url: string,
    query?: Record<string, unknown>,
    route?: Record<string, unknown>,
    body?: unknown
  ): Promise<Response | Error>
}

export interface HttpClientError {
  message: string
  status: number
}
