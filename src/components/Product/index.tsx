import * as S from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useQuantitySelector } from '../../hooks/useQuantitySelector'
import { Product as ProductData } from '../../types/Product'
import { priceFormatter } from '../../utils/priceFormatter'

type ProductProps = {
  data: ProductData
}

export const Product = ({
  data: { title, description, price, img, tags },
}: ProductProps) => {
  const { value, QuantitySelector } = useQuantitySelector({
    defaultValue: 1,
    maxValue: 7,
    minValue: 1,
  })
  return (
    <S.Container>
      <img src={img} alt="" />
      <S.Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </S.Tags>

      <main>
        <h5>{title}</h5>
        <p>{description}</p>
      </main>
      <footer>
        <span>
          R$ <strong>{priceFormatter(price)}</strong>
        </span>

        <S.Actions>
          <QuantitySelector />
          <S.AddToCartButton>
            <ShoppingCart weight="fill" />
          </S.AddToCartButton>
        </S.Actions>
      </footer>
    </S.Container>
  )
}
