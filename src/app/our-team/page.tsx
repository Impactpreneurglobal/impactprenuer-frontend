"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/common/Header";
import { CarouselCard } from "@/src/components/blocks/Carousel";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { FeatureCard } from "@/src/components/blocks/FeatureCard";
import {ProgramCard} from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import  ProfileCard   from "@/src/components/common/ProfileCard";

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
    name: "Chukwuchebem  David",
    title: "Tech Specialist",
    imageUrl: "/images/profile5.jpeg",
    socialLinks: {
      twitter: "https://twitter.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
    },
  },
];


export default function OurTeam(){
    return(
    <main>

        <Header />
        <HeroSection
            badgeText="OUR TEAM"
            title="Our Team Members"
            body="Have questions, need guidance, or want to partner with us? Reach out to Impactprenuer Global and let’s explore how we can work together to drive sustainable change. Our team is ready to assist you with programs, collaborations, digital products, and general inquiries."
            imageUrl="images/slide1.png"
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
            {/* <Button variant="ghost" className="flex items-center gap-1">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button> */}
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
    </main>
    )
}