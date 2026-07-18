"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/src/components/ui/button";
import Link from 'next/link';


export interface SubItem {
  id: string; 
  title: string;
  description: string;
  buttonText: string;
}

export interface AccordionItemProps {
  id: string | number;
  title: string;
  badgeText: string;
  badgeColorClass: string; 
  iconBgClass: string;     
  icon: React.ReactNode;
  description: string;
  subItems: SubItem[];
}

export const ServiceAccordion: React.FC<AccordionItemProps> = ({
  title,
  badgeText,
  badgeColorClass,
  iconBgClass,
  icon,
  description,
  subItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white border border-gray-100 rounded-3xl p-6 mb-4 shadow-sm transition-all duration-200">
      
      <div 
        className="flex items-start justify-between cursor-pointer gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 items-start">
          <div className={`p-3 rounded-xl flex-shrink-0 ${iconBgClass}`}>
            {icon}
          </div>
          
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">{title}</h3>
              <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${badgeColorClass}`}>
                {badgeText}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
              {description}
            </p>
          </div>
        </div>

        <div className="text-gray-400 p-1 hover:bg-gray-50 rounded-full flex-shrink-0 mt-1">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-6 border-t border-gray-100 pt-2 space-y-6">
          {subItems.map((sub, index) => (
            <div 
              key={sub.id} 
              className={`pt-6 flex flex-col gap-3 ${index !== subItems.length - 1 ? 'border-b border-gray-100 pb-6' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-green-50 text-green-700 text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                    {sub.id}
                  </span>
                  <h4 className="font-bold text-gray-900 text-[15px]">
                    {sub.title}
                  </h4>
                </div>
                
                <Link href="/productServices/requestServices/">
                
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold px-4 py-2 h-9 self-start sm:self-auto">
                  {sub.buttonText}
                </Button>
                </Link>
              </div>

              <p className="text-gray-500 text-sm max-w-3xl pl-10 leading-relaxed">
                {sub.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};