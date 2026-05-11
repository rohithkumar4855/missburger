"use client";

import React from 'react';
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className="text-2xl font-black tracking-tighter text-primary">
              MISS <span className="text-white">BURGER</span>
            </span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Miss Burger is your go-to destination for premium fast food. Fresh ingredients, amazing taste, and happiness in every bite.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><Link href="/menu" className="hover:text-primary transition-colors">Full Menu</Link></li>
            <li><Link href="/deals" className="hover:text-primary transition-colors">Latest Deals</Link></li>
            <li><Link href="/branches" className="hover:text-primary transition-colors">Our Branches</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h4 className="text-xl font-bold mb-6">Categories</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><Link href="/menu?cat=Burgers" className="hover:text-primary transition-colors">Burgers</Link></li>
            <li><Link href="/menu?cat=Pizzas" className="hover:text-primary transition-colors">Pizzas</Link></li>
            <li><Link href="/menu?cat=Momos" className="hover:text-primary transition-colors">Momos</Link></li>
            <li><Link href="/menu?cat=Fries" className="hover:text-primary transition-colors">Fries</Link></li>
            <li><Link href="/menu?cat=Drinks" className="hover:text-primary transition-colors">Drinks</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-6 text-gray-400">
            <li className="flex gap-4 items-start">
              <MapPin className="text-primary shrink-0" size={24} />
              <span>Nellore, Gudur, Tirupati - Andhra Pradesh</span>
            </li>
            <li className="flex gap-4 items-center">
              <Phone className="text-primary shrink-0" size={24} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-4 items-center">
              <Mail className="text-primary shrink-0" size={24} />
              <span>hello@missburger.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Miss Burger. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
