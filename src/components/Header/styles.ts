import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;
  padding: 2rem 1.5rem;

  z-index: 2;

  position: fixed;
  left: 0;
  top: 0;

  background: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &.scrolled {
    background-color: ${(props) => props.theme.white};

    box-shadow: 0.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      2px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      3.8px 12.5px 10px rgba(0, 0, 0, 0.035),
      6.7px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      12.5px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      30px 100px 80px rgba(0, 0, 0, 0.07);
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
