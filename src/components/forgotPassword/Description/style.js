import styled from "styled-components";

export const DescriptionStyle = styled.div`
  width: 50%;
  font-weight: 500;
  h1 {
    font-size: 30px;
    letter-spacing: 1px;
  }
  h2 {
    font-size: 25px;
    letter-spacing: 1px;
    font-weight: 500;
    padding: 10px;
    text-transform: capitalize;
  }

  li {
    padding: 8px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 18px;
      font-weight: 500;
      padding: 10px;
      text-transform: capitalize;
    }
  }
`;
