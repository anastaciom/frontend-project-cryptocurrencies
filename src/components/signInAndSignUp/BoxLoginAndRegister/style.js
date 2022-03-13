import styled from "styled-components";

export const BoxLoginAndRegisterStyle = styled.div`
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 50px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.BoxLoginAndRegister.bg1},
    ${(props) => props.theme.BoxLoginAndRegister.bg2}
  );
  box-shadow: 1px 1px 10px
      ${(props) => props.theme.BoxLoginAndRegister.boxShadow1},
    -1px -1px 10px ${(props) => props.theme.BoxLoginAndRegister.boxShadow2};
  z-index: 800;

  h1 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: ${(props) => props.theme.BoxLoginAndRegister.text};
  }
  p {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${(props) => props.theme.BoxLoginAndRegister.text};
    a {
      text-decoration: none;
      color: #6a00ff;

      &:hover,
      &:active {
        color: #282828;
        transition: 0.2s all ease-in-out;
      }
    }
  }

  a {
    margin-top: -20px;
    color: ${(props) => props.theme.BoxLoginAndRegister.text};
    font-weight: 500;
    letter-spacing: 1px;
    &:hover,
    &:active {
      color: #6a00ff;
      transition: 0.2s all ease-in-out;
    }
  }

  form {
    width: inherit;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    input {
      background-color: ${(props) => props.theme.BoxLoginAndRegister.inputBG};
    }
    input,
    button {
      width: 80%;
      padding: 15px;
      outline: none;
      border: none;
      border-radius: 10px;
    }
    button {
      cursor: pointer;
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 500;
      color: ${(props) => props.theme.BoxLoginAndRegister.text};
      background-color: ${(props) => props.theme.BoxLoginAndRegister.btnBG};
      &:hover {
        transition: all ease-in 0.2s;
        transform: scale(1.1);
        box-shadow: -1px -1px 18px 1px ${(props) => props.theme.BoxLoginAndRegister.btnBG};
      }
      &:active {
        transition: all ease-in 0.1s;
        transform: scale(0.99);
        background-color: ${(props) => props.theme.BoxLoginAndRegister.text};
        color: ${(props) => props.theme.BoxLoginAndRegister.btnBG};
        box-shadow: -1px -1px 18px 1px ${(props) => props.theme.BoxLoginAndRegister.text};
      }
    }
  }
  @media screen and (max-width: 660px) {
    width: 95%;
    height: 400px;
    border-radius: 30px;
    h1 {
      font-size: 30px;
      letter-spacing: 2px;
    }
    p {
      font-size: 14px;
      a {
        text-decoration: none;
        color: #6a00ff;
      }
    }

    a {
      margin-top: -30px;
    }

    form {
      height: 50%;
      gap: 10px;
      input,
      button {
        width: 90%;
      }
      button {
        font-size: 16px;
      }
    }
  }
`;

export const BtnShowPasswordLoginStyle = styled.span`
  position: absolute;
  right: 60px;
  bottom: 242px;
  cursor: pointer;
  @media screen and (max-width: 660px) { 
    right: 50px;
  bottom: 191px;
  }
`;

export const BtnShowPasswordRegisterStyle = styled.span`
  position: absolute;
  right: 60px;
  bottom: 192px;
  cursor: pointer;

  @media screen and (max-width: 660px) {
    right: 50px;
  bottom: 149px;
  }
`;
