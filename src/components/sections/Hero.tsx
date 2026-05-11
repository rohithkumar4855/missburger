// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, Play } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent">
//       {/* Background with Dark Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
//         <Image
//           src="/images/hero-burger.png"
//           alt="Premium Burger"
//           fill
//           className="object-cover opacity-60 scale-105 animate-slow-zoom"
//           priority
//         />
//       </div>

//       <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-white"
//         >
//           <motion.span 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-bold text-sm uppercase tracking-widest mb-6"
//           >
//           </motion.span>
//           <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
//             GOOD FOOD, <br />
//             <span className="text-primary">GOOD MOOD.</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl leading-relaxed">
//             Freshly made happiness in every bite. Experience the most premium fast food in town, crafted with love and passion.
//           </p>

//           <div className="flex flex-wrap gap-6">
//             <Link 
//               href="/menu" 
//               className="px-10 py-5 bg-primary text-white rounded-full font-black text-xl flex items-center gap-3 hover:bg-red-700 transition-all shadow-2xl shadow-primary/30 group"
//             >
//               ORDER NOW
//               <ChevronRight className="group-hover:translate-x-2 transition-transform" />
//             </Link>
//             <button className="flex items-center gap-4 text-white font-bold group">
//               <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
//                 <Play fill="currentColor" size={20} />
//               </div>
//               VIEW MENU
//             </button>
//           </div>

//           <div className="mt-16 flex items-center gap-8">
//             <div className="flex -space-x-4">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="w-12 h-12 rounded-full border-4 border-accent overflow-hidden bg-zinc-800">
//                   <div className="w-full h-full bg-primary/20 flex items-center justify-center text-xs font-bold">MB</div>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <p className="font-black text-2xl">4.8/5</p>
//               <p className="text-gray-400 text-sm">from 5000+ Happy Customers</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Floating Elements / 3D-like image */}
//         <div className="hidden lg:block relative h-[600px]">
//           {/* <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative z-10"
//           >
//             <Image 
//               src="/images/burger.jpg"
//               alt="Floating Burger"
//               width={600}
//               height={600}
//               className=" drop-shadow-[0_35px_35px_rgba(208,0,0,0.4)] "
//             />
//           </motion.div> */}

//           {/* Floating Pizzas/Ingredients */}
//           {/* <motion.div
//             animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-0 right-0 w-32 h-32 z-20"
//           >
//             <Image src="/images/pizza-slice.png" alt="Pizza" width={128} height={128} />
//           </motion.div> */}

//           {/* <motion.div
//             animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bottom-20 -left-10 w-24 h-24 z-20"
//           >
//             <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-4xl shadow-2xl">🔥</div>
//           </motion.div> */}
//         </div>
//       </div>

//       {/* Decorative Blur */}
//       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-0" />
//       <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] z-0" />
//     </section>
//   );
// };

// export default Hero;


"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame, Play, Star } from "lucide-react";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="https://www.pexels.com/download/video/32178593/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlays */}
        {/* <div className="absolute inset-0 bg-black/5" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-black/30" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white relative z-20"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-[7rem] font-black leading-[0.9] tracking-[-0.06em] mb-8"
          >
            BURGERS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-500">
              REDEFINED.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-300/90 leading-relaxed max-w-2xl mb-12"
          >
            Experience handcrafted burgers, crispy fries, cheesy pizzas,
            and unforgettable fast food flavors made fresh with premium
            ingredients every single day.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/menu"
              className="group relative overflow-hidden px-8 py-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-[0_20px_60px_-15px_rgba(249,115,22,0.5)] transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                ORDER NOW
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <button className="group flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                <Play
                  fill="currentColor"
                  size={14}
                  className="ml-0.5 text-white"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-left">
                  Watch Video
                </p>
                <p className="text-sm text-neutral-400">
                  Discover our story
                </p>
              </div>
            </button>
          </motion.div>

          {/* Reviews */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-6 border-t border-white/10 pt-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-black overflow-hidden relative"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-orange-400 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-neutral-300">
                <span className="font-bold text-white">
                  4.9/5 Rating
                </span>{" "}
                from 5,000+ customers
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;