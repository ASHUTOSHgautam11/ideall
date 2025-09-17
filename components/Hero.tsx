import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Slider from './Slider';

export default function Hero() {
  return (
    <section className="relative h-[screen] bg-gradient-to-br from-[#201149ff]-100 to-white py-16 sm:py-20 lg:py-24  " style={{
                padding: '60px 20px',
                textAlign: 'center',
                backgroundColor: '#d3d1daff',
            }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{
                color: '#ca9b64ff',
                fontFamily: 'var(--font-playfair)',
                lineHeight: '1.2',
              }}
            >
              Your Sourcing<br />
              <span style={{ color: '#272557' }}>Partner for a</span><br />
              <span style={{ color: '#ca9b64ff' }}>Connected World</span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Our Sourcing, Your Strength. We empower global businesses by connecting them to high-quality lifestyle goods through an extensive, reliable, and efficient supply chain.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 pb-2 lg:pb-0">
              {[
                'Global Sourcing Network',
                'Quality Assurance',
                'Trade Facilitation',
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200 whitespace-nowrap text-xs sm:text-sm"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <span className="text-primary font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-20 gap-y-6 mt-6 lg:mt-8" style={{ fontFamily: 'var(--font-inter)' }}>
              {[
                { label: '500+', desc: 'Projects Completed' },
                { label: '70M+', desc: 'Sq Ft Produced' },
                { label: '23+', desc: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center min-w-[100px]">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-text-secondary">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Additional CTAs with Icons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
              <button
                className="flex items-center gap-2 bg-primary text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Schedule Free Consultation
              </button>
              <button
                className="flex items-center gap-2 text-primary hover:text-white hover:bg-[#d9a87f] rounded-lg px-5 sm:px-6 py-3 border border-transparent hover:border-[#d9a87f] transition-all duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2zM6 18a1 1 0 011-1h8a1 1 0 011 1v1H6v-1zM6 14a1 1 0 011-1h8a1 1 0 011 1v1H6v-1z" />
                </svg>
                Explore Products
              </button>
            </div>

            {/* Badges / Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-6 text-xs sm:text-sm text-text-secondary" style={{ fontFamily: 'var(--font-inter)' }}>
              {[
                { icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", label: "10 Year Warranty" },
                { icon: "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4a2 2 0 01-2-2v-8a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2z", label: "Eco-Certified" },
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Free Installation" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                  </svg>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl">
              {/* Main Title Badge */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-primary text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full shadow-md z-20">
                Premium Quality
              </div>

              {/* Decorative Blur Circle */}
              <div className="absolute -bottom-6 -right-8 w-24 h-24 sm:w-28 sm:h-28 bg-primary/10 rounded-full blur-xl z-0"></div>

              {/* Image Grid */}
              <div className="relative z-10 grid grid-cols-1 gap-3 sm:gap-4">
                {/* Large Top Image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-[1.01] transition-transform duration-300">
                  <Image
                    src="/hero/slide3.png"
                    alt="Featured Interior Design"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Bottom Row: Two Small Images */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src="/hero/slide2.png"
                      alt="Interior Detail 1"
                      width={250}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src="/hero/slide3.png"
                      alt="Interior Detail 2"
                      width={250}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}