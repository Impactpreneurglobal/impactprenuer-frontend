import React from 'react';
import { Clock, MapPin, Calendar, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from "@/src/components/ui/button";

// 1. Define the interface for the Event Card Props
export interface EventCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  time: string;
  location: string;
  date: string;
  spotsAvailable: string;
  registrationUrl?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  imageUrl,
  tag,
  time,
  location,
  date,
  spotsAvailable,
}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full max-w-sm">
      {/* Card Image Container */}
      <div className="relative h-48 w-full bg-gray-100">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        {/* Dynamic Badge Tag (e.g., "Summit") */}
        <span className="absolute top-4 left-4 bg-white text-emerald-600 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {tag}
        </span>
      </div>

      {/* Card Content Content Layout */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        {/* Metadata Details Grid Row Elements */}
        <div className="space-y-3 mb-6 text-sm text-gray-600 flex-1">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <UserCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{spotsAvailable}</span>
          </div>
        </div>

        {/* Action Registration Trigger Button */}
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-5 font-semibold text-sm flex items-center justify-center gap-2 group">
          Register Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};