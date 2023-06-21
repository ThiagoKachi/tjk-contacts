import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
      light: "#66bb6a",
      "50": "#e8f5e9",
      "100": "#fff",
    },
    text: {
      primary: "#222222",
      secondary: "#9e9e9e",
    },
  },
  typography: {
    fontFamily: "Sora",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
      light: '#fafafa',
      "50": "#212121",
      "100": "#424242",
    },
    text: {
      primary: '#ffffff',
      secondary: '#fafafa',
    },
  },
  typography: {
    fontFamily: 'Sora',
  },
});
