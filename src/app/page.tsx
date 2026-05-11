import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FoodCarousel from "@/components/sections/FoodCarousel";
import BurgerAssembly from "@/components/animations/BurgerAssembly";
import BranchSelector from "@/components/sections/BranchSelector";
import WoodFiredPizzaReveal from "@/components/sections/WoodFiredPizzaReveal";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FoodCarousel />
      <BurgerAssembly />
      {/* <BranchSelector /> */}
      <WoodFiredPizzaReveal />
      
      {/* Featured Deals Section */}
      <section className="py-24 bg-white dark:bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem]  p-5 md:p-10 text-white flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
            <div className="relative z-10 flex-1">
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Limited Time Offer</span>
              <h2 className="text-4xl md:text-6xl font-black md:mt-6 md:mb-8 mt-8 mb-8">GET 20% OFF <br /> ON FIRST ORDER</h2>
              <p className="text-xl opacity-90 mb-10 max-w-md">Use code MISSBURGER20 and enjoy your favorite meal at a special price.</p>
              <button className="bg-white text-primary md:px-10 md:py-5 px-10 py-5  rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
                ORDER NOW
              </button>
            </div>
            <div className="relative z-10 flex-1 flex justify-center">
              <div className="w-50 h-50 md:w-96 md:h-96 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                <span className="md:text-9xl  text-6xl font-black opacity-20">20%</span>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 right-10 text-9xl">🍔</div>
              <div className="absolute bottom-10 left-10 text-9xl">🍕</div>
              <div className="absolute top-1/2 left-1/2 text-9xl">🍟</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
