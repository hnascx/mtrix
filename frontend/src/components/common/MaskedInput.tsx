"use client"

import { TextField, TextFieldProps } from "@mui/material"
import { forwardRef } from "react"

interface MaskedInputProps
  extends Omit<TextFieldProps, "onChange" | "onBlur" | "value"> {
  mask: string
  maskChar?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  value: string
}

const applyMask = (
  value: string,
  mask: string,
  maskChar: string = "_"
): string => {
  const digits = value.replace(/\D/g, "")
  let result = ""
  let digitIndex = 0

  for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
    if (mask[i] === "9") {
      result += digits[digitIndex]
      digitIndex++
    } else {
      result += mask[i]
    }
  }

  return result
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, maskChar = "_", onChange, onBlur, value, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/\D/g, "")
      const maskedValue = applyMask(rawValue, mask, maskChar)

      // Create a new event with the masked value
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: maskedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>

      onChange(newEvent)
    }

    return (
      <TextField
        {...props}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        inputRef={ref}
      />
    )
  }
)

MaskedInput.displayName = "MaskedInput"
