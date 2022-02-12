import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #ededed;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px #e0e0e0 solid;
  position: fixed;
  z-index: 1000;
`;

export const HeaderItemsStyle = styled.div`
  height: inherit;
  width: auto;
  max-width: 400px;
  user-select: none;
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  li {
    padding: 8px;
    margin-right: 8px;
    margin-left: 8px;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;
    color: #432a78;
    font-weight: 500;

    &:hover {
      color: #6a00ff;
      transition: all ease-in 0.2s;
    }
  }

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;

    &:visited,
    &:link {
      color: inherit;
    }
  }
  .btnSignIn {
    padding: 10px;
    margin-left: 50px;
    border: 2px solid #cacaca;
    border-radius: 20px;
    background-color: #432a78;
    color: #fff;

    &:hover {
      transition: all ease-in 0.2s;
      transform: scale(1.1);
      color: #fff;
      box-shadow: -1px -1px 18px 2px #aaaaaa;
    }
    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.99);
      box-shadow: -1px -1px 18px 1px #aaaaaa;
    }
  }
`;
