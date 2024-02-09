import { Gateway } from "@/app/cart/domain/ports/Gateway";
import { CartProtocols } from "../../../interface/CartProtocols";
import { CartDTO } from "@/app/cart/interface/CartDTO";
import { HttpClient } from "@/app/shared/interface/HttpClient";

export const updateCartGateway = (_httpClient: HttpClient): Gateway<
  CartDTO.SaveCart,
  CartProtocols.CreateResponse
> => async (_dto) => {
  return {
    error: true,
    message: 'Not implemented',
    status: 400,
  }
}
