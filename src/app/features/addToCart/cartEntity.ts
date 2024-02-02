import { CartItemProps } from "./cartItemEntity"

export interface CartProps {
  cartId: string
  accountId: string
  subtotal: number
  total: number
  items: CartItemProps[]
}

export interface CartEntity {
  create: (props: CartProps) => CartProps
}

export const cart = (): CartEntity => {
  return {
    create: (props: CartProps): CartProps => {
      const {
        cartId,
        accountId,
        subtotal,
        total: incomingTotal,
        items,
      } = props

      if (!cartId || !accountId) {
        throw new Error('Cart ID and Account ID are required.')
      }
    
      const total = incomingTotal ?? items.reduce((acc, current) => {
        const sum = acc + current.total
        return sum
      }, 0)
    
      return {
        cartId,
        accountId,
        subtotal,
        total,
        items
      }
    }
  }
}
