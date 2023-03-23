import * as S from './styles'
import coffe from '../../../../assets/coffe.svg'
import { Trash } from 'phosphor-react'
import { useQuantitySelector } from '../../../../hooks/useQuantitySelector'

export const CartItem = () => {
  const { value, QuantitySelector } = useQuantitySelector({
    defaultValue: 1,
    maxValue: 7,
    minValue: 1,
  })

  return (
    <S.Container>
      <S.Image src={coffe} />
      <S.Content>
        <S.Header>
          <span>Expresso Tradicional</span> <strong>R$ 9,90</strong>
        </S.Header>
        <S.Actions>
          <QuantitySelector />
          <button>
            <Trash />
            REMOVER
          </button>
        </S.Actions>
      </S.Content>
    </S.Container>
  )
}
