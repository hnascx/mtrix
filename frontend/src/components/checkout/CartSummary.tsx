"use client"

import { QuantitySelector } from "@/components/common/QuantitySelector"
import { useCart } from "@/contexts/CartContext"
import { formatCurrency } from "@/lib/format-currency"
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material"
import { Trash2 } from "lucide-react"

export function CartSummary() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart()

  return (
    <Card className="h-fit border border-primary rounded-lg shadow-none border-opacity-20">
      <CardContent className="p-6">
        <Typography className="text-heading-md font-bold mb-3">
          Resumo do Pedido
        </Typography>

        <Stack className="mb-6 gap-6">
          {items.map((item) => (
            <div key={item.event.id} className="flex gap-3">
              <img
                src={item.event.imageUrl}
                alt={item.event.title}
                className="w-16 h-16 object-cover rounded-sm"
              />

              <div className="flex-1">
                <Typography className="text-body-md font-medium">
                  {item.event.title}
                </Typography>
                <Typography className="text-body-sm">
                  {item.event.date} às {item.event.time}
                </Typography>
                <Typography className="text-body-sm">
                  {item.event.location}
                </Typography>

                <div className="flex items-center mt-3 gap-2">
                  <QuantitySelector
                    initialQuantity={item.quantity}
                    onQuantityChange={(quantity) =>
                      updateQuantity(item.event.id, quantity)
                    }
                  />
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => removeFromCart(item.event.id)}
                    className="gap-1 min-w-8 text-body-sm h-8 text-primary bg-transparent shadow-none hover:shadow-none hover:bg-gray-100"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </Button>
                </div>
              </div>

              <div className="text-right">
                <Typography variant="subtitle2" className="font-medium">
                  {formatCurrency(item.event.price * item.quantity)}
                </Typography>
              </div>
            </div>
          ))}
        </Stack>

        <Box className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="font-semibold">
              Total ({getTotalItems()} itens)
            </Typography>
            <Typography variant="h6" className="font-semibold text-primary">
              {formatCurrency(getTotalPrice())}
            </Typography>
          </div>

          <Stack className="gap-2">
            <Button
              variant="contained"
              type="submit"
              size="small"
              className="w-full h-10 bg-primary text-white shadow-none hover:bg-primary/90 hover:shadow-none"
            >
              Finalizar Compra
            </Button>

            <Button
              variant="text"
              onClick={clearCart}
              size="small"
              className="w-full h-10 text-primary hover:bg-gray-100 transition-colors duration-200"
            >
              Limpar Carrinho
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}
