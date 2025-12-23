"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import {Header} from "@/src/components/common/Header";


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
    </main>
    )
}