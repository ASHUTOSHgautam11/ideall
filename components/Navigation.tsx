'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Home,
  Users,
  Package,
  Briefcase,
  PlayCircle,
  CreditCard,
  Image as ImageIcon,
  Phone,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Our Story', href: '/our-story', icon: Users },
    { name: 'Product Categories', href: '/product-categories', icon: Package },
    // { name: 'Projects', href: '/project-showcase', icon: ImageIcon },
    { name: 'Career', href: '/career', icon: Briefcase},
    { name: 'Payment', href: '/payment', icon: CreditCard },
    { name: 'Media', href: '/media', icon: PlayCircle },
  ];

  const isActivePath = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="w-full">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          {/* Logo — Left Side */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
            aria-label="Ideall Solutions Home"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <div className="w-10 h-10 rounded-full shadow-sm overflow-hidden">
              <Image
                src="/IDEALLS LOGO.png"
                alt="Ideall Solutions Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden md:inline font-semibold text-gray-900 text-base">Ideall Solutions</span>
          </Link>

          {/* Desktop Navigation + CTAs — Right Side */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Nav Links */}
            <nav className="flex items-center space-x-10">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center space-x-1.5 text-gray-900 hover:text-[#272557] font-medium transition-colors duration-200 ${isActivePath(item.href) ? 'text-[#272557]' : ''
                      }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <IconComponent size={18} className="text-gray-900 group-hover:text-[#272557]" />
                    <span className="text-sm sm:text-base font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-400 hover:bg-gray-100 text-gray-900 hover:text-gray-900 font-medium transition-colors"
                onClick={() => (window.location.href = '/contact')}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <Phone size={16} className="mr-1.5" />
                Connect With Us
              </Button>
              {/* <Button
                variant="default"
                size="sm"
                className="bg-[#272557] hover:bg-[#1e1c44] text-white font-medium transition-colors"
                onClick={() => (window.location.href = '/contact')}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <Calendar size={16} className="mr-1.5" />
                Schedule Consultation
              </Button> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#272557]"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[600px] opacity-100 py-3' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          style={{ transitionProperty: 'max-height, opacity', fontFamily: 'var(--font-inter)' }}
        >
          <div className="px-4 py-4 bg-white/10 backdrop-blur-lg border-t border-white/20 space-y-3">
            <nav className="space-y-3">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-900 hover:text-[#272557] hover:bg-white/10 transition-colors duration-200 ${isActivePath(item.href) ? 'text-[#272557] bg-white/10' : ''
                      }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-white/20 space-y-3">
              <Button
                variant="outline"
                className="w-full justify-center gap-2 text-gray-900 border-gray-400 hover:bg-gray-100 font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = '/contact';
                }}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <Phone size={24} />
                Connect With Us
              </Button>
              {/* <Button
                variant="default"
                className="w-full justify-center gap-2 bg-[#272557] hover:bg-[#1e1c44] text-white font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = '/contact';
                }}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <Calendar size={20} />
                Schedule Consultation
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}