"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/src/components/common/HeroCard"
import { GeneralLayout } from "@/src/components/common/GeneralLayout"
import { Badge } from "@/src/components/ui/badge"
import { BlogCard } from "@/src/components/common/BlogCard"
import { fetchBlogs } from "@/services/api"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/src/components/ui/pagination"

// Define a type for the blog data
interface Blog {
  id: number
  title: string
  date: string
  subtitle: string
  description: string
  imageUrl: string
  created_at?: string
  // Add other fields if your API returns more data
}

const ITEMS_PER_PAGE = 8 // Show 8 blog posts per page

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalBlogs, setTotalBlogs] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  // Fetch blogs from API
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch blogs from API
        const apiResponse = await fetchBlogs(currentPage)
        
        // Transform API data to match your BlogCard component format
        const transformedBlogs: Blog[] = apiResponse.map((blog: any) => ({
          id: blog.id,
          title: blog.title || "Blog Title",
          // Use date field if available, otherwise created_at
          date: blog.date 
            ? new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })
            : blog.created_at
              ? new Date(blog.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
              : "Date not available",
          subtitle: blog.description || "Blog description",
          description: blog.description || "",
          imageUrl: blog.image || "/images/slide1.png"
        }))
        
        setBlogs(transformedBlogs)
        
        // Note: Since fetchBlogs only returns results array from page,
        // we need to handle total count differently
        // For now, we'll assume we have all blogs from the current page
        // You might need to modify the fetchBlogs function to return full response
        
        // If you want to update fetchBlogs to return full pagination data:
        // In api.js: return data (not data.results) and handle it here
        // For now, we'll keep simple pagination with what we have
        setTotalBlogs(transformedBlogs.length)
        setTotalPages(Math.ceil(transformedBlogs.length / ITEMS_PER_PAGE))
        
      } catch (err) {
        setError("Failed to load blogs. Please try again later.")
        console.error("Error fetching blogs:", err)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [currentPage])

  // Calculate which items to show based on current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentBlogs = blogs.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when changing pages
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
      
      if (currentPage <= 2) {
        end = 3
      }
      
      if (currentPage >= totalPages - 1) {
        start = totalPages - 2
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
          badgeText="BLOGS"
          title="Our Blogs"
          body="
The #1 Resource for Entrepreneurs and Business Leaders Across the Globe Ready to Turn Ideas Into Impact and Revenue

Welcome to Impactpreneur Global's blog, your hub for actionable insights, practical strategies, and bold ideas that help founders and businesses worldwide build, scale, and lead business ventures. 

Whether you're just starting out, expanding regionally, or scaling internationally, our content equips you with the knowledge, tools, and inspiration to transform ideas into profitable, sustainable businesses."
          imageUrl="images/slide1.png"
        />
        
        <section className="py-16 px-4 sm:px-6 lg:px-20">
          {/* Header section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="space-y-2">
              <Badge variant="muted" className="w-fit">
                LATEST BLOGS
              </Badge>
              <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#003715] font-bold">
                Insights & Updates
              </h1>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p>Loading blogs...</p>
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="text-center py-12 text-red-600">
              <p>{error}</p>
            </div>
          )}
          
          {/* Blogs Grid */}
          {!loading && !error && (
            <>
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      id={blog.id}
                      title={blog.title}
                      date={blog.date}
                      subtitle={blog.subtitle}
                      imageUrl={blog.imageUrl}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p>No blogs available at the moment.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && currentBlogs.length > 0 && (
                <>
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

                  {/* Page info */}
                  <div className="mt-6 text-center text-sm text-gray-600">
                    Showing {startIndex + 1} - {Math.min(endIndex, blogs.length)} of {blogs.length} blog posts
                  </div>
                </>
              )}
            </>
          )}
        </section>
      </main>
    </GeneralLayout>
  )
}