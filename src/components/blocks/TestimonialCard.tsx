// "use client"

// import * as React from "react"
// import Image from "next/image"
// import { Badge } from "@/src/components/ui/badge"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// // interface TestimonialSlide {
// //   image: string
// //   testimonial: string
// //   author: string
// // }

// // interface TestimonialCarouselSectionProps {
// //   slides: TestimonialSlide[]
// //   autoPlay?: boolean
// //   interval?: number
// // }

// interface TestimonialsCard {
//   icon: string,
//   Headtext: string,
//   footerText: string,

// }

// export function TestimonialCarouselSection:React.FC<TestimonialsCard>({
//   // slides,
//   // autoPlay = true,
//   // interval = 8000,
//   HeadText,
//   icon,
//   footertext,}){
//   // const [currentIndex, setCurrentIndex] = React.useState(0)
//   // const total = slides.length
//   // const currentSlide = slides[currentIndex]

//   // const next = () => setCurrentIndex((i) => (i + 1) % total)
//   // const prev = () => setCurrentIndex((i) => (i - 1 + total) % total)

//   // React.useEffect(() => {
//   //   if (!autoPlay) return
//   //   const timer = setInterval(next, interval)
//   //   return () => clearInterval(timer)
//   // }, [autoPlay, interval])

//   return (
//     <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 px-4 sm:px-6 lg:pl-20 py-20 bg-background">

//       {/* LEFT: TESTIMONIAL TEXT */}
//       <div
//         className="flex-1 space-y-6 text-left transition-all duration-700 ease-out"
//       >
//         <Badge className="w-fit">TESTIMONIALS</Badge>

//         <h1 className="text-[24px] sm:text-[32px] lg:text-[36px] font-dm-sans font-bold text-[#004119] leading-tight">
//           What people say about us
//         </h1>

//         <p className="text-muted-foreground text-base sm:text-lg max-w-xl italic">
//           “{testimonial}”
//         </p>

//         <span className="block text-sm font-semibold text-[#004119]">
//           ~ {author}
//         </span>
//       </div>

//       {/* RIGHT: IMAGE CAROUSEL */}
//       {/* <div className="w-full relative min-h-[300px] sm:min-h-[350px] lg:min-h-[520px] lg:flex-1 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[300px] border-l-[10px] lg:border-l-[15px] border-[#f5f5f5]">

//           {/* Slides */}
//           <div className="relative w-full h-full">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]
//                 ${
//                   index === currentIndex
//                     ? "opacity-100 scale-100"
//                     : "opacity-0 scale-105"
//                 }`}
//               >
//                 <Image
//                   src={slide.image}
//                   alt={slide.author}
//                   fill
//                   priority={index === 0}
//                   className="object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[220px]" />

//           {/* Navigation */}
//           <button
//             onClick={prev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition"
//           >
//             <ChevronLeft />
//           </button>

//           <button
//             onClick={next}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition"
//           >
//             <ChevronRight />
//           </button>

//           {/* Indicators */}
//           <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`h-2 rounded-full transition-all ${
//                   i === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div> */}
//     </section>
//   )
// }



// const TestimonialCard:React.FC<> = ({}) => {
//   return (
//     <div>TestimonialCard:React.FC</div>
//   )
// }

// export default TestimonialCard;





"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/src/components/ui/badge"

// 1. Updated Interface for an individual testimonial card based on the screenshot
interface TestimonialCardProps {
  rating: number         // Number of stars (e.g., 5)
  testimonial: string    // The main quote text
  avatarSrc: string      // URL for the profile icon/avatar
  author: string         // Author name (e.g., "Edward Joseph Sullivan")
  location: string       // Author location (e.g., "From Mexico")
}

// 2. Section interface to pass an array of testimonials
interface TestimonialSectionProps {
  slides: TestimonialCardProps[]
}

// Individual Card Component
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
        {/* Star Rating */}
        <div className="flex gap-1 mb-4 text-yellow-400">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className="text-xl">★</span>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 text-sm leading-relaxed font-normal">
          {testimonial}
        </p>
      </div>

      {/* Footer / Author Section */}
      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
        <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gray-100">
          <Image
            src={avatarSrc}
            alt={author}
            fill
            className="object-cover"
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

// Main Section Component
export default function TestimonialSection({ slides }: TestimonialSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 py-16 bg-background text-center">
      
      {/* Top Header Section */}
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full px-4 py-1 border-none font-medium">
        Success Stories
      </Badge>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        What Our Members Say
      </h2>

      <p className="text-gray-500 text-sm sm:text-base max-w-2xl mb-8">
        Real stories from entrepreneurs who are making a difference.
      </p>

      {/* Grid displaying the cards horizontally */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 text-left">
        {slides.map((slide, index) => (
          <TestimonialCard key={index} {...slide} />
        ))}
      </div>
    </section>
  )
}