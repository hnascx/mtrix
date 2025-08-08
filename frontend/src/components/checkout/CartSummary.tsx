"use client"

import { ConfirmationDialog } from "@/components/common/ConfirmationDialog"
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
import { useState } from "react"
import { toast } from "sonner"

interface CartSummaryProps {
  isSubmitting?: boolean
}

export function CartSummary({ isSubmitting = false }: CartSummaryProps) {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart()
  const [showClearDialog, setShowClearDialog] = useState(false)
  const [removingItem, setRemovingItem] = useState<string | null>(null)

  const handleRemoveItem = async (eventId: string) => {
    setRemovingItem(eventId)

    await new Promise((resolve) => setTimeout(resolve, 300))

    removeFromCart(eventId)
    toast.info("O item selecionado foi removido do carrinho.")
    setRemovingItem(null)
  }

  const handleClearCart = () => {
    setShowClearDialog(true)
  }

  const confirmClearCart = () => {
    clearCart()
    toast.info("O carrinho foi limpo com sucesso.")
    setShowClearDialog(false)
  }

  return (
    <>
      <Card className="h-fit border border-primary rounded-lg shadow-none border-opacity-20">
        <CardContent className="p-6">
          <Typography className="text-heading-md font-bold mb-3">
            Resumo do Pedido
          </Typography>

          <Stack spacing={3} className="mb-6">
            {items.map((item) => (
              <div key={item.event.id} className="flex gap-3">
                <img
                  src={item.event.imageUrl}
                  alt={item.event.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <Typography variant="subtitle2" className="font-medium">
                    {item.event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.event.date} às {item.event.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.event.location}
                  </Typography>

                  <div className="flex items-center gap-2 mt-2">
                    <Typography variant="body2">Qtd:</Typography>
                    <QuantitySelector
                      initialQuantity={item.quantity}
                      onQuantityChange={(quantity) =>
                        updateQuantity(item.event.id, quantity)
                      }
                    />
                    <Button
                      size="small"
                      onClick={() => handleRemoveItem(item.event.id)}
                      disabled={removingItem === item.event.id || isSubmitting}
                      className="gap-1 min-w-8 text-body-sm h-8 text-primary bg-transparent shadow-none hover:shadow-none hover:bg-gray-100"
                    >
                      {removingItem === item.event.id ? (
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin shadow-none hover:shadow-none hover:bg-gray-100" />
                      ) : (
                        <Trash2 size={16} className="text-primary" />
                      )}
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
                size="large"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white hover:bg-secondary/90 transition-all duration-200"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Finalizando a compra...
                  </div>
                ) : (
                  "Finalizar Compra"
                )}
              </Button>

              <Button
                variant="text"
                onClick={handleClearCart}
                size="small"
                disabled={isSubmitting}
                className="w-full h-10 text-primary hover:bg-gray-100 transition-colors duration-200"
              >
                Limpar Carrinho
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>

      <ConfirmationDialog
        open={showClearDialog}
        title="Limpar Carrinho"
        message="Tem certeza que deseja remover todos os itens do carrinho? Esta ação não poderá ser desfeita."
        onConfirm={confirmClearCart}
        onCancel={() => setShowClearDialog(false)}
        confirmText="Confirmar"
        cancelText="Cancelar"
        severity="warning"
      />
    </>
  )
}
