import { theme } from "@chakra-ui/core"

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      primary: `#EF476F`,
      secondary: `#1B9AAA`,
      alternative: `#FFC43D`,
      disabled: `#E0E0E0`,
      borders: `#DDDDDD`,
      light: `#FFFFFF`,
      dark: `#4F4F4F`,
      black: `#2F2F2F`,
    },
  },
  font: {
    body: 16,
    title: {
      family: `Montserrat`,
      weight: 700,
    },
    primary: {
      family: `Lato`,
      weight: 400,
    },
    secondary: {
      family: `Open Sans`,
      weight: 300,
    },
  },
}
