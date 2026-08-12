"use client";

import { FAQS, PRICING_PLANS, PricingPlan } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 min-h-screen pb-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 dark:bg-zinc-950 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
        <div className="max-container relative z-10 text-center max-w-3xl">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4 uppercase tracking-wider">
            Flexible Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Transparent Pricing for Every Adventurer
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Choose the membership level that matches your wilderness ambitions. Cancel or adjust your plan anytime with zero hassle.
          </p>

          {/* Billing Switch */}
          <div className="mt-10 inline-flex items-center gap-4 bg-white/10 dark:bg-zinc-900/60 backdrop-blur-md p-1.5 rounded-full border border-white/20 dark:border-gray-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-bold text-xs transition-all ${
                !isAnnual ? "bg-white dark:bg-emerald-500 text-emerald-900 dark:text-white shadow-md" : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 ${
                isAnnual ? "bg-emerald-500 text-white shadow-md" : "text-gray-300 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-amber-400 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Save 25%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-container px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-emerald-500 ring-2 ring-emerald-500/20 shadow-2xl scale-105 md:-translate-y-2"
                    : "border-gray-100 dark:border-gray-800"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 min-h-[36px] leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${price}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm"> / month</span>
                    {isAnnual && price > 0 && (
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                        Billed annually (${price * 12}/yr)
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-gray-700 dark:text-gray-300 font-medium">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/register">
                  <Button
                    type="button"
                    title={plan.ctaText}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs shadow-md transition-all flex justify-center ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                        : "bg-gray-900 dark:bg-emerald-600 hover:bg-black dark:hover:bg-emerald-700 text-white"
                    }`}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="max-container px-6 mt-20">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Detailed Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm text-gray-700 dark:text-gray-300">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="py-4 px-4 font-bold text-gray-900 dark:text-white">Features & Capabilities</th>
                  <th className="py-4 px-4 font-bold text-center text-gray-900 dark:text-white">Explorer Free</th>
                  <th className="py-4 px-4 font-bold text-center text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-t-xl">Pro Hiker</th>
                  <th className="py-4 px-4 font-bold text-center text-gray-900 dark:text-white">Expedition Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-3.5 px-4 font-medium">3D AR Topo Offline Maps</td>
                  <td className="py-3.5 px-4 text-center text-gray-500 dark:text-gray-400">Limited (3 maps)</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/30 dark:bg-emerald-950/20">Unlimited</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-700 dark:text-emerald-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Live GPS Location Lock</td>
                  <td className="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓</td>
                  <td className="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/30 dark:bg-emerald-950/20">✓</td>
                  <td className="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">24/7 Satellite Emergency SOS</td>
                  <td className="py-3.5 px-4 text-center text-gray-300 dark:text-gray-600">✕</td>
                  <td className="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/30 dark:bg-emerald-950/20">✓</td>
                  <td className="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ (Guaranteed Priority)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Smart Gear Rental Discount</td>
                  <td className="py-3.5 px-4 text-center text-gray-300 dark:text-gray-600">0%</td>
                  <td className="py-3.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200 bg-emerald-50/30 dark:bg-emerald-950/20">15% Off</td>
                  <td className="py-3.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200">25% Off</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">1-on-1 Certified Guide Booking</td>
                  <td className="py-3.5 px-4 text-center text-gray-300 dark:text-gray-600">✕</td>
                  <td className="py-3.5 px-4 text-center text-gray-400 dark:text-gray-500 bg-emerald-50/30 dark:bg-emerald-950/20">Standard Rate</td>
                  <td className="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">Includes 2 Consultations/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-container px-6 mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left font-bold text-gray-800 dark:text-gray-100 text-base flex justify-between items-center gap-4 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-emerald-600 dark:text-emerald-400 font-extrabold">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-50 dark:border-gray-800 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
