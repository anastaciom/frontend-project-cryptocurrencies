import styled from "styled-components";

export const AboutStyle = styled.section`
  width: 100%;
  max-height: 800px;
  background-color: #432a78;
  color: #cacaca;
  user-select: none;

  h1 {
    font-size: 50px;
    text-align: center;
    margin-top: -180px;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: inherit;
    height: inherit;
    p {
      width: 50%;
      font-size: 30px;
      line-height: 40px;
      text-indent: 30px;
      padding:10px
    }

    img {
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 660px) {
    h1 {
      font-size: 30px;
      margin-top: -10px;
      margin-bottom: 20px;
      letter-spacing: 2px;
    }

    div {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 50%;
      p {
        width: 90%;
        font-size: 20px;
        line-height: 30px;
        text-indent: 30px;
        text-align:justify;
      }

      img {
        width : 200px;
        height : 200px;
      }
    }
  }
  @media (min-width: 660px) and (max-width: 1023px) {
  h1 {
    font-size: 40px;
    margin-top: -50px;
    letter-spacing: 2px;
  }

  div {
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: inherit;
      height: inherit;
      padding:30px;
      p {
        width: 90%;
        font-size: 20px;
        line-height: 30px;
        text-indent: 30px;
        text-align:justify;
        padding:20px
      }

      img {
        width : 300px;
        height : 300px;
      }
    }
  }
`;

export const DivisionWavesStyle = styled.svg`
  path {
    fill: ${(props) => props.theme.colors.backgroundBanner};
    fill-opacity: "1";
  }
`;
