import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  align-items: flex-start;
  gap: 1.25rem;

  & + div {
    margin-top: 3rem;
  }

  &::before {
    content: '';

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
  width: calc(100% - 2.75rem);

  margin-bottom: 0.5rem;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }

  strong {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-size: 5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  strong {
    color: ${(props) => props.theme['base-text']};
  }

  @media (min-width: 1168px) {
    strong {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: flex-end;
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

    position: absolute;
    top: 0;
    right: 0;

    span {
      display: none;
    }

    svg {
      color: ${(props) => props.theme.purple};
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    button {
      position: unset;
      top: unset;
      right: unset;

      span {
        display: inline;
      }
    }
  }

  @media (min-width: 1168px) {
    margin-left: auto;
  }
`
