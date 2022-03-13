import styled from "styled-components";

export const InfoCryptoStyle = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const CryptoDataStyle = styled.div`
  height: 100%;
  width: 90%;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.dashboard.colors.TableHeaderBG};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.dashboard.colors.TableText};
    border-radius: 10px;
    border: 1px solid #cacaca;
  }

  table {
    border: 1px solid #b3adad;
    width: 100%;
    height: 100%;
    text-align: center;
    border: none;
    color: ${(props) => props.theme.dashboard.colors.TableText};
  }
  th {
    padding: 18px;
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme.dashboard.colors.TableHeaderBG};
  }
  td {
    font-weight: 500;
    img {
      height: 50px;
      width: 50px;
      padding: 5px;
      float: left;
      margin-left: 30px;
      object-fit: contain;
    }
    h1 {
      padding: 20px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 660px) {
    width: 95%;
    overflow-x: auto;
    th {
      padding: 8px;
      font-size: 12px;
    }
    td {
      font-size: 11px;
      padding: 8px;
      img {
        display: none;
      }
      h1 {
        text-align: center;
        margin-left: 30px;
      }
    }
  }
  @media (min-width: 660px) and (max-width: 1023px) {
    width: 95%;
    overflow-x: auto;
    th {
      padding: 15px;
      font-size: 16px;
    }
    td {
      font-size: 14px;
      img {
        height: 40px;
        width: 40px;
        padding: 5px;
        float: left;
        margin-left: 10px;
        object-fit: contain;
      }
      h1 {
        padding: 15px;
        font-size: 15px;
      }
    }
  }
`;

export const FavoriteBtnStyle = styled.span`
  float: left;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50px;
  padding: 9px;
  &:hover {
    background-color: rgba(192, 192, 192, 0.3);
    transition: all ease-in-out 0.2s;
  }
  @media screen and (max-width: 660px) {
    float: left;
    font-size: 5px;
    padding: 5px;
    margin: 5px;
    text-align: center;
  }
`;
