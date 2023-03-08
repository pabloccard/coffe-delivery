import * as S from './styles'
import image from '../../assets/expresso-cup.svg'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'

export const Hero = () => {
  return (
    <S.Container>
      <S.Content>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </header>

        <S.AdvantagesList>
          <S.AdvantageItem iconBackground="yellow-dark">
            <span>
              <ShoppingCart weight="fill" />
            </span>
            Compra simples e segura
          </S.AdvantageItem>
          <S.AdvantageItem iconBackground="gray">
            <span>
              <Package weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </S.AdvantageItem>
          <S.AdvantageItem iconBackground="yellow">
            <span>
              <Timer weight="fill" />
            </span>
            Entrega rápida e rastreada
          </S.AdvantageItem>
          <S.AdvantageItem iconBackground="purple">
            <span>
              <Coffee weight="fill" />
            </span>
            O café chega fresquinho até você
          </S.AdvantageItem>
        </S.AdvantagesList>
      </S.Content>
      <img src={image} alt="copo de café expresso com grãos de café ao fundo" />
    </S.Container>
  )
}
