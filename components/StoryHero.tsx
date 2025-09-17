import React from 'react';
import StoryHeroSection from './StoryHeroSection';

export default function StoryHero() {
  return (<>
    <StoryHeroSection />
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building bridges in international trade for premium interior solutions
          </p>
        </div>

        {/* First Section: Founded on Trade Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Text Block */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Founded on Trade Expertise</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ideal Solutions Singapore PTE LTD was established as an international trade organization with a mission to bridge the gap between global manufacturers and discerning clients seeking premium interior solutions.
              </p>
              <p>
                Our founders recognized the complexity of international procurement and the need for specialized expertise in navigating global supply chains.
              </p>
              <p>
                From our base in Singapore—a strategic hub for Asian and global trade—we leverage our position to access the finest manufacturers across key production markets while providing comprehensive trade facilitation services to our partners worldwide.
              </p>
            </div>
          </div>

          {/* Icon Group: Global Trade Network */}
          <div className="flex flex-col items-center justify-center h-full bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-3">Global Trade Network</p>
          </div>
        </div>

        {/* Second Section: Expanding Our Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Icon Group: Quality Assurance Systems */}
          <div className="flex flex-col items-center justify-center h-full bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-3">Quality Assurance Systems</p>
          </div>

          {/* Text Block */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Expanding Our Capabilities</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                As our reputation for reliability and quality grew, we expanded our focus across four key categories: Flooring, Furniture, Fabrics, and Fashion Walls. This diversification allowed us to serve as a comprehensive procurement partner for interior design projects of any scale.
              </p>
              <p>
                We developed sophisticated quality assurance protocols, established partnerships with leading manufacturers worldwide, and built a team of trade specialists with deep expertise in international commerce, logistics, and quality control.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section: Leading International Trade Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Block */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Leading International Trade Solutions</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Today, Ideal Solutions stands as a trusted partner in international trade, known for our unwavering commitment to quality, transparency, and reliability.
              </p>
              <p>
                Our comprehensive approach combines market intelligence, rigorous quality control, and expert trade facilitation.
              </p>
              <p>
                Operating from Singapore, we maintain strategic relationships with manufacturers across Asia, Europe, and North America, while serving clients globally through our network of trade partners and logistics providers.
              </p>
              <p>
                Our “Our Sourcing, Your Strength” philosophy reflects our commitment to being the procurement backbone for our partners’ success.
              </p>
            </div>
          </div>

          {/* Icon Group: Global Partnership Network */}
          <div className="flex flex-col items-center justify-center h-full bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-3">Global Partnership Network</p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}