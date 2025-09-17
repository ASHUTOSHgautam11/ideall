import Image from 'next/image';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Define the type for images
interface ImageItem {
  src: string;
  alt: string;
}

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample image data (replace with your actual image URLs)
  const images: ImageItem[] = [
    {
      src: '/images/bathroom.jpg',
      alt: 'Modern bathroom interior',
    },
    {
      src: '/images/hallway.jpg',
      alt: 'Minimalist hallway with glass panels',
    },
    {
      src: '/images/modern-house.jpg',
      alt: 'Contemporary house in forest',
    },
    {
      src: '/images/external-corner.jpg',
      alt: 'Exterior corner of modern home',
    },
  ];

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 mb-16">
        {/* Left Side - Title */}
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-semibold text-gray-700 bg-gray-800 text-white px-3 py-1 rounded-full">
            About us
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            A Global Vision,<br />
            Grounded in Trust.
          </h1>
        </div>

        {/* Right Side - Description */}
        <div className="flex-1 max-w-2xl text-gray-700 leading-relaxed text-lg">
          <p>
            Ideal Solutionz is a cornerstone within the IDEall Group of Companies. Founded in Singapore in 2002, our journey began with a clear mission: to simplify and optimise global trade for the lifestyle goods industry. We saw a world of fragmented supply chains and complex logistics, and built a company to be the trusted bridge between manufacturers and markets. We have become the premier sourcing and trading partner for lifestyle goods, empowering our clients to achieve their business goals by providing seamless access to a world of high-quality products.
          </p>
        </div>
      </div>

      {/* Optional: Slide Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;