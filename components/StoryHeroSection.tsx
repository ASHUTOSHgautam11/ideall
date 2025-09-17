'use client'; // If using App Router and client-side interactivity

import React from 'react';
// import Image from '../../../components/AppImage';
// import Button, { ButtonProps } from '../../../components/ui/Button';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
// Define props if needed (currently none, but good for extensibility)
interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C65D00' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            Crafting Excellence Since 1995
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-accent font-bold text-text-primary mb-6 leading-tight">
                            A Global Vision,
                            <span className="text-primary block">Grounded in Trust.</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl">
                            Ideall Solutionz, founded in Singapore in 2002 as part of the IDeall Group of Companies, began with a clear mission: to simplify and optimise global trade for the lifestyle goods industry. Today, we have become the premier sourcing and trading partner for lifestyle goods, empowering our clients to achieve their business goals by providing seamless access to a world of high-quality products.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                variant="default"
                                size="lg"
                                className="bg-primary hover:bg-primary/90"
                            >
                                Our Story
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                            >
                                Watch Our Journey
                            </Button>
                        </div>
                    </div>
                    {/* Hero Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Simachi Designs craftsman working on premium flooring installation"
                                className="w-full h-96 lg:h-[500px] object-cover"
                                width={800}
                                height={500}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 bg-surface rounded-xl p-6 shadow-brand-lg border border-border">
                            <div className="text-2xl font-bold text-primary">28+</div>
                            <div className="text-sm text-text-secondary">Years of Excellence</div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-surface rounded-xl p-6 shadow-brand-lg border border-border">
                            <div className="text-2xl font-bold text-primary">5000+</div>
                            <div className="text-sm text-text-secondary">Projects Completed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

                export default HeroSection;