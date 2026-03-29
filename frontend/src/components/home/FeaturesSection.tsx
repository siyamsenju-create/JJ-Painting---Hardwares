"use client";

import { ShieldCheck, Tags, Headset, Award } from "lucide-react";
import SectionWrapper from "../common/SectionWrapper";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "We source only genuine materials that guarantee durability and long-lasting finishes.",
  },
  {
    icon: Tags,
    title: "Competitive Pricing",
    description: "Wholesale direct pricing passing massive bulk savings on to your individual projects.",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description: "Our staff comprises ex-contractors who know exactly what tools and specs you need.",
  },
  {
    icon: Award,
    title: "Top Brands",
    description: "Official distributors for Asian Paints, Nippon, DeWalt, Philips, and more.",
  },
];

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-zinc-950">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Why Builders Choose Us
        </h2>
        <p className="text-zinc-400 text-lg">
          The ultimate supply partner for both commercial contractors and passionate DIYers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="group p-8 md:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-800/80 transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left shadow-lg scale-100 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
