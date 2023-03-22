import { CartItem } from '../CartItem'
import * as S from './styles'

export const CartSession = () => {
  return (
    <S.Container>
      <S.ListItems>
        <CartItem />
        <CartItem />
      </S.ListItems>

      <footer>
        <S.PurchaseCostDetails>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </S.PurchaseCostDetails>

        <S.PurchaseCostDetails>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </S.PurchaseCostDetails>

        <S.TotalCost>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </S.TotalCost>

        <S.SubmitButton type="submit">Confirmar pedido</S.SubmitButton>
      </footer>
    </S.Container>
  )
}
