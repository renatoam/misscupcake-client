import { CartItemsStateProps, getCart, setCart } from "@/states/cart"
import { addToCartGateway } from "./addToCartGateway"
import { CartDTO } from "../../cart/interface/cart.dto"
import { getAccount } from "@/states/account"
import { CartItemProps } from "./cartItemEntity"
import { useMutation } from "react-query"
import { useCallback } from "react"

export const useAddToCartController = () => {
  // Add to Cart Strategy
  const mutation = useMutation((saveCartDTO: CartDTO.SaveCart) => addToCartGateway(saveCartDTO))

  const createDTO = (product: CartDTO.BareProduct): CartDTO.SaveCart => {
    const cart = getCart()
    const account = getAccount()
  
    if (cart.id) {
      console.warn('Update cart gateway not implemented yet.')
    } // criar um strategy aqui pra quando tiver o update, ai a controller decide se chama update ou add
    
    // Add to Cart Strategy
    const saveCartDTO: CartDTO.SaveCart = {
      accountId: account.id,
      products: [product]
    }

    return saveCartDTO
  }

  const addToCart = useCallback((id: string, quantity: number) => {
    const saveCartDTO = createDTO({ id, quantity })
    mutation.mutate(saveCartDTO)
  }, [createDTO, mutation])

  const { data, isError, isLoading, error } = mutation
  
  if (isError) {
    console.error(error)
    // dispatch error notification
  }

  if (data) {
    const cartItemsHash = data.items.reduce((acc: CartItemsStateProps, item: CartItemProps) => ({
      ...acc,
      [item.id]: item
    }), {} as CartItemsStateProps)
  
    const cartState = {
      ...data,
      id: data.cartId,
      items: cartItemsHash
    }
  
    console.log({ data, cartState })
    setCart(cartState)
  }


  return {
    addToCart,
    isLoading
  }
}
