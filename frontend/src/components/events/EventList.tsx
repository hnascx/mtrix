"use client"

import { Event } from "@/types/event"
import { EventCard } from "./EventCard"

interface EventListProps {
  events: Event[]
}

export function EventList({ events }: EventListProps) {
  const uniqueEvents = events.filter(
    (event, index, self) => index === self.findIndex((e) => e.id === event.id)
  )

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {uniqueEvents.map((event) => (
        <div key={event.id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  )
}
