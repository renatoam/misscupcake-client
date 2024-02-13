import { HttpClient } from "@/app/shared/interface/HttpClient";
import { Gateway } from "../../../domain/ports/gateway.port";
import { CartProtocols } from "../../../interface/cart.protocols";
import { CartDTO } from "@/app/cart/interface/cart.dto";

export const loadCartGateway = (httpClient: HttpClient): Gateway<
  CartDTO.LoadCart,
  CartProtocols.LoadResponse
> => async (dto) => {
  return httpClient.request({
    method: 'GET',
    url: `/carts/${dto.cartId}`
  })
}
