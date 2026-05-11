"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ticket, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const DealsPage = () => {
  const deals = [
    {
      id: 1,
      title: "First Order Special",
      code: "MISSBURGER20",
      discount: "20% OFF",
      description: "Get 20% discount on your very first order at any of our outlets.",
      expiry: "Valid till 31st Dec",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 2,
      title: "Pizza Party Deal",
      code: "PIZZA100",
      discount: "₹100 OFF",
      description: "Order any two large pizzas and get ₹100 flat discount.",
      expiry: "Every Weekend",
      color: "from-yellow-500 to-red-600"
    },
    {
      id: 3,
      title: "Burger & Fries Combo",
      code: "COMBO50",
      discount: "FREE DRINK",
      description: "Buy any premium burger and large fries to get a free drink.",
      expiry: "Valid till 30th Nov",
      color: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black pt-28">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">HOT <span className="text-primary">DEALS</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Save big on your favorite meals with our exclusive offers and coupon codes. Limited time only!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${deal.color} p-10 text-white shadow-2xl group`}
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <Ticket size={28} />
                  </div>
                  <span className="bg-white text-black px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest">{deal.discount}</span>
                </div>

                <h2 className="text-3xl font-black mb-4">{deal.title}</h2>
                <p className="text-white/80 mb-8 font-medium leading-relaxed">{deal.description}</p>
                
                <div className="mt-auto space-y-6">
                  <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Use Coupon Code</p>
                    <p className="text-2xl font-black tracking-tighter">{deal.code}</p>
                  </div>

                  <div className="flex justify-between items-center text-sm font-bold opacity-80">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {deal.expiry}
                    </div>
                    <Link href="/menu" className="flex items-center gap-1 hover:translate-x-1 transition-transform">
                      Order Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter / Referral Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 bg-white dark:bg-zinc-900 rounded-[3rem] p-10 md:p-20 text-center shadow-xl border border-border"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">WANT MORE DEALS?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">Subscribe to our newsletter and get exclusive access to hidden coupons and upcoming brand deals.</p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-8 py-5 bg-zinc-100 dark:bg-zinc-800 rounded-2xl outline-none focus:ring-2 ring-primary/50 font-bold transition-all"
            />
            <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black hover:bg-red-700 transition-all shadow-lg shadow-primary/20">
              SUBSCRIBE
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default DealsPage;
