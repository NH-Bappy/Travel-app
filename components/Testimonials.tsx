"use client";

import { TESTIMONIALS } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-t border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-container px-6 lg:px-20 3xl:px-0">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900/40">
            Climber Community
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-3 mb-4">
            Trusted by 120,000+ Outdoor Adventurers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Read real stories from mountaineers, weekend backpackers, and nature enthusiasts navigating remote trails with Hilink.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-zinc-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Image key={i} src="/star.svg" alt="star" width={18} height={18} />
                    ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="rounded-full border border-emerald-500 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.location}</p>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    ✓ Verified Trek: {item.trail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
