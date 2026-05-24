"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navCategories = [
    {
      name: "Legacy",
      links: [
        { href: "/timeline", label: "Timeline" },
        { href: "/operations", label: "Operations" },
        { href: "/women", label: "Women" },
        { href: "/stories", label: "Stories" },
        { href: "/last-letter", label: "Last Letter" },
      ]
    },
    {
      name: "Structure",
      links: [
        { href: "/commands", label: "Commands" },
        { href: "/regiments", label: "Regiments" },
        { href: "/ranks", label: "Ranks" },
        { href: "/equipment", label: "Equipment" },
      ]
    },
    {
      name: "Tributes",
      links: [
        { href: "/memorial", label: "Memorial" },
        { href: "/salute", label: "Salute" },
        { href: "/mottoes", label: "Mottoes" },
        { href: "/gallery", label: "Gallery" },
      ]
    },
    {
      name: "Join",
      links: [
        { href: "/training", label: "Training" },
      ]
    }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-saffron via-white to-india-green" />
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Flame className="w-7 h-7 text-saffron transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 w-7 h-7 text-saffron animate-pulse opacity-50" />
              </div>
              <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-india-green">
                OPERATION: TRIBUTE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navCategories.map((category) => (
                <div key={category.name} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-saffron transition-colors py-2">
                    {category.name}
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-navy/95 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden min-w-[200px] shadow-2xl">
                      {category.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-6 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white hover:pl-8 transition-all border-l-2 border-transparent hover:border-saffron"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-saffron transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-y-auto"
            >
              <div className="flex flex-col px-6 py-8 gap-8">
                {navCategories.map((category) => (
                  <div key={category.name} className="space-y-4">
                    <h3 className="text-saffron font-bold text-lg border-b border-white/10 pb-2">
                      {category.name}
                    </h3>
                    <div className="flex flex-col gap-3 pl-4">
                      {category.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-white/70 hover:text-white transition-colors py-1 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-india-green"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

