import React from "react";
import { ThemeSwitchStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import { theme } from "../../../../redux/actions/theme.actions";

export default function ThemeSwitch() {
  const actualTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <ThemeSwitchStyle>
      <Switch
        onChange={() => actualTheme === "light"
        ? dispatch(theme("dark"))
        : dispatch(theme("light"))}
        checked={actualTheme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={30}
        onColor="#432A78"
        offColor="#553d89"
        offHandleColor="#432A78"
        onHandleColor="#553d89"
      />
    </ThemeSwitchStyle>
  );
}
