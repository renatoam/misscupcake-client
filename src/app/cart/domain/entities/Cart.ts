import { validate as isUUID } from "uuid"; // remover depois, trocar pra Identifier entity
import { SimpleCartItemProps } from "./CartItem";

export interface SimpleCartProps {
  cartId: string
  accountId: string
  subtotal: number
  total: number
  items: SimpleCartItemProps[]  
}

export class Cart {
  private props: SimpleCartProps

  private constructor(props: SimpleCartProps) {
    this.props = props
  }

  public static create(props: SimpleCartProps): Cart {
    const { cartId, accountId, total, items } = props

    if (!cartId || !accountId) {
      throw new Error('Cart ID and Account ID are required.')
    }

    if (!accountId) {
      throw new Error('Customer ID is required.')
    }
    
    if (accountId && !isUUID(accountId)) {
      throw new Error('Customer ID has invalid format.')
    }

    let calculatedTotal = 0

    if (!total) {
      calculatedTotal = items.reduce((acc, current) => {
        const sum = acc + current.total
        return sum
      }, 0)
    }

    return new Cart({ ...props, total: calculatedTotal })
  }

  public get id(): string {
    return this.props.cartId
  }

  public get subtotal(): number {
    return this.props.subtotal
  }

  public get total(): number {
    return this.props.total
  }

  public get items(): SimpleCartItemProps[] {
    return this.props.items
  }
}
