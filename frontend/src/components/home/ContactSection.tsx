"use client";

import SectionWrapper from "../common/SectionWrapper";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/1234567890?text=Hi, I'm reaching out from your website.`;

  return (
    <SectionWrapper id="location" className="bg-zinc-950 pb-0 md:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-1/2 space-y-10"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Visit Our Shop
            </h2>
            <p className="text-zinc-400 text-lg">
              We're open 7 days a week. Drop by for expert advice and to physically review our paint catalogs and plumbing pipelines before purchasing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-red-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Showroom Location</h4>
                <p className="text-zinc-400 leading-relaxed mt-1">
                  KVB ATM opposite, <br />
                  Main road, Kella Surandai, Tenkasi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-red-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Sales & Support</h4>
                <p className="text-zinc-400 leading-relaxed mt-1">+91 97864 43002<br/>+91 98651 31514</p>
                <p className="text-zinc-500 text-sm mt-1">Mon - Sun, 8:15 AM - 9:30 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-red-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Email for Shop</h4>
                <p className="text-zinc-400 leading-relaxed mt-1">jjpaintingconsulting@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-4">
             <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-[transform,box-shadow,background-color] duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-[1.03]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Static Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-[700px] bg-zinc-900 rounded-3xl overflow-hidden relative border border-zinc-800 shadow-2xl flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-20 sepia contrast-150 grayscale blur-[2px]" />
            <div className="relative z-10 text-center flex flex-col items-center">
               <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 mb-4 animate-[bounce_3s_infinite]">
                 <MapPin className="w-8 h-8 text-white" />
               </div>
               <a href="https://www.google.com/maps/search/?api=1&query=KVB+ATM+Opposite,+Main+road,+Kella+Surandai,+Tenkasi,+Tamil+Nadu,+India" target="_blank" rel="noreferrer" className="bg-zinc-950/80 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-800 shadow-xl cursor-pointer hover:bg-zinc-900 transition-colors duration-300 block text-center">
                 <p className="text-white font-semibold">JJ Painting & Hardwares</p>
                 <p className="text-zinc-400 text-xs mt-1 mb-1">Kella Surandai, Tenkasi, Tamil Nadu, India</p>
                 <p className="text-red-400 text-sm font-medium hover:text-red-300">Get Directions &rarr;</p>
               </a>
            </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
