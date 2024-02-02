import { CartProps } from '@/app/features/addToCart/cartEntity'
import { CartItemProps } from '@/app/features/addToCart/cartItemEntity'
import { atom, getDefaultStore } from 'jotai'

export type CartItemsStateProps = Record<string, CartItemProps>

export interface CartStateProps extends Omit<CartProps, "items" | "cartId"> {
  id: string
  items: CartItemsStateProps
}

const store = getDefaultStore()

export const cart = atom<CartStateProps>({
  id: '',
  accountId: '',
  subtotal: 0,
  total: 0,
  items: {},
})

export const getCart = () => store.get(cart)
export const setCart = (newCart: CartStateProps) => store.set(cart, newCart)
