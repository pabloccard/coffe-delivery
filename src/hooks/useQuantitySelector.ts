import { useState } from 'react'

export function useQuantitySelector(
  minValue: number,
  maxValue: number,
  defaultValue: number,
) {
  const [value, setValue] = useState(defaultValue)

  function handleChangeValue(newValue: number) {
    if (newValue >= minValue && newValue <= maxValue) {
      setValue(newValue)
    }
  }

  return { value, handleChangeValue }
}
