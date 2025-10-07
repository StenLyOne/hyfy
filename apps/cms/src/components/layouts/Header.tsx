"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ЛОГО */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo-short.png"
            alt="Logo"
            width={68}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        {/* НАВИГАЦИЯ */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link
            href="#workflow"
            className="hover:text-primary transition-colors"
          >
            Workflow
          </Link>
          <Link
            href="#services"
            className="hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link href="#how" className="hover:text-primary transition-colors">
            How it works
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#solutions"
            className="hover:text-primary transition-colors"
          >
            Our Solutions
          </Link>
        </nav>

        {/* CTA кнопка */}
        <Link
          href="#contact"
          className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-85 transition"
        >
          GET A DEMO
        </Link>
      </div>
    </header>
  );
}
