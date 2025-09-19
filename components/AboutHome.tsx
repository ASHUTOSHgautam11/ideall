'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Heading from './Heading';
import SubHeading from './SubHeading';
import Link from "next/link";


interface AboutUsProps {
    className?: string;
}

const AboutHome: React.FC<AboutUsProps> = ({ className = '' }) => {
    return (
        <section className={`w-full py-12 md:py-16 ${className}`}>
            {/* Section Heading */}
            <Heading>About Us</Heading>

            <div className="w-full">
                <SubHeading
                    title="Who We Are"
                    description="IDeall Solutionz is a part of IDeall group of companies, which was started in 2002 and at present is having a turn over US$ 15Mn funded by private equity. Headquartered in Singapore, it has evolved as a key player and has offices in India, China, Hong Kong, UAE and Vietnam. IDeall group of Co's has 4 major divisions, which specializes in International Trading of Life style Goods, Chemicals, Metals and alloys and Information Technology."
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 px-4 sm:px-8 md:px-12 lg:px-6">
                {/* Left Section — Light */}
                <div className="flex flex-col justify-center items-center text-center bg-[#ccbba7ff] rounded-lg  ">

                    <div className="max-w-4xl mx-auto">

                        {/* Heading */}
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-5xl mb-4 sm:mb-6 leading-relaxed pt-20">
                            Your Sourcing Partner for a{" "}
                            <span className="font-semibold">Connected World.</span>
                        </h2>
                        {/* Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg mb-10 sm:mb-8 leading-relaxed text-gray-900">
                            Our Sourcing, Your Strength. We empower global businesses by
                            connecting them to high-quality lifestyle goods through an extensive, reliable, and efficient  .
                        </p>
                        {/* About Image */}
                        <div className="mb-5 max-w-sm mx-auto">
                            <img
                                src="/assets/hero/shape2.png"
                                alt="Team collaboration at Ideall Solutionz"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        {/* Paragraph */}
                        <p className="text-sm sm:text-base md:text-lg mb-10 sm:mb-8 leading-relaxed text-gray-900">
                            We strengthen global businesses by sourcing premium lifestyle goods and delivering them through a trusted, seamless, and efficient network. Our commitment is to provide reliability, quality, and growth with every connection we build.
                        </p>




                        {/* Logo / Brand */}
                        {/* <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">I</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold">IDEALL Solutionz</div>
                                <div className="text-xs text-gray-900">OUR SOURCING, YOUR STRENGTH</div>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Right Section — Navy */}
                <div className="bg-[#272557] flex flex-col justify-center py-12">
                    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 space-y-12 text-white">
                        {/* Section 1 */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Redefining Innovation
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                                Experience transformative flooring solutions crafted with cutting-edge
                                innovation and European excellence, designed to revolutionize your space.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Crafting Dreams into Reality
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                                Our team goes beyond design; we bring your unique vision to life, creating
                                captivating environments that inspire and delight.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Celebrated Craftsmanship
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 mb-20">
                                Embark on a journey with us, recognized by prestigious awards, as we
                                consistently set new standards in design and quality.
                            </p>

                            <Link href="/our-story">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-white border-white hover:bg-white hover:text-[#272557] transition-all duration-300 group"
                                >
                                    Know More
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;
