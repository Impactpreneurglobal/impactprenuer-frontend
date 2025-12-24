// components/FeatureCard.tsx
import React from "react";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

interface FeatureCardProps {
  imageUrl: string;
  title?: string;
  body: string;
  badgeText?: string;
}

export function FeatureCard({
  imageUrl,
  title,
  body,
  badgeText,
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl shadow-md pt-0 flex flex-col max-w-[300px] h-[310px]">
      {/* Image */}
      <div className="relative w-full h-[140px]">
        <img
          src={imageUrl}
          alt={title ?? "feature image"}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="p-3 space-y-1 text-left flex-1">
        {badgeText && (
          <Badge variant="secondary" className="w-fit text-xs">
            {badgeText}
          </Badge>
        )}

        {title && (
          <h3 className="text-base font-semibold text-[#004119]">
            {title}
          </h3>
        )}

        <p className="text-muted-foreground text-xs sm:text-sm">
          {body}
        </p>
      </div>
    </Card>
  );
}
