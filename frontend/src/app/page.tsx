"use client"

import { Search } from "@/components/common/Search"
import { EventList } from "@/components/events/EventList"
import { useEventFilters } from "@/hooks/useEventFilters"
import { mockEvents } from "@/lib/mock-data"
import { Container } from "@mui/material"

export default function Home() {
  const {
    searchText,
    setSearchText,
    tagFilter,
    setTagFilter,
    availableTags,
    filteredEvents,
  } = useEventFilters(mockEvents)

  return (
    <Container className="flex flex-col min-h-screen py-20">
      <Search
        searchText={searchText}
        onSearchChange={setSearchText}
        tagFilter={tagFilter}
        onTagFilterChange={setTagFilter}
        availableTags={availableTags}
      />
      <EventList events={filteredEvents} />
    </Container>
  )
}
