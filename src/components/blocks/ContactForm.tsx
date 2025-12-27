"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/src/components/ui/button";
import { FloatingInput } from "@/src/components/common/FloatingInput";
import { FloatingTextarea } from "@/src/components/common/FloatingTextarea";

export function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent successfully!");

    setForm({
      fullName: "",
      email: "",
      message: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl w-300 space-y-6"
    >
      {/* Full Name */}
      <FloatingInput
        label="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />

      {/* Email */}
      <FloatingInput
        label="Email Address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      {/* Message */}
      <FloatingTextarea
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
      />

      <Button
        type="submit"
      >
        Send Message
      </Button>
    </form>
  );
}
