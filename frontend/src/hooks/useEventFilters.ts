import { Event } from "@/types/event"
import { useMemo, useState } from "react"

export function useEventFilters(events: Event[]) {
  const [searchText, setSearchText] = useState("")
  const [tagFilter, setTagFilter] = useState("")

  const availableTags = useMemo(() => {
    return Array.from(new Set(events.map((event) => event.tag)))
  }, [events])

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        searchText === "" ||
        event.title.toLowerCase().includes(searchText.toLowerCase()) ||
        event.description.toLowerCase().includes(searchText.toLowerCase())

      const matchesTag =
        tagFilter === "" || event.tag.toLowerCase() === tagFilter.toLowerCase()

      return matchesSearch && matchesTag
    })
  }, [events, searchText, tagFilter])

  return {
    searchText,
    setSearchText,
    tagFilter,
    setTagFilter,
    availableTags,
    filteredEvents,
  }
}
