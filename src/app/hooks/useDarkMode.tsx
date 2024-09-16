import React from "react";

type Mode = "light" | "dark";

export const useDarkMode = (): [Mode, () => void] => {
  const [theme, setTheme] = React.useState<Mode>("dark");
  const setMode = (mode: Mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  const toggleTheme = () => {
    return theme === "dark" ? setMode("light") : setMode("dark");
  };
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    return localTheme ? setTheme(localTheme as Mode) : setMode("light");
  }, []);
  return [theme, toggleTheme];
};
