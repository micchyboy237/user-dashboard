// src/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      primaryDark: string
      background: string
      backgroundSecondary: string
      backgroundLight: string
      border: string
      text: string
      textLight: string
      textLighter: string
      textGray: string
      cardBackground: string
      cardShadow: string
      cardText: string
      sidebarBackground: string
      sidebarShadow: string
      tableRowHighlight: string
      tableRowBorder: string
      tableHeadBackground: string
      formBorder: string
      inputBackground: string
      modalBackground: string
    }
    fonts: {
      main: string
    }
  }
}
