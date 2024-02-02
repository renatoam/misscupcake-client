export type BareProductDTO = {
  id: string
  quantity: number
}

export interface AddToCartDTO {
  accountId: string
  product: BareProductDTO
}

export interface SaveCartDTO {
  accountId: string
  products: BareProductDTO[]
}
