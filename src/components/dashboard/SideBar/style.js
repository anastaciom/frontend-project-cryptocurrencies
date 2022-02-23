import styled from "styled-components";

export const SideBarStyle = styled.nav`
  width: 15%;
  background-color: ${(props) =>
    props.theme.dashboard.colors.sideBarbackground};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
`;

export const ImglogoStyle = styled.div`
  padding: 20px 20px 40px;
`;

export const NavItemsStyle = styled.ul`
  list-style: none;
  width: 90%;
  li {
    margin: 10px 10px 20px;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border-radius: 15px;
    cursor: pointer;
    background-color: ${(props) => props.theme.dashboard.colors.navItems};
    color: ${(props) => props.theme.dashboard.colors.textNavItems};
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 1px;
    box-shadow: 1px 2px 2px ${(props) => props.theme.dashboard.colors.boxShadow1}, -1px -1px 15px ${(props) => props.theme.dashboard.colors.boxShadow2};

    &:hover {
      transition: all ease-in 0.2s;
      transform: scale(1.1);
      color: ${(props) => props.theme.dashboard.colors.textNavItems};
      box-shadow: 2px 3px 3px ${(props) => props.theme.dashboard.colors.boxShadow1}, -3px -3px 25px ${(props) => props.theme.dashboard.colors.boxShadow2};;
    }
    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.99);
      color: ${(props) => props.theme.dashboard.colors.textNavItems};
    }
  }
`;

export const ThemeSwitchStyle = styled.div`
  position: absolute;
  bottom: 10px;
  height: 40px;
  background-color: transparent;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;

  &:hover {
    background-color: rgba(192, 192, 192, 0.3);
    transition: all ease-in-out 0.2s;
  }
`;
