import styled from "styled-components";

export const PageStyle = styled.section`
width: 100%;
height:100%;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
background-color: ${props=>props.theme.ForgotPage.background};
color: ${props=>props.theme.ForgotPage.color};
`