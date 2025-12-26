"use client"

import { useState } from "react"
import { HeroSection } from "@/src/components/common/HeroCard"
import { ProgramCard } from "@/src/components/common/ProgramCard"
import { Badge } from "@/src/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { GeneralLayout } from "@/src/components/common/GeneralLayout"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/src/components/ui/pagination"

const programCards = [
  {
    id: 1,
    title: "Young Investors",
    date: "28 October, 2025",
    subtitle:
      "A hands-on program helping young people understand investing, savings, and wealth creation.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/young-investors",
  },
  {
    id: 2,
    title: "Leadership Lab",
    date: "10 November, 2025",
    subtitle:
      "Develop purpose-driven leadership skills through mentorship and real-world projects.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/leadership-lab",
  },
  {
    id: 3,
    title: "Startup Bootcamp",
    date: "5 December, 2025",
    subtitle:
      "Turn ideas into viable businesses with guidance from experienced founders.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/startup-bootcamp",
  },
  {
    id: 4,
    title: "Financial Literacy",
    date: "18 January, 2026",
    subtitle:
      "Learn budgeting, investing, and smart money habits for long-term success.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/financial-literacy",
  },
  {
    id: 5,
    title: "Digital Skills Academy",
    date: "25 February, 2026",
    subtitle:
      "Master essential digital skills like coding, design, and online marketing.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/digital-skills-academy",
  },
  {
    id: 6,
    title: "Entrepreneurship Essentials",
    date: "10 March, 2026",
    subtitle:
      "Learn how to start, run, and scale a small business successfully.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/entrepreneurship-essentials",
  },
  {
    id: 7,
    title: "Community Impact Project",
    date: "22 March, 2026",
    subtitle:
      "Create meaningful change by designing and implementing social impact projects.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/community-impact-project",
  },
  {
    id: 8,
    title: "Innovation Lab",
    date: "5 April, 2026",
    subtitle:
      "Experiment with creative problem-solving and bring innovative ideas to life.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/innovation-lab",
  },
  {
    id: 9,
    title: "Career Prep Workshop",
    date: "18 April, 2026",
    subtitle:
      "Prepare for the future with resume building, interviews, and professional skills.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/career-prep-workshop",
  },
  {
    id: 10,
    title: "Creative Arts Camp",
    date: "2 May, 2026",
    subtitle:
      "Explore your creativity through art, music, and design projects.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/creative-arts-camp",
  },
  {
    id: 11,
    title: "Tech for Good",
    date: "15 May, 2026",
    subtitle:
      "Use technology to solve real-world problems and create social impact.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/tech-for-good",
  },
  {
    id: 12,
    title: "Mindset & Resilience",
    date: "28 May, 2026",
    subtitle:
      "Build mental toughness, positive habits, and a growth mindset for lifelong success.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/mindset-resilience",
  },
];

const ITEMS_PER_PAGE = 8 // Show 8 items per page

export default function Programs() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(programCards.length / ITEMS_PER_PAGE)
  
  // Calculate which items to show based on current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentPrograms = programCards.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)
      
      // Calculate start and end of visible pages
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)
      
      // Adjust if we're near the start
      if (currentPage <= 3) {
        end = 4
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3
      }
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push('ellipsis-start')
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push('ellipsis-end')
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  return (
    <GeneralLayout>
      <main>
        <HeroSection
          badgeText="PROGRAMS"
          title="Programs Designed to Unlock Potential and Drive Real Change"
          body="Explore Impactprenuer Global's transformative programs built to empower individuals, nonprofits, and social entrepreneurs with practical skills, mentorship, and tools for long-term impact. From leadership development to capacity-building workshops and community-driven initiatives, our programs are shaping a new generation of purpose-driven African changemakers."
          imageUrl="images/slide1.png"
        />
        
        <section className="py-5 px-4 sm:px-6 lg:px-20">
          {/* Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
            {currentPrograms.map((program) => (
              <ProgramCard
              
                key={program.id}
                id={program.id}
                title={program.title}
                date={program.date}
                subtitle={program.subtitle}
                imageUrl={program.imageUrl}
                ctaText={program.ctaText}
                // ctaHref={program.ctaHref}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  {/* Previous Button */}
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage > 1) {
                          handlePageChange(currentPage - 1)
                        }
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {/* Page Numbers */}
                  {getPageNumbers().map((page, index) => {
                    if (page === 'ellipsis-start' || page === 'ellipsis-end') {
                      return (
                        <PaginationItem key={`ellipsis-${index}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )
                    }
                    
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            handlePageChange(page as number)
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  })}
                  
                  {/* Next Button */}
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage < totalPages) {
                          handlePageChange(currentPage + 1)
                        }
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Mobile button - visible only on mobile */}
          {/* <div className="mt-8 flex justify-center sm:hidden">
            <Button variant="ghost" className="flex items-center gap-1">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div> */}
        </section>
      </main>
    </GeneralLayout>
  )
}