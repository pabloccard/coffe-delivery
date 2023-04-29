import * as S from './styles'
import { CartSession } from './components/CartSession'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  CaretDown,
  CaretUp,
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

function methodTranslate(method: string) {
  switch (method) {
    case 'credit card':
      return 'cartão de crédito'
    case 'debit card':
      return 'cartão de débito'
    case 'cash':
      return 'dinheiro'
  }
}

export function Checkout() {
  const [addressSectionExpanded, setAddressSectionExpanded] = useState(false)
  const [paymentSectionExpanded, setPaymentSectionExpanded] = useState(false)

  console.log(paymentSectionExpanded)

  const { register, handleSubmit, control, watch } = useForm<FormData>({
    resolver: zodResolver(FormScheme),
    defaultValues: {
      paymentMethod: 'credit card',
    },
  })

  function sub(data: FormData) {
    console.log(data)
  }

  const paymentMethod = methodTranslate(watch('paymentMethod'))

  return (
    <S.Container onSubmit={handleSubmit(sub)}>
      <div>
        <h2>Complete seu pedido</h2>
        <S.AddressSection
          onClick={() => setAddressSectionExpanded((prev) => !prev)}
        >
          <S.SectionHeader iconColor="yellow-dark">
            <MapPinLine weight="regular" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <S.DinamicInfo>
              {addressSectionExpanded ? (
                <CaretUp weight="bold" />
              ) : (
                <CaretDown weight="bold" />
              )}
            </S.DinamicInfo>
          </S.SectionHeader>
          <S.InputsContainer
            onClick={(e) => e.stopPropagation()}
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

        <S.PaymentSection
          onClick={() => setPaymentSectionExpanded((prev) => !prev)}
        >
          <S.SectionHeader iconColor="purple">
            <CurrencyDollar weight="regular" />
            <div>
              <h3>Pagamento </h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <S.DinamicInfo>
              <span>{paymentMethod}</span>

              {paymentSectionExpanded ? (
                <CaretUp weight="bold" />
              ) : (
                <CaretDown weight="bold" />
              )}
            </S.DinamicInfo>
          </S.SectionHeader>

          <S.SectionPaymentContent
            onClick={(e) => e.stopPropagation()}
            className={paymentSectionExpanded ? 'expanded' : ''}
          >
            <Controller
              control={control}
              name="paymentMethod"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <S.PaymentOptions value={value} onValueChange={onChange}>
                  <RadioGroup.Item defaultChecked value="credit card">
                    <CreditCard weight="regular" />
                    Cartão de crédito
                  </RadioGroup.Item>
                  <RadioGroup.Item value="debit card">
                    <Bank weight="regular" />
                    Cartão de débito
                  </RadioGroup.Item>
                  <RadioGroup.Item value="cash">
                    <Money weight="regular" />
                    Dinheiro
                  </RadioGroup.Item>
                </S.PaymentOptions>
              )}
            />
          </S.SectionPaymentContent>
        </S.PaymentSection>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CartSession />
      </div>
    </S.Container>
  )
}
