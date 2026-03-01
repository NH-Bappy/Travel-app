"use client";

import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
import FeatureItems from './FeatureItems'

const Features = () => {
  return (
    <section id='pricing' className="relative flex-col flex items-center justify-center overflow-hidden py-16 md:py-24 bg-gradient-to-b dark:bg-[hsl(0,0%,1%)] transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[url('/feature-bg.png')] bg-center bg-cover bg-no-repeat mix-blend-overlay"></div>
      </div>

      <div className="max-container px-4 sm:px-6 lg:px-8 3xl:px-0 relative w-full">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Phone Image */}
          <div className="flex-1 relative lg:min-h-[600px] xl:min-h-[700px] w-full">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full">
              <Image
                src="/phone.png"
                alt="Mobile app interface showing features"
                width={440}
                height={1000}
                className="object-contain object-center drop-shadow-2xl dark:drop-shadow-none 
                         lg:absolute lg:top-[10%] lg:left-0 xl:left-10 
                         transform lg:rotate-[15deg] hover:rotate-[18deg] transition-transform duration-500
                         mx-auto lg:mx-0"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute top-1/4 -left-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-50"></div>
            <div className="hidden lg:block absolute bottom-1/4 -right-10 w-40 h-40 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Right - Features Content */}
          <div className="flex-1 w-full lg:max-w-[60%] space-y-8 font-sans">
            {/* Section Header */}
            <div className="relative inline-block">
              <div className="absolute -left-2 -top-3">
                <Image
                  src="/camp.svg"
                  alt="Camp icon"
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 opacity-80 dark:opacity-60"
                />
              </div>
              <h2 className="pl-10 sm:pl-12 lg:pl-14 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
                Our <span className="text-emerald-600 dark:text-emerald-400">Features</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl">
                Discover what makes our platform unique and how we can enhance your outdoor adventures
              </p>
            </div>

            {/* Features Grid - Without index prop */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mt-8 lg:mt-12">
              {FEATURES.map((feature) => (
                <li key={feature.title} className="transform hover:-translate-y-1 transition-all duration-300">
                  <FeatureItems
                    title={feature.title}
                    icon={feature.icon}
                    description={feature.description}
                  // Removed index prop
                  />
                </li>
              ))}
            </ul>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 lg:pt-12 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Campers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features