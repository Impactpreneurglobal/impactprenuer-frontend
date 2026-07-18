// components/FeatureCard.tsx
import React from "react";
import { Card } from "@/src/components/ui/card";
import { UserPlus, Target, Rocket, Award, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title?: string;
  body: string;
  stepNumber: string; // e.g. "01", "02"
  iconType: "user" | "target" | "rocket" | "scale"; 
}

export function FeatureCard({
  title,
  body,
  stepNumber,
  iconType,
}: FeatureCardProps) {
  
  // Map icon types to Lucide Icons
  const icons: Record<string, LucideIcon> = {
    user: UserPlus,
    target: Target,
    rocket: Rocket,
    scale: Award,
  };

  const IconComponent = icons[iconType] || UserPlus;

  return (
    <Card className="relative overflow-visible rounded-[20px] border border-gray-100 bg-white p-6 pt-8 flex flex-col max-w-[260px] min-h-[220px] shadow-sm text-left">
      
      {/* Floating step number badge at top-left boundary */}
      <div className="absolute -top-3.5 left-6 bg-[#dcfce7] text-[#15803d] text-xs font-bold px-2.5 py-1 rounded-full border border-[#bbf7d0]">
        {stepNumber}
      </div>

      {/* Styled icon container matching design */}
      <div className="w-12 h-12 rounded-[12px] bg-[#f2fbf5] flex items-center justify-center mb-5 mt-1 border border-[#e2f7ea]">
        <IconComponent className="w-5 h-5 text-[#00801a]" />
      </div>

      {/* Text content */}
      <div className="space-y-2 flex-1">
        {title && (
          <h3 className="text-[16px] font-bold text-[#0f172a] tracking-tight">
            {title}
          </h3>
        )}

        <p className="text-gray-500 text-[13px] leading-relaxed">
          {body}
        </p>
      </div>
    </Card>
  );
}