'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Heading({ children }: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Horizontal movement based on scroll
    const xMovement = scrollY * 0.3; // adjust speed

    return (
        <motion.h2
            style={{ x: xMovement, maxWidth: 1400 }}
            className="
                relative
                inline-block
                text-[#2d1d58]
                [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
                font-bold
                mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-[30px]
                text-center sm:text-left
                cursor-pointer
                group
            "
        >
            {children}
            {/* Animated underline effect directly under the text */}
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#2d1d58] group-hover:w-full transition-all duration-500 rounded-full"></span>
        </motion.h2>
    );
}
