import styled from 'styled-components'

export const Container = styled.section`
  width: 28rem;

  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const ListItems = styled.ul`
  margin-bottom: 3rem;
`

export const PurchaseCostDetails = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    margin-bottom: 0.75rem;
  }
  span:first-child {
    font-size: 1rem;
  }
`

export const TotalCost = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2.25rem;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`
export const SubmitButton = styled.button`
  width: 100%;

  background: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;
`
