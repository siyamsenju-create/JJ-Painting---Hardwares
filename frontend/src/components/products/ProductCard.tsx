"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Eye } from "lucide-react";

export interface Product {
  _id: string;
  name: string;
  category: string;
  brand?: string;
  description?: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const whatsappMessage = `Hi, I'm interested in ${product.name}`;
  const phoneNumber = "1234567890"; // Mock phone
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,59,48,0.15)] hover:border-red-500/30 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 p-6"
        />
        
        {/* Quick View Overlay Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onQuickView(product)}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 ease-out"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Quick View</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {product.brand && (
            <p className="text-xs text-red-500 font-semibold tracking-wider uppercase mb-1">
              {product.brand}
            </p>
          )}
          <h3 className="text-lg font-medium text-zinc-100 line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Action Bar */}
        <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500">{product.category}</span>
          
          {/* WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent trigger if any wrapping links exist
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
