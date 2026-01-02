"use client"

import { useState } from "react"
import { HeroSection } from "@/src/components/common/HeroCard";
import { Button } from "@/src/components/ui/button";
import { CarouselCard } from "@/src/components/blocks/Carousel";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { FeatureCard } from "@/src/components/blocks/FeatureCard";
import { ProgramCard } from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import ProfileCard from "@/src/components/common/ProfileCard";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import profileData from "@/src/ProfileData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/src/components/ui/pagination"



const ITEMS_PER_PAGE = 8 // Show 4 team members per page

export default function OurTeam() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(profileData.length / ITEMS_PER_PAGE)
  
  // Calculate which items to show based on current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProfiles = profileData.slice(startIndex, endIndex)

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
      if (currentPage <= 2) {
        end = 3
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 1) {
        start = totalPages - 2
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
          badgeText="OUR TEAM"
          title="Our Team Members"
          body="Have questions, need guidance, or want to partner with us? Reach out to Impactprenuer Global and let's explore how we can work together to drive sustainable change. Our team is ready to assist you with programs, collaborations, digital products, and general inquiries."
          imageUrl="images/slide1.png"
        />
        
        <section className="py-16 px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left */}
            <div className="space-y-2">
              <Badge variant="muted" className="w-fit">
                OUR TEAM
              </Badge>

              <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#003715] font-bold">
                Meet Our Team
              </h1>
            </div>

            {/* Right - hidden on mobile */}
            <div className="hidden sm:flex">
              {/* Optional: You could add a "See all" button here if needed */}
            </div>
          </div>

          {/* Team Cards Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
            {currentProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                id={profile.id}
                name={profile.name}
                title={profile.title}
                imageUrl={profile.imageUrl}
                socialLinks={profile.socialLinks}
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

          {/* Optional: Show current page and total results */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Showing {startIndex + 1} - {Math.min(endIndex, profileData.length)} of {profileData.length} team members
          </div>

          {/* Mobile button - visible only on mobile (optional) */}
          {/* <div className="mt-8 flex justify-center sm:hidden">
            <Button variant="ghost" className="flex items-center gap-1">
              See all team members
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div> */}
        </section>
      </main>
    </GeneralLayout>
  )
}  