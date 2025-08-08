"use client"

import { usePurchase } from "@/contexts/PurchaseContext"
import { formatCurrency } from "@/lib/format-currency"
import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material"
import { CalendarDays, MapPin, Ticket } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ConfirmationPage() {
  const { purchaseData } = usePurchase()
  const router = useRouter()

  useEffect(() => {
    if (!purchaseData) {
      router.push("/")
    }
  }, [purchaseData, router])

  if (!purchaseData) return null

  const firstName = purchaseData.customerName.split(" ")[0]
  const totalAmount = purchaseData.items.reduce(
    (total, item) => total + item.event.price * item.quantity,
    0
  )

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case "credit":
        return "Cartão de Crédito"
      case "debit":
        return "Cartão de Débito"
      case "pix":
        return "PIX"
      default:
        return method
    }
  }

  return (
    <Container className="flex flex-col min-h-screen py-28">
      <Card className="border border-primary rounded-lg shadow-none border-opacity-20 mt-2">
        <CardContent className="p-6">
          <Typography className="text-heading-md font-bold text-center mb-6">
            Agradecemos pela sua compra, {firstName}!
          </Typography>

          <Stack className="gap-3">
            <div className="flex flex-row bg-transparent border border-primary/20 rounded-sm p-4 gap-2 mb-4">
              <Ticket size={24} className="text-primary" />
              <Typography className="text-body-md text-primary">
                Você receberá o ingresso digital por e-mail em breve. No local
                do evento, basta apresentar o QR Code para entrar.
              </Typography>
            </div>

            <div>
              <Typography className="text-body-lg font-semibold mb-4">
                Ingressos Adquiridos
              </Typography>
              <Stack spacing={3}>
                {purchaseData.items.map((item) => (
                  <Card
                    key={item.event.id}
                    className="border border-primary/20 shadow-none"
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-32 h-32">
                          <Image
                            src={item.event.imageUrl}
                            alt={item.event.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex-1">
                          <Typography className="text-body-lg font-semibold mb-2">
                            {item.event.title}
                          </Typography>

                          <Stack spacing={1} className="mb-3">
                            <div className="flex items-center gap-2">
                              <CalendarDays
                                size={16}
                                className="text-primary/70"
                              />
                              <Typography className="text-body-sm text-primary/70">
                                {item.event.date} às {item.event.time}
                              </Typography>
                            </div>

                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-primary/70" />
                              <Typography className="text-body-sm text-primary/70">
                                {item.event.location}
                              </Typography>
                            </div>
                          </Stack>

                          <div className="flex justify-between items-center">
                            <Typography className="text-body-md">
                              {item.quantity}{" "}
                              {item.quantity === 1 ? "ingresso" : "ingressos"}
                            </Typography>
                            <Typography className="text-body-md font-semibold">
                              {formatCurrency(item.event.price * item.quantity)}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <Typography className="text-body-lg font-semibold">
                  Forma de Pagamento
                </Typography>
                <Typography className="text-heading-md font-semibold">
                  {getPaymentMethodText(purchaseData.paymentMethod)}
                </Typography>
              </div>

              <div className="flex justify-between items-center">
                <Typography className="text-body-lg font-semibold">
                  Valor total
                </Typography>
                <Typography className="text-heading-md font-semibold">
                  {formatCurrency(totalAmount)}
                </Typography>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="contained"
                onClick={() => router.push("/")}
                className="w-fit bg-secondary shadow-none hover:bg-secondary/80 hover:shadow-none"
              >
                Voltar para Eventos
              </Button>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  )
}
