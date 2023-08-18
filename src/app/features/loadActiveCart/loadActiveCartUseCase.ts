import { HttpClientError } from "@/app/layers/HttpClient";
import { CustomCartGateway } from "@/app/layers/cartGateway";
import { AppError } from "@/app/layers/errors";
import { validate as isUUID } from "uuid";
import { LoadActiveCartDTO, SimpleCartResponseDTO } from "./loadActiveCartDTO";

export type LoadActiveCartReturn = 
  (loadActiveCartDTO: LoadActiveCartDTO) => Promise<SimpleCartResponseDTO | Record<string, unknown> | AppError>

export default function loadActiveCartUseCase(cartGateway: CustomCartGateway): LoadActiveCartReturn {
  return async ({ accountId, guestId }: LoadActiveCartDTO) => {
    // those errors below should be handled in the domain
    if (!accountId && !guestId) {
      return {
        error: true,
        message: 'Customer ID is required.'
      }
    }

    if (accountId && !isUUID(accountId)) {
      return {
        error: true,
        message: 'Account ID has invalid format.'
      }
    }
    
    if (guestId && !isUUID(guestId)) {
      return {
        error: true,
        message: 'Guest ID has invalid format.'
      }
    }

    try {
      const response = await cartGateway.loadActiveCart({ accountId, guestId })

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
