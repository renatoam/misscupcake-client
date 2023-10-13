import { HttpClient, HttpClientError } from "@/app/layers/HttpClient"
import { LoadActiveCartDTO, SimpleCartResponseDTO } from "./loadActiveCartDTO"

export default function loadActiveCartGateway(
  httpClient: HttpClient<SimpleCartResponseDTO, HttpClientError>
) {
  return async (
    loadActiveCartDTO: LoadActiveCartDTO
  ): Promise<SimpleCartResponseDTO | HttpClientError> => {
    const { customerId } = loadActiveCartDTO
    
    try {
      const response = await httpClient.get(`/carts/active?customerId=${customerId}`)
      return response
    } catch (err) {
      const error = err as HttpClientError
  
      if (error.status === 404) {
        return {
          message: error.message,
          status: error.status
        }
      }
  
      return {
        message: error.message || Error('[Gateway]: Error on getting active cart.').message,
        status: error.status
      }
    }
  }
}
