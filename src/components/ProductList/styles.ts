import styled from 'styled-components'

export const Container = styled.section`
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;

    line-height: 130%;
    margin-bottom: 3.375rem;
  }
`
export const ListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
