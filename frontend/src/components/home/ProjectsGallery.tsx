"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import { Camera } from "lucide-react";

// Placeholder project images from Unsplash representing remodeling/painting
const projects = [
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } }
};

export default function ProjectsGallery() {
  return (
    <SectionWrapper id="projects" className="bg-zinc-900 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-semibold uppercase tracking-widest w-fit mb-4">
            <Camera className="w-4 h-4" />
            Project Showcase
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Our Legacy in Action
          </h2>
        </div>
        <p className="text-zinc-400 max-w-sm text-sm sm:text-base">
          From residential revamps to large-scale commercial pluming and painting contracts—our materials power perfection.
        </p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {projects.map((src, index) => (
          <motion.div 
            key={index}
            variants={itemVariant}
            className="break-inside-avoid relative rounded-3xl overflow-hidden group border border-zinc-800 bg-zinc-950 block"
          >
            <Image
              src={src}
              alt={`Project Showcase ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <h4 className="text-white font-semibold text-lg drop-shadow-md">Professional Grade Finish</h4>
              <p className="text-zinc-300 text-sm">Materials sourced exclusively from JJ</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
