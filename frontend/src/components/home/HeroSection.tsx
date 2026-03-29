"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax translation
  const yResult = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Opacity fade when scrolling down
  const opacityResult = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-4 md:px-6">
      
      {/* Background Image Container with Slow Zoom & Parallax */}
      <motion.div 
        style={{ y: yResult, opacity: opacityResult }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0 origin-center"
      >
        <Image
          src="/shop/shop-1.jpeg"
          alt="JJ Painting & Hardwares Showroom"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft, dark gradient overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/90 via-zinc-900/80 to-zinc-950/90 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-sm text-red-500 font-medium text-xs md:text-sm tracking-wide shadow-[0_0_15px_rgba(255,59,48,0.2)]">
            <Star className="w-3.5 h-3.5 fill-red-500" />
            <span>Trusted Hardware Partners</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6 leading-[1.1]"
        >
          JJ Painting & <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 drop-shadow-[0_0_25px_rgba(255,59,48,0.4)]">
            Hardwares
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 md:mb-12 font-medium"
        >
          Your premier destination for high-grade paints, robust plumbing, and professional tools. We build the foundation of your next project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/products"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl md:rounded-full font-semibold transition-[transform,box-shadow,background-color] duration-300 hover:shadow-[0_0_30px_rgba(255,59,48,0.4)] hover:scale-105"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800/80 backdrop-blur-md hover:bg-zinc-700 text-white px-8 py-4 rounded-xl md:rounded-full border border-zinc-700 font-semibold transition-[transform,background-color] duration-300 hover:scale-105"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
