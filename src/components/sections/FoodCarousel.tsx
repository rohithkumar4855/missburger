"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { MENU_ITEMS } from "@/data/mockData";

const FoodCard = ({ item }: { item: any }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      // ADDED "group" HERE 👇
      className="group relative flex-shrink-0 w-[280px] md:w-[320px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10"
    >
      {/* Image */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-yellow-400">
          <Star size={14} fill="currentColor" />
          <span className="text-white text-sm font-semibold">
            {item.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold">
          {item.category}
        </span>

        <h3 className="text-2xl font-black text-white mt-2">
          {item.name}
        </h3>

        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <div>
            <span className="text-gray-500 line-through text-sm">
              ₹{item.price}
            </span>

            <h4 className="text-white text-3xl font-black">
              ₹{item.offerPrice}
            </h4>
          </div>

          <button className="px-5 py-2 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform">
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SimpleCarousel = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14 flex items-end justify-between">
        <div>
          <p className="text-primary uppercase tracking-[0.2em] font-bold mb-3">
            Trending Food
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Popular <span className="text-primary">Burgers</span>
          </h2>
        </div>

        <button className="hidden md:block px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all">
          View Menu
        </button>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...MENU_ITEMS, ...MENU_ITEMS].map((item, index) => (
            <FoodCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleCarousel;