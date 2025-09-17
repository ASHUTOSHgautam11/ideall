'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Shield, Award } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Established relationships with premium manufacturers and suppliers across key markets including Asia, Europe, and the Americas for competitive prices.',
    stat: '50+',
    statLabel: 'Global Partners'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Comprehensive quality control processes including factory audit, product testing, and compliance verification to meet international standards.',
    stat: '99.8%',
    statLabel: 'Quality Rate'
  },
  {
    icon: Award,
    title: 'Trade Expertise',
    description: 'Expert navigation of international trade regulations, customs procedures, and logistics for ensured compliance and delivery excellence.',
    stat: '15+',
    statLabel: 'Years Experience'
  }
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why Partner with Ideall Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise in international sourcing, combined with our commitment to quality and reliability, makes us the 
            ideal partner for your procurement needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter end={benefit.stat} />
                    </div>
                    <div className="text-secondary font-semibold">{benefit.statLabel}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}