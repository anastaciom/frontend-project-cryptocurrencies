import styled from "styled-components";

export const ContactStyle = styled.section`
  background-color: #644c96;
  width: 100%;
  height: 600px;
  color: #cacaca;
  user-select: none;

  h1 {
    font-size: 50px;
    text-align: center;
    font-weight: 500;
    margin-top: -200px;
    letter-spacing: 3px;
  }

  div {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  a {
    color: #cacaca;
    text-decoration: none;
    &:active,
    &:visited {
      color: inherit;
    }
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
    &:active {
      transform: scale(0.9);
      color: #6a00ff;
    }
  }

  @media (max-width: 480px) {
  width: 100%;
  height: 600px;

  h1 {
    font-size: 30px;
    margin-top: -10px;
    letter-spacing: 2px;
  }

  div {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
  }

  }
`;
