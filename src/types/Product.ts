export type Product = {
  id: number
  title: string
  img: string
  tags: Array<string>
  description: string
  price: number
}

export type ProductCart = {
  id: number
  title: string
  price: number
  image: string
  amount: number
}
