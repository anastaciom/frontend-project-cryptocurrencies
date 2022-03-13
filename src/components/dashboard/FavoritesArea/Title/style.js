import styled from "styled-components";

export const TitleStyle = styled.section`
  width: 100%;
  height: 30%;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 100px;
  font-weight: 500;
  user-select: none;
  color: ${(props) => props.theme.dashboard.colors.InfoUserText};

  @media screen and (max-width: 660px) {
  font-size: 40px;
  height: 20%;
  padding:20px;
  }
  @media (min-width: 660px) and (max-width: 1023px) {
    font-size: 50px;
    padding:50px;
    align-items:flex-start  ;
  justify-content: flex-start;
  height: 20%;
  }
`;
