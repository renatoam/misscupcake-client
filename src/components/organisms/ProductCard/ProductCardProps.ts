export interface ProductCardProps  {
  id: string
  image: string
  name: string
  description: string
  loading: boolean
  handleClick: (id: string, quantity: number) => void
}
