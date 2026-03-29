"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, ArrowRight, PaintBucket, Wrench, Package, ShieldCheck, HeartHandshake, Settings } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-red-500/30">

      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 z-0 origin-center"
        >
          <Image
            src="/shop/shop-1.jpeg"
            alt="JJ Painting & Hardwares Shop Front"
            fill
            className="object-cover object-center opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 font-medium text-sm mb-6 tracking-wide uppercase">
              Family-Owned & Operated
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Trust</span>, Serving Keelasurandai with Quality
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Your trusted family hardware & paint store, deeply committed to serving the Tenkasi region for generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-red-500 font-semibold tracking-wider uppercase text-sm mb-3">
                Our Story
              </motion.h2>
              <motion.h3 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
                From a Local Shop to <br/> Your Trusted Partner
              </motion.h3>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <motion.p variants={fadeIn}>
                  JJ Painting & Hardwares started as a humble local hardware shop with a simple mission: to provide our neighbors in Keelasurandai with high-quality materials at fair prices.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Over the years, we've grown alongside our community. Our success isn't just built on the products we sell, but on the trust we've earned from homeowners, contractors, and local businesses alike.
                </motion.p>
                <motion.p variants={fadeIn} className="border-l-4 border-red-500 pl-6 my-8 text-zinc-300 italic">
                  "We believe in honest pricing, expert advice, and treating every customer like family. That's the JJ Painting & Hardwares promise."
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative h-[600px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              <Image
                src="/shop/shop-10.jpeg"
                alt="Inside Our Shop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="py-24 bg-zinc-900/50 relative border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              We provide a complete range of hardware materials alongside professional services to meet all your project needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Products Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-zinc-950 p-8 md:p-12 rounded-3xl border border-zinc-800"
            >
              <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-8">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Premium Products</h3>
              <ul className="space-y-4">
                {[
                  { title: "Paints", desc: "Authorized Indigo Paints dealer" },
                  { title: "Plumbing", desc: "Pipes, fittings & bathroom solutions" },
                  { title: "Electrical", desc: "Switches, cables & lighting" },
                  { title: "Hardware", desc: "Tools, fasteners & construction gear" },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                    <div>
                      <strong className="block text-white font-medium">{item.title}</strong>
                      <span className="text-zinc-400 text-sm">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-zinc-950 p-8 md:p-12 rounded-3xl border border-zinc-800"
            >
              <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Expert Services</h3>
              <ul className="space-y-4">
                {[
                  { title: "Painting Work", desc: "Professional interior & exterior painting" },
                  { title: "Material Consultation", desc: "We help you pick the right materials for your budget" },
                  { title: "Product Guidance", desc: "Step-by-step guidance on hardware usage" },
                  { title: "Color Mixing", desc: "Custom paint color matching on site" },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <div>
                      <strong className="block text-white font-medium">{item.title}</strong>
                      <span className="text-zinc-400 text-sm">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-64 rounded-2xl overflow-hidden relative mt-8">
                <Image src="/shop/shop-11.jpeg" alt="Hardware items" fill className="object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-64 rounded-2xl overflow-hidden relative">
                <Image src="/shop/shop-12.jpeg" alt="Paint section" fill className="object-cover" />
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Tenkasi Chooses Us</h2>
              <div className="space-y-6">
                {[
                  { title: "Trusted Local Shop", icon: HeartHandshake, desc: "A staple in the community for years." },
                  { title: "Quality Materials", icon: ShieldCheck, desc: "We source only from top-rated, proven brands." },
                  { title: "Affordable Pricing", icon: Package, desc: "Direct distribution means fair prices for you." },
                  { title: "One-Stop Solution", icon: Settings, desc: "From foundations to finishing coats, we have it all." },
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={fadeIn} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                      <feature.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                      <p className="text-zinc-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION & COMMUNITY */}
      <section className="py-24 bg-red-950/10 border-y border-red-500/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 text-red-500 rounded-full mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Proudly Serving Keelasurandai, Tenkasi</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-12">
              We are conveniently located to serve the surrounding areas. Drop by our shop to see our full inventory and chat with our experts.
            </p>

            {/* Optional Map / Local visual placeholder */}
            <div className="aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden relative border border-zinc-800 shadow-2xl flex items-center justify-center bg-zinc-900">
              <Image src="/shop/shop-15.jpeg" alt="Shop exterior" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
              <div className="relative z-10 p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">JJ Painting & Hardwares</h3>
                <p className="text-zinc-300">Keelasurandai, Tenkasi District, Tamil Nadu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-red-600/10 blur-[150px] rounded-full" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-zinc-400 mb-10">
              Whether you need supplies or a dedicated painting team, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://wa.me/1234567890" target="_blank" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                Contact Us on WhatsApp
              </Link>
              <Link href="/products" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all hover:scale-105">
                <Package className="w-5 h-5" />
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

