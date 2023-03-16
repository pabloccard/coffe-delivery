import { Product } from '../Product'
import * as S from './styles'
import { products } from '../../products'

export const ProductList = () => {
  return (
    <S.Container>
      <h2>Nossos cafés</h2>

      <S.ListItems>
        {products.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </S.ListItems>
    </S.Container>
  )
}
