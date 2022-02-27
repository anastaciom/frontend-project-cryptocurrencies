import React from "react";
import { ThemeSwitchStyle } from "./style";
import { DarkMode, LightMode } from "@mui/icons-material/";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../redux/actions/theme.actions";

export default function SwitchTheme() {
  const dispatch = useDispatch();
  const actualTheme = useSelector((state) => state.theme.theme);

  return (
    <ThemeSwitchStyle
      onClick={() =>
        actualTheme === "light"
          ? dispatch(theme("dark"))
          : dispatch(theme("light"))
      }
    >
      {actualTheme === "light" ? (
        <DarkMode style={{ color: "#432a78" }} />
      ) : actualTheme === "dark" ? (
        <LightMode style={{ color: "yellow" }} />
      ) : (
        ""
      )}
    </ThemeSwitchStyle>
  );
}
