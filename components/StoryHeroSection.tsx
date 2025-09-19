'use client';

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps { }

const StoryHeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-20 bg-[#c7b29fff] min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center text-center">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-6 sm:mt-5">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#ca9a6eff] mb-4 sm:mb-6 leading-tight">
              A Global Vision,
              <span className="text-primary block mt-4 sm:mt-5">Grounded in Trust</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-900 mb-4 sm:mb-6 leading-normal max-w-xl mx-auto lg:mx-0">
              Ideall Solutionz, founded in Singapore in 2002 as part of the IDeall Group of Companies, began with a clear mission: to simplify and optimise global trade for the lifestyle goods industry. Today, we have become the premier sourcing and trading partner for lifestyle goods, empowering our clients to achieve their business goals by providing seamless access to a world of high-quality products.
            </p>

            <div className="inline-flex items-center px-3 py-1.5 bg-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Crafting Excellence Since 1995
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/40 w-full sm:w-auto text-white"
              >
                Our Story
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Our Journey
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image with Stats */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero/slide3.png"
                alt="Simachi Designs craftsman working on premium flooring installation"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                width={800}
                height={500}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-6 shadow-lg border border-gray-200">
              <div className="text-xl sm:text-2xl font-bold text-primary text-center sm:text-left">
                28+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                Years of Excellence
              </div>
            </div>

            <div className="absolute -top-4 sm:-top-6 right-1/2 sm:right-6 transform translate-x-1/2 sm:translate-x-0 bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-6 shadow-lg border border-gray-200">
              <div className="text-xl sm:text-2xl font-bold text-primary text-center sm:text-left">
                5000+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                Projects Completed
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoryHeroSection;
