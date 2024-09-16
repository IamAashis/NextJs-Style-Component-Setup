"use client";

import React from "react";

import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { useDarkMode } from "../hooks/useDarkMode";
import {
  darkTheme,
  lightTheme,
  ThemeColor,
  themeColor,
  Transition,
  transitions,
} from "../theme/theme";

type Props = {
  children: React.ReactNode;
};

const StyleThemeProvider = ({ children }: Props) => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const themes = (): DefaultTheme & ThemeColor & Transition => ({
    ...themeMode,
    toggle: toggleTheme,
    theme,
    themeColor,
    transitions,
  });

  return <StyledThemeProvider theme={themes}>{children}</StyledThemeProvider>;
};

export default StyleThemeProvider;
