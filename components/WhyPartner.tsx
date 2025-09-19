'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SubHeading from './SubHeading';

const benefits = [
  {
    icon: Globe,
    title: 'Global Network',
    description:
      'Premium manufacturer and supplier connections across Asia, Europe, and the Americas.',
    stat: '50+',
    statLabel: 'Global Partners',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Factory audits, compliance checks, and strict QC for world-class standards.',
    stat: '99.8%',
    statLabel: 'Quality Rate',
  },
  {
    icon: Award,
    title: 'Trade Expertise',
    description:
      'Decades of navigating trade, customs, and logistics for seamless delivery.',
    stat: '15+',
    statLabel: 'Years Experience',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description:
      'Helping clients scale efficiently with reliable sourcing, logistics, and cost optimization.',
    stat: '120%',
    statLabel: 'Client Growth',
  },
];

function AnimatedCounter({ end, duration = 2000 }: { end: string; duration?: number }) {
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (end.includes('%')) {
      const numericEnd = parseFloat(end);
      let start = 0;
      const increment = numericEnd / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericEnd) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start.toFixed(1) + '%');
        }
      }, 50);
      return () => clearInterval(timer);
    } else if (end.includes('+')) {
      const numericEnd = parseInt(end);
      let start = 0;
      const increment = numericEnd / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericEnd) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start) + '+');
        }
      }, 50);
      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function WhyPartner() {
  return (
    <>
      <SubHeading
        title="Why Partner with Ideall Solutions?"
        description="We connect businesses with trusted global manufacturers and suppliers, ensuring access to premium products worldwide. Our rigorous quality assurance processes guarantee that every delivery meets international standards. With decades of trade expertise, we simplify complex logistics and compliance challenges. Partnering with us means driving efficiency, growth, and long-term success for your business."
      />

      <section className="relative mb-20 overflow-hidden">
        {/* Full-width container */}
        <div className="w-full px-4 md:px-[10vw]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <Card className="h-full group relative rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white w-full">
                    <CardContent className="relative p-6 flex flex-col items-center text-center h-full">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-gray-700" />
                      </div>

                      {/* Counter */}
                      <div className="mb-3">
                        <div className="text-2xl font-bold text-gray-900">
                          <AnimatedCounter end={benefit.stat} />
                        </div>
                        <div className="text-xs font-medium uppercase text-gray-500">
                          {benefit.statLabel}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
