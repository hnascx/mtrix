import { useCallback, useEffect, useState } from "react"

interface UseInfiniteScrollProps {
  items: any[]
  itemsPerPage?: number
  loadingDelay?: number
}

export function useInfiniteScroll({
  items,
  itemsPerPage = 6,
  loadingDelay = 1000,
}: UseInfiniteScrollProps) {
  const [displayedItems, setDisplayedItems] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadMoreItems = useCallback(async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, loadingDelay))

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const newItems = items.slice(startIndex, endIndex)

    setDisplayedItems((prev) => [...prev, ...newItems])
    setCurrentPage((prev) => prev + 1)
    setHasMore(endIndex < items.length)
    setIsLoading(false)
  }, [items, currentPage, itemsPerPage, isLoading, hasMore, loadingDelay])

  useEffect(() => {
    const initialItems = items.slice(0, itemsPerPage)
    setDisplayedItems(initialItems)
    setCurrentPage(2)
    setHasMore(items.length > itemsPerPage)
  }, [items, itemsPerPage])

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      loadMoreItems()
    }
  }, [loadMoreItems])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return {
    displayedItems,
    isLoading,
    hasMore,
    loadMoreItems,
  }
}
