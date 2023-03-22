import styled from 'styled-components'

export const Container = styled.form`
  width: 70rem;
  padding: 1.5rem 0;

  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;

  h2 {
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
`

export const AddressSection = styled.section`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;

  input[id='zip-code'] {
    grid-column: 1;
  }
  input[id='street'] {
    grid-column: 1/4;
  }
  input[id='number'] {
    grid-column: 1;
  }

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;

    height: 2.625rem;
    width: 100%;

    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  label {
    grid-column: 2/4;

    position: relative;

    &::before {
      content: 'Opcional';
      position: absolute;
      right: 0.75rem;
      top: 50%;

      transform: translateY(-50%);

      color: ${(props) => props.theme['base-label']};
      font-size: 0.75rem;
      font-style: italic;
    }
  }
`

export const PaymentSection = styled.section`
  margin-top: 2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

type SectionHeaderProps = {
  iconColor: 'yellow-dark' | 'purple'
}

export const SectionHeader = styled.header<SectionHeaderProps>`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;
  height: 2.75rem;

  svg {
    color: ${(props) =>
      props.iconColor === 'yellow-dark'
        ? props.theme['yellow-dark']
        : props.theme.purple};
    font-size: 1.375rem;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 21px;
    font-weight: 400;
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 21px;
  }
`
