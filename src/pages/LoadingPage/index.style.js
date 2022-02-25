import styled from "styled-components";

export const ContainerStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.ErrorPage.background};
  color: ${(props) => props.theme.ErrorPage.color};
  flex-direction: column;
  h1 {
    font-size: 30px;
    padding: 10px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 2px;
  }
`;
