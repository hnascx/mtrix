import { MUIProvider } from "./providers"

export const metadata = {
  title: "Mtrix · Sistema de Compra de Ingressos",
  description: "Compre ingressos para os melhores eventos na Mtrix",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <MUIProvider>{children}</MUIProvider>
      </body>
    </html>
  )
}
