import { useState } from "react";
import { Button } from "@/src/components/ui/button";

export interface ApplicationFormData {
    fullName: string;
    email: string;
    country: string;
    join: string;
    des: string
    startup: string
}

interface ApplicationFormProps{
onSubmit: (data: ApplicationFormData) => void;
isLoading?: boolean;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({onSubmit, isLoading = false}) => {
const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    country: "",
    join: "",
    des: "",
    startup: ""
})

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({
        fullName: "",
        email: "",
        country: "",
        join: "",
        des: "",
        startup: ""
    })
}


return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left font-dm-sans">
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
        <label htmlFor="country" className="text-xs font-bold text-gray-700">
          Country
        </label>
        <input
          type="text"
          id="country"
          placeholder="Your Country"
          required
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
        />
      </div>
         <div className="flex flex-col gap-1.5">
        <label htmlFor="startup" className="text-xs font-bold text-gray-700">
          Startup/Organization Name
        </label>
        <input
          type="text"
          id="startup"
          placeholder="Your Startup Name"
          required
          value={formData.startup}
          onChange={(e) => setFormData({ ...formData, startup: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="des" className="text-xs font-bold text-gray-700">
            What are you building or working on?
        </label>
        <input 
          type="text"
          id="des"
          required
          placeholder="Your Startup Name"
          value={formData.des}
          onChange={(e) => setFormData({...formData, des: e.target.value})}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"

        />
      </div>
       <div className="flex flex-col gap-1.5">
        <label htmlFor="join" className="text-xs font-bold text-gray-700">
            Why do you want to join?
        </label>
        <input
          type="text"
          id="join"
          placeholder="Your Startup Name"
          required
          value={formData.join}
          onChange={(e) => setFormData({ ...formData, join: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
        />
      </div>

        <Button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-6 mt-2 text-sm shadow-sm transition-colors"
        >
            {isLoading ? "Sending..." : "Send Message"}
        </Button>

    </form>
)
}

