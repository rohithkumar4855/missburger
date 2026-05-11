"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageSquare, Search } from "lucide-react";
import { BRANCHES } from "@/data/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const BranchesPage = () => {
  const [search, setSearch] = useState("");
  
  const filteredBranches = BRANCHES.filter(b => 
    b.name.toLowerCase().includes(search.toLowerCase()) || 
    b.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleWhatsApp = (b: any) => {
    window.open(`https://wa.me/${b.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black pt-28">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">OUR <span className="text-primary">OUTLETS</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Find the nearest Miss Burger branch and experience the taste of happiness. We are currently serving in Nellore, Tirupati, and Gudur.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input 
            type="text" 
            placeholder="Search by city or area..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-16 pr-8 py-6 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl outline-none focus:ring-2 ring-primary/50 text-xl font-bold transition-all"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBranches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 shadow-xl border border-transparent hover:border-primary/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <MapPin size={32} />
                </div>
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-black text-sm uppercase">Open Now</span>
              </div>

              <h2 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">{branch.name}</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 text-gray-500">
                  <MapPin className="shrink-0 text-primary" size={20} />
                  <span className="font-medium">{branch.location}</span>
                </div>
                <div className="flex gap-4 text-gray-500">
                  <Clock className="shrink-0 text-primary" size={20} />
                  <span className="font-medium">{branch.timing}</span>
                </div>
                <div className="flex gap-4 text-gray-500">
                  <Phone className="shrink-0 text-primary" size={20} />
                  <span className="font-medium">{branch.whatsapp}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => handleWhatsApp(branch)}
                  className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-xl shadow-green-600/20"
                >
                  <MessageSquare size={22} />
                  Order via WhatsApp
                </button>
                <Link 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + " " + branch.location)}`}
                  target="_blank"
                  className="w-full py-5 border-2 border-border rounded-2xl font-black text-lg text-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  Get Directions
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BranchesPage;
