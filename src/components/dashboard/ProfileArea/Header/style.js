import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchStyle = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 12px;
    border-radius: 15px;
    outline: none;
    border: none;
    font-weight: 500;
    background-color: ${(props) => props.theme.dashboard.colors.inputSearchBG};
    color: ${(props) => props.theme.dashboard.colors.inputSearchText};
  }

  span {
    position: absolute;
    right: 10px;
    top: 20%;
  }
`;

export const NotificationAreaStyle = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: inherit;

  span {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: ${(props) =>
      props.theme.dashboard.colors.NotificationMenuBG};
    color: ${(props) => props.theme.dashboard.colors.NotificationMenuText};
    cursor: pointer;
    box-shadow: 2px 3px 3px
        ${(props) => props.theme.dashboard.colors.boxShadow1},
      -3px -3px 25px ${(props) => props.theme.dashboard.colors.boxShadow2};

    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.9);
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    cursor: pointer;
    color: ${(props) => props.theme.dashboard.colors.NotificationMenuText};
    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.9);
    }
  }
`;
