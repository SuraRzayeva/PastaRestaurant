import { createGlobalStyle } from 'styled-components'

export const beige = '#FCF9F5'
export const brown = '#5D3D28'
export const yellow = '#EFCF00'

export const GlobalStyle = createGlobalStyle`

body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${beige};
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;

}



`
