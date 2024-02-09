import Axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { HttpClientResponse } from "../interface/HttpClient";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ??
    import.meta.env.VITE_API_LOCAL_BASE_URL
})

const requestHandler = (config: InternalAxiosRequestConfig) => {
  console.log('[token]: ', config.headers.Authorization ?? 'No auth configured.')
  console.log(config.baseURL, { config })

  return config
}

const responseSuccessHandler = (config: AxiosResponse) => {
  return config
}

const responseErrorHandler = (
  errorConfig: Required<AxiosError<{ message: string }>>
): HttpClientResponse => {
  return {
    error: true,
    status: errorConfig.response.status,
    message: errorConfig.response.data?.message
  }
}

axios.interceptors.request.use(requestHandler)
axios.interceptors.response.use(responseSuccessHandler, responseErrorHandler)

export default axios
