
import axios from "../config/axiosClientConfig";
import { HttpClient, HttpClientResponse, HttpClientRequestData } from "../interface/HttpClient";

export class AxiosHttpClient implements HttpClient {
  async request<T>(requestData: HttpClientRequestData): Promise<HttpClientResponse<T>> {
    try {
      const { method, url, query, body } = requestData
      const response = await axios({
        method,
        url,
        params: query,
        data: body
      })

      return {
        data: response.data,
        status: response.status,
        message: '',
        error: false
      }
    } catch (err) {
      return err as HttpClientResponse<T>
    }
  }
}
