import * as S from './styles'
import coffe from '../../assets/coffe.svg'
import { ShoppingCart } from 'phosphor-react'
import { QuantitySelector } from '../QuantitySelector'
import { useQuantitySelector } from '../../hooks/useQuantitySelector'
import { Product as ProductData } from '../../types/Product'

type ProductProps = {
  data: ProductData
}

export const Product = ({
  data: { title, description, price },
}: ProductProps) => {
  const { value, handleChangeValue } = useQuantitySelector(1, 7, 1)
  return (
    <S.Container>
      <img src={coffe} alt="" />
      <span>tradicional</span>
      <main>
        <h5>{title}</h5>
        <p>{description}</p>
      </main>
      <footer>
        <span>
          R$ <strong>{price}</strong>
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
