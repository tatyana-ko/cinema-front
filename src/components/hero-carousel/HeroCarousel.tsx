'use client'

import { useEffect, useState } from "react"
import { HeroSlide } from "./HeroSlide";
import { IMovie } from "@/types/movie.types";

interface Props {
  movies: IMovie[]
}

export function HeroCarousel({ movies }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % movies!.length)
    }, 30000)

    return () => clearInterval(interval)
  }, [movies!.length])


  return (
    <ul className="relative w-full min-h-screen overflow-hidden">
      {movies.map((movie: IMovie, i) => <HeroSlide key={movie.id} movie={movie} isActiveMovie={activeIndex === i} />)}
    </ul>
  )
}
