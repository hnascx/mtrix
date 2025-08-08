import { Header } from "@/components/common/Header"
import { PurchaseProvider } from "@/contexts/PurchaseContext"
import { Space_Grotesk } from "next/font/google"
import { Toaster } from "sonner"
import { CartProvider } from "../contexts/CartContext"
import "./globals.css"
import { MUIProvider } from "./providers"
import { CheckoutFormProvider } from "../contexts/CheckoutFormContext"

export const metadata = {
  title: "Mtrix · Sistema de Compra de Ingressos",
  description: "Compre ingressos para os melhores eventos na Mtrix",
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.className} bg-background`}>
        <MUIProvider>
          <CheckoutFormProvider>
            <CartProvider>
              <PurchaseProvider>
                <Header />
                <main className="transition-all duration-200">{children}</main>
              </PurchaseProvider>
            </CartProvider>
          </CheckoutFormProvider>
          <Toaster
            position="bottom-right"
            richColors
            duration={3000}
            toastOptions={{
              style: {
                background: "#244246",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.5rem",
                padding: "1rem",
                fontSize: "0.875rem",
              },
            }}
          />
        </MUIProvider>
      </body>
    </html>
  )
}
