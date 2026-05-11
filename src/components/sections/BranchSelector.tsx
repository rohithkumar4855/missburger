// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, Navigation, Clock, MessageSquare, ChevronRight } from "lucide-react";
// import { BRANCHES } from "@/data/mockData";

// const BranchSelector = () => {
//   const [selectedBranch, setSelectedBranch] = useState<any>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

//   useEffect(() => {
//     // Attempt to get user location
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           });
//           // In a real app, calculate nearest branch here
//           setSelectedBranch(BRANCHES[0]); 
//         },
//         () => {
//           setShowModal(true);
//         }
//       );
//     } else {
//       setShowModal(true);
//     }
//   }, []);

//   const handleOrderWhatsApp = (branch: any) => {
//     const message = encodeURIComponent(`Hello Miss Burger, I want to order from ${branch.name}.`);
//     window.open(`https://wa.me/${branch.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
//   };

//   return (
//     <section className="py-24 bg-zinc-50 dark:bg-zinc-900 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
//           <div>
//             <h2 className="text-4xl md:text-6xl font-black mb-4">FIND US <span className="text-primary">NEAR YOU</span></h2>
//             <p className="text-gray-500 max-w-lg">We are expanding rapidly across Andhra Pradesh. Select your nearest branch for the fastest delivery.</p>
//           </div>
//           <button 
//             onClick={() => setShowModal(true)}
//             className="flex items-center gap-2 font-bold text-primary hover:underline"
//           >
//             Change Location <Navigation size={18} />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {BRANCHES.map((branch) => (
//             <motion.div
//               key={branch.id}
//               whileHover={{ y: -10 }}
//               className={`p-8 rounded-[2rem] border-2 transition-all cursor-pointer ${
//                 selectedBranch?.id === branch.id 
//                 ? "border-primary bg-white dark:bg-zinc-800 shadow-2xl shadow-primary/10" 
//                 : "border-transparent bg-white dark:bg-zinc-800 shadow-xl"
//               }`}
//               onClick={() => setSelectedBranch(branch)}
//             >
//               <div className="flex justify-between items-start mb-6">
//                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selectedBranch?.id === branch.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-zinc-700 text-gray-400'}`}>
//                   <MapPin size={28} />
//                 </div>
//                 <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
//                   {branch.distance}
//                 </span>
//               </div>
              
//               <h3 className="text-2xl font-black mb-2">{branch.name}</h3>
//               <p className="text-gray-500 mb-6 flex gap-2 items-start italic">
//                 <Navigation size={16} className="shrink-0 mt-1" />
//                 {branch.location}
//               </p>
              
//               <div className="flex items-center gap-4 text-sm font-bold text-gray-400 mb-8">
//                 <div className="flex items-center gap-1">
//                   <Clock size={16} />
//                   {branch.timing}
//                 </div>
//               </div>

//               <button 
//                 onClick={() => handleOrderWhatsApp(branch)}
//                 className="w-full py-4 rounded-xl bg-green-600 text-white font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
//               >
//                 <MessageSquare size={20} />
//                 Order via WhatsApp
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for manual selection */}
//       <AnimatePresence>
//         {showModal && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
//             <motion.div 
//               initial={{ opacity: 0 }} 
//               animate={{ opacity: 1 }} 
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//               onClick={() => setShowModal(false)}
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl p-10 overflow-hidden"
//             >
//               <h3 className="text-3xl font-black mb-6">Select Your Branch</h3>
//               <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
//                 {BRANCHES.map((branch) => (
//                   <button
//                     key={branch.id}
//                     onClick={() => {
//                       setSelectedBranch(branch);
//                       setShowModal(false);
//                     }}
//                     className="w-full p-6 rounded-2xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
//                   >
//                     <div className="flex justify-between items-center">
//                       <span className="font-bold text-lg group-hover:text-primary">{branch.name}</span>
//                       <ChevronRight size={20} className="text-gray-300 group-hover:text-primary" />
//                     </div>
//                     <p className="text-sm text-gray-400">{branch.location}</p>
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default BranchSelector;





"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Flame, Clock, Leaf, ShoppingBag } from "lucide-react";

const CinematicVideoReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Reduced height to 200vh since we don't need as much scroll space 
  // as the layer-by-layer image assembly.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // 1. Video Container Intro (0.0 to 0.4)
  // The video fades in and scales up slightly as you start scrolling
  const videoScale = useTransform(smoothProgress, [0, 0.4], [0.8, 1]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  // 2. Scene Shifts (0.4 to 0.7)
  // Moves the video to the left to make room for the menu panel
  const sceneX = useTransform(smoothProgress, [0.4, 0.7], ["0%", "-25%"]);
  const sceneScale = useTransform(smoothProgress, [0.4, 0.7], [1, 0.9]);

  // 3. Info Panel Reveal (0.5 to 0.8)
  const panelOpacity = useTransform(smoothProgress, [0.5, 0.8], [0, 1]);
  const panelX = useTransform(smoothProgress, [0.5, 0.8], [100, 0]);
  
  // Background Text Fade
  const bgTextOpacity = useTransform(smoothProgress, [0, 0.4], [0.05, 0]);

  return (
    <main ref={containerRef} className="h-[200vh] bg-[#0a0a0a] relative selection:bg-red-600 selection:text-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Ambient Background Text */}
        <motion.div 
          style={{ opacity: bgTextOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h1 className="text-[16vw] font-black tracking-tighter text-transparent whitespace-nowrap" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
          PIZZA
          </h1>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-14 lg:gap-18 xl:gap-25">          
          {/* Left Side: Cinematic Video Container */}
          <motion.div 
            style={{ 
              x: sceneX, 
              scale: sceneScale,
            }}
            className="relative flex flex-col items-center justify-center w-full md:w-1/2"
          >
            <motion.div 
              style={{
                scale: videoScale,
                opacity: videoOpacity
              }}
              className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-white/10"
            >
              {/* Overlay gradient to make it blend into the dark background better */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
              
              <video
                src="https://www.pexels.com/download/video/30627970/" /* Replace with your actual video path */
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Soft shadow under the video container */}
            <motion.div 
              style={{ 
                opacity: useTransform(smoothProgress, [0.2, 0.5], [0, 0.8]) 
              }}
              className="w-[400px] h-16 bg-black rounded-[100%] blur-2xl absolute -bottom-10 pointer-events-none"
            />
          </motion.div>

          {/* Right Side: Content Panel (Identical to previous) */}
          <motion.div 
            style={{ opacity: panelOpacity, x: panelX }}
            className="hidden md:flex flex-col justify-center w-1/2 max-w-lg absolute right-12 lg:right-24"
          >
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              
              {/* Subtle red glow in the top corner of the card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/30 rounded-full blur-[60px]" />

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-xs tracking-widest uppercase mb-6">
                <Flame size={14} className="text-red-500" />
                Wood-Fired
              </div>
              
              <h2 className="text-5xl font-black text-white leading-tight mb-4">
                The Authentic <br/> Margherita
              </h2>
              
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Blistered crust baked at 900°F, topped with crushed San Marzano tomatoes, fresh Fior di Latte mozzarella, and sweet aromatic basil. A true taste of Naples.
              </p>

              {/* Stat Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center justify-center bg-black/40 p-4 rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors">
                  <Flame className="text-red-500 mb-2" size={24} />
                  <span className="text-white font-bold">900°F</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-widest">Oven</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-black/40 p-4 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Clock className="text-amber-500 mb-2" size={24} />
                  <span className="text-white font-bold">48 Hrs</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-widest">Ferment</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-black/40 p-4 rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Leaf className="text-green-500 mb-2" size={24} />
                  <span className="text-white font-bold">Fresh</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-widest">Basil</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <span className="block text-gray-500 text-sm font-medium">Price</span>
                  <span className="text-4xl font-black text-white">₹499</span>
                </div>
                <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  <ShoppingBag size={20} />
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default CinematicVideoReveal;