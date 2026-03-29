"use client";

import { motion } from "framer-motion";

const categories = [
  "All",
  "Paints",
  "Plumbing",
  "Electrical",
  "Tools",
  "Hardware",
];

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory,
  setActiveCategory,
}: CategoryFilterProps) {
  return (
    <div className="sticky top-20 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 pb-4 mb-8">
      <div className="flex overflow-x-auto hide-scrollbar gap-2 px-4 py-2 sm:justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
              activeCategory === category
                ? "text-zinc-950"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-zinc-100 rounded-full"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
