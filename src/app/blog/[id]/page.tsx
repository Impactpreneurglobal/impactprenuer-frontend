import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GeneralLayout } from "@/src/components/common/GeneralLayout"
import BlogData from "@/src/BlogData"
import { BlogCard } from "@/src/components/common/BlogCard"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight, Users, MessageSquare, Calendar, TrendingUp } from "lucide-react"
import { ProgramCard } from "@/src/components/common/ProgramCard";


interface PageProps {
  params: Promise<{ id: string }>
}

export default async function BlogDetailPage({ params }: PageProps) {


    const HowItWorksCards = [
      {
        id: 1,
        title: "Join the community",
        subtitle: "Sign up and complete your profile to connect with like-minded entrepreneurs.",
        imageUrl: "/images/slide1.png",
        Icon: Users,
        iconBgColor: "bg-green-50",
        iconColor: "text-green-600"
        
      },
      {
        id: 2,
        title: "Define Your Goals",
        subtitle: "Set your impact objectives and get matched with relevant mentors and resources.",
        imageUrl: "/images/slide1.png",
        Icon: MessageSquare,
        iconBgColor: "bg-indigo-50",
        iconColor: "text-indigo-600"
      },
      {
        id: 3,
        title: "Take Action",
        subtitle: "Attend events, build partnerships, and implement strategies with expert guidance.",
        imageUrl: "/images/slide1.png",
        Icon: Calendar,
        iconBgColor: "bg-purple-50",
        iconColor: "text-purple-600"
      },
      {
        id: 4,
        title: "Scale Your Project",
        subtitle: "Grow your venture sustainably while making a meaningful difference in the world.",
        imageUrl: "/images/slide1.png",
        Icon: TrendingUp,
        iconBgColor: "bg-amber-50",
        iconColor: "text-amber-600"
      },
    ];

  const { id } = await params;
  const blog = BlogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    notFound();
  }

  const relatedArticles = BlogData.filter(
    (item) => item.category === blog.category && item.id !== blog.id
  ).slice(0, 3);

  return (
    <GeneralLayout>
      <main className="max-w-7xl mx-auto px-4 py-12 font-dm-sans flex flex-col items-center justify-center">
        <div className="mt-5">
          <span className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
            {blog.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden" />
            <span className="font-medium text-gray-800">John Michael</span>
          </div>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <div className="w-full h-[340px] bg-gray-100 rounded-2xl overflow-hidden mb-12">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>

        
 <div 
  className="max-w-none text-gray-800 border-b border-gray-100 pb-12
    [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:text-[#0f172a] [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4
    [&_p]:text-[15px] [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6
    [&_ul]:list-none [&_ul]:pl-5 [&_ul]:mb-6
    [&_li]:text-[15px] [&_li]:text-gray-700 [&_li]:mb-5 [&_li]:relative [&_li]:pl-6
    [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-gray-400 [&_li]:before:font-bold"
  dangerouslySetInnerHTML={{ __html: blog.body || `<p>${blog.subtitle}</p>` }}
/>


            <section className="py-16 px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col items-center justify-center text-center gap-4 mb-8">
                  <h1 className="text-[24px] sm:text-[28px] font-poppins text-black font-bold">
                    The Five Qualities of an Effective Impact Mentor     
                  </h1>
                  <p className="text-[#0000008C] font-dm-sans ">Four simple steps to unlock your potential and create lasting change. </p>
                </div>
              </div>
    
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
                {HowItWorksCards.map((program) => (
                  <ProgramCard
                    key={program.id}
                    // id={program.id}
                    title={program.title}
                    subtitle={program.subtitle}
                    imageUrl={program.imageUrl}
                     Icon={program.Icon}
                     iconBgColor={program.iconBgColor}   
                     iconColor={program.iconColor}
    
                  />
                ))}
              </div>
    
              <div className="mt-8 flex justify-center sm:hidden">
                <Button variant="ghost" className="flex items-center gap-1">
                  See all
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </section>
    
        <section className="py-16 px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center">

        <div className="py-12 shadow flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">John Michael</h4>
            <p className="text-sm text-gray-600 max-w-2xl">
              Coaching impact makers on sustainable practices, structural financial strategy models, and strategic long-term development.
            </p>
          </div>
        </div>
                </section>

        {relatedArticles.length > 0 && (
          <section className="pt-16 pb-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
              <p className="text-sm text-gray-500 mt-1">Explore more insight stories from our shared category ecosystem</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link href={`/blog/${related.id}`} key={related.id} className="w-full flex">
                  <BlogCard
                    title={related.title}
                    date={related.date}
                    subtitle={related.subtitle}
                    imageUrl={related.imageUrl}
                    name="John Michael"
                    time={related.readTime}
                  />
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link href="/blog">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                  Load More
                </Button>
              </Link>
            </div>
          </section>
        )}
      </main>
    </GeneralLayout>
  )
}