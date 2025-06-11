'use client'

import { movieService } from "@/services/movies.service"
import { useQuery } from "@tanstack/react-query"
import { HeroCarousel } from "./HeroCarousel"

export function Hero() {
  const { isPending, data } = useQuery({
    queryKey: ['movies'],
    queryFn: () => movieService.getAll()
  })

  if (isPending || !data) {
    return <div>Loading...</div>
  }

  const movies = data.data

  return (
    <section>
      <HeroCarousel movies={movies} />
    </section>
  )
}
