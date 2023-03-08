import { Hero } from '../../components/Hero'
import * as S from './styles'

export function Home() {
  console.log('home')
  return (
    <S.Container>
      <Hero />
    </S.Container>
  )
}
