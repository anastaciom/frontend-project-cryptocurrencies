import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 200px;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 10px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.BoxLoginAndRegister.bg1},
    ${(props) => props.theme.BoxLoginAndRegister.bg2}
  );
  box-shadow: 1px 1px 10px
      ${(props) => props.theme.BoxLoginAndRegister.boxShadow1},
    -1px -1px 10px ${(props) => props.theme.BoxLoginAndRegister.boxShadow2};

    input {
      background-color: ${(props) => props.theme.BoxLoginAndRegister.inputBG};
    }
  input,button {
    width: 90%;
    padding:10px;
    outline:none;
    border:none;
    border-radius: 8px;
  
   
  }
  button{
    margin-top: 20px;
      cursor: pointer;
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

  @media (max-width: 480px) {
  width: 80%;
  height: 100px;
  border-radius: 10px;

  input,button {
    width: 80%;
    padding:8px;
  }
  button{
    margin-top: 10px;
  }
  }
`;
