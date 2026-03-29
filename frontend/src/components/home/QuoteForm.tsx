"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } }
};

export default function QuoteForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("http://localhost:5001/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      setFormData({ name: "", phone: "", message: "" });
      
      // Reset success message after 5s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-zinc-950 border-t border-zinc-800">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Request a Free Quote
          </h2>
          <p className="text-zinc-400 text-lg">
            Tell us about your project requirements and we'll get back to you with wholesale pricing within 24 hours.
          </p>
        </motion.div>

        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit} 
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient glow behind form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
              <input
                id="name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all text-lg"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Phone Number (Mobile)</label>
              <input
                id="phone"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (234) 567-8900"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all text-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8 relative z-10">
            <label htmlFor="message" className="text-sm font-medium text-zinc-300">Project Details</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="What materials do you need? (e.g., 50 Gallons of Exterior White Emulsion)"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all text-lg resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full relative z-10 bg-red-600 hover:bg-red-500 disabled:bg-red-900 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,59,48,0.2)] hover:shadow-[0_0_30px_rgba(255,59,48,0.4)] hover:scale-[1.02] disabled:hover:scale-100 disabled:shadow-none"
          >
            {status === "loading" && <span className="animate-pulse">Sending Request...</span>}
            {status === "success" && <><CheckCircle2 className="w-5 h-5"/> Request Sent!</>}
            {status === "idle" && <><Send className="w-5 h-5" /> Get My Quote</>}
            {status === "error" && <><AlertCircle className="w-5 h-5"/> Error Sending - Try Again</>}
          </button>
          
          {status === "success" && (
            <p className="text-center text-green-400 mt-4 text-sm font-medium animate-pulse relative z-10">
              Thank you! Our sales team will contact you shortly.
            </p>
          )}
        </motion.form>
      </motion.div>
    </SectionWrapper>
  );
}
