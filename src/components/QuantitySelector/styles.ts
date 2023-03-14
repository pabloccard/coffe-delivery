import styled from 'styled-components'

export const Container = styled.div`
  width: 4.5rem;
  height: 2.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    width: 100%;
    height: 100%;

    background: transparent;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    color: ${(props) => props.theme.purple};
    line-height: 0;
  }
`
