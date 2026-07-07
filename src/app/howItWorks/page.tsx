
import React from 'react';
import { User, Users, Rocket, Award } from 'lucide-react';
import PathCard from '@/src/components/common/PathCard';
import FaqItem from '@/src/components/common/FaqItem';
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import CtaSection from '@/src/components/blocks/CtaSection';

const HowItWorksContent = () => {

    const cardsData = [
    {
      icon: User,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500',
      title: 'Join Our Community',
      description: 'Create your profile and tell us about your impact venture. Get instant access to our global network of entrepreneurs, mentors, and resources.',
      features: [
        'Complete your entrepreneur profile',
        'Define your impact goals',
        'Explore community resources'
      ]
    },
    {
      icon: Users,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-400',
      title: 'Connect with Mentors',
      description: 'Get matched with experienced mentors in your industry who understand the unique challenges of building impact-driven businesses.',
      features: [
        'AI-powered mentor matching',
        'Schedule 1-on-1 sessions',
        'Join peer learning groups'
      ]
    },
    {
      icon: Rocket,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      title: 'Access Programs & Events',
      description: 'Participate in workshops, masterclasses, and networking events designed to accelerate your growth and expand your impact.',
      features: [
        'Monthly skill-building workshops',
        'Quarterly networking summits',
        'Exclusive partnership opportunities'
      ]
    },
    {
      icon: Award,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-400',
      title: 'Scale Your Impact',
      description: 'Leverage our ecosystem to secure funding, find strategic partners, and grow your venture while staying true to your mission.',
      features: [
        'Investor introduction program',
        'Partnership marketplace',
        'Impact measurement tools'
      ]
    }
  ];

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

  return (
    <GeneralLayout>   
        <main className="">
          <section className="max-w-3xl  mx-auto text-center py-20 ">
        <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Your Journey to Impact
        </span>
        <h1 className="text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
          How It <span className="text-green-500 block sm:inline">Works</span>
        </h1>
        <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
          Join thousands of impact entrepreneurs who are transforming their ideas into sustainable ventures. 
          Our structured approach helps you connect, learn, and grow at every stage.
        </p>
      </section>

      {/* Grid Platform Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Path to Success</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Follow our proven framework to transform your impact idea into a thriving venture.
          </p>
        </div>

        {/* Dynamically Populated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {cardsData.map((card, idx) => (
            <PathCard key={idx} {...card} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-medium text-sm px-6 py-3 rounded-md transition-colors duration-200 group">
            Get Started
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
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

export default HowItWorksContent;


