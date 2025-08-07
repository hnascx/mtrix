"use client"

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
import { useRouter } from "next/navigation"
import { useState } from "react"
import { QuantitySelector } from "../common/QuantitySelector"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    router.push(`/checkout/${event.id}?quantity=${quantity}`)
  }

  return (
    <Card className="h-full flex flex-col mb-3 text-primary">
      <CardMedia
        component="img"
        image={event.imageUrl}
        alt={event.title}
        className="h-52 object-cover"
      />
      <CardContent className="flex flex-col h-full py-3">
        <Stack className="gap-1">
          <Typography className="text-heading-md text-center">
            {event.title}
          </Typography>

          <Typography className="text-body-md text-primary text-opacity-70">
            {event.description}
          </Typography>

          <Stack className="gap-1 mt-2">
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

          <div className="flex items-center justify-between gap-2 mt-4">
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
                  className="flex items-center gap-1 min-w-0 px-3 h-10 text-body-sm bg-primary text-white hover:bg-primary/80"
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
