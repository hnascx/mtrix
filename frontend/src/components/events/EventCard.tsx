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
import { QuantitySelector } from "../common/QuantitySelector"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(event, quantity)
  }

  return (
    <Card className="h-full flex flex-col mb-2 text-primary rounded-lg shadow-none border border-primary border-opacity-20">
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
                  size="small"
                  className="flex items-center gap-1 min-w-0 px-3 h-10 text-body-sm bg-secondary text-white shadow-none hover:bg-secondary/80 hover:shadow-none"
                >
                  <ShoppingCart size={18} className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </Stack>
      </CardContent>
    </Card>
  )
}
