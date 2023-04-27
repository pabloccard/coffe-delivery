import * as S from './styles'
import { CartSession } from './components/CartSession'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  CaretCircleDoubleDown,
  CaretDown,
} from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const FormScheme = z.object({
  zipCode: z.number(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.string(),
})

type FormData = z.infer<typeof FormScheme>

export function Checkout() {
  const [addressSectionExpanded, setAddressSectionExpanded] = useState(false)

  const { register, handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(FormScheme),
  })

  function sub(data: FormData) {
    console.log(data)
  }

  return (
    <S.Container onSubmit={handleSubmit(sub)}>
      <div>
        <h2>Complete seu pedido</h2>
        <S.AddressSection>
          <S.SectionHeader iconColor="yellow-dark">
            <MapPinLine weight="regular" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <S.SectionActionButton
              onClick={() => setAddressSectionExpanded((prev) => !prev)}
            >
              <CaretDown weight="fill" />
            </S.SectionActionButton>
          </S.SectionHeader>
          <S.InputsContainer
            className={addressSectionExpanded ? 'expanded' : ''}
          >
            <input
              {...register('zipCode', { valueAsNumber: true })}
              type="number"
              id="zip-code"
              placeholder="CEP"
            />
            <input
              {...register('street')}
              type="text"
              id="street"
              placeholder="Rua"
            />
            <input
              {...register('number', { valueAsNumber: true })}
              type="number"
              id="number"
              placeholder="Nº"
            />
            <label>
              <input
                {...register('complement')}
                type="text"
                id="complement"
                placeholder="Complemento"
              />
            </label>
            <input
              {...register('neighborhood')}
              type="text"
              id="neighborhood"
              placeholder="Bairro"
            />
            <input
              {...register('city')}
              type="text"
              id=""
              placeholder="Cidade"
            />
            <input {...register('state')} type="text" id="" placeholder="UF" />
          </S.InputsContainer>
        </S.AddressSection>

        {/* <S.PaymentSection>
          <S.SectionHeader iconColor="purple">
            <CurrencyDollar weight="regular" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </S.SectionHeader>

          <Controller
            control={control}
            name="paymentMethod"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <S.PaymentOptions value={value} onValueChange={onChange}>
                <RadioGroup.Item defaultChecked value="crédito">
                  <CreditCard weight="regular" />
                  Cartão de crédito
                </RadioGroup.Item>
                <RadioGroup.Item value="débito">
                  <Bank weight="regular" />
                  Cartão de débito
                </RadioGroup.Item>
                <RadioGroup.Item value="dinheiro">
                  <Money weight="regular" />
                  Dinheiro
                </RadioGroup.Item>
              </S.PaymentOptions>
            )}
          />
        </S.PaymentSection> */}
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CartSession />
      </div>
    </S.Container>
  )
}
