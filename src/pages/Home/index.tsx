import { Hero } from '../../components/Hero'
import { ProductList } from '../../components/ProductList'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Hero />
      <ProductList />
    </S.Container>
  )
}
