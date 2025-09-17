// 'use client';
// import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import Image from 'next/image';

// const slides = [
//   {
//     src: '/hero/slide1.png',
//     alt: 'Luxury Flooring Solutions',
//     title: 'Premium Flooring Sourcing Worldwide',
//     description: 'We source high-end flooring materials from Europe, Asia, and beyond — ensuring durability, elegance, and seamless delivery.',
//     ctaText: 'Explore Flooring Options',
//     ctaLink: '/flooring',
//   },
//   {
//     src: '/hero/slide2.png',
//     alt: 'Premium Furniture Sourcing',
//     title: 'Global Furniture Procurement Experts',
//     description: 'From modern designs to timeless classics, we connect you with top manufacturers for custom and ready-to-ship furniture.',
//     ctaText: 'Discover Furniture',
//     ctaLink: '/furniture',
//   },
//   {
//     src: '/hero/slide3.png',
//     alt: 'Designer Fabrics & Textiles',
//     title: 'Luxury Fabrics & Upholstery Solutions',
//     description: 'Import premium textiles for hospitality, residential, and commercial interiors with full quality control and logistics support.',
//     ctaText: 'View Fabric Collections',
//     ctaLink: '/fabrics',
//   },
//   {
//     src: '/hero/slide4.png',
//     alt: 'Fashion Walls & Interior Accents',
//     title: 'Innovative Fashion Walls & 3D Panels',
//     description: 'Elevate spaces with textured, acoustic, and decorative wall solutions sourced from leading global designers.',
//     ctaText: 'See Wall Innovations',
//     ctaLink: '/fashion-walls',
//   },
// ];

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start at real first slide (index 1 due to clone)
//   const totalSlides = slides.length;

//   // Add cloned first slide at the end and cloned last at the beginning
//   const extendedSlides = [
//     slides[totalSlides - 1], // clone of last
//     ...slides,               // original slides
//     slides[0],               // clone of first
//   ];

//   // Auto-advance every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNext();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const goToPrevious = () => {
//     if (currentIndex === 0) return;
//     setCurrentIndex((prev) => prev - 1);
//   };

//   const goToNext = () => {
//     if (currentIndex === extendedSlides.length - 1) return;
//     setCurrentIndex((prev) => prev + 1);
//   };

//   // After animation, snap back without triggering re-render
//   useEffect(() => {
//     if (currentIndex === 0) {
//       // User went from first to prev → show last clone, then jump silently
//       setTimeout(() => setCurrentIndex(totalSlides), 50); // Snap to real last
//     } else if (currentIndex === extendedSlides.length - 1) {
//       // User went past last → show first clone, then jump silently
//       setTimeout(() => setCurrentIndex(1), 50); // Snap to real first
//     }
//   }, [currentIndex, totalSlides]);

//   const jumpToSlide = (index: number) => {
//     setCurrentIndex(index + 1); // +1 because of prepended clone
//   };

//   return (
//     <section className="relative w-full h-[80vh] lg:h-screen overflow-hidden bg-gray-900">
//       {/* Slides Container */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {extendedSlides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0 relative">
//             <Link href={slide.ctaLink} className="block w-full h-full">
//               <Image
//                 src={slide.src}
//                 alt={slide.alt}
//                 fill
//                 className="object-cover"
//                 sizes="100vw"
//               />
//               <div className="absolute inset-0 bg-black/40"></div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Dynamic Content Overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white pointer-events-none">
//         <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
//           {/* Logo */}
//           <div className="pointer-events-auto">
//             <Link href="/">
//               <Image
//                 src="/IDEALLS LOGO.png"
//                 alt="Ideall Solutions Logo"
//                 width={200}
//                 height={140}
//                 className="object-contain drop-shadow-lg"
//               />
//             </Link>
//           </div>

//           {/* Dynamic Title */}
//           <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-md">
//             {slides[(currentIndex - 1 + totalSlides) % totalSlides].title}
//           </h1>

//           {/* Dynamic Description */}
//           <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
//             {slides[(currentIndex - 1 + totalSlides) % totalSlides].description}
//           </p>

//           {/* Key Features */}
//           <div className="flex flex-wrap justify-center gap-3">
//             {['Global Sourcing Network', 'Quality Assurance', 'Trade Facilitation'].map((feature, i) => (
//               <span
//                 key={i}
//                 className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium"
//               >
//                 {feature}
//               </span>
//             ))}
//           </div>

//           {/* Dynamic CTA Button */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
//             <Button
//               size="lg"
//               className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold"
//             >
//               <Link href={slides[(currentIndex - 1 + totalSlides) % totalSlides].ctaLink}>
//                 {slides[(currentIndex - 1 + totalSlides) % totalSlides].ctaText}
//               </Link>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
//             >
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <Button
//         onClick={goToPrevious}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
//         aria-label="Previous Slide"
//       >
//         <span className="sr-only bg-black">&lt;</span>
//       </Button>
//       <Button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
//         aria-label="Next Slide"
//       >
//         <span className="sr-only bg-black">&gt;</span>
//       </Button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 flex space-x-2 z-20 justify-center w-full">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => jumpToSlide(idx)}
//             className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//               idx === (currentIndex - 1 + totalSlides) % totalSlides
//                 ? 'bg-white scale-125'
//                 : 'bg-white/60 hover:bg-white/80'
//             }`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }











// import React, { useState, useEffect } from 'react';

// import Icon from '../../../components/AppIcon';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   const [isRevealed, setIsRevealed] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const heroSlides = [
//     {
//       id: 1,
//       beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
//       afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
//       title: "Luxury Hotel Lobby Transformation",
//       subtitle: "From outdated to outstanding in 48 hours",
//       location: "Mumbai, Maharashtra"
//     },
//     {
//       id: 2,
//       beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
//       afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
//       title: "Corporate Office Modernization",
//       subtitle: "Enhancing productivity through design",
//       location: "Bangalore, Karnataka"
//     },
//     {
//       id: 3,
//       beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
//       afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
//       title: "Residential Living Space",
//       subtitle: "Creating warmth in modern homes",
//       location: "Delhi, NCR"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
//       setIsRevealed(false);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [heroSlides?.length]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsRevealed(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [currentSlide]);

//   const currentProject = heroSlides?.[currentSlide];

//   return (
//     <section className="relative h-screen bg-gradient-to-br from-background via-muted to-background overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-repeat" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C65D00' fill-opacity='0.1'%3E%3Crect width='30' height='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '60px 60px'
//         }} />
//       </div>
//       <div className="relative h-full flex items-center">
//         <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Content Side */}
//             <div className="space-y-8 z-10">
//               <div className="space-y-4">
//                 <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
//                   <Icon name="Award" size={16} />
//                   <span>Award-Winning Flooring Solutions</span>
//                 </div>
                
//                 <h1 className="text-5xl lg:text-7xl font-accent font-bold text-text-primary leading-tight">
//                   Designing
//                   <span className="block text-primary">Tomorrow's</span>
//                   <span className="block text-secondary">Foundations</span>
//                   <span className="block text-text-primary">Today</span>
//                 </h1>
                
//                 <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
//                   Transform your spaces with premium carpet tiles that combine innovative design, 
//                   sustainable materials, and unmatched durability. Every tile tells a story of excellence.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-primary">500+</div>
//                   <div className="text-sm text-text-secondary">Projects Completed</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-primary">2M+</div>
//                   <div className="text-sm text-text-secondary">Sq Ft Installed</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-primary">15+</div>
//                   <div className="text-sm text-text-secondary">Years Experience</div>
//                 </div>
//               </div>

//               {/* CTAs */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   variant="default"
//                   size="lg"
//                   iconName="Calendar"
//                   iconPosition="left"
//                   className="bg-conversion-accent hover:bg-conversion-accent/90 text-white"
//                   onClick={() => window.location.href = '/contact-consultation'}
//                 >
//                   Schedule Free Consultation
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   iconName="Package"
//                   iconPosition="left"
//                   onClick={() => window.location.href = '/product-catalog'}
//                 >
//                   Explore Products
//                 </Button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex items-center space-x-6 pt-4">
//                 <div className="flex items-center space-x-2 text-sm text-text-secondary">
//                   <Icon name="Shield" size={16} className="text-success" />
//                   <span>10 Year Warranty</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-text-secondary">
//                   <Icon name="Leaf" size={16} className="text-accent" />
//                   <span>Eco-Certified</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-text-secondary">
//                   <Icon name="Truck" size={16} className="text-primary" />
//                   <span>Free Installation</span>
//                 </div>
//               </div>
//             </div>

//             {/* Visual Side - Before/After Reveal */}
//             <div className="relative">
//               <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-brand-lg">
//                 {/* Before Image */}
//                 <div className="absolute inset-0">
//                   <Image
//                     src={currentProject?.beforeImage}
//                     alt={`Before - ${currentProject?.title}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-medium">
//                     Before
//                   </div>
//                 </div>

//                 {/* After Image with Reveal Animation */}
//                 <div 
//                   className={`absolute inset-0 transition-all duration-2000 ease-out ${
//                     isRevealed ? 'clip-path-reveal' : 'clip-path-hidden'
//                   }`}
//                   style={{
//                     clipPath: isRevealed 
//                       ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
//                       : 'polygon(0 0, 0 0, 0 100%, 0 100%)'
//                   }}
//                 >
//                   <Image
//                     src={currentProject?.afterImage}
//                     alt={`After - ${currentProject?.title}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
//                     After
//                   </div>
//                 </div>

//                 {/* Project Info Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
//                   <h3 className="text-xl font-semibold mb-1">{currentProject?.title}</h3>
//                   <p className="text-sm opacity-90 mb-2">{currentProject?.subtitle}</p>
//                   <div className="flex items-center space-x-2 text-sm">
//                     <Icon name="MapPin" size={14} />
//                     <span>{currentProject?.location}</span>
//                   </div>
//                 </div>

//                 {/* Reveal Button */}
//                 <button
//                   onClick={() => setIsRevealed(!isRevealed)}
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-text-primary p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
//                   aria-label="Toggle before/after view"
//                 >
//                   <Icon name={isRevealed ? "Eye" : "EyeOff"} size={20} />
//                 </button>
//               </div>

//               {/* Slide Indicators */}
//               <div className="flex justify-center space-x-2 mt-6">
//                 {heroSlides?.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => {
//                       setCurrentSlide(index);
//                       setIsRevealed(false);
//                     }}
//                     className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                       index === currentSlide 
//                         ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="flex flex-col items-center space-y-2 text-text-secondary">
//           <span className="text-sm">Discover More</span>
//           <Icon name="ChevronDown" size={20} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;