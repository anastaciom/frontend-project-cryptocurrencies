import styled from "styled-components";

export const BGStyle = styled.img`
  width: 800px;
  height: 880px;
  object-fit: cover;
  float: right;

  @media (max-width: 480px) {
      display: none
  }
`;
