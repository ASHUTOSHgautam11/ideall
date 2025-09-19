'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wrench, Home, Mail, Phone } from 'lucide-react';

export default function UnderConstructionPage() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">


            {/* Main Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >


                {/* Title & Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-5xl font-extrabold text-gray-800  mt-10 "
                >
                    This Page is Under Construction
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    We're working hard to bring you an amazing experience. This page is currently being developed.
                    <br />
                    <span className="text-yellow-600 font-semibold">Please check back soon!</span>
                </motion.p>

                {/* Video Container */}
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-2xl border-4 border-yellow-500">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    >
                        <source src="/assets/underconstruction/underc2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay Text (Optional) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <span className="text-4xl font-bold text-yellow-400 tracking-wider drop-shadow-lg">
                            UNDER CONSTRUCTION
                        </span>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/">
                        <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all duration-300">
                            <Home className="w-4 h-4" /> Back to Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="flex items-center gap-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                            <Mail className="w-4 h-4" /> Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Footer Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-8 text-sm text-gray-600"
                >
                    <p className="mb-4">Visit our other sites:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm">
                        <a
                            href="https://en.balsan.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            en.balsan.com
                        </a>
                        <a
                            href="https://india.belgotex.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            india.belgotex.com
                        </a>
                        <a
                            href="https://www.belgotex.co.za/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            belgotex.co.za
                        </a>
                    </div>
                </motion.div>



                {/* Bottom Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-8 text-xs text-gray-500"
                >
                    © {new Date().getFullYear()} BELSIM | www.Belgotexsimachi.com
                </motion.div>
            </motion.div>
        </section>
    );
}