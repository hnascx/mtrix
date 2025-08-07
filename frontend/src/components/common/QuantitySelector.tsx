"use client"

import { Button, TextField } from "@mui/material"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

interface QuantitySelectorProps {
  initialQuantity?: number
  minQuantity?: number
  maxQuantity?: number
  onQuantityChange?: (quantity: number) => void
}

export function QuantitySelector({
  initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 4,
  onQuantityChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= minQuantity && newQuantity <= maxQuantity) {
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }
  }

  return (
    <div className="flex items-center border-y border-spacing-0 border-primary rounded-sm">
      <Button
        size="small"
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={quantity <= minQuantity}
        className="min-w-0 p-2 bg-primary text-white rounded-tl-sm rounded-bl-sm rounded-tr-none rounded-br-none hover:bg-primary/80"
      >
        <Minus size={16} />
      </Button>
      <TextField
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value) || minQuantity
          handleQuantityChange(value)
        }}
        inputProps={{
          min: minQuantity,
          max: maxQuantity,
          style: {
            textAlign: "center",
            width: "30px",
            outline: "none",
          },
        }}
        variant="standard"
        size="small"
        className="w-30 [&_.MuiInput-underline:before]:border-none [&_.MuiInput-underline:after]:border-none [&_.MuiInput-underline:hover:not(.Mui-disabled):before]:border-none"
      />
      <Button
        size="small"
        onClick={() => handleQuantityChange(quantity + 1)}
        disabled={quantity >= maxQuantity}
        className="min-w-0 p-2 bg-primary text-white rounded-tr-sm rounded-br-sm rounded-tl-none rounded-bl-none hover:bg-primary/80"
      >
        <Plus size={16} />
      </Button>
    </div>
  )
}
