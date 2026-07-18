"use client"

import React from 'react'
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import BlogData from "@/src/BlogData"
import { BlogCard } from "@/src/components/common/BlogCard";
import CtaSection from '@/src/components/blocks/CtaSection';
import Link from 'next/link'
import {useState, useEffect} from "react"

interface FormData {
  email: string
  fullname: string
  password: string
}

interface FormDataProps {
  Loading: boolean
  onSubmit: (data: FormData) => void
}

const page: React.FC<FormDataProps> = ({onSubmit, Loading = false}) => {
  const [category, setCategory] = useState("All Posts")
  const [filteredData, setFilteredData] = useState(BlogData)
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullname: "",
    password: ""
  })


    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit(formData)


      setFormData({
        email: "",
        fullname: "",
        password: ""
      })
    }

  useEffect(() => {
    setIsLoading(true)
    if(category === "All Posts"){
      setFilteredData(BlogData)
    }
    else {
      
      const activeCategory = BlogData.filter((item) => item.category === category)
      setFilteredData(activeCategory)
    }
    setIsLoading(false)
  },[category])

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },
  //   {
  //     id: 2,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },
  //   {
  //     id: 3,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },
  //   {
  //     id: 4,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },
  //   {
  //     id: 5,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },
  //       {
  //     id: 6,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },
  //       {
  //     id: 7,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },

  //       {
  //     id: 8,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },
  //   {
  //     id: 9,
  //     title: "How to Find the Right Mentor for Your Impact Journey",
  //     name: "John Micheal",
  //     time: "2pm",
  //     date: "28 October, 2025",
  //     subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
  //     imageUrl: "/images/Blog.png",
  //     category: "Finance",
  //     readTime: "5 min read",
  //   },


   
  // ];

  return (
    <GeneralLayout>
        <main>
      <section className="max-w-3xl  mx-auto text-center py-20 ">
        <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Insights & Stories
        </span>
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Impact Enterpreneur <span className="text-green-500 block sm:inline">Blog</span>
        </h1>
        <p className="text-[17px] font-dm-sans">Stories, insights, and resources from our global community of impact entrepreneurs. Learn from success stories, industry experts, and thought leaders.</p>
      </section>
      <section className="flex flex-col items-center justify-center max-w-7xl">
        <div className="flex items-center justify-center gap-6 mb-4">
          <button className={`${category === "All Posts" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} onClick={() => setCategory("All Posts")}>
            All Posts(34)
          </button>
          <button className={`${category === "Community" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} onClick={() => setCategory("Community")}>
            Community(10)
          </button>
          <button className={`${category === "Impact Stories" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} onClick={() => setCategory("Impact Stories")}>
            Impact Stories(34)
          </button>
          <button className={`${category === "Scaling" ? "bg-[#008000] text-white" : "bg-[#80808033] text-black"} py-1.5 px-4 rounded-full cursor-pointer`} onClick={() => setCategory("Scaling")}>
            Scaling(34)
          </button>
        </div>
        <div className="flex items-center justify-center">

          <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center items-stretch mt-8">
            {isLoading && (
              <div className="col-span-full text-center">
                <p>Loading...</p>
              </div>
            )}
            {filteredData.map((blogs) => (
                
             <Link href={`/blog/${blogs.id}`} key={blogs.id} >
              <BlogCard
                // id={blogs.id}
                title={blogs.title}
                date={blogs.date}
                subtitle={blogs.subtitle}
                imageUrl={blogs.imageUrl}
                name="maxwell small"
                time={blogs.readTime}
              />
              </Link>
            ))}
          </div>
        </div>
      </section>
       <section>
                <CtaSection/>
              </section>
        </main>
    </GeneralLayout>
  )
}

export default page