import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/src/components/ui/button";

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  isLoading?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const subjects = [
    "General Inquiry",
    "Partnership Opportunities",
    "Scaling & Mentorship",
    "Technical Support",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({
       fullName: '',
    email: '',
    subject: '',
    message: '',
    })
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 text-left font-dm-sans">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="text-xs font-bold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Your full name"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-bold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
        />
      </div>

      {/* Subject Dropdown Select */}
      <div className="flex flex-col gap-1.5 relative">
        <label htmlFor="subject" className="text-xs font-bold text-gray-700">
          Subject
        </label>
        <div className="relative">
          <select
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:border-green-500 transition-colors cursor-pointer"
          >
            <option value="" disabled>Select an option</option>
            {subjects.map((sub, idx) => (
              <option key={idx} value={sub}>{sub}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Enter your message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors resize-none"
        />
      </div>

      {/* Submit Trigger Button */}
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-6 mt-2 text-sm shadow-sm transition-colors"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};