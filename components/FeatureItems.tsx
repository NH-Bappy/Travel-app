"use client";

import Image from "next/image";
import React from "react";

interface FeatureItemsProps {
  title: string;
  icon: string;
  description: string;
}

const FeatureItems = ({ title, icon, description }: FeatureItemsProps) => {
  return (
    <div>
      {/* Icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 flex items-center justify-center bg-black dark:bg-gray-800 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
          <Image
            src={icon}
            alt={title}
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>

      {/* Decorative corner accent */}
      <div className="absolute bottom-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-6 h-6 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default FeatureItems;