import styled from 'styled-components'

export const Container = styled.div`
  /* width: 23rem; */
  /* height: 5rem; */
  position: relative;

  display: flex;
  align-items: center;
  /* align-items: flex-start; */
  gap: 1.25rem;

  /* padding: 0.5rem 0.25rem; */

  & + div {
    margin-top: 3rem;
  }

  &::before {
    content: '';

    /* width: 23rem; */
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: -1.5rem;

    background: ${(props) => props.theme['base-button']};
  }
`
export const Content = styled.div`
  width: 100%;
`

export const Image = styled.img`
  width: 4rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* justify-content: space-between; */

  margin-bottom: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  strong {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-size: 0.875rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  height: 2rem;

  > button {
    height: 2rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 0 0.5rem;
    border: 0;

    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
      font-size: 1rem;
    }

    span {
      display: none;
    }
  }
`
