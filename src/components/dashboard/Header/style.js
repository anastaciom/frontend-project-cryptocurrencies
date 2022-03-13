import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  z-index: 999;
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

  @media (max-width: 480px) {
    width: 45%;
    span {
      display: none;
    }
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

  @media (max-width: 480px) {
    width: 50%;
    justify-content: flex-end;
    span {
      margin-right: 8px;
    }
  }
`;

export const BoxLogoutStyle = styled.div`
  width: 200px;
  position: absolute;
  top: 70px;
  height: 60px;
  right: 4%;
  border-radius: 0px 0px 8px 8px;
  background: ${(props) => props.theme.BoxHeader.background};
  box-shadow: 0px 5px 0px ${(props) => props.theme.dashboard.colors.boxShadow1},
    0px -5px 0px ${(props) => props.theme.BoxHeader.background};
  border-left: 3px solid ${(props) => props.theme.dashboard.colors.boxShadow1};
  border-right: 3px solid ${(props) => props.theme.dashboard.colors.boxShadow1};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;

  button {
    padding: 5px;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #f95c5c;

    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.9);
    }
  }

  @media (max-width: 480px) {
    width: 100px;
  height: 60px;
  right: 1%;
  button {
    padding: 4px;
    font-size: 12px;
    letter-spacing: 1px;
  }
  }
`;

export const BoxNotificationsStyle = styled.div`
  width: 250px;
  position: absolute;
  top: 70px;
  height: 300px;
  right: 5%;
  border-radius: 0px 0px 8px 8px;
  background: ${(props) => props.theme.BoxHeader.background};
  box-shadow: 0px 5px 0px ${(props) => props.theme.dashboard.colors.boxShadow1},
    0px -5px 0px ${(props) => props.theme.BoxHeader.background};
  border-left: 3px solid ${(props) => props.theme.dashboard.colors.boxShadow1};
  border-right: 3px solid ${(props) => props.theme.dashboard.colors.boxShadow1};
  z-index: 900;
  color: ${(props) => props.theme.dashboard.colors.NotificationMenuText};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    right: 1%;
  }
`;
