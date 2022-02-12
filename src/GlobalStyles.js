import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body, html, #root {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}
`;
export default GlobalStyles;
