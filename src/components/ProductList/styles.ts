import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 5rem;
  background: ${(props) => props.theme.white};

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;

    line-height: 130%;
    margin-bottom: 2rem;
  }
`
export const ListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;

  padding-top: 1rem;

  @media (min-width: 592px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 880px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1168px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
