"use client"

import React, { useState, useEffect } from 'react'
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { BlogCard } from "@/src/components/common/BlogCard";
import CtaSection from '@/src/components/blocks/CtaSection';
import Link from 'next/link'
import { fetchBlogs } from "@/services/api"

// 1. Defined Blog interface matching Django API schema
export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  created_at?: string;
  category?: string;
}

interface FormData {
  email: string
  fullname: string
  password: string
}

interface FormDataProps {
  Loading?: boolean
  onSubmit?: (data: FormData) => void
}

const Page: React.FC<FormDataProps> = ({ onSubmit, Loading = false }) => {
  const [category, setCategory] = useState("All Posts")
  
  const [filteredData, setFilteredData] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullname: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) onSubmit(formData)

    setFormData({
      email: "",
      fullname: "",
      password: ""
    })
  }

  useEffect(() => {
    let isMounted = true

    async function loadData() {
      setIsLoading(true)
      try {
        const data: Blog[] = await fetchBlogs(1)

        if (!isMounted) return

        if (category === "All Posts") {
          setFilteredData(data)
        } else {
          const activeCategory = data.filter((item: Blog) => item.category === category)
          setFilteredData(activeCategory)
        }
      } catch (error) {
        console.error("Error Fetching Blogs:", error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isMounted = false
    }
  }, [category])

  return (
    <GeneralLayout>
      <main>
        <section className="max-w-3xl mx-auto text-center py-20">
          <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Insights & Stories
          </span>
          <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Impact Entrepreneur <span className="text-green-500 block sm:inline">Blog</span>
          </h1>
          <p className="text-[17px] font-dm-sans">
            Stories, insights, and resources from our global community of impact entrepreneurs. Learn from success stories, industry experts, and thought leaders.
          </p>
        </section>

        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <button 
              className={`${category === "All Posts" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} 
              onClick={() => setCategory("All Posts")}
            >
              All Posts
            </button>
            <button 
              className={`${category === "Community" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} 
              onClick={() => setCategory("Community")}
            >
              Community
            </button>
            <button 
              className={`${category === "Impact Stories" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} 
              onClick={() => setCategory("Impact Stories")}
            >
              Impact Stories
            </button>
            <button 
              className={`${category === "Scaling" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} 
              onClick={() => setCategory("Scaling")}
            >
              Scaling
            </button>
          </div>

          <div className="w-full">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center items-stretch mt-8">
              {isLoading && (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 font-medium">Loading blogs...</p>
                </div>
              )}

              {!isLoading && filteredData.length === 0 && (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 font-medium">No posts found for this category.</p>
                </div>
              )}

              {!isLoading && filteredData.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id} className="w-full">
                  <BlogCard
                    title={blog.title}
                    date={blog.date || blog.created_at}
                    subtitle={blog.description}
                    imageUrl={blog.image}
                    name="Maxwell Small"
                    time="5 min read"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <CtaSection />
        </section>
      </main>
    </GeneralLayout>
  )
}

export default Page