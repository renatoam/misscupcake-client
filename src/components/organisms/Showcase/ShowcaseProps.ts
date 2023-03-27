export interface ShowcaseProps {
  products: ServerProduct[]
}

export interface ServerProduct {
  id: string
  name: string
  description: string
  images: string[]
}
