"use client";

import { SERVICES_LIST, ServiceItem } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_LIST[0]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 min-h-screen pb-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 dark:bg-zinc-950 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
        <div className="max-container relative z-10 text-center max-w-3xl">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4 uppercase tracking-wider">
            Built For Outdoors
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Hilink Outdoor Services & Technology
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            From offline augmented reality navigation to satellite emergency SOS beacons, discover how our platform powers safer, smarter wilderness exploration.
          </p>
        </div>
      </section>

      {/* Main Interactive Grid & Detail View */}
      <section className="max-container px-6 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 px-1">
              Select Service Experience
            </h2>
            {SERVICES_LIST.map((service) => {
              const isSelected = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "bg-white dark:bg-zinc-900 border-emerald-500 dark:border-emerald-500 shadow-xl ring-2 ring-emerald-500/20 translate-x-1"
                      : "bg-white/80 dark:bg-zinc-900/60 border-gray-100 dark:border-gray-800/80 shadow-xs hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      isSelected
                        ? "bg-emerald-600 text-white shadow-md"
                        : "bg-emerald-50 dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400"
                    }`}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                      className={isSelected ? "invert" : "dark:invert"}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-bold text-base ${isSelected ? "text-emerald-900 dark:text-emerald-400" : "text-gray-800 dark:text-gray-200"}`}>
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                        {service.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Display Card */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                  <Image
                    src={activeService.icon}
                    alt={activeService.title}
                    width={28}
                    height={28}
                    className="invert"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {activeService.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                    {activeService.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8">
                {activeService.fullDesc}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                  Key Capability & Benefits
                </h4>
                <div className="space-y-3">
                  {activeService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-emerald-50/60 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                <div>
                  <h4 className="font-bold text-base text-white">Ready to Access This Service?</h4>
                  <p className="text-xs text-gray-300">Included in all Pro and Elite Hilink Memberships.</p>
                </div>
                <Link href="/pricing">
                  <Button
                    type="button"
                    title="Unlock with Pro"
                    className="bg-white text-emerald-900 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition-all text-xs"
                  />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

