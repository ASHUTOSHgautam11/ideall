'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categories = [
  {
    title: 'Premium Floorings',
    subtitle: 'Luxury & Durability',
    description: 'From hardwood masterpieces to innovative luxury vinyl, our flooring solutions combine aesthetics with performance.',
    products: ['Engineered Hardwood', 'Luxury Vinyl Tiles', 'Natural Stone', 'Designer Carpets', 'Eco-friendly Options'],
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Designer Furniture',
    subtitle: 'Style & Function',
    description: 'Curated collections from renowned manufacturers, offering both residential and commercial solutions.',
    products: ['Custom Manufacturing', 'Luxury Collections', 'Office Solutions', 'Outdoor Furniture', 'Smart Furniture'],
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Premium Fabrics',
    subtitle: 'Texture & Quality',
    description: 'High-end textiles and specialty materials for interior design and fashion applications.',
    products: ['Designer Textiles', 'Technical Fabrics', 'Sustainable Materials', 'Custom Weaving', 'Performance Fabrics'],
    image: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Fashion Walls',
    subtitle: 'Innovation & Art',
    description: 'Revolutionary wall solutions that transform spaces with cutting-edge design and functionality.',
    products: ['3D Wall Panels', 'Smart Surfaces', 'Acoustic Solutions', 'Artistic Finishes', 'Modular Systems'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function CategoryShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              onClick={() => setActiveCategory(index)}
              className={`${
                activeCategory === index
                  ? 'bg-primary text-white'
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              } transition-all duration-200`}
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="animate-fadeIn">
          <Card className="overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8 lg:p-12">
                <Badge className="mb-4 bg-secondary text-white">
                  {categories[activeCategory].subtitle}
                </Badge>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {categories[activeCategory].description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-3">Available Products:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories[activeCategory].products.map((product, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-gray-600 text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Request Catalogue
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}