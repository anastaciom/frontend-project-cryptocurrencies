import styled from "styled-components";

export const ErrorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: inherit;

  div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    h1 {
      font-size: 50px;
      letter-spacing: 1px;
      font-weight: 500px;
    }

    a {
      background-color: rgba(192, 192, 192, 0.3);
      padding: 15px;
      text-decoration: none;
      color: inherit;
      border-radius: 20px;
      font-weight: 500;
      letter-spacing: 1px;

      &:hover {
        transition: all ease-in 0.2s;
        transform: scale(1.1);
      }
      &:active {
        transition: all ease-in 0.2s;
        transform: scale(0.99);
      }
    }
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 660px) { 
    flex-direction: column-reverse;
    div {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 50px;
      h1 {
        font-size: 30px;
      }
    }
    img {
      width: 100%;
      height: 50%;
      object-fit: contain;
    }
  }
  @media (min-width: 660px) and (max-width: 1023px) {
    flex-direction: column-reverse;
    div {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 50px;
      h1 {
        font-size: 50px;
      }
    }
    img {
      width: 100%;
      height: 50%;
      object-fit: contain;
    }
  }
`;
