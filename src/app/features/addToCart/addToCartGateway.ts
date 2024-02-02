import httpClient from "@/config/httpClient"
import { SaveCartDTO } from "./cartDTOs"
import { CartProps, cart } from "./cartEntity"

export async function addToCartGateway(saveCartDTO: SaveCartDTO): Promise<CartProps> {
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
