"use client"

import { LoadingSpinner } from "@/components/common/LoadingSpinner"
import { Search } from "@/components/common/Search"
import { EventList } from "@/components/events/EventList"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"
import { mockEvents } from "@/lib/mock-data"
import { Container } from "@mui/material"
import { useMemo, useState } from "react"

export default function Home() {
  const [searchText, setSearchText] = useState("")
  const [tagFilter, setTagFilter] = useState("")

  const availableTags = useMemo(() => {
    return Array.from(new Set(mockEvents.map((event) => event.tag)))
  }, [])

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      const matchesSearch =
        searchText === "" ||
        event.title.toLowerCase().includes(searchText.toLowerCase()) ||
        event.description.toLowerCase().includes(searchText.toLowerCase())

      const matchesTag =
        tagFilter === "" || event.tag.toLowerCase() === tagFilter.toLowerCase()

      return matchesSearch && matchesTag
    })
  }, [searchText, tagFilter])

  const { displayedItems, isLoading, hasMore } = useInfiniteScroll({
    items: filteredEvents,
    itemsPerPage: 6,
    loadingDelay: 1000,
  })

  return (
    <Container className="flex flex-col min-h-screen pt-20">
      <Search
        searchText={searchText}
        onSearchChange={setSearchText}
        tagFilter={tagFilter}
        onTagFilterChange={setTagFilter}
        availableTags={availableTags}
      />

      <EventList events={displayedItems} />

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <LoadingSpinner />
        </div>
      )}

      {!hasMore && displayedItems.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          Não há mais eventos para carregar.
        </div>
      )}

      {!isLoading && displayedItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Nenhum evento encontrado com os filtros aplicados.
        </div>
      )}
    </Container>
  )
}
