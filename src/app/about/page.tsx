"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, ShieldCheck, Zap, Users } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Founded", value: "2018", icon: <Zap className="text-primary" /> },
    { label: "Happy Clients", value: "50k+", icon: <Heart className="text-primary" /> },
    { label: "Branches", value: "5", icon: <Users className="text-primary" /> },
    { label: "Quality Check", value: "100%", icon: <ShieldCheck className="text-primary" /> },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black pt-28">
      <Navbar />
      
      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            NOT JUST A BURGER, <br />
            <span className="text-primary">AN EMOTION.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Miss Burger started with a simple vision: to bring gourmet-quality fast food to the streets of Andhra Pradesh. We believed that fast food shouldn't just be "fast" - it should be "fantastic".
          </p>
          <p className="text-xl text-gray-500 leading-relaxed">
            From our first small kiosk in Nellore to becoming a beloved chain across Tirupati and Gudur, our journey has been fueled by the smiles of our customers and the crunch of our perfectly toasted buns.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-3">
                  {stat.icon}
                  <span className="text-4xl font-black">{stat.value}</span>
                </div>
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <Image 
            src="/images/hero-burger.png" 
            alt="Our Kitchen" 
            fill 
            className="object-cover hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-3xl font-black">"Freshness is our only secret ingredient."</p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">WHY MISS BURGER?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">We uphold the highest standards of taste and hygiene in every meal we serve.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Premium Ingredients", desc: "We source only the freshest produce and highest-quality meat daily." },
            { title: "Hygiene First", desc: "Our kitchens follow strict WHO-standard sanitization protocols." },
            { title: "Youthful Vibe", desc: "Our outlets are designed to be the perfect hangout spots for the youth." }
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-zinc-800 p-12 rounded-[2.5rem] shadow-xl border-b-8 border-primary"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 text-3xl font-black">
                {i + 1}
              </div>
              <h3 className="text-2xl font-black mb-4">{v.title}</h3>
              <p className="text-gray-500 text-lg">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
