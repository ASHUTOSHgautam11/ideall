"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroVideoSectionProps {
    heading: string;
    description: string;
    videoSrc?: string; // Optional, default video if not provided
}

const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
    heading,
    description,
    videoSrc = "/assets/video/video4.mp4",
}) => {
    return (
        <section className="relative w-full h-[65vh] overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold"
                >
                    {heading}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-4 text-lg sm:text-xl md:text-2xl max-w-7xl"
                >
                    {description}
                </motion.p>
            </div>
        </section>
    );
};

export default HeroVideoSection;
