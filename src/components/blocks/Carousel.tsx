// "use client"

// import * as React from "react"
// import { Button } from "@/src/components/ui/button"
// import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export function CarouselCard() {
//   const [currentIndex, setCurrentIndex] = React.useState(0)

// const slides = [
//   {
//     src: "/images/hero.png",
//     title: "Empowering Impact - Driven EnterPreneurs Worldwide",
//     description: "Your idea deserves more than inspiration. Build it with expert-led learning, world-class services, a high-trust community, and the tech infrastructure to launch, grow, and scale your venture globally.",
//   },
//   // {
//   //   src: "/images/carousel2.jpg",
//   //   title: "Learn & Grow Through Practical Knowledge",
//   //   description: "We provide interactive programs and curated resources to help social innovators enhance their skills, expand their knowledge, and achieve real-world impact.",
//   // },
//   // {
//   //   src: "/images/slide1.jpg",
//   //   title: "Collaborate & Build Meaningful Connections",
//   //   description: "Connect with like-minded changemakers, mentors, and organizations to share ideas, projects, and strategies that drive sustainable social change.",
//   // },
//   // {
//   //   src: "/images/slide1.jpg",
//   //   title: "Innovate & Transform Communities",
//   //   description: "Encouraging creativity and experimentation, we empower you to design innovative solutions that address pressing social challenges across Africa.",
//   // },
//   // {
//   //   src: "/images/slide1.jpg",
//   //   title: "Get Started & Make an Impact",
//   //   description: "Join our vibrant community today and gain access to the tools, guidance, and network needed to turn your ideas into tangible social impact.",
//   // },
// ]


//   // const total = slides.length

//   // const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total)
//   // const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total)
//   // const goToSlide = (index: number) => setCurrentIndex(index)

//   // Auto-slide
//   // React.useEffect(() => {
//   //   const interval = setInterval(() => handleNext(), 10000)
//   //   return () => clearInterval(interval)
//   // }, [])

//   return (
//    <div className="relative w-full h-[70vh] md:h-[520px] overflow-hidden shadow-lg">
//   {/* Carousel Slides */}
//   <div className="w-full h-full relative">
//     {slides.map((slide, index) => (
//       <div
//         key={index}
//         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//           index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//         }`}
//       >
//         <Image src={slide.src} alt={slide.title} fill className="object-cover" />

//         {/* Overlay for text only */}
//         <div className="absolute inset-0 bg-[#0000FFA6] flex items-center justify-start p-4 md:p-20">
//           <div className="text-left w-full md:w-3/4">
//             <h1 className="text-[22px] md:text-5xl font-dm-sans text-white mb-2">
//               {slide.title}
//             </h1>
//             {/* <p>{slide.title2}</p> */}
//             <p className="text-sm md:text-xl text-white mb-4">{slide.description}</p>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Join Button (above overlay) */}
//   <div className="absolute bottom-20 md:bottom-10 left-1/2 md:left-20 transform -translate-x-1/2 md:translate-x-0 z-20 flex flex-row gap-1 md:gap-4 items-center">
//   {/* <Link href="#">
//   <Button className="flex items-center justify-center">
//     Get Started <ArrowRight className="ms-1" />
//   </Button>
//   </Link> */}
//    <Link href="/resources/blogs">
//   <Button variant="secondary" className="flex items-center justify-center">
//     Get Started <ArrowRight className="ms-1" />
//   </Button>
//   </Link>
// </div>


//   {/* Navigation buttons */}
//   {/* <button
//     onClick={handlePrev}
//     className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white rounded-full p-2 md:p-3 shadow hover:text-black hover:bg-gray-200 transition z-20"
//   >
//     <ChevronLeft />
//   </button>
//   <button
//     onClick={handleNext}
//     className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white rounded-full p-2 md:p-3 shadow hover:text-black hover:bg-gray-200 transition z-20"
//   >
//     <ChevronRight />
//   </button> */}

//   {/* Indicators */}
//   {/* <div className="absolute bottom-2 md:bottom-4 w-full flex justify-center gap-2 z-20">
//     {slides.map((_, index) => (
//       <button
//         key={index}
//         className={`w-4 h-2 rounded-full transition-all ${
//           currentIndex === index ? "bg-white scale-110" : "bg-gray-400"
//         }`}
//         onClick={() => goToSlide(index)}
//       />
//     ))}
//   </div> */}
// </div>

//   )
// }



"use client"

import * as React from "react"
import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CarouselCard() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const slides = [
    {
      src: "/images/hero.png",
      badge: "• Join 10,000+ Impact Entrepreneur",
      title: "Empowering Impact-Driven Entrepreneurs Worldwide",
      description: "Your idea deserves more than inspiration. Build it with expert-led learning, world-class services, a high-trust community, and the tech infrastructure to launch, grow, and scale your venture globally.",
    }
  ]

  return (
    // Height explicitly set to 622px matching your Figma layout dimensions exactly
    <div className="relative w-full h-[622px] overflow-hidden bg-black">
      {/* Carousel Wrapper */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Base Underlay Image */}
            <Image 
              src={slide.src} 
              alt={slide.title} 
              fill 
              className="object-cover object-center mix-blend-normal"
              priority
            />

            {/* Figma Gradient Overlay (Rectangle 1 Layout):
              Matches your properties panel: Linear Gradient from Pure Black (#000000) 
              to Blue (#0000FF at 65% opacity). 
            */}
            <div className="absolute inset-0 bg-gradient-to-l  from-black/80 via-[#0000FF]/35 to-[#0000FF]/65 z-20 mix-blend-multiply" />

            {/* Foreground Content Panel */}
            <div className="absolute inset-0 max-w-7xl mx-auto flex items-center justify-start px-6 md:px-20 z-30">
              <div className="w-full b md:w-3/4 flex flex-col items-start text-left">
                
                {/* Pill Badge */}
                {slide.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-[#4ade80] border border-white/20 mb-6">
                    {slide.badge}
                  </div>
                )}

                {/* Main Heading — styled to match the split color format */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-dm-sans text-white tracking-tight leading-[1.15] mb-4 max-w-3xl">
                  Empowering Impact-<br />Driven <br />
                  <span className="text-[#4ade80]">Entrepreneurs Worldwide</span>
                </h1>

                {/* Subtext description */}
                <p className="text-sm md:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                  {slide.description}
                </p>

                {/* Action CTA Button */}
                <Link href="/resources/blogs" passHref>
                  <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-6 py-5 rounded-full flex items-center gap-2 transition-all shadow-lg">
                    Get Started 
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

              </div>
              <div className="w-full absolute bottom-24 border-t border-white/30"/>
            {/* Bottom Counter Metrics (10K+, 20+, 20+) from Figma Design */}
            <div className="absolute w-[90%] bottom-6 flex justify-between items-center text-white font-bold ">
              <div>
                <p className="text-xl font-bold font-dm-sans">10K+</p>
                <p className="text-xs text-white/60">Members</p>
              </div>
              <div>
                <p className="text-xl font-bold font-dm-sans">20+</p>
                <p className="text-xs text-white/60">Events</p>
              </div>
              <div>
                <p className="text-xl font-bold font-dm-sans">20+</p>
                <p className="text-xs text-white/60">Countries</p>
              </div>
            </div>
            </div>

                bottom-6 md:left-20 md:right-20 z-30  md:justify-start md:gap-24  pt-4 text-white
          </div>
        ))}
      </div>
    </div>
  )
}