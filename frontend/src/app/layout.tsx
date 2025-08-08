import { Header } from "@/components/common/Header"
import { Space_Grotesk } from "next/font/google"
import { CartProvider } from "../contexts/CartContext"
import "./globals.css"
import { MUIProvider } from "./providers"
import { PurchaseProvider } from "../contexts/PurchaseContext"

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
          <CartProvider>
            <PurchaseProvider>
              <Header />
              <main>{children}</main>
            </PurchaseProvider>
          </CartProvider>
        </MUIProvider>
      </body>
    </html>
  )
}
