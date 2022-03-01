import styled from "styled-components";

export const InfoFavoriteCryptoStyle = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const FavoriteCryptoStyle = styled.div`
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
    }
  }
`;

export const FavoriteBtnStyle = styled.span`
  float: left;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  &:hover {
    background-color: rgba(192, 192, 192, 0.3);
    transition: all ease-in-out 0.2s;
  }
`;

export const EmptyFavoritesStyle = styled.span `
font-size: 30px;
text-transform: capitalize;
font-weight: 500;
width: 100%;
height: 100%;
display:flex;
align-items:flex-start;
justify-content:center;
color: ${(props) => props.theme.dashboard.colors.InfoUserText};
`