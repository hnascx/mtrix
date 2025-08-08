"use client"

import { createContext, ReactNode, useContext, useState } from "react"

interface PurchaseData {
  customerName: string
  address: string
  city: string
  state: string
  paymentMethod: string
  items: Array<{
    event: {
      id: string
      title: string
      imageUrl: string
      location: string
      date: string
      time: string
      price: number
    }
    quantity: number
  }>
}

interface PurchaseContextType {
  purchaseData: PurchaseData | null
  setPurchaseData: (data: PurchaseData) => void
  clearPurchaseData: () => void
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(
  undefined
)

export function PurchaseProvider({ children }: { children: ReactNode }) {
  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null)

  const clearPurchaseData = () => {
    setPurchaseData(null)
  }

  return (
    <PurchaseContext.Provider
      value={{
        purchaseData,
        setPurchaseData,
        clearPurchaseData,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}

export function usePurchase() {
  const context = useContext(PurchaseContext)
  if (context === undefined) {
    throw new Error("usePurchase deve ser usado dentro de um PurchaseProvider")
  }
  return context
}
