"use client"

import { Event } from "@/types/event"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

interface CartItem {
  event: Event
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (event: Event, quantity: number) => void
  removeFromCart: (eventId: string) => void
  updateQuantity: (eventId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalTickets: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = "mtrix-cart-data"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY)
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        setItems(parsedCart)
      }
    } catch (error) {
      console.error("Erro ao carregar carrinho do localStorage:", error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      } catch (error) {
        console.error("Erro ao salvar carrinho no localStorage:", error)
      }
    }
  }, [items, isLoaded])

  const addToCart = (event: Event, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.event.id === event.id)

      if (existingItem) {
        const newQuantity = Math.min(existingItem.quantity + quantity, 4)
        return prevItems.map((item) =>
          item.event.id === event.id ? { ...item, quantity: newQuantity } : item
        )
      } else {
        return [...prevItems, { event, quantity: Math.min(quantity, 4) }]
      }
    })
  }

  const removeFromCart = (eventId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.event.id !== eventId)
    )
  }

  const updateQuantity = (eventId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(eventId)
      return
    }

    if (quantity > 4) {
      quantity = 4
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.event.id === eventId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.length
  }

  const getTotalTickets = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.event.price * item.quantity,
      0
    )
  }

  if (!isLoaded) {
    return null
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalTickets,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider")
  }
  return context
}
