import React from 'react';
import { Linkedin, Mail, User } from 'lucide-react';

export interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  imageUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  linkedinUrl,
  email,
}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm w-full max-w-sm transition-all duration-200 hover:shadow-md">
      {/* Profile Image / Placeholder Container */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-purple-50 flex items-center justify-center border border-gray-50">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <User className="w-10 h-10 text-[#4F378A]" />
        )}
      </div>

      {/* Name and Role */}
      <h3 className="font-bold text-gray-900 text-base mb-1 tracking-tight">{name}</h3>
      <p className="text-xs text-gray-500 mb-4 font-medium leading-tight min-h-[32px] max-w-[200px]">
        {role}
      </p>

      {/* Social Links Icons */}
      <div className="flex items-center gap-3">
        {linkedinUrl ? (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="w-7 h-7 bg-gray-100 text-gray-300 rounded-full flex items-center justify-center cursor-not-allowed">
            <Linkedin className="w-3.5 h-3.5" />
          </div>
        )}

        {email ? (
          <a
            href={`mailto:${email}`}
            className="w-7 h-7 bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="w-7 h-7 bg-gray-100 text-gray-300 rounded-full flex items-center justify-center cursor-not-allowed">
            <Mail className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </div>
  );
};