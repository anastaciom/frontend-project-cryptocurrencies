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

body::-webkit-scrollbar {
  width: 5px;             
}

body::-webkit-scrollbar-track {
  background: transparent;   
}

body::-webkit-scrollbar-thumb {
  background-color: #cacaca;   
  border-radius: 10px;      
  border: 1px solid  #cacaca;  
}
`;
export default GlobalStyles;
