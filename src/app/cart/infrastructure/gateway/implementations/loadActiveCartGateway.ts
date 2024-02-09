import { HttpClient } from "@/app/shared/interface/HttpClient";
import { Gateway } from "../../../domain/ports/Gateway";
import { CartProtocols } from "../../../interface/CartProtocols";
import { Cart, SimpleCartProps } from "@/app/cart/domain/entities/Cart";
import { CartDTO } from "@/app/cart/interface/CartDTO";

export const loadActiveCartGateway = (httpClient: HttpClient): Gateway<
  CartDTO.LoadActiveCart,
  CartProtocols.LoadActiveResponse
> => async (dto) => {
  const response = await httpClient.request<SimpleCartProps>({
    method: 'GET',
    url: '/carts/active',
    query: {
      customerId: dto.customerId
    }
  })

  if (response.data) {
    try {
      const cart = Cart.create(response.data)
      return {
        ...response,
        data: cart,
        message: 'Cart successfully retrieved.'
      }
    } catch (error) {
      return {
        ...response,
        data: undefined,
        message: 'Something got wrong on creating cart.'
      }
    }
  }

  return {
    ...response,
    data: undefined,
  }
}
