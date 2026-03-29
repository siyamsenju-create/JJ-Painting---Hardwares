"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import { Product } from "./ProductCard";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  if (!product) return null;

  const whatsappMessage = `Hi, I'm interested in ${product.name} from your catalog.`;
  const phoneNumber = "1234567890";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl flex flex-col md:flex-row pointer-events-auto"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-0 bg-white p-8 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center relative">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {product.brand && (
                  <p className="text-red-500 font-bold tracking-widest uppercase text-xs mb-3">
                    {product.brand}
                  </p>
                )}
                
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                  {product.name}
                </h2>
                
                <p className="text-sm font-medium text-zinc-400 mb-6 bg-zinc-800/50 inline-block px-3 py-1 rounded-full w-fit">
                  Category: {product.category}
                </p>

                {product.description && (
                  <p className="text-zinc-300 leading-relaxed mb-8">
                    {product.description}
                  </p>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#25D366]/20 mt-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
