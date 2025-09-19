"use client";

import { motion } from "framer-motion";
import HeroVideoSection from "./HeroVideoSection";

export default function CategoriesHero() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden mb-20">
       
      <HeroVideoSection
        heading="Product Categories"
        description="Explore our comprehensive range of premium interior solutions sourced from trusted global manufacturers."
        videoSrc="/assets/video/video4.mp4"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto text-white"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Product Categories
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of premium interior solutions sourced from trusted global manufacturers.
          </p>
        </motion.div>
      </div>

      {/* Optional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}