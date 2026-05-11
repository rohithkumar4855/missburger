"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // IMPORT THIS
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get the current path to check if we are on the home page
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the navbar should look "solid" (dark text, white bg)
  // It is solid if we are NOT on the home page, OR if we have scrolled down.
  const applySolidStyle = !isHomePage || isScrolled;

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Deals", href: "/deals" },
    { name: "Branches", href: "/branches" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ",
        applySolidStyle 
          ? "bg-white dark:bg-black/80 backdrop-blur-md shadow-lg py-3 " 
          : "bg-transparent "
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
          >
            M
          </motion.div>
          <span
            className={`text-2xl font-black group-hover:text-yellow-500 tracking-tighter transition-colors duration-300 ${
              applySolidStyle ? "text-black dark:text-white" : "text-primary"
            }`}
          >
            MISS{" "}
            <span
              className={`transition-colors duration-300 ${
                applySolidStyle ? "text-black/80 dark:text-white/80" : "text-white/90"
              }`}
            >
              BURGER
            </span>
          </span>
        </Link>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/menu" 
            className={`font-bold hover:text-primary transition-colors duration-300 ${
              applySolidStyle ? "text-foreground" : "text-white"
            }`}
          >
            Menu
          </Link>
          <Link 
            href="/deals" 
            className={`font-bold hover:text-primary transition-colors duration-300 ${
              applySolidStyle ? "text-foreground" : "text-white"
            }`}
          >
            Deals
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {/* Cart Icon */}
          <button 
            className={`relative hover:text-primary transition-colors duration-300 ${
              applySolidStyle ? "text-foreground" : "text-white"
            }`}
          >
            <ShoppingBag size={24} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </button>
          
          <Link 
            href="/login" 
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-white font-bold hover:bg-red-700 transition-all shadow-md hover:shadow-primary/20"
          >
            <User size={18} />
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-300 ${
            applySolidStyle ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-border shadow-2xl p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/login"
              className="w-full py-4 bg-primary text-white text-center rounded-xl font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login / Account
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;