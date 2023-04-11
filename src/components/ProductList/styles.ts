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
    /* margin-bottom: 3.375rem; */
  }

  /* height: 100vh; */
  overflow-y: hidden;
`
export const ListItems = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem; */

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  overflow-y: auto;
  height: calc(65vh);
  padding-top: 1rem;
`
