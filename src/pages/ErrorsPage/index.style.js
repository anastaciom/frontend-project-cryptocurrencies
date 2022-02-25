import styled from "styled-components";

export const ContainerStyle = styled.section`
  width: 100%;
  height: 100%;
  color: ${props=> props.theme.ErrorPage.color};
  background-color: ${props=> props.theme.ErrorPage.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;
