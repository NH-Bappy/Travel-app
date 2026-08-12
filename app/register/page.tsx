"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("Beginner");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedTerms) return;
    setIsSuccess(true);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-6 py-16">
      <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
        
        {/* Logo Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-3">
            <Image
              src="/hilink-logo.svg"
              alt="logo"
              width={90}
              height={32}
              className="mx-auto"
            />
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Join over 120,000+ outdoor explorers mapping offline trails worldwide.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center my-4">
            <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-xl font-bold text-emerald-900 mb-1">Account Created!</h2>
            <p className="text-xs text-emerald-700 mb-6">
              Welcome aboard, {name}! Your Hilink adventurer profile has been activated.
            </p>
            <Link href="/login">
              <Button
                type="button"
                title="Proceed to Login"
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs hover:bg-emerald-700 transition-all flex justify-center"
              />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-700 uppercase mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-700 uppercase mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Outdoor Experience Level */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-700 uppercase mb-1">
                Wilderness Experience Level
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
              >
                <option value="Beginner">Beginner Day Hiker</option>
                <option value="Intermediate">Intermediate Camper & Backpacker</option>
                <option value="Advanced">Advanced Mountaineer / Expedition Leader</option>
              </select>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2.5 my-1">
              <input
                type="checkbox"
                id="terms"
                required
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
                I agree to Hilink’s{" "}
                <span className="text-emerald-700 underline font-semibold">Terms of Service</span> and{" "}
                <span className="text-emerald-700 underline font-semibold">Privacy Policy</span>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!agreedTerms}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md mt-2"
            >
              Create Free Account
            </button>

            {/* Social Divider */}
            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <span className="relative bg-white px-4 text-xs text-gray-400 font-medium uppercase">
                Or Sign Up With
              </span>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Image src="/apple.svg" alt="apple" width={16} height={16} />
                Apple ID
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Image src="/android.svg" alt="android" width={16} height={16} />
                Google
              </button>
            </div>
          </form>
        )}

        {/* Existing Account Link */}
        <div className="text-center mt-6 text-xs text-gray-600">
          Already have a Hilink account?{" "}
          <Link href="/login" className="text-emerald-700 font-bold hover:underline">
            Log in here
          </Link>
        </div>

      </div>
    </section>
  );
};

export default RegisterPage;
