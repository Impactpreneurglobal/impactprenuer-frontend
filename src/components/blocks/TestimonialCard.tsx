"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/src/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialSlide {
  image: string
  testimonial: string
  author: string
}

interface TestimonialCarouselSectionProps {
  slides: TestimonialSlide[]
  autoPlay?: boolean
  interval?: number
}

export function TestimonialCarouselSection({
  slides,
  autoPlay = true,
  interval = 8000,
}: TestimonialCarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const total = slides.length
  const currentSlide = slides[currentIndex]

  const next = () => setCurrentIndex((i) => (i + 1) % total)
  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total)

  React.useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval])

  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 px-4 sm:px-6 lg:pl-20 py-20 bg-background">

      {/* LEFT: TESTIMONIAL TEXT */}
      <div
        key={currentIndex}
        className="flex-1 space-y-6 text-left transition-all duration-700 ease-out"
      >
        <Badge className="w-fit">TESTIMONIALS</Badge>

        <h1 className="text-[24px] sm:text-[32px] lg:text-[36px] font-dm-sans font-bold text-[#004119] leading-tight">
          What people say about us
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl italic">
          “{currentSlide.testimonial}”
        </p>

        <span className="block text-sm font-semibold text-[#004119]">
          ~ {currentSlide.author}
        </span>
      </div>

      {/* RIGHT: IMAGE CAROUSEL */}
      <div className="w-full relative min-h-[300px] sm:min-h-[350px] lg:min-h-[520px] lg:flex-1 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[300px] border-l-[10px] lg:border-l-[15px] border-[#f5f5f5]">

          {/* Slides */}
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.author}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[220px]" />

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition"
          >
            <ChevronRight />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
