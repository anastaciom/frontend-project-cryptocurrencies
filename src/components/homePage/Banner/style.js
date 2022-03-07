import styled from "styled-components";

export const BannerStyle = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-color: ${(props) => props.theme.colors.backgroundBanner};

  div {
    width: 50%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    animation: go-back 1.8s infinite alternate;

    @keyframes go-back {
      from {
        transform: scale(1.1);
      }
      to {
        transform: scale(1);
      }
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.textBanner};
    font-size: 60px;
    font-weight: 500;
    letter-spacing: 3px;
    padding: 10px;
    text-transform: uppercase;
  }
  p {
    width: 80%;
    color: ${(props) => props.theme.colors.textBanner};
    text-align: justify;
    font-size: 30px;
    padding: 10px;
  }

  a {
    margin: 10px;
    padding: 15px;
    font-size: 20px;
    text-align: center;
    width: 20%;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    outline: none;
    background-color: #432a78;
    color: #cacaca;
    font-weight: 500;
    text-decoration: none;

    &:visited,
    &:link {
      color: #cacaca;
    }
    &:hover {
      background-color: #dadada;
      transform: scale(1.1);
      transition: 0.3s all ease-in-out;
      box-shadow: -1px -1px 18px 2px #432a78;
      background-color: #432a78;
      color: #cacaca;
    }

    &:active {
      background-color: #cacaca;
      color: #432a78;
    }
  }

  @media (max-width: 480px) {

    flex-direction:column-reverse;
    div {
      width: 100%;
      height: 50%;
    }

    img {

     margin-top:80px;
      width: 90%;
      height:inherit;
    }

    h1 {
      font-size: 30px;
      letter-spacing: 2px;
    }
    p {
      width: 90%;
      font-size: 20px;
      padding: 8px;
    }

    a {
      margin: 8px;
      padding: 10px;
      font-size: 15px;
      width: 90%;
    }
  }
`;
