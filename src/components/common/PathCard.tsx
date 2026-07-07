// "use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"

interface PathCardProps {
  iconBg: string
  iconColor: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

const PathCard:React.FC<PathCardProps> = ({ iconBg, iconColor, icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white p-3 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col align-start text-left">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${iconBg}`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-[15px] font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed mb-3">{description}</p>
      <ul className="space-y-3 mt-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="mr-2 text-gray-400">—</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathCard;