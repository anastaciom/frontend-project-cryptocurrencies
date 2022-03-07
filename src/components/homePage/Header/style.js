import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px ${(props) => props.theme.colors.borderHeader} solid;
  position: fixed;
  z-index: 1000;
  user-select: none;

  @media (max-width: 480px) {
    justify-content: center;
    img {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
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
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
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
    border: 2px solid ${(props) => props.theme.colors.btnHeaderBorder};
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.btnHeaderSignIn};
    color: #fff;

    &:hover {
      transition: all ease-in 0.2s;
      transform: scale(1.1);
      color: #fff;
      box-shadow: -1px -1px 18px 1px ${(props) => props.theme.colors.btnHeaderSignInHover};
    }
    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.99);
      box-shadow: -1px -1px 18px 1px ${(props) => props.theme.colors.btnHeaderSignInHover};
    }
  }
  .active {
    display: none;
  }

  @media (max-width: 480px) {
    ul {
      display: none;
    }
    .active {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 85vh;
      border-radius: 0px 0px 20px 20px;
      background-color: rgba(0, 0, 0, 0.93);
      animation: showMenuMobile 0.5s;
      li {
        font-size: 22px;
      }
      .btnSignIn {
        margin-left: 0px;
        border-radius: 20px;
        width: 50%;
        text-align: center;
      }
    }
  }

  @keyframes showMenuMobile {
    from {
      height: 0vh;
    }
    to {
      height: 85vh;
    }
  }
`;

export const BtnMenuMobileStyle = styled.div`
  display: none;
  @media (max-width: 480px) {
    width: 40px;
    background-color: transparent;
    border-radius: 50px;
    padding: 20px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 900;
    color: #b2b2b2;

    &:hover {
      background-color: rgba(192, 192, 192, 0.3);
      transition: all ease-in-out 0.2s;
    }
  }
`;
