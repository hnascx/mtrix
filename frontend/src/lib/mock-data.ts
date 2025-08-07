import { Event } from "@/types/event"

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Show do Metallica",
    description: "Metallica retorna ao Brasil com a turnê M72 World Tour, trazendo seus maiores sucessos em uma noite épica de metal.",
    date: "20/09/2025",
    time: "18:00",
    location: "Morumbi",
    price: 750.0,
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop&q=60",
    tag: "Show",
  },
  {
    id: "2",
    title: "Festival Lollapalooza 2024",
    description: "O maior festival de música alternativa do Brasil reúne artistas nacionais e internacionais em três dias de shows.",
    date: "22/10/2025",
    time: "22:00",
    location: "Autódromo de Interlagos",
    price: 1200.0,
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60",
    tag: "Festival",
  },
  {
    id: "3",
    title: "Stand-up Comedy Night",
    description: "Uma noite de comédia com os melhores stand-up comedians do Brasil em apresentações únicas e hilariantes.",
    date: "15/12/2025",
    time: "20:00",
    location: "Teatro Municipal de São Paulo",
    price: 120.0,
    imageUrl: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&auto=format&fit=crop&q=60",
    tag: "Comédia",
  },
]