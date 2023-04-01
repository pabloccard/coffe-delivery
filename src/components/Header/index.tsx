import * as S from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export const Header = () => {
  const { cart } = useCart()

  const totalItems = cart.length

  return (
    <S.Container>
      <NavLink to="/">
        <img src={logo} alt="Coffe Delivery" />
      </NavLink>

      <div>
        <button>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </button>

        <S.CheckoutLink to="/checkout">
          <ShoppingCart weight="fill" />
          {totalItems > 0 && <S.Counter>{totalItems}</S.Counter>}
        </S.CheckoutLink>
      </div>
    </S.Container>
  )
}
