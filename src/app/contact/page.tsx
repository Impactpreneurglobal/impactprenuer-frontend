"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { ContactForm } from "@/src/components/blocks/ContactForm";

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
           <section className="bg-background py-16">
            <div className="py-5 px-4 sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-top">
                
                {/* Left: Image + Text */}
                <ImageTextSection
                    badgeText="CONTACT US"
                    body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."

                />

                {/* Right: Contact Form */}
                <div className="flex justify-center lg:justify-end pt-10">
                    <ContactForm />
                </div>

                </div>
            </div>
            </section>


        </main>

        </GeneralLayout>
    )
}