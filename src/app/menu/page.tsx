"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SlidersHorizontal, Star, ShoppingCart } from "lucide-react";
import { MENU_ITEMS, CATEGORIES } from "@/data/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const MenuPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterVeg, setFilterVeg] = useState<boolean | null>(null); // null = all, true = veg, false = non-veg
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState(200);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesVeg = filterVeg === null || item.isVeg === filterVeg;
      const matchesPrice = item.offerPrice <= priceRange;
      return matchesSearch && matchesCategory && matchesVeg && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.offerPrice - b.offerPrice;
      if (sortBy === "price-high") return b.offerPrice - a.offerPrice;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // recommended
    });
  }, [search, selectedCategory, filterVeg, sortBy, priceRange]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black pt-28">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">OUR <span className="text-primary">MENU</span></h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore our wide variety of delicious fast food. From our signature burgers to spicy momos, we have something for everyone.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:flex flex-col gap-8 bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-xl h-fit sticky top-28">
              <div>
                <h3 className="font-black text-xl mb-6 flex items-center gap-2">
                  <Filter size={20} className="text-primary" /> Filters
                </h3>
                
                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase mb-4 tracking-widest">Categories</p>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => setSelectedCategory("All")}
                        className={`text-left px-4 py-2 rounded-lg font-bold transition-all ${selectedCategory === "All" ? "bg-primary text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
                      >
                        All Items
                      </button>
                      {CATEGORIES.map(cat => (
                        <button 
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-left px-4 py-2 rounded-lg font-bold transition-all ${selectedCategory === cat ? "bg-primary text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Veg/Non-Veg */}
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase mb-4 tracking-widest">Dietary</p>
                    <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                      <button 
                        onClick={() => setFilterVeg(null)}
                        className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${filterVeg === null ? "bg-white dark:bg-zinc-700 shadow-sm" : "opacity-50"}`}
                      >
                        All
                      </button>
                      <button 
                        onClick={() => setFilterVeg(true)}
                        className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${filterVeg === true ? "bg-green-600 text-white shadow-sm" : "opacity-50"}`}
                      >
                        Veg
                      </button>
                      <button 
                        onClick={() => setFilterVeg(false)}
                        className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${filterVeg === false ? "bg-red-600 text-white shadow-sm" : "opacity-50"}`}
                      >
                        Non-Veg
                      </button>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <div className="flex justify-between mb-4">
                      <p className="font-bold text-sm text-gray-400 uppercase tracking-widest">Max Price</p>
                      <span className="font-black text-primary">₹{priceRange}</span>
                    </div>
                    <input 
                      type="range" min="50" max="250" step="10"
                      value={priceRange}
                      onChange={(e) => setPriceRange(parseInt(e.target.value))}
                      className="w-full accent-primary h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Search and Sort */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text"
                    placeholder="Search for burgers, pizzas, momos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-white dark:bg-zinc-900 border border-transparent focus:border-primary rounded-2xl shadow-lg outline-none transition-all"
                  />
                </div>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-6 py-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-transparent focus:border-primary outline-none font-bold cursor-pointer"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id}
                      className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-primary/20 group"
                    >
                      <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <div className={`w-4 h-4 border-2 flex items-center justify-center p-[2px] ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                        </div>
                        {item.popular && (
                          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-black text-xl group-hover:text-primary transition-colors">{item.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                          <Star size={14} fill="currentColor" /> {item.rating}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-gray-400 line-through text-xs font-bold">₹{item.price}</span>
                          <span className="text-2xl font-black">₹{item.offerPrice}</span>
                        </div>
                        <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-primary/20">
                          <ShoppingCart size={18} /> Add
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredItems.length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-2xl font-bold text-gray-400">No items found matching your filters.</p>
                    <button 
                      onClick={() => {
                        setSearch("");
                        setSelectedCategory("All");
                        setFilterVeg(null);
                        setPriceRange(200);
                      }}
                      className="mt-4 text-primary font-bold hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default MenuPage;
