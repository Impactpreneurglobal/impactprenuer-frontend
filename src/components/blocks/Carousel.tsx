"use client"

import * as React from "react"
import { Button } from "@/src/components/ui/button"
import Image from "next/image"
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react"

export function CarouselCard() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

const slides = [
  {
    src: "/images/slide1.png",
    title: "Empowering Change Through Purpose, Innovation & Education",
    description: "At Impactprenuer Global, we bring together aspiring social entrepreneurs, nonprofits, and changemakers—and provide them with the leadership training, digital tools, and community support needed to drive sustainable progress across Africa.",
  },
  {
    src: "/images/slide1.png",
    title: "Learn & Grow Through Practical Knowledge",
    description: "We provide interactive programs and curated resources to help social innovators enhance their skills, expand their knowledge, and achieve real-world impact.",
  },
  {
    src: "/images/slide1.png",
    title: "Collaborate & Build Meaningful Connections",
    description: "Connect with like-minded changemakers, mentors, and organizations to share ideas, projects, and strategies that drive sustainable social change.",
  },
  {
    src: "/images/slide1.png",
    title: "Innovate & Transform Communities",
    description: "Encouraging creativity and experimentation, we empower you to design innovative solutions that address pressing social challenges across Africa.",
  },
  {
    src: "/images/slide1.png",
    title: "Get Started & Make an Impact",
    description: "Join our vibrant community today and gain access to the tools, guidance, and network needed to turn your ideas into tangible social impact.",
  },
]


  const total = slides.length

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total)
  const goToSlide = (index: number) => setCurrentIndex(index)

  // Auto-slide
  React.useEffect(() => {
    const interval = setInterval(() => handleNext(), 10000)
    return () => clearInterval(interval)
  }, [])

  return (
   <div className="relative w-full h-[70vh] md:h-[400px] overflow-hidden shadow-lg">
  {/* Carousel Slides */}
  <div className="w-full h-full relative">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <Image src={slide.src} alt={slide.title} fill className="object-cover" />

        {/* Overlay for text only */}
        <div className="absolute inset-0 bg-black/80 flex items-center justify-start p-4 md:p-20">
          <div className="text-left w-full md:w-3/4">
            <h1 className="text-[22px] md:text-5xl font-dm-sans text-white mb-2">
              {slide.title}
            </h1>
            <p className="text-sm md:text-xl text-white mb-4">{slide.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Join Button (above overlay) */}
  <div className="absolute bottom-20 md:bottom-10 left-1/2 md:left-20 transform -translate-x-1/2 md:translate-x-0 z-20 flex flex-row gap-1 md:gap-4 items-center">
  <Button className="flex items-center justify-center">
    Join Our Community <ArrowRight className="ms-1" />
  </Button>
  <Button variant="secondary" className="flex items-center justify-center">
    Explore resources <ArrowRight className="ms-1" />
  </Button>
</div>


  {/* Navigation buttons */}
  <button
    onClick={handlePrev}
    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white rounded-full p-2 md:p-3 shadow hover:text-black hover:bg-gray-200 transition z-20"
  >
    <ChevronLeft />
  </button>
  <button
    onClick={handleNext}
    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white rounded-full p-2 md:p-3 shadow hover:text-black hover:bg-gray-200 transition z-20"
  >
    <ChevronRight />
  </button>

  {/* Indicators */}
  <div className="absolute bottom-2 md:bottom-4 w-full flex justify-center gap-2 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`w-4 h-2 rounded-full transition-all ${
          currentIndex === index ? "bg-white scale-110" : "bg-gray-400"
        }`}
        onClick={() => goToSlide(index)}
      />
    ))}
  </div>
</div>

  )
}
