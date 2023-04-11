import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import * as S from './styles'

export function useQuantitySelector({
  minValue,
  maxValue,
  defaultValue,
  onDecrement,
  onIncrement,
}: {
  minValue: number
  maxValue: number
  defaultValue: number
  onDecrement?(): void
  onIncrement?(): void
}) {
  const [value, setValue] = useState<number>(defaultValue)

  function handleChangeValue(newValue: number) {
    if (newValue >= minValue && newValue <= maxValue) {
      setValue(newValue)
    }
  }

  function handleSetValue(newValue: number) {
    if (newValue >= minValue && newValue <= maxValue) {
      setValue(newValue)
    }
  }

  const QuantitySelector = () => {
    return (
      <S.Container>
        <button
          type="button"
          disabled={value <= minValue}
          onClick={() => {
            handleChangeValue(value - 1)
            onDecrement && onDecrement()
          }}
        >
          <Minus weight="bold" />
        </button>

        <span>{value}</span>

        <button
          type="button"
          disabled={value >= maxValue}
          onClick={() => {
            handleChangeValue(value + 1)
            onIncrement && onIncrement()
          }}
        >
          <Plus weight="bold" />
        </button>
      </S.Container>
    )
  }

  return { value, QuantitySelector, setValue: handleSetValue }
}
