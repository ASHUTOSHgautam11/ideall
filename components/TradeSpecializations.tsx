'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Sofa, Shirt, Palette } from 'lucide-react';
import AboutPage from './AboutPage';

const specializations = [
  {
    icon: Package,
    title: 'Floorings',
    description: 'Premium flooring solutions from hardwood to luxury stone',
    features: [
      'Luxury Vinyl Tiles',
      'Engineered & Hardwood',
      'Premium Carpets',
      'Natural Stone Solutions',
      'Eco-friendly Options'
    ],
    color: 'from-blue-50 to-blue-100'
  },
  {
    icon: Sofa,
    title: 'Furniture',
    description: 'Curated collections from worldwide high-quality manufacturers',
    features: [
      'Custom Manufacturing',
      'Luxury Collections',
      'Commercial Solutions',
      'Designer Partnerships',
      'Quality Assurance'
    ],
    color: 'from-green-50 to-green-100'
  },
  {
    icon: Shirt,
    title: 'Fabrics',
    description: 'Luxury textiles and specialty materials for interior design',
    features: [
      'Designer Fabrics',
      'Commercial Textiles',
      'Specialty Materials',
      'Custom Weaving',
      'Sustainable Options'
    ],
    color: 'from-purple-50 to-purple-100'
  },
  {
    icon: Palette,
    title: 'Fashion Walls',
    description: 'Innovative wall solutions and decorative finishes',
    features: [
      '3D Wall Panels',
      'Designer Wallpapers',
      'Architectural Finishes',
      'Custom Solutions',
      'Installation Support'
    ],
    color: 'from-orange-50 to-orange-100'
  }
];

export default function TradeSpecializations() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      className="py-20 bg-white"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Trade Specializations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core categories where we excel in international sourcing, quality control, and procurement solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <Card
                key={index}
                className={`
    group cursor-pointer 
    transition-all duration-300 
    hover:shadow-xl 
    hover:-translate-y-2 
    hover:scale-105
    ${hoveredCard === index ? 'shadow-xl' : 'shadow-lg'}
  `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >

                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{spec.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{spec.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-700 text-sm">Key Services:</h4>
                    <ul className="space-y-1">
                      {spec.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}