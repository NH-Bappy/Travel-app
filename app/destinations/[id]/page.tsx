"use client";

import { DESTINATIONS, Destination } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import Button from "@/components/Button";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DestinationDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const destination = DESTINATIONS.find((item) => item.id === resolvedParams.id) || DESTINATIONS[0];

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);
  const [selectedGear, setSelectedGear] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const totalPrice = (destination.pricePerNight + (selectedGear ? 35 : 0)) * 2;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100 py-3.5 px-6">
        <div className="max-container flex items-center gap-2 text-xs font-medium text-gray-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link href="/destinations" className="hover:text-emerald-700">Destinations</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{destination.title}</span>
        </div>
      </div>

      {/* Hero Banner with Destination Image */}
      <section className="relative h-[420px] md:h-[500px] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        
        <div className="max-container h-full relative z-10 px-6 flex flex-col justify-end pb-12 text-white">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="bg-emerald-500 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {destination.category}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                destination.difficulty === "Easy"
                  ? "bg-green-500 text-white"
                  : destination.difficulty === "Moderate"
                  ? "bg-blue-500 text-white"
                  : destination.difficulty === "Challenging"
                  ? "bg-amber-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {destination.difficulty} Level
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best Season: {destination.bestSeason}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
            {destination.title}
          </h1>
          <p className="text-base md:text-xl text-gray-200 flex items-center gap-2">
            <Image src="/location.svg" alt="location" width={18} height={18} className="invert" />
            {destination.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content & Booking Form Container */}
      <section className="max-container px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Details, Features, Rules */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Stats Grid */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-emerald-50/60 rounded-xl">
                <p className="text-xs text-gray-500 font-medium">Elevation</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{destination.elevation}</p>
              </div>
              <div className="p-3 bg-emerald-50/60 rounded-xl">
                <p className="text-xs text-gray-500 font-medium">Est. Hike Time</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{destination.distance}</p>
              </div>
              <div className="p-3 bg-emerald-50/60 rounded-xl">
                <p className="text-xs text-gray-500 font-medium">Rating</p>
                <p className="text-lg font-bold text-emerald-700 mt-1">★ {destination.rating}</p>
              </div>
              <div className="p-3 bg-emerald-50/60 rounded-xl">
                <p className="text-xs text-gray-500 font-medium">Price / Night</p>
                <p className="text-lg font-bold text-gray-900 mt-1">${destination.pricePerNight}</p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Campsite Overview</h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {destination.description}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-4">
                This campsite is mapped with precision LiDAR telemetry. Outdoor enthusiasts can access real-time spring water status, fire pit reservations, and offline safety checkpoints directly through the Hilink mobile application.
              </p>
            </div>

            {/* Highlights & Features */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Included Amenities & Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trail Rules & Safety */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wilderness Rules & Leave No Trace</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  Pack out all trash and waste. Keep mountain streams free of soaps.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  Campfires only allowed in designated steel fire rings provided.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  Download Hilink 3D AR Offline Maps prior to entering basecamp.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  Keep food stored in bear-proof containers or elevated bear bags.
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Booking Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
              <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <span className="text-3xl font-extrabold text-gray-900">${destination.pricePerNight}</span>
                  <span className="text-gray-500 text-sm"> / night</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold bg-amber-50 px-2.5 py-1 rounded-md">
                  ★ {destination.rating} ({destination.reviewsCount} reviews)
                </div>
              </div>

              {bookingSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">Reservation Confirmed!</h3>
                  <p className="text-xs text-emerald-700 mb-4">
                    Your basecamp spot at {destination.title} has been held. Confirmation details sent to your registered email.
                  </p>
                  <button
                    onClick={() => setBookingSuccess(false)}
                    className="w-full py-2.5 bg-emerald-600 text-white font-semibold text-xs rounded-xl hover:bg-emerald-700 transition-all"
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Number of Campers
                    </label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value={1}>1 Camper</option>
                      <option value={2}>2 Campers</option>
                      <option value={4}>4 Campers (Family Tent)</option>
                      <option value={6}>6 Campers (Group Site)</option>
                    </select>
                  </div>

                  {/* Add-on Gear Toggle */}
                  <div className="pt-2">
                    <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedGear}
                        onChange={(e) => setSelectedGear(e.target.checked)}
                        className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-gray-800 block">Add Ultralight Tent & Sleeping Bag</span>
                        <span className="text-gray-500">+$35 per stay</span>
                      </div>
                    </label>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>${destination.pricePerNight} x 2 nights</span>
                      <span>${destination.pricePerNight * 2}</span>
                    </div>
                    {selectedGear && (
                      <div className="flex justify-between">
                        <span>Gear Rental</span>
                        <span>$35</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-sm text-gray-900 pt-2 border-t border-gray-100">
                      <span>Total Estimated Cost</span>
                      <span className="text-emerald-700">${totalPrice}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    title="Reserve Camp Spot"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm mt-4 flex justify-center"
                  />
                  <p className="text-center text-[11px] text-gray-400">
                    Free cancellation up to 48 hours before check-in.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
