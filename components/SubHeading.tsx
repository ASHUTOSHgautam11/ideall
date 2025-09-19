'use client';

import React from 'react';

interface SubHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ title, description, className = '' }) => {
  return (
    <div
      className={`
        text-left 
        max-w-full 
        mx-4 sm:mx-8 md:mx-12 lg:mx-20 
        px-2 sm:px-4 md:px-6 lg:px-8 
        mb-6 sm:mb-8 md:mb-12
        ${className}
      `}
    >
      {/* Main Title */}
      <h2
        className="
          text-2xl 
          sm:text-2xl 
          md:text-3xl 
          lg:text-4xl 
          xl:text-5xl 
          font-bold 
          text-[#b39171ff] 
          mb-3 sm:mb-4 md:mb-6
        "
      >
        {title}
      </h2>

      {/* Optional Description */}
      {description && (
        <p
          className="
            text-sm 
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            text-gray-700 
            leading-relaxed 
            max-w-full
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SubHeading;
