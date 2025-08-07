import { Header } from "@/components/common/Header"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { MUIProvider } from "./providers"
import { CartProvider } from "../contexts/CartContext"

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
            <Header />
            <main>{children}</main>
          </CartProvider>
        </MUIProvider>
      </body>
    </html>
  )
}
