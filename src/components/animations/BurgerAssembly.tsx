"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const foodItems = [
  {
    title: "Smash Burger",
    image: "/images/smashburger.jpg",
    price: "249",
  },
  {
    title: "Loaded Fries",
    image: "/images/loadedfries.jpg",
    price: "149",
  },
  {
    title: "Cheese Pizza",
    image: "/images/cheese.jpg",
    price: "399",
  },
];

const FoodSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <Sparkles className="text-primary" size={18} />

            <span className="text-sm uppercase tracking-[0.3em] text-white/70 font-bold">
              Trending Menu
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            PREMIUM <span className="text-primary">FLAVORS</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Fresh ingredients, premium taste, and unforgettable fast food
            experience.
          </p>
        </motion.div>

        {/* Food Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {foodItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Image Card */}
              <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-xl font-bold">
                        ₹
                      </span>

                      <span className="text-white text-4xl font-black">
                        {item.price}
                      </span>
                    </div>

                    <button className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-bold hover:scale-105 transition-all duration-300">
                      Order

                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;