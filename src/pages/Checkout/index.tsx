import * as S from './styles'
import { CartSession } from './components/CartSession'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <S.Container>
      <div>
        <h2>Complete seu pedido</h2>
        <S.AddressSection>
          <S.SectionHeader iconColor="yellow-dark">
            <MapPinLine weight="regular" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </S.SectionHeader>
          <S.InputsContainer>
            <input type="number" id="zip-code" placeholder="CEP" />
            <input type="text" id="street" placeholder="Rua" />
            <input type="number" id="number" placeholder="Número" />
            <label>
              <input type="text" id="complement" placeholder="Complemento" />
            </label>
            <input type="text" id="" placeholder="Bairro" />
            <input type="text" id="" placeholder="Cidade" />
            <input type="text" id="" placeholder="UF" />
          </S.InputsContainer>
        </S.AddressSection>

        <S.PaymentSection>
          <S.SectionHeader iconColor="purple">
            <CurrencyDollar weight="regular" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </S.SectionHeader>
        </S.PaymentSection>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <CartSession />
      </div>
    </S.Container>
  )
}
