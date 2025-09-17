'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Column: Text */}
        <div className="md:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Your Global Procurement Partner for Premium Interior Solutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ideal Solutions specializes in international trade and procurement solutions for Flooring, Furniture, Fabrics, and Fashion Walls. We navigate global markets to source the finest products while ensuring quality control and seamless trade facilitation.
            </p>
          </motion.div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-4 mt-6">
            {['Global Sourcing Network', 'Quality Assurance', 'Trade Facilitation'].map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 text-sm font-medium text-gray-800 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-800 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-indigo-800 border border-indigo-800 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Learn Our Story
            </motion.button>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="md:w-1/2 space-y-4">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="../public/hero/slide1.png"
              alt="Premium Interior Space"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            /> 
            <div className="absolute top-4 left-4 bg-indigo-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Premium Quality
            </div>
          </motion.div>

          {/* Two Smaller Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src="../public/hero/slide2.png"
                alt="Modern Office Design"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src="../public/hero/slide3.png"
                alt="Creative Work Space"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;