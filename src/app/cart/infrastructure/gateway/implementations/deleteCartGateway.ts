import { Gateway } from "@/app/cart/domain/ports/Gateway";
import { CartDTO } from "@/app/cart/interface/CartDTO";
import { CartProtocols } from "@/app/cart/interface/CartProtocols";
import { HttpClient } from "@/app/shared/interface/HttpClient";

export const deleteCartGateway = (_httpClient: HttpClient): Gateway<
  CartDTO.DeleteCart,
  CartProtocols.DeleteResponse
> => async (_dto) => {
  return {
    error: true,
    message: 'Not implemented',
    status: 400,
  }
}
