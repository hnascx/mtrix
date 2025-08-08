"use client"

import { CartSummary } from "@/components/checkout/CartSummary"
import { CheckoutForm } from "@/components/checkout/CheckoutForm"
import { useCart } from "@/contexts/CartContext"
import { useCheckoutForm } from "@/contexts/CheckoutFormContext"
import { usePurchase } from "@/contexts/PurchaseContext"
import { Button, Container, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutPage() {
  const { getTotalItems, items, clearCart } = useCart()
  const { setPurchaseData } = usePurchase()
  const { formData, updateFormData, clearFormData } = useCheckoutForm()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (getTotalItems() === 0 && !isSubmitting) {
    return (
      <Container className="flex flex-col min-h-screen justify-center items-center py-20">
        <Typography className="text-heading-lg font-medium text-center mb-4">
          O seu carrinho está vazio :(
        </Typography>
        <Typography className="text-body-md text-center mb-8">
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const finalData = {
      ...formData,
      timestamp: new Date().toISOString(),
      items: items,
    }

    localStorage.setItem("checkout-form-data", JSON.stringify(finalData))
    console.log("Dados finais salvos no localStorage:", finalData)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setPurchaseData({
      customerName: formData.fullName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      paymentMethod: formData.paymentMethod,
      items: items,
    })

    clearFormData()

    router.push("/confirmation")

    setTimeout(() => {
      clearCart()
    }, 500)
  }

  return (
    <Container className="flex flex-col min-h-screen py-20">
      <form onSubmit={handleSubmit} className="sm:pt-10">
        <div className="grid lg:grid-cols-[60%_1fr] gap-8">
          <div>
            <CheckoutForm formData={formData} onInputChange={updateFormData} />
          </div>
          <div>
            <CartSummary isSubmitting={isSubmitting} />
          </div>
        </div>
      </form>
    </Container>
  )
}
