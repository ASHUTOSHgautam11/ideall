'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Heading from './Heading';

interface AboutUsProps {
    className?: string;
}

const AboutHome: React.FC<AboutUsProps> = ({ className = '' }) => {
    return (
        <section className={`w-full py-12 md:py-16 ${className}`}>
            {/* Section Heading */}
            <div className="mb-10 md:mb-16 text-center sm:text-left px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]" style={{paddingLeft: '0px'}}>
                <Heading>About Us</Heading>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[220px]">
                {/* Left Section — Light */}
                <div className="flex flex-col justify-center">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
                            Your Sourcing Partner for a{" "}
                            <span className="font-semibold">Connected World.</span>
                        </h2>

                        <p className="text-sm sm:text-base md:text-base lg:text-lg mb-10 leading-relaxed text-gray-700">
                            Our Sourcing, Your Strength. We empower global businesses by
                            connecting them to high-quality lifestyle goods through an extensive, reliable, and efficient supply chain.
                        </p>

                        {/* About Image */}
                        <div className="mb-10">
                            <img
                                src="/assets/hero/AboutHome.jpg"
                                alt="Team collaboration at Ideall Solutionz"
                                className="w-full aspect-video object-cover rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Logo / Brand */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">I</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold">IDEALL Solutionz</div>
                                <div className="text-xs text-gray-500">OUR SOURCING, YOUR STRENGTH</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section — Navy */}
                <div className="bg-[#272557] p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center  ">
                    <div className="max-w-lg mx-auto space-y-8 sm:space-y-10 text-white">
                        {/* Section 1 */}
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">Redefining Innovation</h3>
                            <p className="text-sm sm:text-base md:text-base leading-relaxed opacity-90">
                                Experience transformative flooring solutions crafted with cutting-edge
                                innovation and European excellence, designed to revolutionize your space.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">Crafting Dreams into Reality</h3>
                            <p className="text-sm sm:text-base md:text-base leading-relaxed opacity-90">
                                Our team goes beyond design; we bring your unique vision to life, creating
                                captivating environments that inspire and delight.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">Celebrated Craftsmanship</h3>
                            <p className="text-sm sm:text-base md:text-base leading-relaxed opacity-90 mb-4 sm:mb-6">
                                Embark on a journey with us, recognized by prestigious awards, as we
                                consistently set new standards in design and quality.
                            </p>

                            <Button
                                variant="outline"
                                size="sm"
                                className="text-white border-white hover:bg-white hover:text-[#272557] transition-all duration-300 group"
                            >
                                Know More
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;
