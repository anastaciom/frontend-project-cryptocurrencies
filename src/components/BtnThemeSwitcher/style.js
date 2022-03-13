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

@media screen and (max-width: 660px) {
left: 8px;
top:15px;
height:60%;
width: 40px;
}

@media (min-width: 660px) and (max-width: 1023px) {
  left: 15px;
top:18px;
height:50%;
width: 40px;
}
`