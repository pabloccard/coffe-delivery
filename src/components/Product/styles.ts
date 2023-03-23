import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  padding: 0 1.125rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -1.25rem;
  }

  > span {
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;

    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 130%;
  }

  h5 {
    margin-top: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
  }

  p {
    margin-top: 0.5rem;

    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
  }

  footer {
    margin-top: 2rem;
    width: 13rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  height: 2.375rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.375rem;
  width: 2.375rem;

  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme['base-card']};
  }
`
