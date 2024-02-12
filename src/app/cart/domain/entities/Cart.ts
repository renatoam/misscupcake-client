import calculateTotal from "../services/calculateTotal";
import Identifier from "../valueObjects/Identifier";
import { SimpleCartItemProps } from "./CartItem";

export interface SimpleCartProps {
  id: string
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
    const { id: cart, accountId: account, total, items } = props
    const cartId = new Identifier(cart)
    const accountId = new Identifier(account)
    const calculatedTotal = calculateTotal(total, items)

    return new Cart({
      ...props,
      id: cartId.value,
      accountId: accountId.value,
      total: calculatedTotal
    })
  }

  public get id(): string {
    return this.props.id
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
