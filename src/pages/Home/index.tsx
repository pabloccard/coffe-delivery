import { useEffect, useState } from 'react'
import { Hero } from '../../components/Hero'
import { ProductList } from '../../components/ProductList'
import { ProductType } from '../../types/Product'
import * as S from './styles'

export function Home() {
  const [products, setProducts] = useState<ProductType[]>([])

  function fetchProducts() {
    fetch(
      'https://my-json-server.typicode.com/pabloccard/coffe-delivery-api/products',
    )
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <S.Container>
      <Hero />
      <ProductList products={products} />
    </S.Container>
  )
}
