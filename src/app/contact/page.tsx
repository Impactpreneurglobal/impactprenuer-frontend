"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { Badge } from "@/src/components/ui/badge";
import CtaSection from "@/src/components/blocks/CtaSection"
import FaqItem from '@/src/components/common/FaqItem';
import { Mail, Clock, MapPin, Phone } from 'lucide-react';
import { ContactForm } from "@/src/components/blocks/ContactForm";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact(){
    const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (data: { fullName: string; email: string; message: string; subject?: string }) => {
    setIsSubmitting(true);
    
    if (!data.fullName || !data.email || !data.message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Form data received from props handler:", data);
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

const faqData = [
  {
    question: 'Who can join Impactpreneur Global?',
    answer: 'Impactpreneur Global is open to all impact entrepreneurs, founders, innovators, and changemakers looking to scale sustainable ventures.'
  },
  {
    question: 'Is there a membership fee?',
    answer: 'We offer both free community tiers and premium accelerator options. Detailed pricing can be found on our plans page.'
  },
  {
    question: 'What type of events do you organize?',
    answer: 'We host monthly skill-building workshops, quarterly networking summits, masterclasses with industry veterans, and exclusive investor matchmaking sessions.'
  },
  {
    question: 'How can I contribute as a partner or mentor?',
    answer: 'You can apply through our dedicated "Join as a Mentor" portal, where our team will match your expertise with relevant impact cohorts.'
  }
];
    return(
        <GeneralLayout>
        <main>
     <section className="max-w-3xl  mx-auto text-center py-20 ">
        <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Let's Connect
        </span>
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Let's Connect
        </h1>
        <p className="text-gray-500 text-base  mx-auto leading-relaxed">
            We’re here to support your journey. Whether you have questions, partnership ideas, or need guidance, our team is ready to help.
        </p>
      </section>
      <section className="w-full bg-white py-16 px-4 font-dm-sans text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <h2 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          Contact Form
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed mb-14">
          For specific inquiries, choose the relevant category to help us respond faster.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          <div className="md:col-span-5 bg-[#E8F5E9]/60 border border-[#C8E6C9]/40 rounded-[24px] px-3 w-[450px] h-[253px] flex flex-col justify-center space-y-6 space-x-4">
            <div className="flex items-start gap-4 text-sm text-gray-700">
              <Mail className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
              <span className="break-all font-light">support@impactpreneurglobal.org</span>
            </div>
            
            <div className="flex items-start gap-4 text-sm text-gray-700">
              <Clock className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
              <span className="font-light">We typically respond within 24–48 hours.</span>
            </div>

            <div className="flex items-start gap-4 text-sm text-gray-700">
              <MapPin className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
              <span className="font-light">
                San Francisco Convention Center –  San <br /> Francisco, CA + Virtual Access
              </span>
            </div>

            <div className="flex items-start gap-4 text-sm text-gray-700">
              <Phone className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
              <span className="font-light">+234 703 234 XXXX</span>
            </div>
          </div>

          <div className="md:col-span-7 w-full flex items-center">
            <ContactForm onSubmit={handleFormSubmit} isLoading={isSubmitting} />
          </div>

        </div>
      </div>
    </section>
           <section className="max-w-3xl mx-auto mt-24 py-12">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-sm">
                  Everything you need to know about joining and participating in our community.
                </p>
              </div>
      
              <div className="mt-6 border-t border-gray-200">
                {faqData.map((faq, idx) => (
                  <FaqItem key={idx} question={faq.question} answer={faq.answer} />
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