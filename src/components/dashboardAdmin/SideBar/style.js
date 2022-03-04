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

export const TitleStyle = styled.div`
  padding: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 40px;
    color: ${(props) => props.theme.dashboard.colors.textNavItems};
  }
`;

export const NavItemsStyle = styled.ul`
  list-style: none;
  width: 90%;
  li {
    margin: 10px 10px 20px;

    border-radius: 15px;
    cursor: pointer;
    background-color: ${(props) => props.theme.dashboard.colors.navItems};
    color: ${(props) => props.theme.dashboard.colors.textNavItems};
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 1px;
    box-shadow: 1px 2px 2px
        ${(props) => props.theme.dashboard.colors.boxShadow1},
      -1px -1px 15px ${(props) => props.theme.dashboard.colors.boxShadow2};
    a {
      color: inherit;
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 18px;
    }
    &:hover {
      transition: all ease-in 0.2s;
      transform: scale(1.1);
      color: ${(props) => props.theme.dashboard.colors.textNavItems};
      box-shadow: 2px 3px 3px
          ${(props) => props.theme.dashboard.colors.boxShadow1},
        -3px -3px 25px ${(props) => props.theme.dashboard.colors.boxShadow2};
    }
    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.99);
      color: ${(props) => props.theme.dashboard.colors.textNavItems};
    }
  }
`;
