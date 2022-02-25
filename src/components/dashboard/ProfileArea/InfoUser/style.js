import styled from "styled-components";

export const InfoUserStyle = styled.section`
  width: 100%;
  height: 30%;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 100px;
  font-weight: 500;
  color: ${(props) => props.theme.dashboard.colors.InfoUserText};
`;
