import { HttpClient } from "@/app/shared/interface/HttpClient";
import { Gateway } from "../../../domain/ports/Gateway";
import { CartProtocols } from "../../../interface/CartProtocols";
import { CartDTO } from "@/app/cart/interface/CartDTO";

export const loadCartGateway = (httpClient: HttpClient): Gateway<
  CartDTO.LoadCart,
  CartProtocols.LoadResponse
> => async (dto) => {
  return httpClient.request({
    method: 'GET',
    url: `/carts/${dto.cartId}`
  })
}
