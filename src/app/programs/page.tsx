"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/src/components/common/HeroCard"
import { ProgramCard } from "@/src/components/common/ProgramCard"
import { GeneralLayout } from "@/src/components/common/GeneralLayout"
import { fetchPrograms } from "@/services/api"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/src/components/ui/pagination"

const ITEMS_PER_PAGE = 8

// Define a type for the program data
interface Program {
  id: number
  title: string
  date: string
  subtitle: string
  image: string
  // Add other fields if your API returns more data
}

export default function Programs() {
  const [currentPage, setCurrentPage] = useState(1)
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(1)

  // Fetch programs from API
  useEffect(() => {
    const loadPrograms = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch programs from API
        const apiPrograms = await fetchPrograms(currentPage)
        
        // Transform API data to match your ProgramCard component format
        const transformedPrograms = apiPrograms.map((program: any) => ({
          id: program.id,
          title: program.title || "Program Title",
          date: program.date || "Coming Soon",
          subtitle: program.description || program.subtitle || "Program description",
          imageUrl: program.image || program.imageUrl || "/images/slide1.png"
        }))
        
        setPrograms(transformedPrograms)
        
        // If your API returns pagination info, use it
        // For now, we'll assume 12 items total as in your dummy data
        // You might want to update this based on your actual API response
        const totalItems = 12 // This should come from your API (e.g., data.count)
        setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE))
      } catch (err) {
        setError("Failed to load programs. Please try again later.")
        console.error("Error fetching programs:", err)
      } finally {
        setLoading(false)
      }
    }

    loadPrograms()
  }, [currentPage])

  // Calculate which items to show based on current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentPrograms = programs.slice(startIndex, Math.min(endIndex, programs.length))

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)
      
      if (currentPage <= 3) {
        end = 4
      }
      
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3
      }
      
      if (start > 2) {
        pages.push('ellipsis-start')
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      if (end < totalPages - 1) {
        pages.push('ellipsis-end')
      }
      
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
          body="Global Programs & Services Empowering Entrepreneurs and Businesses to Turn Ideas Into Impact and Revenue

At Impactpreneur Global, we deliver transformative programs and services designed to help entrepreneurs, startups, and businesses innovate, scale, and lead purpose-driven ventures worldwide.

Whether you are refining your first idea, scaling an existing business, or leading a global team, our offerings equip you with practical skills, mentorship, strategic guidance, and digital tools to succeed in any market. We combine impact, profit, and innovation to ensure every venture thrives sustainably."
          imageUrl="images/slide1.png"
        />
        
        <section className="py-5 px-4 sm:px-6 lg:px-20">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p>Loading programs...</p>
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="text-center py-12 text-red-600">
              <p>{error}</p>
            </div>
          )}
          
          {/* Programs Grid */}
          {!loading && !error && (
            <>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">

              {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8"> */}
                {currentPrograms.length > 0 ? (
                  currentPrograms.map((program) => (
                    <ProgramCard
                      key={program.id}
                      id={program.id}
                      title={program.title}
                      date={program.date}
                      subtitle={program.subtitle}
                      imageUrl={program.image}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p>No programs available at the moment.</p>
                  </div>
                )}
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
            </>
          )}
        </section>
      </main>
    </GeneralLayout>
  )
}