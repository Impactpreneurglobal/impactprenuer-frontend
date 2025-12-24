"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";


export default function Contact(){
    return(
        <GeneralLayout>
        <main>

            <HeroSection
                badgeText="CONTACT"
                title="Get in Touch"
                body="Have questions, need guidance, or want to partner with us? Reach out to Impactprenuer Global and let’s explore how we can work together to drive sustainable change. Our team is ready to assist you with programs, collaborations, digital products, and general inquiries."
                imageUrl="images/slide1.png"
            />
        </main>

        </GeneralLayout>
    )
}