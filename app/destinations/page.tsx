"use client";

import { DESTINATIONS, Destination } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import Button from "@/components/Button";

const categories = ["All", "Mountain", "Forest", "Lake", "Desert"] as const;

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" || item.difficulty === selectedDifficulty;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 min-h-screen pb-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 dark:bg-zinc-950 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
        <div className="max-container relative z-10 text-center max-w-3xl">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4 uppercase tracking-wider">
            Explore Wilderness
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Discover Extraordinary Campsites & Peaks
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Find offline-mapped campgrounds, alpine ridges, lake coves, and hidden wilderness sanctuaries verified by our global climber community.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-container px-6 -mt-8 relative z-20">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search by destination or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-medium"
            />
            <Image
              src="/location.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50 dark:invert"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Difficulty Dropdown */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
              Difficulty:
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Levels</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Challenging">Challenging</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-container px-6 mt-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Featured Destinations{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-normal text-xl">
              ({filteredDestinations.length})
            </span>
          </h2>
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <Image
              src="/folded-map.svg"
              alt="no results"
              width={64}
              height={64}
              className="mx-auto mb-4 opacity-40 dark:invert"
            />
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">No Destinations Found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSelectedDifficulty("All");
              }}
              className="mt-4 px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    {dest.category}
                  </span>

                  {/* Difficulty Badge */}
                  <span
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                      dest.difficulty === "Easy"
                        ? "bg-green-500 text-white"
                        : dest.difficulty === "Moderate"
                        ? "bg-blue-500 text-white"
                        : dest.difficulty === "Challenging"
                        ? "bg-amber-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {dest.difficulty}
                  </span>

                  {/* Title over image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold tracking-wide text-white">{dest.title}</h3>
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

                  {/* Features List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {dest.features.slice(0, 3).map((feat, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  {/* Footer & Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                    <div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${dest.pricePerNight}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-normal"> / night</span>
                      <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mt-0.5">
                        <Image src="/star.svg" alt="star" width={12} height={12} />
                        <span>{dest.rating}</span>
                        <span className="text-gray-400 dark:text-gray-500 font-normal">({dest.reviewsCount})</span>
                      </div>
                    </div>

                    <Link href={`/destinations/${dest.id}`}>
                      <Button
                        type="button"
                        title="View Details"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-xl text-xs shadow-md transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* App CTA Banner */}
      <section className="max-container px-6 mt-20">
        <div className="bg-gradient-to-r from-emerald-900 to-teal-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="max-w-xl z-10">
            <span className="bg-emerald-500/30 text-emerald-300 font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">
              Offline Maps Enabled
            </span>
            <h3 className="text-2xl md:text-4xl font-bold mt-4 mb-3 text-white">
              Download Topo Maps for Unlimited Offline Hiking
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Never get lost in zero-signal mountain trails. Pre-load elevation profiles and turn-by-turn guidance directly onto your smartphone.
            </p>
          </div>
          <div className="z-10 flex flex-col sm:flex-row gap-3">
            <Link href="/pricing">
              <Button
                type="button"
                title="Get Hilink Pro"
                className="bg-white text-emerald-900 font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-emerald-50 transition-all text-sm"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
