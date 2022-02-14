import styled from "styled-components";

export const ThemeSwitchStyle = styled.div`

position:absolute;
left: 20px;
top:10px;
height:60%;
background-color: transparent;
width: 40px;
display : flex;
align-items:center;
justify-content:center;
cursor: pointer;
border-radius: 50px;

&:hover{
  background-color: rgba(192,192,192,0.3);
  transition: all ease-in-out 0.2s
}
`