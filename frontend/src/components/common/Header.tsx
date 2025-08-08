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
      case "/confirmation":
        return "Confirmação de compra"
      default:
        return "Compra de ingressos"
    }
  }

  return (
    <AppBar
      position="fixed"
      className="bg-background shadow-none border-b border-primary border-opacity-10"
    >
      <Container className="my-3 px-4 max-w-screen-1xl">
        <Toolbar className="flex justify-between items-center min-h-0">
          <section className="flex flex-row justify-between items-center gap-2 sm:gap-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/mtrix-logo.svg"
                alt="MTrix"
                width={100}
                height={27}
                className="sm:w-[120px] sm:h-[32px] md:w-[151px] md:h-[41px]"
              />
            </Link>
            <div className="hidden md:block h-8 w-px bg-primary" />
            <h1 className="text-sm sm:text-heading-md font-bold text-primary truncate max-w-[150px] sm:max-w-none hidden md:block">
              {getPageTitle()}
            </h1>
          </section>

          <section className="text-primary">
            <ul className="flex flex-row gap-2 sm:gap-4 items-center">
              <li className="text-body-sm sm:text-body-md font-medium hover:opacity-60 transition-opacity duration-200">
                <Link href="/" className="hidden sm:block">
                  Eventos
                </Link>
                <Link href="/" className="sm:hidden">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="flex items-center">
                  <div className="p-2 sm:p-3 bg-secondary text-white rounded hover:bg-secondary/80 transition-all duration-200">
                    <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  {getTotalItems() > 0 && (
                    <Badge
                      badgeContent={getTotalItems()}
                      className="mb-8 sm:mb-10 [&_.MuiBadge-badge]:bg-primary [&_.MuiBadge-badge]:text-white [&_.MuiBadge-badge]:font-bold [&_.MuiBadge-badge]:text-xs sm:[&_.MuiBadge-badge]:text-sm"
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
