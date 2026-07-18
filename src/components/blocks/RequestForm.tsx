import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from 'lucide-react';



export interface RequestFormData {
    fullName: string
    email: string
    phoneNumber: string
    helpDes: string
    organization: string
    budget: string
    timeline: string
    country: string
    selectedService: string
    stage: string
}

interface RequestFormProps {
    onSubmit: (data: RequestFormData) => void;
    isLoading?: boolean
}

export const RequestForm: React.FC<RequestFormProps> = ({onSubmit, isLoading = false}) => {
const [formData, setFormData] = useState<RequestFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    helpDes: "",
    organization: "",
    budget: "",
    timeline: "",
    country: "",
    selectedService: "",
    stage: "",
})


const stages = [
     "General Inquiry",
    "Partnership Opportunities",
    "Scaling & Mentorship",
    "Technical Support",
]


const budgets = [
    "20,000 - 50,000",
    "50,000 - 100,000",
    "100,000 - 300,000",
    "500,000 - 1,000,000"
]

const timelines = [
    "1 weeks",
    "1 months",
    "2 months"
    
]


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)

    setFormData({
    fullName: "",
    email: "",
    phoneNumber: "",
    helpDes: "",
    organization: "",
    budget: "",
    timeline: "",
    country: "",
    selectedService: "",
    stage: "",

    })
}

    return (
        <form onSubmit={handleSubmit}>
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
                  <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-700">
                    Phone Number(optional)
                  </label>
                  <input
                    type="number"
                    id="number"
                    placeholder="Your phone number"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                  <div className="flex flex-col gap-1.5">
                  <label htmlFor="country" className="text-xs font-bold text-gray-700">
                   Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Your country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                  <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-700">
                    Selected Services
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="World-class branding"
                    required
                    value={formData.selectedService}
                    onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                  <div className="flex flex-col gap-1.5">
                  <label htmlFor="organization" className="text-xs font-bold text-gray-700">
                   Startup/Organization Name
                  </label>
                  <input
                    type="text"
                    id="startup"
                    placeholder="Your startup name"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
          
                <div className="flex flex-col gap-1.5 relative">
                  <label htmlFor="stages" className="text-xs font-bold text-gray-700">
                    What Stages Are You In?
                  </label>
                  <div className="relative">
                    <select
                      id="stages"
                      required
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:border-green-500 transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      {stages.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                  <div className="flex flex-col gap-1.5">
                  <label htmlFor="helpDes" className="text-xs font-bold text-gray-700">
                    What Do You Need Help With?
                  </label>
                  <input
                    type="text"
                    id="helpDes"
                    placeholder="Tell us more about your goals, challenges, or what you’d like support with."
                    required
                    value={formData.helpDes}
                    onChange={(e) => setFormData({ ...formData, helpDes: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 relative">
                  <label htmlFor="budget" className="text-xs font-bold text-gray-700">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:border-green-500 transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      {budgets.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="flex flex-col gap-1.5 relative">
                  <label htmlFor="timeline" className="text-xs font-bold text-gray-700">
                    Timeline
                  </label>
                  <div className="relative">
                    <select
                      id="timeline"
                      required
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:border-green-500 transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      {timelines.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                </div>
        </form>
    )

}