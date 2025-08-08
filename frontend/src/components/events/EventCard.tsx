"use client"

import { useCart } from "@/contexts/CartContext"
import { formatCurrency } from "@/lib/format-currency"
import { Event } from "@/types/event"
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material"
import { CalendarDays, MapPin, ShoppingCart, Tag } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { QuantitySelector } from "../common/QuantitySelector"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = async () => {
    setIsAdding(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    addToCart(event, quantity)
    toast.success(`${quantity} ingresso(s) adicionado(s) ao carrinho!`)
    setQuantity(1)
    setIsAdding(false)
  }

  return (
    <Card className="h-full flex flex-col mb-2 text-primary rounded-lg shadow-none border border-primary border-opacity-20 transition-all duration-200 hover:shadow-md hover:border-opacity-40">
      <CardMedia
        component="img"
        image={event.imageUrl}
        alt={event.title}
        className="h-52 object-cover"
      />
      <CardContent className="flex flex-col h-full px-6 py-4">
        <Stack className="gap-2">
          <Typography className="text-heading-md text-center font-bold">
            {event.title}
          </Typography>

          <Typography className="text-body-md text-primary ">
            {event.description}
          </Typography>

          <Stack className="gap-1 mt-2 ">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <Typography className="text-body-sm">
                {event.date} às {event.time}
              </Typography>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <Typography className="text-body-sm">{event.location}</Typography>
            </div>

            <div className="flex items-center gap-2">
              <Tag size={16} />
              <Typography className="text-body-sm">{event.tag}</Typography>
            </div>
          </Stack>

          <div className="flex items-center justify-between gap-2 mt-3">
            <div>
              <Typography className="text-body-md text-primary font-semibold">
                Preço: {formatCurrency(event.price)}
              </Typography>
            </div>

            <div className="flex items-center justify-end gap-4">
              <QuantitySelector
                initialQuantity={quantity}
                onQuantityChange={setQuantity}
              />

              <div>
                <Button
                  variant="contained"
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  size="small"
                  className="flex items-center justify-center min-w-[40px] w-10 h-10 text-body-sm bg-secondary text-white hover:bg-secondary/80 transition-all duration-200"
                >
                  {isAdding ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ShoppingCart size={18} className="text-white" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Stack>
      </CardContent>
    </Card>
  )
}
