"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted email:", email)
  }

  return (
    <section className="w-full bg-[#008000] text-white py-16 px-4 sm:px-6 lg:px-20 text-center flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          Ready To Transform Your Impact
        </h2>

        <p className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
          Join thousands of entrepreneurs who are building sustainable ventures and creating meaningful change around the world.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-xl mt-6 flex flex-col items-center gap-4">
          
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3.5 rounded-full text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm sm:text-base shadow-sm"
          />

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 text-white text-sm bg-transparent hover:bg-white/10 transition dynamic-btn font-medium"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>

        </form>
      </div>
    </section>
  )
}