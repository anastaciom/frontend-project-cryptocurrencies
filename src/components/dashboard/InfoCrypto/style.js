import styled from "styled-components";

export const InfoCryptoStyle = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const CryptoDataStyle = styled.div`
  height: 100%;
  width: 70%;
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

export const NewsAreaStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;
  width: 20%;
  padding: 10px;
  border-radius: 20px;
  background: ${(props) => props.theme.dashboard.colors.BoxNewsBG};
  box-shadow: inset -5px 5px 20px ${(props) => props.theme.dashboard.colors.NewsBoxShadow1}, inset 5px -5px 20px ${(props) => props.theme.dashboard.colors.NewsBoxShadow2};

  h1 {
    font-size: 40px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.dashboard.colors.BoxNewsText};
  }
  ul {
    width: 100%;
    height: inherit;
    list-style: none;
    overflow-y: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.dashboard.colors.NewsBG};
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.dashboard.colors.NewsBG};
    }
  }
  li {
    width: 90%;
    padding: 10px;
    margin-top: 20px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.dashboard.colors.NewsBG};
    border-radius: 20px;

    h3 {
      font-weight: 500;
      align-items: justify;
      padding-bottom: 20px;
      color :${(props) => props.theme.dashboard.colors.NewsTitle};
    }
    img {
      width: 80%;
      height: 50%;
      object-fit: cover;
      padding-bottom: 20px;
    }
    p {
      padding-bottom: 20px;
      color :${(props) => props.theme.dashboard.colors.NewsDescription};
    }
    small{
      color :${(props) => props.theme.dashboard.colors.NewsDescription};
    }
  }
`;
