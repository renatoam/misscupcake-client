import { Gateway } from "@/app/cart/domain/ports/gateway.port";
import { CartProtocols } from "../../../interface/cart.protocols";
import { CartDTO } from "@/app/cart/interface/cart.dto";
import { HttpClient } from "@/app/shared/interface/HttpClient";

export const updateCartGateway = (_httpClient: HttpClient): Gateway<
  CartDTO.UpdateCart,
  CartProtocols.CreateResponse
> => async (_dto) => {
  return {
    error: true,
    message: 'Not implemented',
    status: 400,
  }
}
