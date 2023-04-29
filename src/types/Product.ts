export type ProductType = {
  id: string
  title: string
  img: string
  tags: Array<string>
  description: string
  price: number
}

export type CartProduct = {
  id: string
  title: string
  price: number
  img: string
  amount: number
  description: string
}
