"use client";

import { motion } from "framer-motion";

const brands = [
  "Indigo Paints",
  "Dulux",
  "Ashirvad",
  "Finolex",
  "Supreme",
  "Polycab",
  "Havells",
  "Crompton",
  "Anchor",
  "Jaquar",
  "Stanley",
  "DeWalt",
  "Bosch",
];

// Duplicate for infinite scroll effect
const duplicatedBrands = [...brands, ...brands];

export default function FeaturedBrands() {
  return (
    <div className="w-full py-16 bg-zinc-950 overflow-hidden border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h3 className="text-zinc-500 font-medium tracking-widest uppercase text-sm">
          Trusted by top industry brands
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex items-center gap-12 sm:gap-24 px-12 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {duplicatedBrands.map((brand, i) => (
            <div key={i} className="flex-shrink-0 text-3xl md:text-5xl font-bold text-zinc-800 transition-colors duration-500 hover:text-white cursor-default whitespace-nowrap">
              {brand}
            </div>
          ))}
        </div>

        {/* Soft gradient fading at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
