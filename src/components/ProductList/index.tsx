import { Product } from '../Product'
import * as S from './styles'
import { ProductType } from '../../types/Product'

export const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <S.Container>
      <h2>Nossos cafés</h2>

      {products.length === 0 && <span>Carregando</span>}

      {products && (
        <S.ListItems>
          {products.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </S.ListItems>
      )}
    </S.Container>
  )
}
