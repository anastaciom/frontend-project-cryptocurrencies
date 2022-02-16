import styled from "styled-components";

export const BoxLoginAndRegisterStyle = styled.div`
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 20px;
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
`;
