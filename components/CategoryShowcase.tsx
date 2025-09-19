'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Layers, Sofa, Scissors, Palette } from 'lucide-react';

const categories = [
  {
    slug: 'floorings',
    title: 'Premium Floorings',
    subtitle: 'Luxury & Durability',
    description:
      'From hardwood masterpieces to innovative luxury vinyl, our flooring solutions combine aesthetics with performance. Perfect for homes, offices, and premium commercial projects.',
    features: [
      'Scratch & water resistance',
      'Sustainable eco-materials',
      'Luxury finishes & textures',
      'Long-lasting durability',
    ],
    products: [
      { slug: 'engineered-hardwood', name: 'Engineered Hardwood' },
      { slug: 'luxury-vinyl-tiles', name: 'Luxury Vinyl Tiles' },
      { slug: 'natural-stone', name: 'Natural Stone' },
      { slug: 'designer-carpets', name: 'Designer Carpets' },
      { slug: 'eco-friendly-options', name: 'Eco-friendly Options' },
    ],
    image:
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Layers,
  },
  {
    slug: 'furniture',
    title: 'Designer Furniture',
    subtitle: 'Style & Function',
    description:
      'Curated collections from renowned manufacturers, offering bespoke furniture for residential and commercial spaces. Smart and ergonomic designs available.',
    features: [
      'Custom manufacturing',
      'Smart office solutions',
      'Luxury residential pieces',
      'Outdoor durability',
    ],
    products: [
      { slug: 'custom-manufacturing', name: 'Custom Manufacturing' },
      { slug: 'luxury-collections', name: 'Luxury Collections' },
      { slug: 'office-solutions', name: 'Office Solutions' },
      { slug: 'outdoor-furniture', name: 'Outdoor Furniture' },
      { slug: 'smart-furniture', name: 'Smart Furniture' },
    ],
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sofa,
  },
  {
    slug: 'fabrics',
    title: 'Premium Fabrics',
    subtitle: 'Texture & Quality',
    description:
      'High-end textiles and specialty materials for interior design and fashion applications. Offering sustainable, designer-grade fabrics for every space.',
    features: [
      'Sustainable & ethical sourcing',
      'Designer & technical fabrics',
      'Custom weaving options',
      'Performance textiles',
    ],
    products: [
      { slug: 'designer-textiles', name: 'Designer Textiles' },
      { slug: 'technical-fabrics', name: 'Technical Fabrics' },
      { slug: 'sustainable-materials', name: 'Sustainable Materials' },
      { slug: 'custom-weaving', name: 'Custom Weaving' },
      { slug: 'performance-fabrics', name: 'Performance Fabrics' },
    ],
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Scissors,
  },
  {
    slug: 'walls',
    title: 'Fashion Walls',
    subtitle: 'Innovation & Art',
    description:
      'Revolutionary wall solutions that transform spaces with artistic and functional surfaces. Perfect for acoustic comfort and aesthetic appeal.',
    features: [
      '3D wall panel designs',
      'Acoustic & smart walls',
      'Modular easy installation',
      'Artistic & modern finishes',
    ],
    products: [
      { slug: '3d-wall-panels', name: '3D Wall Panels' },
      { slug: 'smart-surfaces', name: 'Smart Surfaces' },
      { slug: 'acoustic-solutions', name: 'Acoustic Solutions' },
      { slug: 'artistic-finishes', name: 'Artistic Finishes' },
      { slug: 'modular-systems', name: 'Modular Systems' },
    ],
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Palette,
  },
];

export default function CategoryShowcase() {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const slug = pathname.split('/').pop();
    const index = categories.findIndex((cat) => cat.slug === slug);
    if (index !== -1) setActiveCategory(index);
  }, [pathname]);

  const handleCategoryClick = (index: number) => {
    if (activeCategory === index) {
      setActiveCategory(null);
      window.history.pushState(null, '', `/product-categories`);
    } else {
      setActiveCategory(index);
      window.history.pushState(null, '', `/product-categories/${categories[index].slug}`);
    }
  };

  const handleSubcategoryClick = (categorySlug: string, productSlug: string) => {
    window.history.pushState(null, '', `/product-categories/${categorySlug}/${productSlug}`);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Discover Our Premium Categories
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose from a curated selection of world-class products designed to
          elevate your interiors. Explore floorings, furniture, fabrics, and
          walls — all crafted for style, function, and durability.
        </p>

        {/* Modernized Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Card
              key={category.slug}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg border-0"
              onClick={() => handleCategoryClick(index)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <category.icon className="w-10 h-10 text-white mb-2 opacity-90" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <p className="text-sm text-gray-200">{category.subtitle}</p>

                {/* Subcategories shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-4 flex flex-wrap gap-2">
                  {category.products.map((product) => (
                    <span
                      key={product.slug}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubcategoryClick(category.slug, product.slug);
                      }}
                      className="bg-white/80 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-primary hover:text-white transition"
                    >
                      {product.name}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Expanded Info */}
        <AnimatePresence>
          {activeCategory !== null && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="mt-12 rounded-2xl shadow-2xl p-10 text-left bg-white/90 backdrop-blur-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <Badge className="mb-4 bg-secondary text-white">
                    {categories[activeCategory].subtitle}
                  </Badge>
                  <h4 className="text-3xl font-bold text-primary mb-4">
                    {categories[activeCategory].title}
                  </h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {categories[activeCategory].description}
                  </p>

                  <ul className="grid gap-2 mb-8">
                    {categories[activeCategory].features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {categories[activeCategory].products.map((product) => (
                      <Button
                        key={product.slug}
                        variant="outline"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubcategoryClick(
                            categories[activeCategory].slug,
                            product.slug
                          );
                        }}
                        className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6"
                      >
                        {product.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={categories[activeCategory].image}
                    alt={categories[activeCategory].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
