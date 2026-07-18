"use client"

import React, { useState } from 'react'
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { Users, User, Rocket, Award } from 'lucide-react';
import { ContributeCard } from '@/src/components/common/ContributeCard';
import { toast } from "sonner"
import { ApplicationForm } from '@/src/components/blocks/ApllicationForm';
import { GiCheckMark } from 'react-icons/gi';

const Page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null)

    const handleFormSubmit = async (data: {fullName: string, email: string, country: string, startup: string, des: string, join: string}) => {
        setIsSubmitting(true)
        
        if(!data.fullName || !data.email || !data.country || !data.des || !data.join){
            toast.error("Please fill in all fields")
            setIsSubmitting(false)
            return;
        }

        try {
          console.log("form submitted successfully:", data)
          toast.success("Message sent successfully!")
        } catch(error) {
          console.log("Something went wrong. Please try again")
        } finally {
          setIsSubmitting(false)
        }
    }

    const cardsData = [
      {
        id: 1,
        icon: User,
        iconBg: 'bg-green-50',
        iconColor: 'text-green-500',
        title: 'Join Our Community',
        description: 'Create your profile and tell us about your impact venture. Get instant access to our global network of entrepreneurs, mentors, and resources.',
      },
      {
        id: 2,
        icon: Users,
        iconBg: 'bg-red-50',
        iconColor: 'text-red-400',
        title: 'Connect with Mentors',
        description: 'Get matched with experienced mentors in your industry who understand the unique challenges of building impact-driven businesses.',
      },
      {
        id: 3,
        icon: Rocket,
        iconBg: 'bg-purple-50',
        iconColor: 'text-purple-500',
        title: 'Access Programs & Events',
        description: 'Participate in workshops, masterclasses, and networking events designed to accelerate your growth and expand your impact.',
      },
      {
        id: 4,
        icon: Award,
        iconBg: 'bg-orange-50',
        iconColor: 'text-orange-400',
        title: 'Scale Your Impact',
        description: 'Leverage our ecosystem to secure funding, find strategic partners, and grow your venture while staying true to your mission.',
      }
    ];

  return (
    <GeneralLayout>
      <main>
        <section className="max-w-3xl mx-auto text-center py-20 px-4">
          <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Join 10,000+ Impact Entrepreneurs
          </span>
          <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Join a Global Ecosystem for <br />
            <span className="text-green-500 block sm:inline">and Grow Together</span>
          </h1>
          <p className="text-[17px] font-dm-sans text-gray-500">
              Connect with mentors, partners, and fellow entrepreneurs who are building sustainable ventures and creating meaningful change around the world.
          </p>
          <div className='flex justify-between items-center mt-5 w-full max-w-md mx-auto'>
            <div>
              <h2 className="font-dm-sans text-black text-[25px] font-medium">10K+</h2>
              <p className='font-light text-[12px] text-gray-500'>Members</p>
            </div>
            <div>
              <h2 className="font-dm-sans text-black text-[25px] font-medium">20+</h2>
              <p className='font-light text-[12px] text-gray-500'>Events</p>
            </div>
            <div>
              <h2 className="font-dm-sans text-black text-[25px] font-medium">20+</h2>
              <p className='font-light text-[12px] text-gray-500'>Countries</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto text-center py-3 px-4">
          <h2 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
            How Do You Want To Contribute?
          </h2>
          <p className="text-[17px] font-dm-sans text-gray-500">
              Select your primary role to get started with a personalized onboarding experience.
          </p>
          
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 mt-8">
            {cardsData.map((program) => {
              const isSelected = selectedCardId === program.id

              return (
                 <div 
                    key={program.id}
                    onClick={() => setSelectedCardId(program.id)}
                    className={`relative cursor-pointer transition-all duration-200 active:scale-95 text-left rounded-3xl ${
                    isSelected ? '' : ''}`}
              >
                
                {isSelected && (
                    <div className="absolute top-4 right-4 z-10 bg-green-500 text-white p-1 rounded-full flex items-center justify-center shadow-sm">
                      <GiCheckMark className="w-3.5 h-3.5" />
                    </div>
                  )}

                <ContributeCard
                  title={program.title}
                  subtitle={program.description}
                  Icon={program.icon}
                  iconBgColor={program.iconBg}   
                  iconColor={program.iconColor}
                />
              </div>
              )
             
            })}
          </div>
        </section>

        {selectedCardId !== null && (
          <section className='mt-12 max-w-3xl mx-auto text-center py-10 px-4 border-t border-gray-100'>
            <h2 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
              Complete Your Application
            </h2>
            <p className="text-[17px] font-dm-sans text-gray-500 mb-8">
              Tell us a bit about yourself and why you want to be part of this community.
            </p>
            <div className="w-full flex items-center justify-center">
              <ApplicationForm onSubmit={handleFormSubmit} isLoading={isSubmitting} />
            </div>
          </section>
        )}
      </main>
    </GeneralLayout>
  )
}

export default Page;