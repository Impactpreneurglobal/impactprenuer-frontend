"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { BlogCard } from "@/src/components/common/BlogCard";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fetchBlogs } from "@/services/api";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

// Define a type for the blog data
interface Blog {
  id: number;
  title: string;
  date: string;
  subtitle: string;
  description: string;
  body: string;
  imageUrl: string;
  // category?: string;
  // readTime?: string;
  created_at?: string;
}

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [otherBlogs, setOtherBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch blogs from API
        const apiResponse = await fetchBlogs();
        
        // Transform API data to match your BlogCard component format
        const transformedBlogs: Blog[] = apiResponse.map((apiBlog: any) => ({
          id: apiBlog.id,
          title: apiBlog.title || "Blog Title",
          // Use date field if available, otherwise created_at
          date: apiBlog.date 
            ? new Date(apiBlog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })
            : apiBlog.created_at
              ? new Date(apiBlog.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
              : "Date not available",
          subtitle: apiBlog.description || "Blog description",
          description: apiBlog.description || "",
          // If your API has a separate body/content field, use it here
          body: apiBlog.body || apiBlog.content || apiBlog.description || "",
          imageUrl: apiBlog.image || "/images/slide1.png",
          category: apiBlog.category || "Uncategorized",
          readTime: apiBlog.read_time || apiBlog.readTime || "5 min read"
        }));
        
        // Find the current blog
        const currentBlog = transformedBlogs.find(
          (item) => String(item.id) === String(id)
        );
        
        if (currentBlog) {
          setBlog(currentBlog);
          
          // Get other blogs (excluding the current one)
          const otherBlogsList = transformedBlogs
            .filter((item) => String(item.id) !== String(id))
            .slice(0, 4); // Show only 4 other blogs
          
          setOtherBlogs(otherBlogsList);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError("Failed to load blog details. Please try again later.");
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadBlogs();
    }
  }, [id]);

  if (loading) {
    return (
      <GeneralLayout>
        <main className="py-20 px-4 sm:px-6 lg:px-20">
          <div className="text-center py-12">
            <p>Loading blog details...</p>
          </div>
        </main>
      </GeneralLayout>
    );
  }

  if (error || !blog) {
    return (
      <GeneralLayout>
        <main className="py-20 px-4 sm:px-6 lg:px-20">
          <div className="text-center py-12 text-red-600">
            <p>{error || "Blog not found"}</p>
            <Link href="/resources/blogs">
              <Button variant="outline" className="mt-4">
                Back to Blogs
              </Button>
            </Link>
          </div>
        </main>
      </GeneralLayout>
    );
  }

  return (
    <GeneralLayout>
      <main className="py-20 px-4 sm:px-6 lg:px-20">
        {/* ===== Breadcrumb ===== */}
        <Breadcrumb className="mb-6 py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-xs truncate">
                {blog.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* ===== Layout ===== */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT — Blog Details */}
          <section className="flex-1 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#004119]">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{blog.date}</span>
              {/* {blog.category && (
                <>
                  <span>•</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{blog.category}</span>
                </>
              )}
              {blog.readTime && (
                <>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </>
              )}*/}
            </div> 

            <div className="overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-[300px] lg:h-[428px] object-cover"
              />
            </div>

            {/* <p className="text-muted-foreground text-base sm:text-lg max-w-3xl font-medium">
              {blog.subtitle}
            </p> */}

            {/* Render body content */}
            {blog.body && (
              <div
                className="text-gray-700 text-base prose prose-sm sm:prose lg:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.body }}
              ></div>
            )}

            {/* <div className="pt-6 border-t">
              <Button variant="secondary" className="flex items-center gap-2 w-fit">
                Share this article <ArrowRight size={16} />
              </Button>
            </div> */}
          </section>

          {/* RIGHT — Sidebar */}
          <aside className="w-full lg:w-[320px] space-y-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-normal text-[#8A8A8A]">
                See more blogs
              </h2>

              {/* Desktop button */}
              <Link
                href="/blogs"
                className="hidden md:block"
              >
                <Button variant="ghost" className="flex items-center gap-1">
                  See all
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Cards */}
            <div className="space-y-4 flex flex-col items-center md:items-stretch">
              {otherBlogs.length > 0 ? (
                otherBlogs.map((item) => (
                  <BlogCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    subtitle={item.subtitle}
                    imageUrl={item.imageUrl}
                    // category={item.category}
                    // readTime={item.readTime}
                  />
                ))
              ) : (
                <p className="text-center text-muted-foreground py-4">
                  No other blogs available
                </p>
              )}
            </div>

            {/* Mobile button (bottom & centered) */}
            {otherBlogs.length > 0 && (
              <div className="flex justify-center md:hidden pt-2">
                <Link href="/blogs">
                  <Button variant="ghost" className="flex items-center gap-1">
                    See all
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </aside>
        </div>
      </main>
    </GeneralLayout>
  );
}