import styled from "styled-components";

export const AboutStyle = styled.section`
  width: 100%;
  max-height: 800px ;
  background-color: #432a78;
  color: #cacaca;
  user-select: none;
  
   h1{
       font-size: 50px;
       text-align: center;
       margin-top: -180px;
       margin-bottom: 20px;
       font-weight: 500;
       letter-spacing: 3px;
   } 

   div{
       display: flex;
       align-items: center;
       justify-content:space-evenly;
        width: inherit ;
        height:inherit;
       p{
            width: 50%;
            font-size: 30px;
            line-height: 40px;
            text-indent: 30px
       }

       img{
           border-radius: 50%;
       }
   }
`;


export const DivisionWavesStyle = styled.svg`

path{
    fill:${props=> props.theme.colors.backgroundBanner};
    fill-opacity:"1";
}

`