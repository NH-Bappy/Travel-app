"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const SafetyBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
      <div className="max-container px-6 lg:px-20 3xl:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <span className="bg-red-500/20 text-red-300 border border-red-500/30 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
              <span>🆘</span> 24/7 Satellite SOS Beacon Integrated
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Safety First in Zero-Signal Alpine Wilderness
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Never hike in fear. Our app pairs directly with global satellite constellations, transmitting your real-time GPS telemetry and medical profiles directly to local search & rescue command within minutes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Zero-Cell Lock</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Live Family Relay</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Air Rescue Ready</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
            <Link href="/services">
              <Button
                type="button"
                title="Learn About SOS Tech"
                className="bg-white text-emerald-900 font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:bg-emerald-50 transition-all text-xs w-full"
              />
            </Link>
            <Link href="/contact">
              <Button
                type="button"
                title="24/7 Hotline Info"
                className="bg-emerald-800/60 border border-emerald-500/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-800 transition-all text-xs w-full"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetyBanner;
