import styled from "styled-components";

export const HeaderStyle = styled.header`

width: 100%;
height: 70px;
background-color: transparent;
position: fixed;

a{
    position: absolute;
    height: inherit;
    width:auto;
    display: flex;
    align-items: center;
    justify-content : center;
    top:0;
    left: 100px;
    color: ${props=> props.theme.colors.text};
    text-decoration :none;

    &:hover,&:active{
        color: ${props=> props.theme.colors.textHover};
        transition: 0.2s all ease-in-out;
    }
}
span{
    display: flex;
    align-items: center;
    font-size: 20px;
}
`