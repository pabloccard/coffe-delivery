import * as S from './styles'
import coffe from '../../assets/coffe.svg'
import { ShoppingCart } from 'phosphor-react'
import { QuantitySelector } from '../QuantitySelector'
import { useQuantitySelector } from '../../hooks/useQuantitySelector'

export const Product = () => {
  const { value, handleChangeValue } = useQuantitySelector(1, 7, 1)
  return (
    <S.Container>
      <img src={coffe} alt="" />
      <span>tradicional</span>
      <main>
        <h5>Expresso Tradicional</h5>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </main>
      <footer>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <S.Actions>
          <QuantitySelector
            value={value}
            handleChangeValue={handleChangeValue}
          />
          <S.AddToCartButton>
            <ShoppingCart weight="fill" />
          </S.AddToCartButton>
        </S.Actions>
      </footer>
    </S.Container>
  )
}
