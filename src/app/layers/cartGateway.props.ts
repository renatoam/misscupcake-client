import { LoadActiveCartDTO } from "../features/loadActiveCart/loadActiveCartDTO"

export interface CartGateway {
  loadCart(): any
  loadActiveCart(loadActiveCartDTO: LoadActiveCartDTO): Promise<any>
  updateCart(): any
  deleteCart(): any
  deleteFromCart(): any
}
