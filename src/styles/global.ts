import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;

      
    }

`
