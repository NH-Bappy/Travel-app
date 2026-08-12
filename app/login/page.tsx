"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-6 py-16">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
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
            Welcome Back
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Log in to access your offline 3D maps and trip itineraries.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center my-4">
            <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-xl font-bold text-emerald-900 mb-1">Logged In Successfully!</h2>
            <p className="text-xs text-emerald-700 mb-6">
              Welcome back to Hilink! You are now authenticated.
            </p>
            <Link href="/destinations">
              <Button
                type="button"
                title="Explore Destinations"
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs hover:bg-emerald-700 transition-all flex justify-center"
              />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-gray-700 uppercase">Password</label>
                <a href="#" className="text-[11px] text-emerald-700 hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md mt-2"
            >
              Log in to Hilink
            </button>

            {/* Social Divider */}
            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <span className="relative bg-white px-4 text-xs text-gray-400 font-medium uppercase">
                Or Continue With
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

        {/* Extra Links */}
        <div className="text-center mt-6 text-xs text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-emerald-700 font-bold hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;