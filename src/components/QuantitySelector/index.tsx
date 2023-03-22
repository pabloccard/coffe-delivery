import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

type QuantitySelectorProps = {
  value: number
  handleChangeValue(newValue: number): void
}

export const QuantitySelector = ({
  handleChangeValue,
  value,
}: QuantitySelectorProps) => {
  return (
    <S.Container>
      <button type="button" onClick={() => handleChangeValue(value - 1)}>
        <Minus weight="bold" />
      </button>

      <span>{value}</span>

      <button type="button">
        <Plus weight="bold" onClick={() => handleChangeValue(value + 1)} />
      </button>
    </S.Container>
  )
}
