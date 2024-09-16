"use client";
import styles from "./page.module.css";
import styled, { css } from "styled-components";
import { themeColor } from "./theme/theme";
import ThemeToggle from "./themeToggle";

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeToggle />
      <Title>This is title</Title>
    </div>
  );
}

const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 1.5em;
    text-align: center;
    color: ${theme.color.black900};
  `}
`;
