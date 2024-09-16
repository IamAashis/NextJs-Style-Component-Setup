"use client";
import React from "react";
import {
  HiOutlineSun as SunIcon,
  HiOutlineMoon as MoonIcon,
} from "react-icons/hi";
import styled, { css, useTheme } from 'styled-components';

type Props = {};

const ThemeToggle = (props: Props) => {
  const { theme, toggle } = useTheme();

  console.log("this is theme", theme);

  const themeToggle = (currentTheme: string | undefined) => {
    if (currentTheme === "dark") {
      theme == "LightMode";
    } else {
      theme == "Darkmode";
    }
  };
  return (
    <button onClick={() => toggle()}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
