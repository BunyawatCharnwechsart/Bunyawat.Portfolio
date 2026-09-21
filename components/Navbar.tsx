"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["about", "skills", "projects", "contact"];

    const onScroll = () => {
      const line = 120;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= line) current = `#${id}`;
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;
      if (atBottom) current = `#${ids[ids.length - 1]}`;
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-black/10 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-black dark:text-white text-lg font-bold tracking-tight transition-colors duration-300">
            Developer
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-neon"
                      : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <a
              href="/CV/resume_bunyawat.pdf"
              download
              className="text-sm font-medium text-black dark:text-white border border-black/20 dark:border-white/20 rounded-full px-3 sm:px-5 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
            >
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1 p-2 text-black dark:text-white"
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px] bg-current rounded-full" />
              <span className="block w-5 h-[1.5px] bg-current rounded-full" />
              <span className="block w-5 h-[1.5px] bg-current rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-64 bg-white dark:bg-black border-l border-black/10 dark:border-white/10 shadow-2xl animate-slide-in">
            <div className="flex items-center justify-between px-6 h-16 border-b border-black/10 dark:border-white/10">
              <span className="text-black dark:text-white font-bold">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-black dark:text-white p-2"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-base py-2 transition-colors duration-200 ${
                      isActive
                        ? "text-neon font-semibold"
                        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}