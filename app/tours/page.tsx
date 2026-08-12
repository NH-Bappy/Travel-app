"use client";

import { TOURS, TourPackage } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState<string>("All");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filteredTours = TOURS.filter(
    (tour) => activeDifficulty === "All" || tour.difficulty === activeDifficulty
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 min-h-screen pb-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 dark:bg-zinc-950 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
        <div className="max-container relative z-10 text-center max-w-3xl">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4 uppercase tracking-wider">
            Guided Expeditions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Curated Wilderness & Mountain Tours
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Embark on multi-day treks, high-altitude summits, and arctic survival courses led by certified alpine guides and emergency responders.
          </p>
        </div>
      </section>

      {/* Difficulty Filter Bar */}
      <section className="max-container px-6 mt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <span className="text-sm font-semibold text-gray-700 pl-2">Filter by Difficulty:</span>
          <div className="flex flex-wrap gap-2">
            {["All", "Easy", "Moderate", "Challenging", "Advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setActiveDifficulty(level)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeDifficulty === level
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-container px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-64 w-full">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                    {tour.duration}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      tour.difficulty === "Easy"
                        ? "bg-green-500 text-white"
                        : tour.difficulty === "Moderate"
                        ? "bg-blue-500 text-white"
                        : tour.difficulty === "Challenging"
                        ? "bg-amber-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {tour.difficulty}
                  </span>
                </div>

                <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {tour.groupSize}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold tracking-tight">{tour.title}</h3>
                  <p className="text-xs text-gray-200 flex items-center gap-1 mt-1">
                    <Image src="/location.svg" alt="loc" width={14} height={14} className="invert" />
                    {tour.location}
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {tour.summary}
                </p>

                {/* Inclusions */}
                <div className="mb-6 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                    Package Inclusions
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 font-medium">
                        <span className="text-emerald-600 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-extrabold text-gray-900">${tour.price}</span>
                    <span className="text-xs text-gray-500"> / person</span>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mt-0.5">
                      ★ {tour.rating} Top Rated Tour
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedTour(tour);
                        setBookingSuccess(false);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-xs"
                    >
                      View Itinerary & Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Detail & Itinerary Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 md:p-8 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 font-bold"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              {selectedTour.duration} Expedition
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-1">
              {selectedTour.title}
            </h2>
            <p className="text-xs text-gray-500 mb-6 flex items-center gap-1">
              <Image src="/location.svg" alt="loc" width={14} height={14} />
              {selectedTour.location}
            </p>

            {bookingSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center my-6">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Expedition Seat Reserved!</h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto mb-6">
                  You are registered for {selectedTour.title}. Your trip coordinator will contact you with equipment packing guides.
                </p>
                <button
                  onClick={() => setSelectedTour(null)}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl text-sm hover:bg-emerald-700 transition-all"
                >
                  Close & Browse More
                </button>
              </div>
            ) : (
              <>
                {/* Itinerary Timeline */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Day-by-Day Itinerary
                  </h3>
                  <div className="space-y-4">
                    {selectedTour.itinerary.map((dayItem) => (
                      <div key={dayItem.day} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex-shrink-0 flex items-center justify-center text-sm shadow-md">
                          D{dayItem.day}
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl flex-1 border border-gray-100">
                          <h4 className="font-bold text-gray-800 text-sm">{dayItem.title}</h4>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{dayItem.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instant Reservation Callout */}
                <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-emerald-300 font-semibold uppercase">Total Expedition Cost</span>
                    <p className="text-3xl font-extrabold">${selectedTour.price} <span className="text-xs font-normal text-gray-300">/ person</span></p>
                  </div>
                  <button
                    onClick={() => setBookingSuccess(true)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-white text-emerald-900 font-bold rounded-xl shadow-lg hover:bg-emerald-50 transition-all text-sm"
                  >
                    Confirm Booking
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
