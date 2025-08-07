"use client"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: "Space Grotesk, sans-serif",
  },
  components: {
    MuiTextField: {
      defaultProps: {
        required: false,
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#08181A",
            },
            "&.Mui-focused select": {
              borderColor: "#08181A",
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#08181A",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#08181A !important",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#08181A !important",
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#08181A !important",
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#08181A !important",
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Space Grotesk, sans-serif",
        },
        "input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px white inset !important",
          WebkitTextFillColor: "#000000 !important",
          backgroundColor: "white !important",
        },
        "input:-webkit-autofill:hover": {
          WebkitBoxShadow: "0 0 0 1000px white inset !important",
          WebkitTextFillColor: "#000000 !important",
          backgroundColor: "white !important",
        },
        "input:-webkit-autofill:focus": {
          WebkitBoxShadow: "0 0 0 1000px white inset !important",
          WebkitTextFillColor: "#000000 !important",
          backgroundColor: "white !important",
        },
        "input:-webkit-autofill:active": {
          WebkitBoxShadow: "0 0 0 1000px white inset !important",
          WebkitTextFillColor: "#000000 !important",
          backgroundColor: "white !important",
        },
      },
    },
  },
})

export function MUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
