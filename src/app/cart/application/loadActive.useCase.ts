import { CartUseCase } from "@/app/cart/interface/CartUseCase";
import { SimpleCartProps } from "../domain/entities/Cart";
import { CartDTO } from "../interface/CartDTO";
import { CartGateway } from "../interface/CartGateway";

export default function loadActiveCartUseCase(cartGateway: CartGateway): CartUseCase.LoadActive {
  return async ({ customerId }: CartDTO.LoadActiveCart) => {
    if (!customerId) {
      return {
        error: true,
        status: 400,
        message: 'Customer ID is required.'
      }
    }
    
    const response = await cartGateway.loadActive({ customerId })

    if (response.data) {
      try {
        const incomingCart = response.data
        const cart: SimpleCartProps = {
          id: incomingCart.id,
          accountId: customerId,
          subtotal: incomingCart.subtotal,
          total: incomingCart.total,
          items: incomingCart.items
        }

        return {
          ...response,
          data: cart
        }
      } catch (err) {
        return {
          ...response,
          data: undefined
        }
      }
    }

    return {
      ...response,
      data: undefined
    }
  }
}
