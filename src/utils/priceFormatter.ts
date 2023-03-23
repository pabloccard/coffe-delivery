export function priceFormatter(
  value: number,
  options: { formatToBRL?: boolean } = {},
) {
  const { formatToBRL } = options

  if (formatToBRL) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  } else {
    return value.toFixed(2).replace('.', ',')
  }
}
