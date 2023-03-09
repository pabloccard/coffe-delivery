import { Hero } from '../../components/Hero'
import { Product } from '../../components/Product'
import * as S from './styles'

export function Home() {
  console.log('home')
  return (
    <S.Container>
      <Product />
    </S.Container>
  )
}
