import { useCart } from '../../../../hooks/useCart'
import { priceFormatter } from '../../../../utils/priceFormatter'
import { CartItem } from '../CartItem'
import * as S from './styles'

export const CartSession = () => {
  const { cart } = useCart()

  const total = cart.reduce((acc, item) => {
    acc += item.price * item.amount
    return acc
  }, 0)

  const totalFormated = priceFormatter(total, { formatToBRL: true })

  return (
    <S.Container>
      <S.ListItems>
        {cart.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </S.ListItems>

      <footer>
        <S.SummaryDetails>
          <span>Total de itens</span>
          <span>{totalFormated}</span>
        </S.SummaryDetails>

        <S.SummaryDetails>
          <span>Entrega</span>
          <span>R$ 0,00</span>
        </S.SummaryDetails>

        <S.Total>
          <strong>Total</strong>
          <strong>{totalFormated}</strong>
        </S.Total>

        <S.SubmitButton type="submit">Confirmar pedido</S.SubmitButton>
      </footer>
    </S.Container>
  )
}
