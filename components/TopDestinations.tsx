"use client";

import { DESTINATIONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const TopDestinations = () => {
  const featuredDestinations = DESTINATIONS.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-container px-6 lg:px-20 3xl:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900/40">
              Popular Campsites
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-3">
              Explore Top Rated Wilderness Destinations
            </h2>
          </div>
          <Link href="/destinations">
            <Button
              type="button"
              title="Explore All Destinations →"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-xs"
            />
          </Link>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {dest.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight text-white">{dest.title}</h3>
                  <p className="text-xs text-gray-200 flex items-center gap-1 mt-0.5">
                    <Image src="/location.svg" alt="loc" width={12} height={12} className="invert opacity-80" />
                    {dest.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {dest.description}
                </p>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 gap-2 bg-emerald-50/60 dark:bg-emerald-950/40 p-3 rounded-xl mb-4 border border-emerald-100 dark:border-emerald-900/30 text-xs font-medium text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Image src="/meter.svg" alt="ele" width={16} height={16} className="dark:invert" />
                    <span>{dest.elevation} Elev.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image src="/calendar.svg" alt="dur" width={16} height={16} className="dark:invert" />
                    <span>{dest.distance} Hike</span>
                  </div>
                </div>

                {/* Footer Price & Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                  <div>
                    <span className="text-2xl font-extrabold text-gray-900 dark:text-white">${dest.pricePerNight}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400"> / night</span>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mt-0.5">
                      <Image src="/star.svg" alt="star" width={12} height={12} />
                      <span>{dest.rating}</span>
                    </div>
                  </div>

                  <Link href={`/destinations/${dest.id}`}>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                      View Details →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopDestinations;
