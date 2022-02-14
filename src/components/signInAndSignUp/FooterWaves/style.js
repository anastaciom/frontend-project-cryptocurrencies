import styled from "styled-components";

export const FooterWavesStyle = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  path {
    fill: ${props=>props.theme.colors.footerWavesSignInAndSignUp};
  }
`;
