"use client"

import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#08181A",
              borderWidth: 1.5,
            },
          },
        },
      },
    },
  },
})
