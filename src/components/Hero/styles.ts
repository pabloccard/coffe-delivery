import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  position: relative;

  > img {
    width: min(476px, 100%);
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    gap: 0;

    > img {
      width: 380px;
      position: absolute;
      right: 0;
    }
  }

  @media (min-width: 1168px) {
    > img {
      width: unset;
    }
  }
`

export const Content = styled.div`
  max-width: 26.25rem;

  h1 {
    text-align: center;

    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.625rem;
    line-height: 130%;

    span:first-child {
      display: none;
    }

    span:last-child {
      text-transform: capitalize;
    }
  }

  p {
    display: none;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
  }

  @media (min-width: 768px) {
    max-width: none;

    h1 {
      font-size: 3rem;

      span:first-child {
        display: inline;
      }

      span:last-child {
        text-transform: none;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 37.5rem;

    h1 {
      text-align: left;
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1168px) {
    h1 {
      margin-bottom: 1rem;
      font-size: 3rem;
    }

    p {
      display: inline;
    }
  }
`

export const AdvantagesList = styled.ul`
  list-style: none;
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: flex-start;
  row-gap: 0.75rem;

  @media (min-width: 1168px) {
    margin-top: 4.125rem;
  }
`

type AdvantageItemProps = {
  iconBackground: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export const AdvantageItem = styled.li<AdvantageItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};
  font-size: min(1rem, max(1.4vw, 0.875rem));

  span {
    display: flex;
    padding: 0.5rem;

    background-color: ${(props) =>
      (props.iconBackground === 'purple' && props.theme.purple) ||
      (props.iconBackground === 'gray' && props.theme['base-text']) ||
      (props.iconBackground === 'yellow' && props.theme.yellow) ||
      (props.iconBackground === 'yellow-dark' && props.theme['yellow-dark'])};

    border-radius: 50%;
    color: ${(props) => props.theme.background};
  }
`
