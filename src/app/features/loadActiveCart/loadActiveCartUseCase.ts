import { HttpClientError } from "@/app/layers/HttpClient";
import { CustomCartGateway } from "@/app/layers/cartGateway";
import { AppError } from "@/app/layers/errors";
import { validate as isUUID } from "uuid";
import { LoadActiveCartDTO, SimpleCartResponseDTO } from "./loadActiveCartDTO";

export type LoadActiveCartReturn = 
  (loadActiveCartDTO: LoadActiveCartDTO) => Promise<SimpleCartResponseDTO | Record<string, unknown> | AppError>

export default function loadActiveCartUseCase(cartGateway: CustomCartGateway): LoadActiveCartReturn {
  return async ({ customerId }: LoadActiveCartDTO) => {
    // those errors below should be handled in the domain
    if (!customerId) {
      return {
        error: true,
        message: 'Customer ID is required.'
      }
    }
    
    if (customerId && !isUUID(customerId)) {
      return {
        error: true,
        message: 'Customer ID has invalid format.'
      }
    }

    try {
      const response = await cartGateway.loadActiveCart({ customerId })

      if ((response as HttpClientError).status === 404) return {}

      return response as SimpleCartResponseDTO
    } catch (err) {
      const error = err as Error
      return {
        error: true,
        message: error.message || '[Application]: Error on getting active cart.'
      }
    }
  }
}
