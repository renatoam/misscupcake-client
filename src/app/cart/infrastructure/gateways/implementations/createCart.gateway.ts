import { Gateway } from "@/app/cart/domain/ports/gateway.port";
import { CartProtocols } from "../../../interface/cart.protocols";
import { HttpClient } from "@/app/shared/interface/HttpClient";
import { CartDTO } from "@/app/cart/interface/cart.dto";

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
