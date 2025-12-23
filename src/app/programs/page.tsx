"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import {Header} from "@/src/components/common/Header";


export default function Programs(){
    return(
    <main>

        <Header />
        <HeroSection
            badgeText="PROGRAMS"
            title="Programs Designed to Unlock Potential and Drive Real Change"
            body="Explore Impactprenuer Global’s transformative programs built to empower individuals, nonprofits, and social entrepreneurs with practical skills, mentorship, and tools for long-term impact. From leadership development to capacity-building workshops and community-driven initiatives, our programs are shaping a new generation of purpose-driven African changemakers."
            imageUrl="images/slide1.png"
          />
    </main>
    )
}