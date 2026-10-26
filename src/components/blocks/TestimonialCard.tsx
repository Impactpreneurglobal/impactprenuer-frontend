"use client"

import * as React from "react"
import Image from "@/public/3d_avatar_1.png"
import { Badge } from "@/src/components/ui/badge"

interface TestimonialCardProps {
  rating: number         
  testimonial: string   
  avatarSrc: string      
  author: string        
  location: string      
}

interface TestimonialSectionProps {
  slides: TestimonialCardProps[]
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  testimonial,
  avatarSrc,
  author,
  location,
}) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm min-h-[320px] w-full max-w-sm">
      <div>
        <div className="flex gap-1 mb-4 text-yellow-400">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className="text-xl">★</span>
          ))}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed font-normal">
          {testimonial}
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
        <div className="relative w-10 h-10 overflow-hidden object-cover rounded-full bg-gray-100">
          <img
            src={avatarSrc}
            alt={author}
            
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800">{author}</h4>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialSection({ slides }: TestimonialSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 py-16 bg-background text-center">
      
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full px-4 py-1 border-none font-medium">
        Success Stories
      </Badge>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        What Our Members Say
      </h2>

      <p className="text-gray-500 text-sm sm:text-base max-w-2xl mb-8">
        Real stories from entrepreneurs who are making a difference.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 text-left">
        {slides.map((slide, index) => (
          <TestimonialCard key={index} {...slide} />
        ))}
      </div>
    </section>
  )
}