"use client";

import React, { useRef, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionValueEvent 
} from "framer-motion";
import { Flame, Clock, Thermometer, ShoppingBag, Sparkles } from "lucide-react";

const ChickenBucketReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const forwardOnlyProgress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > forwardOnlyProgress.get()) {
      forwardOnlyProgress.set(latest);
    }
    if (latest >= 1 && !isRevealed) {
      setIsRevealed(true);
    }
  });

  const smoothProgress = useSpring(forwardOnlyProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  // Animation Transforms (Leg Drops)
  const y1 = useTransform(smoothProgress, [0.00, 0.20], ["-1000%", "0%"]);
  const y2 = useTransform(smoothProgress, [0.05, 0.25], ["-1000%", "0%"]);
  const y3 = useTransform(smoothProgress, [0.10, 0.30], ["-1000%", "0%"]);
  const y4 = useTransform(smoothProgress, [0.15, 0.35], ["-1000%", "0%"]);
  const y5 = useTransform(smoothProgress, [0.20, 0.40], ["-1000%", "0%"]);
  const y6 = useTransform(smoothProgress, [0.25, 0.45], ["-1000%", "0%"]);
  const y7 = useTransform(smoothProgress, [0.30, 0.50], ["-1000%", "0%"]);
  const y8 = useTransform(smoothProgress, [0.35, 0.55], ["-1000%", "0%"]);

  const r1 = useTransform(smoothProgress, [0.00, 0.20], [-180, -45]);
  const r2 = useTransform(smoothProgress, [0.05, 0.25], [180, 40]);
  const r3 = useTransform(smoothProgress, [0.10, 0.30], [-120, -15]);
  const r4 = useTransform(smoothProgress, [0.15, 0.35], [120, 35]);
  const r5 = useTransform(smoothProgress, [0.20, 0.40], [-160, -40]);
  const r6 = useTransform(smoothProgress, [0.25, 0.45], [160, 10]);
  const r7 = useTransform(smoothProgress, [0.30, 0.50], [180, 45]);
  const r8 = useTransform(smoothProgress, [0.35, 0.55], [-180, -30]);

  // FIXED VISIBILITY TIMINGS & OPACITIES
  const bucketScale = useTransform(smoothProgress, [0, 0.1], [0.8, 1]);
  const bucketOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const sceneX = useTransform(smoothProgress, [0.5, 0.8], ["0%", "-5%"]);
  const sceneScale = useTransform(smoothProgress, [0.5, 0.8], [1, 0.95]);
  
  // Card fades in earlier to ensure it doesn't get missed
  const panelOpacity = useTransform(smoothProgress, [0.6, 0.85], [0, 1]);
  const panelX = useTransform(smoothProgress, [0.6, 0.85], [40, 0]);
  
  const bgTextOpacity = useTransform(smoothProgress, [0, 0.2], [0.1, 0]);
  
  // Text above bucket fades in earlier and moves less to prevent clipping
  const leftTextOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const leftTextY = useTransform(smoothProgress, [0.1, 0.3], [10, 0]);
  
  const shadowScale = useTransform(smoothProgress, [0.1, 0.3], [0.6, 1.2]);
  const shadowOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 0.4]);

  const LEG_IMAGE = "images/leg.png"; 
  const BUCKET_IMAGE = "images/chickenfall.png"; 

 const chickenLegs = [
    { id: 1, src: LEG_IMAGE, y: y1, rotate: r1, z: 10, left: "38.6%", top: "31.0%", scale: 1.0 },
    { id: 2, src: LEG_IMAGE, y: y2, rotate: r2, z: 11, left: "62.2%", top: "33.0%", scale: 0.9 },
    { id: 3, src: LEG_IMAGE, y: y3, rotate: r3, z: 12, left: "48.0%", top: "32.4%", scale: 1.1 },
    { id: 4, src: LEG_IMAGE, y: y4, rotate: r4, z: 13, left: "55.8%", top: "33.0%", scale: 0.95 },
    { id: 5, src: LEG_IMAGE, y: y5, rotate: r5, z: 15, left: "45.4%", top: "38.0%", scale: 1.05 },
    { id: 6, src: LEG_IMAGE, y: y6, rotate: r6, z: 16, left: "53.8%", top: "38.4%", scale: 1.15 },
    { id: 7, src: LEG_IMAGE, y: y7, rotate: r7, z: 17, left: "57.6%", top: "47.0%", scale: 1.0 },
    { id: 8, src: LEG_IMAGE, y: y8, rotate: r8, z: 18, left: "39.2%", top: "47.0%", scale: 1.1 },
  ];
  return (
    <main ref={containerRef} className="h-[400vh] bg-[#0c0502] relative selection:bg-red-600 selection:text-white">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        
        {/* Ambient Background Text */}
        <motion.div 
          style={{ opacity: bgTextOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <h1 className="text-[25vw] md:text-[20vw] font-black tracking-tighter text-white/5 whitespace-nowrap uppercase italic">
            Crunch
          </h1>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full h-full relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12 pt-12 pb-4 md:py-0">
          
          {/* Main Visual Container */}
          <motion.div 
            style={{ x: sceneX, scale: sceneScale }}
            className="relative flex flex-col items-center justify-center w-full md:w-1/2 flex-1 h-full md:h-auto md:max-h-none"
          >
            {/* FIXED TEXT PLACEMENT: Removed hidden md:block so the text shows on mobile too */}
           <motion.div 
              style={{ opacity: leftTextOpacity, y: leftTextY }}
              className="relative z-[80] text-center w-full mt-8 md:mt-25 mb-2 md:mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles size={14} className="text-amber-500 fill-amber-500 md:w-[18px] md:h-[18px]" />
                <span className="text-amber-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs">
                  Secret Recipe
                </span>
              </div>
              <h3 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tighter uppercase italic drop-shadow-xl">
                Hand-Breaded <br />
                <span className="text-red-600">Daily.</span>
              </h3>
            </motion.div>

            {/* Bucket Canvas */}
            <div className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] aspect-square">
              
              <motion.div 
                style={{ scale: shadowScale, opacity: shadowOpacity }}
                className="absolute bottom-[5%] w-[80%] h-[10%] bg-black rounded-[100%] blur-2xl md:blur-3xl z-0"
              />

              <motion.div 
                style={{ scale: bucketScale, opacity: bucketOpacity }}
                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
              >
                <img
                  src={BUCKET_IMAGE}
                  alt="Chicken Bucket"
                  className="w-[85%] md:w-[90%] max-w-none h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]"
                />
              </motion.div>

              {chickenLegs.map((leg) => (
                <motion.div
                  key={leg.id}
                  style={{ 
                    y: leg.y, 
                    rotate: leg.rotate,
                    zIndex: leg.z,
                    left: leg.left,
                    top: leg.top,
                  }}
                  className="absolute w-[38%] aspect-square pointer-events-none -translate-x-1/2 -translate-y-1/2"
                >
                  <img
                    src={leg.src}
                    alt=""
                    className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  />
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Right Side: Content Panel */}
          <motion.div 
            style={{ opacity: panelOpacity, x: panelX }}
            className="hidden md:flex flex-col justify-end md:justify-center w-[95%] sm:w-[85%] md:w-[45%] max-w-lg z-[90] shrink-0 md:mt-5 mb-4 md:mb-0"
          >
            <div className="bg-zinc-900/80 md:bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-5 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 rounded-full blur-[80px]" />

              <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-3 md:mb-6 relative z-10">
                <Flame size={12} className="fill-red-500 md:w-3.5 md:h-3.5" />
                Extra Crispy
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-2 md:mb-6 tracking-tight relative z-10">
                The Nashville <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Hot Bucket</span>
              </h2>
              
              <p className="text-gray-400 text-xs sm:text-base md:text-lg leading-relaxed mb-5 md:mb-10 relative z-10">
                Premium drumsticks marinated for <span className="text-white font-medium">24 hours</span> in buttermilk and our signature blend of spices.
              </p>

              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5 md:mb-10 relative z-10">
                {[
                  { icon: Flame, label: "Spicy", sub: "FLAVOR", color: "text-red-500" },
                  { icon: Clock, label: "24 Hrs", sub: "BRINED", color: "text-amber-500" },
                  { icon: Thermometer, label: "Fresh", sub: "COOKED", color: "text-orange-500" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center bg-white/5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/5">
                    <stat.icon className={`${stat.color} mb-1 md:mb-2 w-4 h-4 md:w-5 md:h-5`} />
                    <span className="text-white font-bold text-xs md:text-sm">{stat.label}</span>
                    <span className="text-gray-500 text-[7px] md:text-[8px] font-bold uppercase tracking-widest">{stat.sub}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 md:pt-8 border-t border-white/10 relative z-10">
                <div>
                  <span className="block text-gray-500 text-[9px] md:text-xs font-bold uppercase tracking-widest mb-0.5 md:mb-1">Price</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">₹649</span>
                </div>
                <button className="flex items-center gap-2 md:gap-3 bg-red-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black uppercase text-xs md:text-sm hover:bg-red-700 transition-all shadow-[0_15px_30px_rgba(220,38,38,0.4)] active:scale-95">
                  <ShoppingBag size={16} className="md:w-[18px] md:h-[18px]" />
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

export default ChickenBucketReveal;