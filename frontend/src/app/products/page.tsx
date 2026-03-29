"use client";

import { useState } from "react";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";
import FeaturedBrands from "@/components/products/FeaturedBrands";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="bg-zinc-950 text-zinc-50 font-sans selection:bg-red-500/30 overflow-x-hidden">
      
      {/* 1. PAGE HERO (MINIMAL HEADER) */}
      <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-24 border-b border-zinc-900 bg-gradient-to-b from-zinc-900/40 to-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 mt-4">
            Our Products
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto tracking-wide">
            Quality materials for every project, from premium paints to heavy-duty hardware.
          </p>
        </div>
      </section>

      {/* 2 & 3. CATEGORY FILTER BAR & PRODUCTS GRID */}
      <section className="relative w-full z-10 bg-zinc-950 min-h-screen pb-20">
        <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        {/* Render grid below sticky header */}
        <div className="pt-8">
          <ProductGrid activeCategory={activeCategory} />
        </div>
      </section>

      {/* 8. FEATURED BRANDS STRIP */}
      <FeaturedBrands />
      
    </main>
  );
}
