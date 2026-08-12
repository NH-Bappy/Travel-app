"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    emergency: false,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 min-h-screen pb-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 dark:bg-zinc-950 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
        <div className="max-container relative z-10 text-center max-w-3xl">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4 uppercase tracking-wider">
            24/7 Global Support
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            We’re Here for Every Trail & Summit
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Have questions about tour bookings, offline AR maps, or gear rentals? Get in touch with our wilderness support team.
          </p>
        </div>
      </section>

      {/* Emergency Satellite SOS Callout Banner */}
      <section className="max-container px-6 -mt-8 relative z-20">
        <div className="bg-red-900 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-red-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-800 text-red-200 flex items-center justify-center font-bold text-xl flex-shrink-0 animate-pulse">
              🆘
            </div>
            <div>
              <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                Emergency Search & Rescue Relay
              </span>
              <h3 className="text-lg md:text-xl font-bold">In-Field Satellite SOS Hotline</h3>
              <p className="text-xs text-red-200 mt-0.5">
                For active trail emergencies, dispatch via your Hilink app SOS button or dial 1-800-HILINK-SOS.
              </p>
            </div>
          </div>
          <a
            href="tel:1800555767"
            className="w-full md:w-auto px-6 py-3 bg-white text-red-900 font-bold rounded-xl text-xs hover:bg-red-50 transition-all text-center flex-shrink-0"
          >
            Call SOS Emergency Center
          </a>
        </div>
      </section>

      {/* Main Content Grid: Form & Info */}
      <section className="max-container px-6 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-xs text-gray-500 mb-8">
              Fill out the form below and our team will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center my-8">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto mb-6">
                  Thank you, {formData.name}. Our outdoor support specialist has received your inquiry and will follow up shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "General Inquiry", emergency: false, message: "" });
                  }}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl text-xs hover:bg-emerald-700 transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="General Inquiry">General Question</option>
                    <option value="Tour Booking">Tour & Expedition Booking</option>
                    <option value="Gear Rental">Smart Gear Rental</option>
                    <option value="Technical Support">App & Offline Map Support</option>
                    <option value="Partnerships">Eco-Tourism & Guide Partnerships</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us details about your upcoming trek or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.emergency}
                      onChange={(e) => setFormData({ ...formData, emergency: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                    />
                    <span className="text-xs text-gray-600">
                      Mark as Urgent / Upcoming Trip Departs Within 48 Hours
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  title="Submit Inquiry"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm flex justify-center mt-4"
                />
              </form>
            )}
          </div>

          {/* Contact Details & Regional Offices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Direct Contact Channels</h3>

              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  ✉
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Customer & Guide Email</p>
                  <p className="text-sm font-bold text-gray-800">support@hilinktravel.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Toll-Free Helpline</p>
                  <p className="text-sm font-bold text-gray-800">+1 (800) 445-4655</p>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Basecamp Offices</h3>

              <div className="space-y-4 text-xs text-gray-600">
                <div className="pb-3 border-b border-gray-100">
                  <h4 className="font-bold text-gray-800 text-sm">North America Basecamp HQ</h4>
                  <p className="mt-0.5">1420 Mountain View Ridge, Boulder, CO 80302, USA</p>
                </div>
                <div className="pb-3 border-b border-gray-100">
                  <h4 className="font-bold text-gray-800 text-sm">European Alpine Hub</h4>
                  <p className="mt-0.5">Rue du Summit 42, Chamonix-Mont-Blanc, France</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Asia-Pacific Trail Center</h4>
                  <p className="mt-0.5">Jl. Raya Prigen No. 88, Pasuruan, East Java, Indonesia</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
