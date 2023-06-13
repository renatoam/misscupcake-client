import { CartGateway } from "@/app/layers/cartGateway.props";
import { LoadActiveCartDTO } from "./loadActiveCartDTO";
import { validate as isUUID } from "uuid";
import { HttpClientError } from "@/app/layers/HttpClient";
import { AppError } from "@/app/layers/Errors";

export type LoadActiveCartReturn = (loadActiveCartDTO: LoadActiveCartDTO) => Promise<unknown & AppError>

export default function loadActiveCartUseCase(cartGateway: CartGateway): LoadActiveCartReturn {
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
      return response
    } catch (err) {
      const error = err as HttpClientError
      return {
        error: true,
        message: error.message || '[Application]: Error on getting active cart.'
      }
    }
  }
}
