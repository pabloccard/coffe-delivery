import * as S from './styles'
import { Trash } from 'phosphor-react'
import { useQuantitySelector } from '../../../../hooks/useQuantitySelector'
import { CartProduct } from '../../../../types/Product'
import { priceFormatter } from '../../../../utils/priceFormatter'
import { useCart } from '../../../../hooks/useCart'

export const CartItem = ({
  data: { img, title, price, amount, id, description },
}: {
  data: CartProduct
}) => {
  const { removeProduct, updateProductAmount } = useCart()

  const { QuantitySelector } = useQuantitySelector({
    defaultValue: amount,
    maxValue: 9,
    minValue: 1,
    onIncrement: () => updateProductAmount(id, amount + 1),
    onDecrement: () => updateProductAmount(id, amount - 1),
  })

  function handleRemoveProduct() {
    removeProduct(id)
  }

  const totalPrice = priceFormatter(price * amount, { formatToBRL: true })

  return (
    <S.Container>
      <S.Image src={img} />
      <S.Content>
        <S.Header>
          <span>{title}</span>
          <p>{description}</p>
        </S.Header>
        <S.Footer>
          <strong>{totalPrice}</strong>

          <S.Actions>
            <button type="button" onClick={handleRemoveProduct}>
              <Trash />
              <span>REMOVER</span>
            </button>
            <QuantitySelector />
          </S.Actions>
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}
