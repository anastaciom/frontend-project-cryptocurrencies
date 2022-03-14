import styled from "styled-components";

export const BGStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  float: right;

  @media screen and (max-width: 660px) {
      display: none
  }
  @media (min-width: 660px) and (max-width: 1023px) {
    width: 100%;
  height: 100%;
  object-fit: cover;
  float: none;
  display:flex;
  align-items:center;
  justify-content :center
  }
`;
