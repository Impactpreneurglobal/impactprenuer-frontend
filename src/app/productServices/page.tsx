import React from 'react'
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { Briefcase, GraduationCap, Users, Cpu, Handshake } from 'lucide-react';
import { AccordionItemProps } from '@/src/components/common/ServiceAccordion';
import CtaSection from '@/src/components/blocks/CtaSection';
import {ServiceAccordion} from "@/src/components/common/ServiceAccordion"
// import {Badge} from "@/src/components/ui/badge"

const page = () => {
  const ServiceData: AccordionItemProps[] = [
    {
      id: 'services',
      title: 'Services',
      badgeText: 'SERVICES',
      badgeColorClass: 'bg-green-50 text-green-600',
      iconBgClass: 'bg-green-50 text-green-600',
      icon: <Briefcase className="w-5 h-5" />,
      description: "Professional services designed to help entrepreneurs build, brand, launch, and scale their ventures through expert strategy, execution, and digital support.",
      subItems: [
        {
          id: '01',
          title: 'Web Development for Entrepreneurs & Businesses',
          description: 'Professional, conversion-focused website design and development tailored for African entrepreneurs and businesses at every stage.',
          buttonText: 'Request Service'
        },
        {
          id: '02',
          title: 'World-Class Branding',
          description: 'Full brand identity development, name, logo, color systems, typography, brand guidelines, and positioning strategy.',
          buttonText: 'Request Service'
        },
        {
          id: '03',
          title: 'Business Registration & Legal Setup',
          description: 'End-to-end support for entrepreneurs registering businesses across African markets and internationally.',
          buttonText: 'Request Service'
        },
        {
          id: '04',
          title: 'Business Registration & Legal Setup',
          description: 'Done-for-you content creation, social media management, and digital marketing execution for entrepreneurs and SMEs.',
          buttonText: 'Request Service'

        },
        {
          id: '05',
          title: 'Content & Social Media Management',
           description: 'Done-for-you content creation, social media management, and digital marketing execution for entrepreneurs and SMEs.',
          buttonText: 'Request Service'
        }
      ]
    },
    {
    id: 'education',
      title: 'Education',
      badgeText: 'LEARNING',
      badgeColorClass: 'bg-purple-50 text-purple-600',
      iconBgClass: 'bg-purple-50 text-purple-600',
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Structured learning programs, membership and certification designed to equip founders with world-class skills.',
      subItems: [
        {
          id: '01',
          title: 'Bootcamps for Entrepreneurs & Leaders',
          description: 'Intensive, structured programs equipping founders with the skills, frameworks, and mindset to build and scale businesses.',
          buttonText: 'Request Service'
        },
        {
          id: '02',
          title: 'Webinar Series',
          description: 'Regular high-value webinars featuring expert speakers and actionable frameworks — including the flagship From Zero to Momentum series.',
          buttonText: 'Request Service'
        },
        {
          id: '03',
          title: 'Courses',
          description: 'Self-paced and cohort-based online courses covering business, marketing, technology, leadership, and entrepreneurship.Self-paced and cohort-based online courses covering business, marketing, technology, leadership, and entrepreneurship.',
          buttonText: 'Request Service'
        },
        {
          id: '04',
          title: 'Mentorship Sessions',
          description: 'Structured one-on-one and group mentorship connecting aspiring and established founders with experienced business leaders.',
          buttonText: 'Request Service'

        },
        {
          id: '05',
          title: 'Founder Certificate Program',
           description: "A verifiable certification for founders who complete IG's core curriculum — signaling readiness to partners and investors.",
          buttonText: 'Request Service'
        }
      ]
    },
     {
    id: 'community',
      title: 'Community',
      badgeText: 'Belong-with-us',
      badgeColorClass: 'bg-purple-50 text-purple-600',
      iconBgClass: 'bg-purple-50 text-purple-600',
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Structured learning programs, membership and certification designed to equip founders with world-class skills.',
      subItems: [
        {
          id: '01',
          title: 'Paid Community Subscription',
          description: 'Premium membership tier giving founders access to exclusive resources, live sessions, networking, and founder support tools..',
          buttonText: 'Request Service'
        },
        {
          id: '02',
          title: "Founder's Circle",
          description: "IG's inner circle — a curated, high-trust community of serious founders committed to building and scaling impactful businesses.",
          buttonText: 'Request Service'
        },
        {
          id: '03',
          title: "CEO's Library",
          description: 'A premium, curated knowledge hub — books, frameworks, case studies, and resources handpicked for founders and business leaders.',
          buttonText: 'Request Service'
        },
        {
          id: '04',
          title: 'Regional Chapters',
          description: 'City and country-based IG communities across Africa bringing the global platform into local contexts.',
          buttonText: 'Request Service'

        },
        {
          id: '05',
          title: 'Accountability Pods',
           description: 'Small curated groups of 5–8 founders meeting regularly to share progress, solve problems, and hold each other accountable.',
          buttonText: 'Request Service'
        }
      ]
    },
     {
    id: 'technology',
      title: 'Technology',
      badgeText: 'Build-with-us',
      badgeColorClass: 'bg-purple-50 text-purple-600',
      iconBgClass: 'bg-purple-50 text-purple-600',
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Structured learning programs, membership and certification designed to equip founders with world-class skills.',
      subItems: [
        {
          id: '01',
          title: 'AI-Powered  Founder Agent',
          description: 'An intelligent AI agent guiding entrepreneurs from idea to launch regardless of country, industry, or stage. Personalized, practical, and globally informed.',
          buttonText: 'Request Service'
        },
        {
          id: '02',
          title: 'Founder Rewards Hub',
          description: 'A digital library of templates, contracts, frameworks, playbooks, and tools every founder needs to build and run a business.',
          buttonText: 'Request Service'
        },
        {
          id: '03',
          title: 'Investor-Founder Matching Platform',
          description: 'A platform connecting African founders with investors, grants, and funding opportunities aligned to their stage and sector.',
          buttonText: 'Request Service'
        },
        {
          id: '04',
          title: 'IG Mobile App',
          description: 'A single platform bringing together community, courses, tools, and founder support — accessible anywhere across Africa and beyond.',
          buttonText: 'Request Service'

        },
     
      ]
    },
     {
    id: 'partnership',
      title: 'Partnerships & Enterprise',
      badgeText: 'grow-with-us',
      badgeColorClass: 'bg-purple-50 text-purple-600',
      iconBgClass: 'bg-purple-50 text-purple-600',
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Structured learning programs, membership and certification designed to equip founders with world-class skills.',
      subItems: [
        {
          id: '01',
          title: 'Coporate Innovation Programs',
          description: 'IG-designed entrepreneurship and innovation training delivered inside corporations for their teams and intrapreneurs.',
          buttonText: 'Request Service'
        },
        {
          id: '02',
          title: 'University Partnership',
          description: 'IG curriculum and programs embedded inside African universities — bringing founder education to students at scale.',
          buttonText: 'Request Service'
        },
        {
          id: '03',
          title: 'Government & NGO Contracts',
          description: 'Entrepreneurship development programs delivered in partnership with government bodies and NGOs across Africa.',
          buttonText: 'Request Service'
        },
        {
          id: '04',
          title: 'Pan-African Brand Sponsorships',
          description: "Strategic sponsorship packages for brands seeking access to IG's 150,000+ entrepreneur audience across 11+ countries.",
          buttonText: 'Request Service'

        }
       
      ]
    },
     


  ];

  return (
    <GeneralLayout>
      <main>
        <section className="max-w-6xl mx-auto text-center py-20 px-4">
          {/* <Badge>Product/Service</Badge> */}
          <span className="inline-block bg-green-50 text-[#008000] mt-2 text-[15px] font-semibold px-3 py-1 rounded-full mb-4">
          Product/Services
        </span>
          <h1 className="text-[27px] font-extrabold text-[#0000008C] mb-4 tracking-tight">
            Tools, programs, and services designed to help <br /> <span className='text-[#46F446]'>Impact-Driven entrepreneurs.</span>  

          </h1>
          <p className="text-[17px] font-dm-sans mx-auto">
            Explore the tools, programs, services, technology, and community support designed to help entrepreneurs build, grow, and <br /> scale impactful ventures across Africa and beyond.
          </p>
          
          {/* Layout adjustment: Grid layout changed to flex or full-width container since accordions look best stacked vertically instead of side-by-side grid cards */}
          <div className="flex flex-col gap-4 text-left max-w-4xl mx-auto mt-10">
            {ServiceData.map((item) => (
              <ServiceAccordion
                key={item.id}
                id={item.id}
                title={item.title}
                badgeText={item.badgeText}
                badgeColorClass={item.badgeColorClass}
                iconBgClass={item.iconBgClass}
                icon={item.icon}
                description={item.description}
                subItems={item.subItems}
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