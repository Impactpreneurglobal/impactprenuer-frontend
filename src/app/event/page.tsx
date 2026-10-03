import React from 'react'
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import {Badge} from "@/src/components/ui/badge"
import { ArrowRight, Users, MessageSquare, Calendar, TrendingUp, LocateIcon, Clock1 } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { GiCheckMark } from 'react-icons/gi';
import CtaSection from '@/src/components/blocks/CtaSection';
import { EventCardProps } from '@/src/components/common/EventCard';
import {EventCard} from "@/src/components/common/EventCard"
import {Button} from "@/src/components/ui/button"


const page = () => {

  const EventData: EventCardProps[] = [
  {
    id: 1,
    title: "Impactpreneur Builders Bootcamp", 
    description: "Connect with seasoned experts to gain the practical execution knowledge you need to acquire users, structure organizational culture, and successfully launch your product to the next level.",
    imageUrl: "/images/Event2.png",
    tag: "Register Now",
    time: "7:00 PM WAT — Every Friday",
    location: "Virtual Event",
    date: "October 17, 2026",
    spotsAvailable: "30 spots available"
  },
  {
    id: 2,
    title: "Impact AI Bootcapm",
    description:  "Master advanced AI tools and business automation strategies to scale operations, build sustainable venture structures, and drive high-growth impact across regions.",
    imageUrl: "/images/Event2.png",
    tag: "Register Now",
    time: "9:00 AM - 6:00 PM EAT",  
    location: "Live in Ambositra & Fianarantsoa, Madagascar",
    date: "March 15-16, 2026",
    spotsAvailable: "300+ spots available"
  },
  {
    id: 3,
    title: "Building Businesses That Solve Real Problems 2.0 (East Africa Webinar)",
    description: "Discover structural strategies to turn systemic regional challenges into scalable business opportunities alongside impact-driven innovators from Kenya and Uganda.",
    imageUrl: "/images/Event2.png",
    tag: "Register Now",
    time: "4:00 PM - 7:00 PM EAT",
    location: "Virtual Event",
    date: "November 6-7 2026",
    spotsAvailable: "30 attendees (90+ signups)"
  }
];

  return (
    <GeneralLayout>
        
        <main>
        <section className="max-w-3xl  mx-auto text-center py-20 ">
        <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Join Our Community Events
        </span>
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Connect, Learn, <span className="text-green-500 block sm:inline">and Grow Together</span>
        </h1>
        <p className="text-[17px] font-dm-sans">
          Join our global community of impact entrepreneurs at workshops, networking sessions, and masterclasses designed to accelerate your journey from idea to impact.
        </p>
      </section>
      <section className="max-w-6xl mx-auto text-center py-3 ">
         <h2 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Featured Events
        </h2>
        <p className="text-[17px] font-dm-sans">
          Our flagship event bringing together the brightest minds in <br /> impact entrepreneurship.
        </p>
        <div className="flex justify-center gap-4 items-center mt-10 ">
          <div className="w-[60%] flex justify-end">
            <div className="w-[580px] h-[684px] bg-[url('/images/Events.png')] bg-cover bg-center shadow-md flex items-end p-4 relative">
             <div className="absolute top-4 left-4">
              <Badge className="rounded">Community</Badge>
             </div>
         </div>
          </div>
         <div className="flex flex-col mx-auto justify-start items-start gap-2 h-[684px]">
          <div className="w-[400px] h-[320px] flex flex-col justify-start items-start">
            <h1 className="text-[17px] text-start font-bold mb-2">Impactpreneur Global Annual 2026</h1>
            <p className="text-[15px] text-start mb-2">Join purpose-driven founders, established entrepreneurs from over 20 countries and 4 continents for a two-day intensive digital experience focused on building smarter, not harder. This bootcapm breaks down leverage advanced technology to turn passion into systems automate core operations and scale profits </p>
            <div className="flex items-center justify-center gap-1.5 mt-3">
            <Clock1 className="w-4 h-4 text-gray-500" />
             <span className="text-[15px]">6:30 PM WAT - Each Day</span>
           </div>
           <div className="flex justify-center gap-1.5 mt-3">
            <LocateIcon className="w-[17px] h-[17px] text-gray-500" />
             <span className="text-[15px]">Virtual Access(Google Meet)</span>
           </div>
           <div className="flex items-center justify-center gap-1.5 mt-3">
            <Calendar className="w-[17px] h-[17px] text-gray-500" />
             <span className="text-[15px]">August 28-29, 2026</span>
           </div>
          </div>

          <div className="border border-gray-300 mt-[-30px] w-full"/>

          <div className="w-[320px] h-[320px] my-2 flex flex-col rounded-lg justify-start items-start bg-[#00800012]">
            <h3 className="font-bold mt-4 mx-5">What’s Included:</h3>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-1.5 mt-3">
            <GiCheckMark className="w-[17px] h-[17px] text-gray-500" />
             <span className="text-[15px]">Expert-Led Masterclasses </span>
           </div>
           <div className="flex items-center justify-center gap-1.5 mt-3 mx-5">
            <GiCheckMark className="w-[17px] h-[17px] text-gray-500" />
             <span className="text-[15px]">Automation Frameworks</span>
           </div>
           <div className="flex items-center justify-center gap-1.5 mt-3">
            <GiCheckMark className="w-[17px] h-[17px] text-gray-500" />
             <span className="text-[15px]">Financial Literacy Sessions</span>
           </div>
           <div className="flex items-center justify-center gap-1.5 mt-3">
            <GiCheckMark className="w-[17px] h-[17px] text-gray-500" />
             <span className="text-[15px]">Venture Building Resources</span>
           </div>
           <div className="flex items-center justify-center gap-1.5 mt-3">
            <GiCheckMark className="w-[17px] h-[17px] text-gray-500" />
             <span className="text-[15px]">Global Community Network</span>
           </div>
            </div>
          </div>
          <Button>Register Now </Button>
         </div>
          <div>

          </div>
        </div>
      </section>
      <section className="max-w-6xl  mx-auto text-center py-20 ">
        
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Upcoming Events
        </h1>
        <p className="text-[17px] font-dm-sans">
          Join our global ecosystemof impactpreneursat workshops, networking sessions, and masterclasses designed to accelerate your journey from idea to impact
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch mt-5">
        {EventData.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            tag={event.tag}
            time={event.time}
            location={event.location}
            date={event.date}
            spotsAvailable={event.spotsAvailable}
          />
        ))}
      </div>
      </section>
      <section>
      <CtaSection/>
      </section>
        </main>
    </GeneralLayout>
  )
}

export default page








// Recurring Event



// Number 2 i highlighted






// Number 3 i highlighted


