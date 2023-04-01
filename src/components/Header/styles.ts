import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border: 0;
    padding: 0.5rem;
    height: 2.375rem;

    background: ${(props) => props.theme['purple-light']};
    border-radius: 6px;

    color: ${(props) => props.theme['purple-dark']};
    font-family: 'Roboto';
    font-size: 0.875rem;
    line-height: 130%;

    svg {
      color: ${(props) => props.theme.purple};
      font-size: 1.375rem;
    }
  }
`
export const CheckoutLink = styled(NavLink)`
  display: inline-block;

  position: relative;

  height: 2.375rem;
  width: 2.375rem;
  padding: 0.5rem;

  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 1.375rem;
`

export const Counter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;

  position: absolute;
  top: -8px;
  right: -8.35px;

  background: #c47f17;
  border-radius: 1000px;

  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: bold;
`
