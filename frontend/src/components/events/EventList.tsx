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
    <div className="grid grid-cols-12 gap-3">
      {uniqueEvents.map((event) => (
        <div key={event.id} className="col-span-12 sm:col-span-6 md:col-span-4">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  )
}
