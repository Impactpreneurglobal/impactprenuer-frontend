"use client"

import { TeamDetail } from "@/src/components/common/TeamDetailCard";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { useState } from "react"
import  ProfileCard   from "@/src/components/common/ProfileCard";
import { Button } from "@/src/components/ui/button";
import { CarouselCard } from "@/src/components/blocks/Carousel";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { FeatureCard } from "@/src/components/blocks/FeatureCard";
import {ProgramCard} from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import profileData from "@/src/ProfileData";





export default function TeamDetailPage(){
    
    return(
        <GeneralLayout>
        <main>

           <TeamDetail
            name="Daniel Dominic"
            title="Lead Software Engineer"
            bio="Daniel is a full-stack developer with experience in Django, Next.js, and UX design. He focuses on building scalable and user-friendly digital products."
            imageUrl="/images/profile1.jpg"
            socialLinks={{
                twitter: "https://twitter.com/daniel_dominic1",
                linkedin: "https://linkedin.com/in/daniel-dominic",
                github: "https://github.com/danieldominic",
            }}
            />

      <section className="py-16 px-4 sm:px-6 lg:px-20">
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left */}
          <div className="space-y-2">

            <h1 className="text-[20px] sm:text-[20px] font-dm-sans text-[#8A8A8A] font-normal">
              More team members
            </h1>
          </div>

          {/* Right - hidden on mobile */}
          <div className="hidden sm:flex">
            <Link href="/our-team">
            <Button variant="ghost" className="flex items-center gap-1">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
            </Link>
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
        </main>

        </GeneralLayout>
    )
}