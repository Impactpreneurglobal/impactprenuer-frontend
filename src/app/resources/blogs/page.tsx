"use client"

import { useState } from "react"
import { HeroSection } from "@/src/components/common/HeroCard"
import { GeneralLayout } from "@/src/components/common/GeneralLayout"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "@/src/components/common/BlogCard"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/src/components/ui/pagination"

const blogPosts = [
  {
    id: 1,
    title: "Young Investors: A Guide to Financial Freedom",
    date: "28 October, 2025",
    subtitle:
      "Learn how young people can start their investment journey with practical tips and strategies.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/young-investors-guide",
    category: "Finance",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Leadership in the Modern World",
    date: "10 November, 2025",
    subtitle:
      "Explore the essential leadership qualities needed for today's rapidly changing environment.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/leadership-modern-world",
    category: "Leadership",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "From Idea to Startup: A Step-by-Step Guide",
    date: "5 December, 2025",
    subtitle:
      "Turn your innovative ideas into viable businesses with this comprehensive guide.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/idea-to-startup-guide",
    category: "Entrepreneurship",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Financial Literacy for All Ages",
    date: "18 January, 2026",
    subtitle:
      "Essential money management skills everyone should know regardless of age or income.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/financial-literacy-all-ages",
    category: "Finance",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "The Future of Technology Innovation",
    date: "12 February, 2026",
    subtitle:
      "Discover emerging technologies that will shape our future and how to prepare for them.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/future-technology-innovation",
    category: "Technology",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Unlocking Creative Potential",
    date: "25 February, 2026",
    subtitle:
      "Practical techniques to enhance creativity and apply it to problem-solving.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/unlocking-creative-potential",
    category: "Creativity",
    readTime: "4 min read",
  },
  {
    id: 7,
    title: "The Entrepreneur's Mindset",
    date: "10 March, 2026",
    subtitle:
      "Develop the mindset needed to overcome challenges and build successful ventures.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/entrepreneur-mindset",
    category: "Entrepreneurship",
    readTime: "9 min read",
  },
  {
    id: 8,
    title: "Digital Marketing Trends 2026",
    date: "22 March, 2026",
    subtitle:
      "Stay ahead of the curve with the latest digital marketing trends and strategies.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/digital-marketing-trends-2026",
    category: "Marketing",
    readTime: "7 min read",
  },
  {
    id: 9,
    title: "Building Sustainable Businesses",
    date: "5 April, 2026",
    subtitle:
      "Learn how to create businesses that are profitable, sustainable, and socially responsible.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/building-sustainable-businesses",
    category: "Sustainability",
    readTime: "11 min read",
  },
  {
    id: 10,
    title: "Remote Work Best Practices",
    date: "18 April, 2026",
    subtitle:
      "Maximize productivity and maintain work-life balance while working remotely.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/remote-work-best-practices",
    category: "Work",
    readTime: "6 min read",
  },
  {
    id: 11,
    title: "AI and Its Impact on Employment",
    date: "2 May, 2026",
    subtitle:
      "Understanding how artificial intelligence is transforming the job market and how to adapt.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/ai-impact-employment",
    category: "Technology",
    readTime: "12 min read",
  },
  {
    id: 12,
    title: "Community Building Strategies",
    date: "15 May, 2026",
    subtitle:
      "Effective ways to build and engage communities around your brand or cause.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/community-building-strategies",
    category: "Community",
    readTime: "8 min read",
  },
  {
    id: 13,
    title: "Personal Development Roadmap",
    date: "28 May, 2026",
    subtitle:
      "Create a personalized plan for continuous growth and self-improvement.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/personal-development-roadmap",
    category: "Personal Growth",
    readTime: "5 min read",
  },
  {
    id: 14,
    title: "Social Media Algorithms Explained",
    date: "10 June, 2026",
    subtitle:
      "Understand how social media algorithms work and how to optimize your content.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/social-media-algorithms",
    category: "Marketing",
    readTime: "9 min read",
  },
  {
    id: 15,
    title: "The Power of Networking",
    date: "22 June, 2026",
    subtitle:
      "Build meaningful professional relationships that can advance your career or business.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/power-of-networking",
    category: "Career",
    readTime: "6 min read",
  },
  {
    id: 16,
    title: "Mental Health for Entrepreneurs",
    date: "5 July, 2026",
    subtitle:
      "Essential strategies for maintaining mental wellbeing while building a business.",
    imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/mental-health-entrepreneurs",
    category: "Wellness",
    readTime: "10 min read",
  },
]

const ITEMS_PER_PAGE = 8 // Show 8 blog posts per page

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE)
  
  // Calculate which items to show based on current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentBlogs = blogPosts.slice(startIndex, endIndex)

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
          badgeText="BLOGS"
          title="Our Blogs"
          body="Explore Impactprenuer Global's transformative programs built to empower individuals, nonprofits, and social entrepreneurs with practical skills, mentorship, and tools for long-term impact. From leadership development to capacity-building workshops and community-driven initiatives, our programs are shaping a new generation of purpose-driven African changemakers."
          imageUrl="images/slide1.png"
        />
        
        <section className="py-16 px-4 sm:px-6 lg:px-20">
          {/* Header section (optional) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="space-y-2">
              <Badge variant="muted" className="w-fit">
                LATEST BLOGS
              </Badge>
              <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#003715] font-bold">
                Insights & Updates
              </h1>
            </div>
            {/* You could add a filter or sort button here */}
          </div>

          {/* Blogs Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
            {currentBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                date={blog.date}
                subtitle={blog.subtitle}
                imageUrl={blog.imageUrl}
                // ctaText={blog.ctaText}
                // ctaHref={blog.ctaHref}
                // Optional: Pass additional props if your BlogCard supports them
                // category={blog.category}
                // readTime={blog.readTime}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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
                Showing {startIndex + 1} - {Math.min(endIndex, blogPosts.length)} of {blogPosts.length} blog posts
              </div>
            </>
          )}

          {/* Mobile button - visible only on mobile (optional) */}
          {/* <div className="mt-8 flex justify-center sm:hidden">
            <Button variant="ghost" className="flex items-center gap-1">
              View all categories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div> */}
        </section>
      </main>
    </GeneralLayout>
  )
}