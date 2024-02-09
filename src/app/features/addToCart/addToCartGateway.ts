import httpClient from "@/app/shared/config/axiosClientConfig"
import { CartDTO } from "../../cart/interface/CartDTO"
import { CartProps, cart } from "./cartEntity"

export async function addToCartGateway(saveCartDTO: CartDTO.SaveCart): Promise<CartProps> {
  try {
    const response = await httpClient.post<CartProps>('/carts/create', saveCartDTO)
    const cartEntity = cart()
    
    try {
      const newCart = cartEntity.create(response.data)
      return newCart
    } catch (error) {
      throw new Error((error as Error).message)
    }
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
