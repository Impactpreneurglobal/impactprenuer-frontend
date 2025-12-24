import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/common/Header";
import { CarouselCard } from "@/src/components/blocks/Carousel";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { FeatureCard } from "@/src/components/blocks/FeatureCard";
import {ProgramCard} from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import  ProfileCard   from "@/src/components/common/ProfileCard";
import { BlogCard } from "../components/common/BlogCard";
import { TestimonialCarouselSection } from "../components/blocks/TestimonialCard";

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


const profileCards = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Founder & CEO",
    imageUrl: "/images/profile1.jpg",
    socialLinks: {
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
    },
  },
  {
    id: 2,
    name: "John Smith",
    title: "Lead Developer",
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
    name: "Bob Williams",
    title: "Product Designer",
    imageUrl: "/images/profile2.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/bobwilliams",
    },
  },
];

  return (
    <main className="">
      <Header />
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

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-8">
          {programCards.map((program) => (
            <BlogCard
              key={program.id}
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



    </main>
  );
}
