export interface LoadActiveCartDTO {
  accountId: string | null
  guestId: string | null
}

export interface SimpleCartResponseDTO {
  cartId: string
  accountId: string
  subtotal: number
  total: number
  items: SimpleCartItemResponse[]  
}

export type SimpleCartItemResponse = {
  id: string
  name: string
  image: string
  quantity: number
  subtotal: number
  total: number
}
