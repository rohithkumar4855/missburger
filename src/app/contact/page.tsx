"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black pt-28">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Contact Us</span>
              <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">GET IN <span className="text-primary">TOUCH.</span></h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                Have a question, feedback, or just want to say hi? We'd love to hear from you. Our team typically responds within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Call Us</p>
                  <p className="text-2xl font-black">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Email Us</p>
                  <p className="text-2xl font-black">hello@missburger.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">WhatsApp</p>
                  <p className="text-2xl font-black">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-50 dark:bg-zinc-900 p-10 md:p-16 rounded-[3rem] shadow-2xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-8 py-5 bg-white dark:bg-zinc-800 rounded-2xl outline-none focus:ring-2 ring-primary/50 font-bold transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-8 py-5 bg-white dark:bg-zinc-800 rounded-2xl outline-none focus:ring-2 ring-primary/50 font-bold transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full px-8 py-5 bg-white dark:bg-zinc-800 rounded-2xl outline-none focus:ring-2 ring-primary/50 font-bold transition-all cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Feedback & Suggestions</option>
                  <option>Franchise Opportunity</option>
                  <option>Report an Issue</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-8 py-5 bg-white dark:bg-zinc-800 rounded-2xl outline-none focus:ring-2 ring-primary/50 font-bold transition-all resize-none"
                />
              </div>

              <button className="w-full py-6 bg-primary text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-red-700 transition-all shadow-xl shadow-primary/20 group">
                SEND MESSAGE
                <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
