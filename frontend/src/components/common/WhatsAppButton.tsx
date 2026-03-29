"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  // Pre-filled message for WhatsApp
  const message = "Hi, I'm interested in your paints & hardware products. Can you help me?";
  // Mock phone number (user can change this)
  const phoneNumber = "1234567890";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      {/* Pulse effect rings */}
      <motion.div 
        animate={{ boxShadow: ["0 0 0 0px rgba(37,211,102, 0.6)", "0 0 0 20px rgba(37,211,102, 0)"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full z-0"
      />
      
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-10"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Link>
    </motion.div>
  );
}
