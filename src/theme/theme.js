import { createGlobalStyle } from "styled-components";

const themeColors = {
  light: {
    body: "#D4F1F4",
    text: "#05445E",
    transparent: "rgba(0,0,0,0.5)",
    // colors -------
    primary: "#05445E",
    secondary: "#189AB4",
    tertiary: "#75E6DA",
  },
  dark: {
    body: "#05445E",
    text: "#D4F1F4",
    transparent: "rgba(0,0,0,0.5)",
    // colors -------
    primary: "#D4F1F4",
    secondary: "#75E6DA",
    tertiary: "#189AB4",
    danger: "#D01110",
  },
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
  }
`;

export const lightTheme = {
  ...themeColors.light,
};

export const darkTheme = {
  ...themeColors.dark,
};
