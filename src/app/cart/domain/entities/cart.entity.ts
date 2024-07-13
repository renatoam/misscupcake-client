import calculateTotals from "../services/calculateTotals.service";
import Identifier from "../valueObjects/identifier.vo";
import { SimpleCartItemProps } from "./cartItem.entity";

export interface SimpleCartProps {
  id?: string
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
    const { id: cart, accountId: account, items } = props
    const cartId = new Identifier(cart)
    const accountId = new Identifier(account)
    const calculatedTotal = calculateTotals(items)

    return new Cart({
      ...props,
      id: cartId.value,
      accountId: accountId.value,
      subtotal: calculatedTotal.subtotals,
      total: calculatedTotal.totals
    })
  }

  public get id(): string {
    return this.props.id ?? ''
  }

  public get accountId(): string {
    return this.props.accountId
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
