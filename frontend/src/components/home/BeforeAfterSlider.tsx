"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isDragging) {
      const timer1 = setTimeout(() => setSliderPosition(55), 400);
      const timer2 = setTimeout(() => setSliderPosition(45), 800);
      const timer3 = setTimeout(() => setSliderPosition(50), 1200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isInView, isDragging]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = (x / width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <SectionWrapper id="transformation" className="bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full"
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See the Difference
          </h2>
          <p className="text-zinc-400 text-lg">
            Transform your raw spaces into stunning masterpieces using our premium material collections.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl shadow-zinc-900/50 border border-zinc-800"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Background (After) */}
          <Image
            src="/before-after/after.jpeg"
            alt="Painted Wall After"
            fill
            className="object-cover"
          />

          {/* Foreground (Before) */}
          <div 
            className="absolute inset-0 z-10 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/before-after/before.jpeg"
              alt="Raw Wall Before"
              fill
              className="object-cover"
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            style={{ left: `calc(${sliderPosition}% - 2px)`, transitionDuration: isDragging ? "0ms" : "300ms" }}
          >
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 text-zinc-900 border-2 border-red-500 hover:scale-110 ${isDragging ? 'scale-110' : ''}`}>
              <MoveHorizontal className="w-6 h-6" />
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
