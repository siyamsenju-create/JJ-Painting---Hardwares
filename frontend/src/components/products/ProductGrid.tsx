"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard, { Product } from "./ProductCard";
import QuickViewModal from "./QuickViewModal";

interface ProductGridProps {
  activeCategory: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ProductGrid({ activeCategory }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = useCallback(async (pageNum: number, category: string, reset: boolean = false) => {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:5001/api/products?page=${pageNum}&limit=8&category=${category}`);
      if (!res.ok) throw new Error('Failed to fetch');
      
      const data = await res.json();
      
      setProducts(prev => reset ? data.products : [...prev, ...data.products]);
      setHasMore(data.page < data.pages);
      setPage(pageNum);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // When category changes, reset grid
  useEffect(() => {
    fetchProducts(1, activeCategory, true);
  }, [activeCategory, fetchProducts]);

  return (
    <>
      {/* Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory} // Force re-render animation entirely when category changes
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto w-full"
      >
        <AnimatePresence mode="popLayout">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onQuickView={setSelectedProduct}
            />
          ))}
        </AnimatePresence>

        {/* Shimmer Skeletons when Loading */}
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`skeleton-${i}`}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="bg-zinc-800/50 rounded-2xl aspect-[3/4] animate-pulse rounded-2xl border border-zinc-800"
            />
          ))}
      </motion.div>

      {/* Load More Button */}
      {hasMore && !isLoading && (
        <div className="flex justify-center mt-12 mb-24">
          <button
            onClick={() => fetchProducts(page + 1, activeCategory)}
            className="px-8 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-zinc-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-lg"
          >
            Load More Products
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
