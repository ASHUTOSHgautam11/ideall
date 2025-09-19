"use client";
import React from 'react';
import Feature7 from './Feature7';

// Define the type for each feature item
interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const TrustedByGlobal: React.FC = () => {
    const features: FeatureItem[] = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
                </svg>
            ),
            title: "Global Network",
            description: "Strategic offices in India, China, and Singapore",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: "Quality Assured",
            description: "Rigorous vetting and quality control processes",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5.86A1 1 0 0 1 5 17.86V14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.86A1 1 0 0 1 9.86 18H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            title: "Expert Team",
            description: "Deep expertise in lifestyle goods and logistics",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <polyline points="22 12 18 16 15 13 9 17 6 14 2 18" />
                </svg>
            ),
            title: "Proven Results",
            description: "Track record of successful partnerships since 2002",
        },
    ];

    // Stats data
    const stats = [
        { value: "500+", label: "Projects Completed" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "2M+", label: "Sq Ft Installed" },
        { value: "15+", label: "Years Experience" },
    ];

    return (
        <section
            style={{
                padding: '50px 20px',
                textAlign: 'center',
                backgroundColor: '#f7f4f2ff',

            }}
            aria-labelledby="trusted-by-heading"
        >

            {/* Main Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                    TRUSTED BY GLOBAL BUSINESSES
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    From Singapore to the world, connecting quality suppliers to growing businesses
                </p>
            </div>
            
            
            {/* Features Grid */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '1',
                            minWidth: '200px',
                            padding: '20px',
                            borderRadius: '12px',
                            background: '#fff',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                        }}
                        role="region"
                        aria-label={`${feature.title}: ${feature.description}`}
                    >
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                backgroundColor: '#9c86d8ff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 15px',
                                color: '#2d1c6bff',
                            }}
                        >
                            {feature.icon}
                        </div>
                        <h3
                            style={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '8px',
                            }}
                        >
                            {feature.title}
                        </h3>
                        <p
                            style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.5',
                            }}
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <br />

            {/* Stats Section */}
            {/* <div
                style={{
                    marginTop: '40px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '20px',
                }}
                role="region"
                aria-label="Company achievements and statistics"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        style={{
                            textAlign: 'center',
                            flex: '1',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#2d1c6bff',
                                marginBottom: '4px',
                            }}
                        >
                            {stat.value}
                        </div>
                        <div
                            style={{
                                fontSize: '0.85rem',
                                color: '#555',
                                fontWeight: 'normal',
                            }}
                        >
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div> */}
        </section>
    );
};

export default TrustedByGlobal;