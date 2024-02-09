import { Gateway } from "@/app/cart/domain/ports/Gateway";
import { CartProtocols } from "../../../interface/CartProtocols";
import { HttpClient } from "@/app/shared/interface/HttpClient";
import { CartDTO } from "@/app/cart/interface/CartDTO";

export const createCartGateway = (_httpClient: HttpClient): Gateway<
  CartDTO.AddToCart,
  CartProtocols.CreateResponse
> => async (_dto) => {
  return {
    error: true,
    message: 'Not implemented',
    status: 400,
  }
}
