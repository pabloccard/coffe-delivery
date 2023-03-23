import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import * as S from './styles'

export function useQuantitySelector({
  minValue,
  maxValue,
  defaultValue = 1,
}: {
  minValue: number
  maxValue: number
  defaultValue: number
}) {
  const [value, setValue] = useState(defaultValue)

  function handleChangeValue(newValue: number) {
    if (newValue >= minValue && newValue <= maxValue) {
      setValue(newValue)
    }
  }

  const QuantitySelector = () => {
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

  return { value, QuantitySelector }
}
