import styled from "styled-components";

export const AllUsersDataStyle = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    padding: 30px;
    font-size: 70px;
    font-weight: 500;
    letter-spacing: 2px;
    color: ${(props) => props.theme.dashboard.colors.InfoUserText};
  }

  ul {
    width: 100%;
    height: inherit;
    list-style: none;
    overflow-y: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    li {
      width: 90%;
      height: auto;
      padding: 30px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      border-radius: 8px;
      background: ${(props) => props.theme.dashboard.colors.BoxUserBG};
      box-shadow: inset 5px -5px 10px ${(props) => props.theme.dashboard.colors.BoxUserShadow1},
        inset -5px 5px 10px ${(props) => props.theme.dashboard.colors.BoxUserShadow2};
      p {
        font-weight: bold;
        font-size: 20px;
        color: ${(props) => props.theme.dashboard.colors.BoxUserTextTitle};
        small {
          font-weight: 600;
          font-size: 16px;
          color: ${(props) => props.theme.dashboard.colors.BoxUserText};
        }
      }
    }
  }
  @media screen and (max-width: 660px) {
    height: 85%;
    h1 {
      font-size: 40px;
    }
    ul {
      li {
        padding: 20px;
        p {
          font-weight: bold;
          font-size: 13px;
          color: ${(props) => props.theme.dashboard.colors.BoxUserTextTitle};
          small {
            font-weight: 600;
            font-size: 12px;
            color: ${(props) => props.theme.dashboard.colors.BoxUserText};
          }
        }
      }
    }
  }
  @media (min-width: 660px) and (max-width: 1023px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const AlertUserNotFoundStyle = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  color: ${(props) => props.theme.dashboard.colors.BoxUserText};
`;
