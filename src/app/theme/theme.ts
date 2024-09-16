import { DefaultTheme } from "styled-components";

export const themeColor = {
  black: {
    100: "#7A7E83",
    200: "#343A40",
    300: "#23272B",
    400: "#212529",
    500: "#0B0B0B",
    600: "#111111",
    700: "#1D1D1D",
    900: "#000000",
    1000: "#121212",
  },
  white: {
    100: "#FAFCFC",
    200: "#DAE0E4",
    400: "#DAE0E4",
    300: "#E2E6EA",
    500: "#E0E0E0",
    600: "#F5F5F5",
    700: "#EBEBEB",
    800: "#E8E8E8",
    900: "#FFFFFF",
    1000: "#F7F7F7",
    1100: "#F8F8F8",
  },
};

export type ThemeColor = { themeColor: typeof themeColor };

export const transitions = {
  transition: "0.5s",
  transition_1: "0.3s",
};

export type Transition = { transitions: typeof transitions };

export const defaultColors = {
  primary: {},

  secondary: {},

  success: {},

  danger: {},
};

export const lightTheme: Omit<DefaultTheme, "toggle"> = {
  theme: "light",
  logo: "",
  smallLogo: "",

  color: {
    ...defaultColors,
    black900: themeColor.white["900"],
  },
};

export const darkTheme: Omit<DefaultTheme, "toggle"> = {
  theme: "dark",
  logo: "",
  smallLogo: "",

  color: {
    ...defaultColors,
    black900: themeColor.black["900"],
  },
};
