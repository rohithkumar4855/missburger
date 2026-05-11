"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Utensils,
  MapPin,
  Tag,
  Plus,
  Settings,
  LogOut,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  TrendingUp,
  Package
} from "lucide-react";
import { MENU_ITEMS } from "@/data/mockData";
import Link from "next/link";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("menu");

  const sidebarLinks = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "menu", label: "Food Menu", icon: <Utensils size={20} /> },
    { id: "branches", label: "Branches", icon: <MapPin size={20} /> },
    { id: "deals", label: "Deals", icon: <Tag size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white dark:bg-zinc-900 border-r border-border p-8 flex flex-col hidden lg:flex">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-black">M</div>
          <span className="text-xl font-black tracking-tight">Admin <span className="text-primary">Panel</span></span>
        </div>

        <nav className="flex-1 space-y-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === link.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-gray-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        <Link href="/" className="flex items-center gap-4 px-6 py-4 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/10 rounded-2xl transition-all mt-auto">
          <LogOut size={20} />
          Logout
        </Link>
      </aside>

      {/* Content */}
      <section className="flex-1 p-8 md:p-12 overflow-y-auto max-h-screen no-scrollbar">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2">Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <p className="text-gray-400 font-medium">Add, edit, or remove items from your store.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-6 py-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm outline-none border border-transparent focus:border-primary transition-all"
              />
            </div>
            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-black flex items-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-primary/20">
              <Plus size={20} /> Add New
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { label: "Total Items", value: "48", icon: <Utensils className="text-blue-500" />, trend: "+2 this week" },
            { label: "Total Sales", value: "₹2.4L", icon: <TrendingUp className="text-green-500" />, trend: "+12% growth" },
            { label: "Out of Stock", value: "3", icon: <Package className="text-red-500" />, trend: "Restock needed" },
            { label: "Active Deals", value: "5", icon: <Tag className="text-yellow-500" />, trend: "2 expiring soon" }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-primary/10 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <MoreVertical size={20} className="text-gray-300" />
              </div>
              <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black mb-2">{stat.value}</h3>
              <p className="text-xs font-bold text-gray-500">{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Table / List */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm border border-border overflow-hidden">
          <div className="p-8 border-b border-border flex justify-between items-center">
            <h3 className="text-xl font-black">Recent Items</h3>
            <button className="text-primary font-bold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-gray-400 font-bold uppercase text-xs tracking-widest bg-zinc-50 dark:bg-zinc-800/50">
                  <th className="px-8 py-6">Item</th>
                  <th className="px-8 py-6">Category</th>
                  <th className="px-8 py-6">Price</th>
                  <th className="px-8 py-6">Stock</th>
                  <th className="px-8 py-6">Status</th>
                  <th className="px-8 py-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {MENU_ITEMS.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden relative">
                          {/* Placeholder image */}
                          <div className="w-full h-full bg-primary/20 flex items-center justify-center text-xs font-black">MB</div>
                        </div>
                        <div>
                          <p className="font-black">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.isVeg ? 'Veg' : 'Non-Veg'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-gray-500">{item.category}</td>
                    <td className="px-8 py-6 font-black text-primary">₹{item.offerPrice}</td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-bold">In Stock</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-2">
                        {item.popular && <span className="w-2 h-2 rounded-full bg-yellow-400" title="Popular"></span>}
                        {item.trending && <span className="w-2 h-2 rounded-full bg-primary" title="Trending"></span>}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-4 text-gray-400">
                        <button className="hover:text-primary transition-colors"><Edit size={18} /></button>
                        <button className="hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
