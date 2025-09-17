'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Globe, Users } from 'lucide-react';

const opportunities = [
  {
    icon: TrendingUp,
    title: 'Market Growth',
    description: 'The global interior design market is projected to reach $255 billion by 2027, with premium segments showing the strongest growth.',
    highlight: '7.2% CAGR'
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: 'Our direct relationships with manufacturers provide significant cost savings while maintaining premium quality standards.',
    highlight: '30% Savings'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access to exclusive products from over 50 international partners across Asia, Europe, and the Americas.',
    highlight: '50+ Partners'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated account management and technical support throughout your entire procurement journey.',
    highlight: '24/7 Support'
  }
];

export default function InvestmentOpportunity() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us to capitalize on the growing global demand for premium interior solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  hoveredCard === index ? 'shadow-xl -translate-y-2' : 'shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-2">{opportunity.highlight}</div>
                  <h3 className="text-lg font-bold text-primary mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{opportunity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partnership CTA */}
        <Card className="bg-gradient-to-r from-primary to-primary/90 text-white">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Explore Partnership Opportunities?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our network of successful partners and access exclusive procurement solutions that drive growth and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Partnership Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}