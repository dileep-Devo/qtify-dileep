import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    subtitle1: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    button: { textTransform: "none" },
  },
  palette: {
    primary: {
      light: "",
      main: "#34C94B",
      dark: "#121212",
      contrastText: "#ffffff",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { fontFamily: "Poppins, sans-serif" },
      },
    },
  },
});

export default theme;
