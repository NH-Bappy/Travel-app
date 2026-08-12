"use client";

import { TEAM_MEMBERS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 min-h-screen pb-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Hero Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 dark:bg-zinc-950 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
        <div className="max-container relative z-10 text-center max-w-3xl">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4 uppercase tracking-wider">
            Our Story & Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Guiding Explorers Across the World’s Wildest Trails
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Hilink was founded with a simple goal: empowering hikers, campers, and mountaineers to explore remote wilderness safely without losing connection to reliable navigation and emergency support.
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-container px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-gray-100 last:border-0">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-700">120K+</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">Trails Mapped</p>
          </div>
          <div className="p-4 border-r border-gray-100 last:border-0">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-700">45K+</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">Guided Treks</p>
          </div>
          <div className="p-4 border-r border-gray-100 last:border-0">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-700">100%</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">Carbon Neutral</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-700">4.9★</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">Community Rating</p>
          </div>
        </div>
      </section>

      {/* Mission & Story Content */}
      <section className="max-container px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Why We Built Hilink
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Bridging Cutting-Edge Geospatial Tech with Wilderness Stewardship
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              When venturing into high-altitude ridges or deep pine forests, standard mobile maps quickly freeze without cell service. We engineered a proprietary 3D vector rendering engine that stores high-resolution LiDAR terrain offline.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Beyond navigation, Hilink connects users with certified local guides, emergency satellite dispatch, and zero-impact camping guidelines to preserve natural ecosystems for future generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-xs border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">
                  🌲
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xs">Leave No Trace</h4>
                  <p className="text-[11px] text-gray-500">100% Eco-certified guidelines</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-xs border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">
                  🛰️
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xs">Satellite Mesh</h4>
                  <p className="text-[11px] text-gray-500">24/7 SOS rescue network</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/boat.png"
              alt="Hilink wilderness expedition"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-gray-900 border border-white/40">
              <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Sustainability Commitment
              </p>
              <p className="text-xs text-gray-700 mt-1">
                We donate 1% of all subscription revenue to national park restoration and alpine trail maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="max-container px-6 mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Meet Our Leadership Team</h2>
          <p className="text-gray-600 text-sm">
            Wilderness veterans, GIS software architects, and rescue operators guiding Hilink forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-emerald-500 group-hover:scale-105 transition-transform">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-0.5">{member.name}</h3>
              <p className="text-xs font-semibold text-emerald-700 mb-3">{member.role}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-container px-6 mt-20">
        <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl md:text-4xl font-extrabold mb-4">
            Join the Next Trail Expedition
          </h3>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to explore off-grid camps with 3D offline maps and certified guides? Create your free account today.
          </p>
          <Link href="/register">
            <Button
              type="button"
              title="Create Free Account"
              className="bg-white text-emerald-900 font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-emerald-50 transition-all text-sm inline-block"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
