export interface CartGateway<DTO = unknown, Response = unknown> {
  loadCart(): unknown
  loadActiveCart(dto: DTO): Promise<Response>
  updateCart(): unknown
  deleteCart(): void
  deleteFromCart(): unknown
}
