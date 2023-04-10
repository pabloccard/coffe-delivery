import * as S from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const { cart } = useCart()

  const totalItems = cart.length

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.Container className={`${scrolled ? 'scrolled' : ''}`}>
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
