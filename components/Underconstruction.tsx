'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wrench, Home } from 'lucide-react';

export default function Underconstruction() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <div className="flex justify-center mb-6">
          <Wrench className="w-16 h-16 text-primary animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Page Under Construction
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          We’re crafting something amazing here. This page is currently under development, but we’ll be live soon.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Home className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="flex items-center gap-2">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
