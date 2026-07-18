import React from 'react'
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { Briefcase, GraduationCap, Users, Cpu, Handshake } from 'lucide-react';
import { AccordionItemProps } from '@/src/components/common/ServiceAccordion';
import CtaSection from '@/src/components/blocks/CtaSection';
import {ServiceAccordion} from "@/src/components/common/ServiceAccordion"
// import {Badge} from "@/src/components/ui/badge"

const RequestPage = () => {
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


  ];

  return (
    <GeneralLayout>
      <main>
        <section className="max-w-6xl mx-auto text-center py-20 px-4">
          <span className="inline-block bg-green-50 text-[#008000] mt-2 text-[15px] font-semibold px-3 py-1 rounded-full mb-4">
         hey
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

export default RequestPage