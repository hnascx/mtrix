"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

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
  paymentMethod: "",
}

const STORAGE_KEY = "checkout-form-data"

const CheckoutFormContext = createContext<CheckoutFormContextType | undefined>(
  undefined
)

export function CheckoutFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY)
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData)
      }
    } catch (error) {
      console.error("Erro ao carregar dados do localStorage:", error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  const updateFormData = (field: string, value: string) => {
    const newFormData = {
      ...formData,
      [field]: value,
    }
    setFormData(newFormData)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFormData))
  }

  const clearFormData = () => {
    setFormData(initialFormData)
  }

  if (!isLoaded) {
    return null
  }

  return (
    <CheckoutFormContext.Provider
      value={{
        formData,
        updateFormData,
        clearFormData,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  )
}

export function useCheckoutForm() {
  const context = useContext(CheckoutFormContext)
  if (context === undefined) {
    throw new Error(
      "useCheckoutForm deve ser usado dentro de um CheckoutFormProvider"
    )
  }
  return context
}
