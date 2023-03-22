import * as S from './styles'
import coffe from '../../../../assets/coffe.svg'
import { Trash } from 'phosphor-react'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { useQuantitySelector } from '../../../../hooks/useQuantitySelector'

export const CartItem = () => {
  const { value, handleChangeValue } = useQuantitySelector(1, 7, 1)
  return (
    <S.Container>
      <S.Image src={coffe} />
      <S.Content>
        <S.Header>
          <span>Expresso Tradicional</span> <strong>R$ 9,90</strong>
        </S.Header>
        <S.Actions>
          <QuantitySelector
            value={value}
            handleChangeValue={handleChangeValue}
          />
          <button>
            <Trash />
            REMOVER
          </button>
        </S.Actions>
      </S.Content>
    </S.Container>
  )
}
