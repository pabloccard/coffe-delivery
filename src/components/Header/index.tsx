import * as S from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt="Coffe Delivery" />

      <div>
        <button>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </button>
        <a href="/carrinho">
          <ShoppingCart weight="fill" />
        </a>
      </div>
    </S.Container>
  )
}
