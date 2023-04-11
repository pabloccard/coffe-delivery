import * as S from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useQuantitySelector } from '../../hooks/useQuantitySelector'
import { ProductType as ProductData } from '../../types/Product'
import { priceFormatter } from '../../utils/priceFormatter'
import { useCart } from '../../hooks/useCart'

type ProductProps = {
  data: ProductData
}

export const Product = ({
  data: { title, description, price, img, tags, id },
}: ProductProps) => {
  const {
    value: quantity,
    setValue,
    QuantitySelector,
  } = useQuantitySelector({
    defaultValue: 1,
    maxValue: 9,
    minValue: 1,
  })

  const { addProduct } = useCart()

  function handleAddProduct() {
    addProduct(id, quantity)
    setValue(1)
  }
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
          <S.AddToCartButton onClick={handleAddProduct}>
            <ShoppingCart weight="fill" />
          </S.AddToCartButton>
        </S.Actions>
      </footer>
    </S.Container>
  )
}
