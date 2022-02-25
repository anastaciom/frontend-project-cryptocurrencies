import styled from "styled-components";

export const ErrorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: inherit;
  h1 {
    font-size: 50px;
  }
  img {
    width: 70%;
    object-fit: contain;
    height: 70%;
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
`;
