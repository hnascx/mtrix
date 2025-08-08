"use client"

import { CartSummary } from "@/components/checkout/CartSummary"
import { CheckoutForm } from "@/components/checkout/CheckoutForm"
import { useCart } from "@/contexts/CartContext"
import { usePurchase } from "@/contexts/PurchaseContext"
import { Button, Container, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutPage() {
  const { getTotalItems, items, clearCart } = useCart()
  const { setPurchaseData } = usePurchase()
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: "",
    cpf: "",
    email: "",
    phone: "",
    cep: "",
    address: "",
    city: "",
    state: "",
    paymentMethod: "",
  })

  if (getTotalItems() === 0) {
    return (
      <Container className="flex flex-col min-h-screen justify-center items-center py-20">
        <Typography variant="h4" className="text-center mb-4">
          O seu carrinho está vazio :(
        </Typography>
        <Typography variant="body1" className="text-center mb-8">
          Adicione alguns ingressos para continuar.
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/")}
          className="mx-auto bg-secondary shadow-none hover:bg-secondary/80 hover:shadow-none"
        >
          Ver Eventos
        </Button>
      </Container>
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Salva os dados da compra no contexto
    setPurchaseData({
      customerName: formData.fullName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      paymentMethod: formData.paymentMethod,
      items: items,
    })

    clearCart()
    router.push("/confirmation")
  }

  return (
    <Container className="flex flex-col min-h-screen py-20">
      <form onSubmit={handleSubmit} className="pt-10">
        <div className="grid grid-cols-[60%_1fr] gap-8">
          <div>
            <CheckoutForm
              formData={formData}
              onInputChange={handleInputChange}
            />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </form>
    </Container>
  )
}
