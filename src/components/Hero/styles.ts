import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3.5rem;

  width: 100%;
  padding: 5.75rem 0;
`

export const Content = styled.div`
  h1 {
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const AdvantagesList = styled.ul`
  list-style: none;
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: auto auto;
  justify-items: flex-start;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

type AdvantageItemProps = {
  iconBackground: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export const AdvantageItem = styled.li<AdvantageItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};

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
