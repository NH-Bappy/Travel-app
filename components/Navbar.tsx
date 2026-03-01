"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black backdrop-blur-md border-b border-gray-100">
      <div className="flexBetween max-container px-4 sm:px-6 lg:px-8 3xl:px-0 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-emerald-700 transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden lg:block">
          <Link href="/login">
            <Button
              type="button"
              title="Log in"
              icon="/user.svg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <Image
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className={`transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
        `}
      >
        <div className="max-container px-4 sm:px-6 py-4">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-gray-100">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  type="button"
                  title="Log in"
                  icon="/user.svg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;