export namespace CartDTO {
  export type BareProduct = {
    id: string
    quantity: number
  }
  
  export type AddToCart = {
    accountId: string
    product: BareProduct
  }
  
  export type SaveCart = {
    accountId: string
    products: BareProduct[]
  }

  export type LoadCart = {
    cartId: string
  }

  export type LoadActiveCart = {
    customerId: string
  }

  export type DeleteCart = {
    cartId: string
  }
}



