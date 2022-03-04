import styled from "styled-components";

export const SettingsStyle = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px;

  h1 {
    font-size: 60px;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 2px;
    padding-bottom: 30px;
    color: ${(props) => props.theme.SettingsArea.colors.color};
  }

  ul {
    width: 100%;
    height: inherit;
    list-style: none;
    overflow-y: auto;
    padding: 40px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.SettingsArea.colors.overflowYColor1};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.SettingsArea.colors.overflowYColor2};
      border-radius: 10px;
      border: 1px solid #cacaca;
    }
  }

  li {
    width: 100%;
    color: ${(props) => props.theme.SettingsArea.colors.color};
    padding: 40px;
    border-top: 1px solid
      ${(props) => props.theme.SettingsArea.colors.borderColor};
    position: relative;
    font-size: 20px;
    font-weight: 500;
    &:last-child {
      border-bottom: 1px solid
        ${(props) => props.theme.SettingsArea.colors.borderColor};
    }
  }
`;

export const ThemeSwitchStyle = styled.span`
  position: absolute;
  right: 10px;
  bottom: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  background-color: transparent;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
`;
