"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface CheckoutFormData {
  fullName: string
  cpf: string
  email: string
  phone: string
  cep: string
  address: string
  city: string
  state: string
  paymentMethod: string
}

interface CheckoutFormContextType {
  formData: CheckoutFormData
  updateFormData: (field: string, value: string) => void
  clearFormData: () => void
}

const initialFormData: CheckoutFormData = {
  fullName: "",
  cpf: "",
  email: "",
  phone: "",
  cep: "",
  address: "",
  city: "",
  state: "",
  paymentMethod: ""
}

const CheckoutFormContext = createContext<CheckoutFormContextType | undefined>(undefined)

export function CheckoutFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData)

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const clearFormData = () => {
    setFormData(initialFormData)
  }

  return (
    <CheckoutFormContext.Provider value={{
      formData,
      updateFormData,
      clearFormData
    }}>
      {children}
    </CheckoutFormContext.Provider>
  )
}

export function useCheckoutForm() {
  const context = useContext(CheckoutFormContext)
  if (context === undefined) {
    throw new Error("useCheckoutForm deve ser usado dentro de um CheckoutFormProvider")
  }
  return context
}