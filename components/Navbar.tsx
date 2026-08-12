"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/80 shadow-xs transition-colors duration-300">
      <div className="flexBetween max-container px-4 sm:px-6 lg:px-8 3xl:px-0 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 p-1 rounded-xl bg-white/80 dark:bg-white border border-transparent dark:border-gray-800">
          <Image
            src="/hilink-logo.svg"
            alt="logo"
            width={90}
            height={35}
            className="hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    isActive
                      ? "text-emerald-700 dark:text-emerald-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full transition-all duration-300 ${
                      isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Login & Register Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login">
            <Button
              type="button"
              title="Log in"
              icon="/user.svg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 text-sm"
            />
          </Link>
          <Link href="/register">
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors px-3 py-2">
              Sign up
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <Image
            src={isMobileMenuOpen ? "/close.svg" : "/menu.svg"}
            alt="menu"
            width={24}
            height={24}
            className={`transform transition-transform duration-300 dark:invert ${isMobileMenuOpen ? 'rotate-90' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-gray-800 shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
        `}
      >
        <div className="max-container px-4 sm:px-6 py-4">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-emerald-700 dark:hover:text-emerald-400"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  type="button"
                  title="Log in"
                  icon="/user.svg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
                />
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center text-sm font-semibold text-emerald-700 dark:text-emerald-400 py-2 border border-emerald-600 dark:border-emerald-500 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
              >
                Create Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;