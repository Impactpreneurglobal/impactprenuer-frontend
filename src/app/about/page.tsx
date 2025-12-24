"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import {JoinCommunity} from "@/src/components/blocks/JoinCommunity";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/common/Header";
import { CarouselCard } from "@/src/components/blocks/Carousel";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { FeatureCard } from "@/src/components/blocks/FeatureCard";
import {ProgramCard} from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import  ProfileCard   from "@/src/components/common/ProfileCard";
import { SponsorSection } from "@/src/components/common/SponsorSection";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";

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


export default function About(){
    return(
      <GeneralLayout>
    <main>
        <HeroSection
            badgeText="ABOUT US"
            title="Empowering Changemakers to Build a Sustainable Future"
            body="Welcome to Impactprenuer Global — a purpose-driven platform dedicated to equipping individuals, nonprofits, and social entrepreneurs with the tools, knowledge, and digital resources they need to create lasting impact in their communities. Through leadership development, capacity-building programs, and innovative digital products, we inspire and support the next generation of African change leaders."
            imageUrl="images/slide1.png"
          />
           <ImageTextSection
                  badgeText="WHO WE ARE"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
                  imageUrl="/images/slide1.png"
                  // imageRight={true}
                //   isButton={true}
                />
           <ImageTextSection
                  badgeText="OUR STORY"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
                  imageUrl="/images/slide1.png"
                  imageRight={true}
                //   isButton={true}
                />
           <ImageTextSection
                  badgeText="OUR MISSION"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
                  imageUrl="/images/slide1.png"
                //   imageRight={true}
                //   isButton={true}
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
            
           <JoinCommunity
                  badgeText="OUR COMMUNITY"
                  title="Join Our Community"
                  body="Our journey started with a clear vision: create a world where success isn’t reserved for a few, but is available to anyone with the passion to build. Through training programs, leadership labs, and community-building initiatives, Impactpreneur Global has grown into a powerful ecosystem. As we scale, we are expanding our offerings to include digital products — e-books, courses, and guides — so learners can access high-quality material on demand."
                  imageUrl="/images/slide1.png"
                //   imageRight={true}
                  isButton={true}
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
    )
}