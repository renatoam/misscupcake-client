import { Gateway } from "../domain/ports/gateway.port"
import { CartDTO } from "./cart.dto"
import { CartProtocols } from "./cart.protocols"

export interface CartGateway {
  load: Gateway<CartDTO.LoadCart, CartProtocols.LoadResponse>
  update: Gateway<CartDTO.SaveCart, CartProtocols.UpdateResponse>
  create: Gateway<CartDTO.AddToCart, CartProtocols.CreateResponse>
  delete: Gateway<CartDTO.DeleteCart, CartProtocols.DeleteResponse>
  loadActive: Gateway<CartDTO.LoadActiveCart, CartProtocols.LoadActiveResponse>
}
