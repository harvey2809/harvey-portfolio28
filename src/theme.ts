import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#000",
          WebkitTextFillColor: "#000",
          caretColor: "#000",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
        notchedOutline: {
          borderColor: "rgba(0,0,0,0.25)",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(0,0,0,0.75)",
        },
      },
    },
  },
});
