"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";

const trustPoints = [
  "Over 25 years of combined industry experience",
  "100% Authentic products from top brands",
  "Expert advice for painting and hardware sizing",
  "Competitive pricing with bulk order discounts",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const pointVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-zinc-950 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-red-500/10"
        >
          <Image
            src="/shop/shop-2.jpeg" // Second shop image
            alt="JJ Painting & Hardwares Inside Store"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-zinc-900/60 border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Since 2026</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              We started with a simple goal: provide the highest quality materials to everyday builders and homeowners.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Copy */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { 
              opacity: 1, 
              x: 0, 
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.15, delayChildren: 0.3 } 
            }
          }}
          className="flex flex-col justify-center"
        >
          <motion.div variants={pointVariant} className="inline-block px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-semibold uppercase tracking-widest w-fit mb-6">
            Who We Are
          </motion.div>
          <motion.h2 variants={pointVariant} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Building trust, <br/><span className="text-zinc-500">one project at a time.</span>
          </motion.h2>
          <motion.p variants={pointVariant} className="text-zinc-400 text-lg leading-relaxed mb-8">
            JJ Painting & Hardwares is more than just a supply store. We are your technical partners. Whether you are repainting your living room or pluming a new commercial complex, we stock the exact specifications you need to get the job done right.
          </motion.p>

          <motion.ul variants={staggerContainer} className="space-y-4 mb-10">
             {trustPoints.map((point, index) => (
                <motion.li variants={pointVariant} key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-red-500/20 p-1 rounded-full text-red-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-300 font-medium">{point}</span>
                </motion.li>
             ))}
          </motion.ul>

          <motion.div variants={pointVariant}>
            <Link href="/about" className="inline-block bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-xl font-semibold transition-[transform,background-color] duration-300 hover:scale-[1.03] text-center w-fit">
              Read Our Full Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
