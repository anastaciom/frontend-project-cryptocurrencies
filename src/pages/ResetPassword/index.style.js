import styled from "styled-components";

export const PageStyle = styled.section`
width: 100%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: ${props=>props.theme.ResetPage.background};
color: ${props=>props.theme.ResetPage.color};
`