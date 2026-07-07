import { Button } from "@/src/components/ui/button";
import { CarouselCard } from "@/src/components/blocks/Carousel";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { FeatureCard } from "@/src/components/blocks/FeatureCard";
import { ProgramCard } from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { Users, MessageSquare, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import ProfileCard from "@/src/components/common/ProfileCard";
import { BlogCard } from "../components/common/BlogCard";
import { SponsorSection } from "@/src/components/common/SponsorSection";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import Link from "next/link";
import profileData from "@/src/ProfileData";
import BlogData from "@/src/BlogData"
import TestimonialSection from "../components/blocks/TestimonialCard";
import  CtaSection from "../components/blocks/CtaSection";


export default function Home() {
  // JSON data for feature cards
  const whatWeDoCards = [
    {
      id: 1,
      imageUrl: "/images/slide1.png",
      title: "Expertise Mentorship",
      body: "Connect with seasoned entrepreneurs and industry leaders who guide your journey to success.",
      
    },
    {
      id: 2,
      imageUrl: "/images/slide1.png",
      title: "Exclusive Events",
      body: "Access masterclasses, workshops, and networking events designed to accelerate your growth.",
      
    },
    {
      id: 3,
      imageUrl: "/images/slide1.png",
      title: "Strategic Partnerships",
      body: "Access masterclasses, workshops, and networking events designed to accelerate your growth.",
      
    },
    {
      id: 4,
      imageUrl: "/images/slide1.png",
      title: "Growth Resources",
      body: "Leverage tools, frameworks, and insights to scale your impact venture sustainably.",
      
    },
  ];

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

  const blogPosts = [
    {
      id: 1,
      title: "How to Find the Right Mentor for Your Impact Journey",
      name: "John Micheal",
      time: "2pm",
      date: "28 October, 2025",
      subtitle: "Discover key strategies to identify and connect with mentors who align with your...",
      imageUrl: "/images/Blog.png",
      category: "Finance",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Leadership in the Modern World",
      name: "John Micheal",
      time: "2pm",
      date: "10 November, 2025",
      subtitle: "Explore the essential leadership qualities needed for today's rapidly changing environment.",
      imageUrl: "/images/Blog.png",
      category: "Leadership",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "From Idea to Startup: A Step-by-Step Guide",
      name: "John Micheal",
      time: "2pm",
      date: "5 December, 2025",
      subtitle: "Turn your innovative ideas into viable businesses with this comprehensive guide.",
      imageUrl: "/images/Blog.png",
      category: "Entrepreneurship",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Financial Literacy for All Ages",
      name: "John Micheal",
      time: "2pm",
      date: "18 January, 2026",
      subtitle: "Essential money management skills everyone should know regardless of age or income.",
      imageUrl: "/images/Blog.png",
      category: "Finance",
      readTime: "6 min read",
    },
  ];

  // Array containing the structured testimonial data matching your interface props
  const testimonialData = [
    {
      rating: 5,
      testimonial: "Impactpreneur Global is helping inspire me with new network/friends to build the world anew with books and other sources of ideas so that we can finally celebrate the oneness of mankind, our human family.",
      avatarSrc: "/images/profile1.jpg",
      author: "Edward Joseph Sullivan",
      location: "From Mexico",
    },
    {
      rating: 5,
      testimonial: "A big thank you to Impactpreneur Global team! Your selfless support in providing rare books and resources on request is truly a blessing. You are empowering so many readers with knowledge – deeply grateful!",
      avatarSrc: "/images/profile2.jpg",
      author: "Ruvi Banerjee",
      location: "From India",
    },
    {
      rating: 5,
      testimonial: "Impactpreneur Global has equipped me with the knowledge and skills needed to navigate the complexities of personal finance, make informed decisions and manage my money more effectively.",
      avatarSrc: "/images/profile3.jpg",
      author: "Romana Blessed Maboreke",
      location: "From the Republic of Zimbabwe",
    },
  ];

  return (
    <GeneralLayout>
      <main className="">
        <CarouselCard />

        {/* Feature Cards Section */}
        <section className=" py-16 px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center gap-4 mb-8">
            <Badge variant="muted" className="w-fit rounded-full">
              WHAT WE DO
            </Badge>
            <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-black font-bold">
              Everything You Need To Succeed
            </h1>
            <p className="text-[#0000008C] font-dm-sans ">We provide comprehensive support to help enterpreneurs turn their vision <br /> into reality. </p>
          </div>
          <div className="max-w-7xl place-items-center mx-auto grid pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDoCards.map((card) => (
              <FeatureCard
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                body={card.body}

              />
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col items-center justify-center text-center gap-4 mb-8">
              <Badge variant="muted" className="w-fit rounded-full">
                How it works
              </Badge>
              <h1 className="text-[24px] sm:text-[28px] font-poppins text-black font-bold">
                Your journey to impact  
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

        {/* Sponsor Section */}
        <SponsorSection
          sponsors={[
            { name: "Sponsor 4", logo: "/logos/partner4.png" },
            { name: "Sponsor 2", logo: "/logos/partner2.png" },
            { name: "Sponsor 3", logo: "/logos/partner3.png" },
            { name: "Sponsor 1", logo: "/logos/partner1.png" },
            { name: "Sponsor 5", logo: "/logos/partner5.png" },
            { name: "Sponsor 6", logo: "/logos/partner6.png" },
          ]}
        />

        {/* Blog Insights Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="muted" className="w-fit rounded-full">
                Latest Insights
              </Badge>
              <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#003715] font-bold">
                from our blog
              </h1>
            </div>
            <div className="hidden sm:flex">
              <Link href="/blogs">
                <Button variant="ghost" className="flex items-center gap-1">
                  View All Articles <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
            {blogPosts.map((blogs) => (
              <BlogCard
                key={blogs.id}
                id={blogs.id}
                title={blogs.title}
                date={blogs.date}
                subtitle={blogs.subtitle}
                imageUrl={blogs.imageUrl}
                name={blogs.name}
                time={blogs.time}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="/blogs">
              <Button variant="ghost" className="flex items-center gap-1">
                See all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Testimonials Section - Passing the array data instead of component */}
        <section className=" px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center">
          <TestimonialSection slides={testimonialData} />

          <div className="mt-8 flex justify-center sm:hidden">
            <Button variant="ghost" className="flex items-center gap-1">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
        <section className="">
          
            <CtaSection/>
        </section>
      </main>
    </GeneralLayout>
  );
}