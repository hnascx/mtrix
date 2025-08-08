"use client"

import { Box, CircularProgress } from "@mui/material"

export function LoadingSpinner() {
  return (
    <Box className="flex justify-center items-center">
      <CircularProgress size={28} className="text-secondary" />
    </Box>
  )
}
