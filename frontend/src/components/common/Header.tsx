"use client"

import { useCart } from "@/contexts/CartContext"
import { AppBar, Badge, Container, Toolbar } from "@mui/material"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const { getTotalItems } = useCart()
  const pathname = usePathname()

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "Compra de ingressos"
      case "/checkout":
        return "Finalize sua compra"
      default:
        return "Compra de ingressos"
    }
  }

  return (
    <AppBar
      position="fixed"
      className="bg-background shadow-none border-b border-primary border-opacity-10"
    >
      <Container className="my-3 px-0 max-w-screen-1xl">
        <Toolbar className="flex justify-between">
          <section className="flex flex-row justify-between items-center gap-4">
            <Link href="/">
              <Image
                src="/mtrix-logo.svg"
                alt="MTrix"
                width={151}
                height={41}
              />
            </Link>
            <div className="h-8 w-px bg-primary" />
            <h1 className="text-heading-md font-bold text-primary">
              {getPageTitle()}
            </h1>
          </section>

          <section className="text-primary">
            <ul className="flex flex-row gap-4 items-center">
              <li className="text-body-md font-medium hover:opacity-60 transition-opacity duration-200">
                <Link href="/">Eventos</Link>
              </li>
              <li>
                <Link href="/checkout" className="flex items-center">
                  <div className="p-3 bg-secondary text-white rounded hover:bg-secondary/80 transition-all duration-200">
                    <ShoppingBag size={20} />
                  </div>
                  {getTotalItems() > 0 && (
                    <Badge
                      badgeContent={getTotalItems()}
                      className="mb-10 [&_.MuiBadge-badge]:bg-primary [&_.MuiBadge-badge]:text-white [&_.MuiBadge-badge]:font-bold"
                    />
                  )}
                </Link>
              </li>
            </ul>
          </section>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
