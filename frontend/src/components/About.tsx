"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Premium Quality Products",
    "Trusted Brand Partnerships",
    "Affordable & Transparent Pricing",
    "Expert Advice & Support",
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10"
          >
            <Image
              src="/shop/shop-2.jpeg"
              alt="Inside JJ Painting & Hardwares Shop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-1">Serving the Community</h3>
                <p className="text-zinc-400">Years of trusted local experience</p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 font-medium text-sm mb-6">
              <span>About Our Shop</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built on Trust, Crafted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Durability</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              At JJ Painting & Hardwares, we pride ourselves on being your ultimate partner in construction, plumbing, and aesthetic finishes. As a family-owned business deeply rooted in our community, we supply top-tier paints, essential hand tools, and rugged materials tailored to both DIYers and professional contractors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <span className="font-medium text-zinc-200">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="inline-block bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 text-center">
              Read Our Full Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
