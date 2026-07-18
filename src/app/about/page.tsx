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
// import { ArrowRight } from "lucide-react";
import  ProfileCard   from "@/src/components/common/ProfileCard";
import { SponsorSection } from "@/src/components/common/SponsorSection";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import profileData from "@/src/ProfileData";
import { User, Users, Rocket, Award } from 'lucide-react';
import {StoryCard} from '@/src/components/common/StoryCard';
import {View, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import {CoreValueCard}  from "@/src/components/common/CoreValueCard";
import { TeamCard } from "@/src/components/common/TeamCard";
import CtaSection from '@/src/components/blocks/CtaSection';
import { Quote } from 'lucide-react';

export default function About(){

   const MissionCards = [
    {
      id: 1,
      title: "Our Mission",
      subtitle: `Our mission is to democratize entrepreneurship by making
ideation to launch pathways accessible, locally relevant,
and globally inspired starting with African changemakers.`,
      imageUrl: "/images/slide1.png",
      Icon: Users,
      iconBgColor: "bg-green-50",
      iconColor: "text-green-600",
      classname: "bg-white"
      
    },
    {
      id: 2,
      title: "Our Vision",
      subtitle: `Our vision is to transform the global landscape by ensuring every impactful idea receives the mentorship and visibility it deserves, positioning Africa as the ultimate epicenter of inclusive innovation.`,
      imageUrl: "/images/slide1.png",
      Icon: View,
      iconBgColor: "bg-[#46F4464D]",
      iconColor: "text-white",
      classname: "bg-[#008000] text-white"
    },
  ]
    const cardsData = [
    {
      icon: User,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500',
      title: 'Join Our Community',
      description: 'Create your profile and tell us about your impact venture. Get instant access to our global network of entrepreneurs, mentors, and resources.',
      
    },
    {
      icon: Users,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-400',
      title: 'Connect with Mentors',
      description: 'Get matched with experienced mentors in your industry who understand the unique challenges of building impact-driven businesses.',
      
    },
    {
      icon: Rocket,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      title: 'Access Programs & Events',
      description: 'Participate in workshops, masterclasses, and networking events designed to accelerate your growth and expand your impact.',
      
    },
    {
      icon: Award,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-400',
      title: 'Scale Your Impact',
      description: 'Leverage our ecosystem to secure funding, find strategic partners, and grow your venture while staying true to your mission.',
      
    }
  ];


 const TeamData = {
  founders: [
    {
      id: 1,
      name: "George Bassey",
      role: "Co-Founder & Chief Executive Officer (CEO)",
      imageUrl: "/images/Profile1.png",
      linkedinUrl: "https://linkedin.com",
      email: "george@example.com",
    },
    {
      id: 2,
      name: "Promise Joshua",
      role: "Co-Founder & Chief Vision Officer (CVO)",
      imageUrl: "/images/Profile2.png",
      linkedinUrl: "https://linkedin.com",
      email: "promise@example.com",
    },
  ],
  members: [
    {
      id: 3,
      name: "Martin Malokong",
      role: "Chief Operating Officer (COO)",
      imageUrl: "/images/Profile3.png",
      linkedinUrl: "https://linkedin.com",
      email: "martin@example.com",
    },
    {
      id: 4,
      name: "Salawu Primsi",
      role: "Marketing Content Lead",
      imageUrl: "/images/Profile4.png",
      linkedinUrl: "https://linkedin.com",
      email: "salawu@example.com",
    },
    {
      id: 5,
      name: "John Doe",
      role: "Head of Social Media Strategy",
      imageUrl: "/images/Profile5.png",
      linkedinUrl: "https://linkedin.com",
      email: "john@example.com",
    },
    {
      id: 6,
      name: "Desmond Atologwu",
      role: "Chief Product Officer (CPO)",
      linkedinUrl: "https://linkedin.com",
      email: "desmond@example.com",
    },
    {
      id: 7,
      name: "David Ahanotu",
      role: "Chief Marketing Officer (CMO)",
      linkedinUrl: "https://linkedin.com",
      email: "david@example.com",
    },
    {
      id: 8,
      name: "David Chukwuebuka",
      role: "Chief Technology Officer (CTO)",
      linkedinUrl: "https://linkedin.com",
      email: "david.c@example.com",
    },
  ],
};

   return(
     <GeneralLayout>
       <main>
       <section className="max-w-3xl  mx-auto text-center py-20 ">
        <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          About Us
        </span>
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Building a Global Community <br /> of <br /> <span className="text-green-500 block sm:inline">Impact Enterpreneurs</span>
        </h1>
        <p className="text-gray-500 text-base  mx-auto leading-relaxed">
         We're on a mission to empower entrepreneurs who are creating meaningful change, providing them with <br /> the tools, connections, and support to build sustainable impact ventures.
        </p>
      </section>
      <section className="w-full bg-white py-16 px-4 font-dm-sans">
      <div className="max-w-3xl mx-auto flex flex-col">
        
        <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">
          Our Story
        </h2>

        <div className="space-y-6 text-sm sm:text-[15px] text-gray-600 leading-relaxed font-light">
          <p>
            Impactpreneur Global started as something simple: a community where people shared books, ideas, and resources freely. Just people who believed knowledge should be accessible to everyone.
          </p>
          <p>
            But something kept happening. Across the group, from different countries and different backgrounds, the same need kept surfacing: People weren't just looking for information. They needed real guidance on how to build, run, and grow their businesses. The books were helpful, but the gap was bigger than that.
          </p>
          <p>
            So we made a decision that still drives everything we do today: Purpose without sustainability is just good intention. We were going to build something that created genuine impact and generated real profit, because one without the other doesn't last, and our community deserved something built to last.
          </p>
          <p>
            That conviction became the foundation. And from it we built something bigger than a group chat: a home for every entrepreneur who was told to wait, to shrink, or to choose between impact and profit.
          </p>
          <p className="font-normal text-gray-900">
            We never believed that was a choice. We still don't.
          </p>
        </div>

        <div className="bg-[#008000] relative mt-12 rounded-[25px] sm:p-8 max-w-2xl mx-auto w-full h-[165px]">
          <div className="absolute inset-0 translate-x-2 w-full bg-green-100 h-full rounded-[25px] sm:p-8">
            <div className="absolute top-4 right-6 text-emerald-600/20">
            <Quote className="w-8 h-8 rotate-180 fill-current" />
            </div>

          <blockquote className="text-gray-800 text-sm sm:text-[15px] font-medium leading-relaxed mb-6 pr-4">
            "Impactpreneur Global taught me how to change my passion into profit, by creating a business that ignites my soul and inspires others."
          </blockquote>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-purple-500" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm tracking-tight">
                Loli Sachedina
              </h4>
              <p className="text-[11px] text-gray-400 font-medium">
                Impact Entrepreneur
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
      <section className="flex flex-col justify-center items-center mx-auto max-w-6xl ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- gap-8 place-items-center mt-8">
                    {MissionCards.map((program) => (
                      <StoryCard
                        key={program.id}
                        // id={program.id}
                        title={program.title}
                        subtitle={program.subtitle}
                        imageUrl={program.imageUrl}
                         Icon={program.Icon}
                         iconBgColor={program.iconBgColor}   
                         iconColor={program.iconColor}
                         classname={program.classname}
        
                      />
                    ))}
                  </div>
      </section>
      <section className="max-w-6xl mx-auto text-center py-20 ">
        
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Our core Value
        </h1>
        <p className="text-gray-500 text-base  mx-auto leading-relaxed">
          These principles guide everything we do and shape how we support our <br /> community.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-8">
                    {cardsData.map((program) => (
                      <CoreValueCard
                        // key={program.id}
                        // id={program.id}
                        title={program.title}
                        subtitle={program.description}
                        // imageUrl={program.imageUrl}
                         Icon={program.icon}
                         iconBgColor={program.iconBg}   
                         iconColor={program.iconColor}
                         
        
                      />
                    ))}
                  </div>
      </section>
      <section className="max-w-6xl mx-auto text-center py-20 ">
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Meet our Team
        </h1>
        <p className="text-gray-500 text-base  mx-auto leading-relaxed">
         Passionate leaders dedicated to empowering entrepreneurs and creating global impact.
        </p>
        <div className="max-w-5xl mx-auto flex flex-col mt-7 gap-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {TeamData.founders.map((founder) => (
              <div key={founder.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] max-w-[280px]">
                <TeamCard {...founder} />
              </div>
            ))}
          </div>

          {/* Row 2 & 3: Standard Members Block (Centered, 3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {TeamData.members.map((member) => (
              <div key={member.id} className="w-full max-w-[280px]">
                <TeamCard {...member} />
              </div>
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