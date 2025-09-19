'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Heading({ children }: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0);
    const [maxMove, setMaxMove] = useState(200); // default for desktop

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setMaxMove(80); // Mobile
            } else if (window.innerWidth < 1024) {
                setMaxMove(150); // Tablet
            } else {
                setMaxMove(200); // Desktop
            }
        };

        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const xMovement = Math.min(scrollY * 0.1, maxMove);

    return (
        <motion.h2
            style={{ x: xMovement }}
            className="
                relative
                inline-block
                max-w-full
                break-words
                text-[#2d1d58]
                [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]
                text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                font-bold
                ml-0 mr-4 sm:mr-8 md:mr-16 lg:mr-32 xl:mr-[30px]
                text-center sm:text-left
                cursor-pointer
                group mb-10
            "
        >
            {children}
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#2d1d58] group-hover:w-full transition-all duration-500 rounded-full"></span>
        </motion.h2>
    );
}
