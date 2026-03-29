"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import ProductCard, { Product } from "../products/ProductCard";
import QuickViewModal from "../products/QuickViewModal";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } }
};

export default function ProductPreview() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchPreview() {
      try {
        const res = await fetch("http://localhost:5001/api/products?limit=4");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Preview fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPreview();
  }, []);

  return (
    <SectionWrapper id="preview" className="bg-zinc-900 border-y border-zinc-800">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-semibold uppercase tracking-widest w-fit mb-4">
            <Sparkles className="w-4 h-4" />
            Spotlight Collection
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Our Featured Products</h2>
        </div>
        
        <Link
          href="/products"
          className="group flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-semibold transition-[transform,box-shadow,background-color] duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,59,48,0.2)]"
        >
          View All Products
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <motion.div variants={itemVariant} key={i} className="bg-zinc-800/50 aspect-[3/4] animate-pulse rounded-2xl border border-zinc-800" />
            ))
          : products.map((product) => (
              <motion.div variants={itemVariant} key={product._id} whileHover={{ scale: 1.03, y: -5 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <ProductCard
                  product={product}
                  onQuickView={setSelectedProduct}
                />
              </motion.div>
            ))}
      </motion.div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </SectionWrapper>
  );
}
