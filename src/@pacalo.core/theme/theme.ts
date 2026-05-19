import { createTheme } from '@mui/material/styles'
import { componentThemes } from '.'

export const scardColors = {
  scarddark: {
    50: '#e4e7ec',
    100: '#bbc3d0',
    200: '#8e9bb0',
    300: '#627491',
    400: '#3f567b',
    500: '#173672',
    600: '#132f64',
    700: '#102653',
    800: '#0c1d42',
    900: '#08142f',
  },
  scardAccent: {
    50: '#f9f7ed',
    100: '#f1ecd6',
    200: '#e5dbb0',
    300: '#d5c688',
    400: '#c0ad69',
    500: '#a69259', // Base color
    600: '#8c7a4a',
    700: '#715f3b',
    800: '#59492e',
    900: '#443923',
    950: '#2a2315',
  },
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: scardColors.scarddark[500],
      light: scardColors.scarddark[300],
      dark: scardColors.scarddark[700],
    },
    secondary: {
      main: scardColors.scardAccent[600],
      light: scardColors.scardAccent[400],
      dark: scardColors.scardAccent[800],
    },
  },
  typography: {
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
})

const theme = createTheme(baseTheme, {
  components: componentThemes(baseTheme),
})

export default theme
