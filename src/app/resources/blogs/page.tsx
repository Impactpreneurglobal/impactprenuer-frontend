"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import {Header} from "@/src/components/common/Header";


export default function Blogs(){
    return(
    <main>

        <Header />
        <HeroSection
            badgeText="BLOGS"
            title="Our Blogs"
            body="Explore Impactprenuer Global’s transformative programs built to empower individuals, nonprofits, and social entrepreneurs with practical skills, mentorship, and tools for long-term impact. From leadership development to capacity-building workshops and community-driven initiatives, our programs are shaping a new generation of purpose-driven African changemakers."
            imageUrl="images/slide1.png"
          />
    </main>
    )
}