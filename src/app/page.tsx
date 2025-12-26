import { Button } from "@/src/components/ui/button";
import { CarouselCard } from "@/src/components/blocks/Carousel";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { FeatureCard } from "@/src/components/blocks/FeatureCard";
import {ProgramCard} from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import  ProfileCard   from "@/src/components/common/ProfileCard";
import { BlogCard } from "../components/common/BlogCard";
import { TestimonialCarouselSection } from "../components/blocks/TestimonialCard";
import { SponsorSection } from "@/src/components/common/SponsorSection";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";

export default function Home() {
  // JSON data for feature cards
  const featureCards = [
    {
      id: 1,
      imageUrl: "/images/slide1.png",
      // title: "Fast Delivery",
      body: "Entrepreneurship Training: From idea validation to business modeling and digital marketing.",
      badgeText: "New",
    },
    {
      id: 2,
      imageUrl: "/images/slide1.png",
      // title: "Sustainable Packaging",
      body: "Leadership Development: Immersive labs, coaching, peer mentoring — building strong, purpose-led leaders.",
      badgeText: "Eco",
    },
    {
      id: 3,
      imageUrl: "/images/slide1.png",
      // title: "Expert Support",
      body: "At Impactprenuer Global, we bring together aspiring social entrepreneurs, nonprofits, and changemakers.",
    },
    {
      id: 4,
      imageUrl: "/images/slide1.png",
      // title: "Expert Support",
      body: "Financial Literacy: Workshops on budgeting, investing, debt management, and using digital financial tools.",
    },
  ];


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
];

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



const profileCards = [
  {
    id: 1,
    name: "Promise Joshua",
    title: "Co-founder & Global Community Architect",
    imageUrl: "/images/profile1.jpg",
    socialLinks: {
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
    },
  },
  {
    id: 2,
    name: "George Bassey",
    title: "Co-founder & Global Business Architect",
    imageUrl: "/images/profile4.jpg",
    socialLinks: {
      twitter: "https://twitter.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
    },
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Marketing Head",
    imageUrl: "/images/profile3.jpg",
  },
  {
    id: 4,
    name: "Charles Horice",
    title: "Head of Technology",
    imageUrl: "/images/profile2.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/bobwilliams",
    },
  },
  {
    id: 5,
    name: "Chukwuchebem David",
    title: "Tech Specialist",
    imageUrl: "/images/profile5.jpeg",
    socialLinks: {
      twitter: "https://twitter.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
    },
  }
];

  return (
    <GeneralLayout>
    <main className="">
      <CarouselCard />

      {/* ImageTextSection with green background */}
      <div className="">
        <ImageTextSection
          badgeText="WHO WE ARE"
          body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
          imageUrl="/images/slide1.png"
          isButton={true}
        />
      </div>

      {/* Feature Cards Section */}
      <section className="bg-[#003715] py-16 px-4 sm:px-6 lg:px-20">
            <Badge variant="muted" className="w-fit">
              HIGHLIGHTS
            </Badge>
        
             <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-white font-bold">
              Empowering Change Through Purpose, Innovation & <br /> Education
            </h1>
        
        <div className="max-w-7xl place-items-center mx-auto grid  pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureCards.map((card) => (
          <FeatureCard
            key={card.id}
            imageUrl={card.imageUrl}
            // title={card.title}
            body={card.body}
          />
        ))}
      </div>

      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left */}
          <div className="space-y-2">
            <Badge variant="muted" className="w-fit">
              HIGHLIGHTS
            </Badge>

            <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#003715] font-bold">
              Empowering Change Through Purpose, Innovation & <br className="hidden sm:block" />
              Education
            </h1>
          </div>

          {/* Right - hidden on mobile */}
          <div className="hidden sm:flex">
            <Button variant="ghost" className="flex items-center gap-1">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
          {programCards.map((program) => (
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.title}
              date={program.date}
              subtitle={program.subtitle}
              imageUrl={program.imageUrl}
              ctaText={program.ctaText}
              ctaHref={program.ctaHref}
            />
          ))}
        </div>

        {/* Mobile button - visible only on mobile */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Button variant="ghost" className="flex items-center gap-1">
            See all
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

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
            <Button variant="ghost" className="flex items-center gap-1">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
         {profileCards.map((profile) => (
        <ProfileCard
          key={profile.name} // Use name as key if it's unique
          name={profile.name}
          title={profile.title}
          imageUrl={profile.imageUrl}
          socialLinks={profile.socialLinks}
        />
      ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left */}
          <div className="space-y-2">
            <Badge variant="muted" className="w-fit">
              BLOGS
            </Badge>

            <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#003715] font-bold">
             Explore Our Latest Insights, Stories & Updates
            </h1>
          </div>

          {/* Right - hidden on mobile */}
          <div className="hidden sm:flex">
            <Button variant="ghost" className="flex items-center gap-1">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Blogs */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
          {blogPosts.map((blogs) => (
            <BlogCard
              key={blogs.id}
              id={blogs.id}
              title={blogs.title}
              date={blogs.date}
              subtitle={blogs.subtitle}
              imageUrl={blogs.imageUrl}
            />
          ))}
        </div>

        {/* Mobile button - visible only on mobile */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Button variant="ghost" className="flex items-center gap-1">
            See all
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

    <TestimonialCarouselSection
      slides={[
        {
          image: "/images/profile1.jpg",
          testimonial:
            "Impactprenuer Global helped me refine my ideas and connect with people who truly care about social impact.",
          author: "David Dominic",
        },
        {
          image: "/images/profile2.jpg",
          testimonial:
            "The community and mentorship here transformed how I approach innovation and leadership.",
          author: "Amarachi Babalola",
        },
        {
          image: "/images/profile3.jpg",
          testimonial:
            "This platform gave me clarity, confidence, and a strong support system.",
          author: "Isaac Oladunjoye",
        },
      ]}
    />

     <SponsorSection
        sponsors={[
          { name: "Sponsor 1", logo: "/logos/partner1.png" },
          { name: "Sponsor 2", logo: "/logos/partner2.png" },
          { name: "Sponsor 3", logo: "/logos/partner3.png" },
          { name: "Sponsor 4", logo: "/logos/partner4.png" },
          { name: "Sponsor 5", logo: "/logos/partner5.png" },
        ]}
    />

    </main>
    </GeneralLayout>
  );
}
