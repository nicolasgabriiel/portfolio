import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  lightBlack: '#222222',
  lightGreen: '#D3E97A',
  grey: '#C7C7C7',
  lightGrey: '#D9D9D9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Manrope", sans-serif;
  }
  .container {
    max-width: 1752px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
