// app/components/OurProcess.tsx
"use client";

import React from "react";

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "Understand your specific requirements and goals",
    },
    {
      id: 2,
      title: "Sourcing",
      description: "Identify and vet the best suppliers for your needs",
    },
    {
      id: 3,
      title: "Quality Control",
      description: "Ensure products meet your standards before shipping",
    },
    {
      id: 4,
      title: "Delivery",
      description: "Handle logistics and deliver to your destination",
    },
  ];

  return (
    <section className="py-12 md:py-10 bg-gray-100 ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Process
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          A streamlined approach to connecting you with the right suppliers and ensuring success.
        </p>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div className="flex flex-col items-center text-center flex-1 max-w-[200px] mx-auto md:mx-0">
                <div className="w-14 h-14 rounded-full bg-[#412b74] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal arrow for desktop */}
                  <div className="hidden md:flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#412b74]"
                    >
                      <path
                        d="M5 12H19M19 12L12 19M19 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Vertical arrow centered for mobile/tablet */}
                  <div className="flex md:hidden justify-center my-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#412b74] rotate-90"
                    >
                      <path
                        d="M5 12H19M19 12L12 19M19 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
