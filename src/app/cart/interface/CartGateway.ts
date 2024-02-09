import { Gateway } from "../domain/ports/Gateway"
import { CartDTO } from "./CartDTO"
import { CartProtocols } from "./CartProtocols"

export interface CartGateway {
  load: Gateway<CartDTO.LoadCart, CartProtocols.LoadResponse>
  update: Gateway<CartDTO.SaveCart, CartProtocols.UpdateResponse>
  create: Gateway<CartDTO.AddToCart, CartProtocols.CreateResponse>
  delete: Gateway<CartDTO.DeleteCart, void>
  loadActive: Gateway<CartDTO.LoadActiveCart, CartProtocols.LoadActiveResponse>
}
