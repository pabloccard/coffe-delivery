import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.form`
  /* width: 70rem; */
  width: 100%;
  padding-top: 8rem;

  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
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

export const SectionActionButton = styled.button`
  line-height: 0;
  border: 0;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  font-size: 1.375rem;
  margin-left: auto;
  color: ${(props) => props.theme.white};
`

export const AddressSection = styled.section`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  /* padding: 2.5rem; */
  padding: 1.5rem;
  margin-bottom: 2rem;
`

export const InputsContainer = styled.div`
  display: none;
  margin-top: 2rem;
  grid-template-columns: 75% calc(25% - 0.75rem);
  /* grid-template-columns: 200px 276px 60px; */
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;

  &.expanded {
    display: grid;
  }

  input[id='zip-code'],
  input[id='street'],
  label {
    grid-column: 1/3;
  }
  input[id='neighborhood'] {
    grid-row: 3;
  }

  /* input[id='street'] {
    grid-column: 1/4;
  } */
  /* input[id='number'] {
    grid-column: 1;
  } */

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
    /* grid-column: 2/4; */

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

export const PaymentOptions = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    height: 3.25rem;

    background: ${(props) => props.theme['base-button']};
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    padding-left: 1rem;

    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;

    transition: background-color 0.2s ease, border-color 0.2s ease;

    &[data-state='checked'] {
      background-color: ${(props) => props.theme['purple-light']};
      border-color: ${(props) => props.theme.purple};
    }

    svg {
      font-size: 1rem;
      color: ${(props) => props.theme.purple};
    }
  }
`

export const SectionHeader = styled.header<SectionHeaderProps>`
  display: flex;
  width: 100%;
  align-items: center;
  /* gap: 0.5rem; */

  /* margin-bottom: 2rem; */
  /* height: 2.75rem; */

  > svg {
    color: ${(props) =>
      props.iconColor === 'yellow-dark'
        ? props.theme['yellow-dark']
        : props.theme.purple};
    font-size: 1.375rem;
    margin-right: 0.5rem;
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
    display: none;
  }
`
