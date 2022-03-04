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
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2px;
    color: ${(props) => props.theme.dashboard.colors.InfoUserText};
  }

  ul {
    width: 100%;
    height: inherit;
    list-style: none;
    overflow-y: auto;

    li {
      padding: 30px;
      margin: 20px;
      background-color: orange;
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
      }
      small {
        font-weight: 600;
        font-size: 16px;
        color: ${(props) => props.theme.dashboard.colors.BoxUserText};
      }
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
