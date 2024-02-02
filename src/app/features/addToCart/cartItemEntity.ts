export interface CartItemProps {
  id: string
  name: string
  image: string
  quantity: number
  total: number
  unitPrice: number
}

export const cartItem = (props: CartItemProps): CartItemProps => {
  const {
    id,
    name,
    image: serverImage,
    quantity,
    total: incomingTotal,
    unitPrice,
  } = props

  if (!id || !name || !quantity) {
    throw new Error('ID, name, and quantity are required.')
  }

  const image = serverImage ?? 'placeholder'
  const total = incomingTotal ?? quantity * unitPrice

  return {
    id,
    name,
    quantity,
    image,
    unitPrice,
    total
  }
}
