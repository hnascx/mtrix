import { AppBar, Container, Toolbar } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export function Header() {
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
              Compra de ingressos
            </h1>
          </section>

          <section className="text-primary">
            <ul className="flex flex-row gap-4">
              <li className="text-body-md font-medium hover:opacity-60 transition-opacity duration-200">
                <Link href="/">Eventos</Link>
              </li>
              <li className="text-body-md font-medium hover:opacity-60 transition-opacity duration-200">
                <Link href="/checkout">Checkout</Link>
              </li>
            </ul>
          </section>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
