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
import profileData from "@/src/ProfileData";


export default function About(){
    return(
      <GeneralLayout>
    <main>
        <HeroSection
            badgeText="ABOUT US"
            title="Empowering African Entrepreneurs and Businesses to Build Impact-Driven, Revenue-Generating Ventures"
            body="Impactpreneur Global is a purpose-led entrepreneurship platform supporting early-stage entrepreneurs and established African businesses to transform ideas into scalable, sustainable, and impact-driven ventures.
We provide clear ideation-to-launch pathways, practical tools, mentorship, and strategic support that help founders move from vision to execution and from local relevance to global competitiveness."
            imageUrl="images/slide1.png"
          />
           <ImageTextSection
                  badgeText="WHO WE ARE"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global is a purpose-driven business ecosystem supporting entrepreneurs and companies at different stages of growth.

We are not an NGO.

We are not a motivational brand.

We are a venture-building platform focused on execution, sustainability, and measurable impact."
                  imageUrl="/images/slide1.png"
                  // imageRight={true}
                //   isButton={true}
                />
           <ImageTextSection
                  badgeText="OUR STORY"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global was created in response to a persistent gap:

ideas without execution pathways don’t change the world.

Across Africa, we observed founders with powerful ideas but limited access to mentorship, tools, and structured support. Traditional models were either inaccessible, theoretical, or disconnected from real business outcomes.

Impactpreneur Global exists to change that by providing practical, founder-centric support that turns ideas into businesses and businesses into engines of impact."
                  imageUrl="/images/slide1.png"
                  imageRight={true}
                //   isButton={true}
                />
           <ImageTextSection
                  badgeText="MISSION & VISION"
                  // title="Transform Your Workflow"
                  body="Our Mission
To democratize entrepreneurship by enabling African entrepreneurs and businesses to move from ideation to sustainable execution through accessible, actionable, and globally relevant support.

Our Vision
A world where every idea for good regardless of origin is met with mentorship, visibility, and strategic support, and where Africa stands as a global hub for inclusive innovation."
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
         {profileData.map((profile) => (
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
                  body="Impactpreneur Global is home to a growing community of entrepreneurs, founders, business leaders, and innovators committed to building Africa’s future.

Through programs, digital products, and collaborative spaces, we enable learning, partnership, and long-term growth."
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