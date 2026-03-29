"use client";
import { motion } from "framer-motion";
import { PaintBucket, PaintRoller, Droplet, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "paints",
    title: "Paints",
    description: "Authorized seller of Indigo paints. Interior & exterior paints, primers, waterproofing, and clean finishes.",
    icon: PaintBucket,
    highlight: false,
  },
  {
    id: "painting",
    title: "Professional Painting",
    description: "House painting (interior & exterior), shop painting, skilled workers, and clean finishing.",
    icon: PaintRoller,
    highlight: true,
  },
  {
    id: "plumbing",
    title: "Plumbing Supplies",
    description: "Pipes, fittings, valves, bathroom accessories, and complete water solutions.",
    icon: Droplet,
    highlight: false,
  },
  {
    id: "electrical",
    title: "Electrical & Hardware",
    description: "Switches, lights, cables, tools, fasteners, and complete hardware solutions.",
    icon: Wrench,
    highlight: false,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
  };

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-red-500 font-semibold tracking-wider uppercase text-sm mb-3">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We Provide Complete <br className="hidden md:block" /> Hardware & Painting Solutions
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just sell — we also provide professional services to ensure your home or shop looks its absolute best.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                service.highlight
                  ? "bg-gradient-to-br from-red-600/10 to-transparent border-red-500/30 hover:border-red-500/60"
                  : "bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-lg rounded-tr-xl">
                  Top Service
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                service.highlight ? "bg-red-500/20 text-red-500" : "bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 group-hover:text-white"
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h4 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-zinc-400 mb-8 line-clamp-3">
                {service.description}
              </p>

              <Link
                href={`https://wa.me/1234567890?text=${encodeURIComponent(
                  `Hi, I'm interested in your ${service.title} services/products. Can you provide more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors mt-auto ${
                  service.highlight
                    ? "text-red-400 hover:text-red-300"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
