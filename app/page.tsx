"use client";

import { useState } from "react";
import { products } from "./data/products";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Sparkles } from "lucide-react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  // 2 sets of products for perfect infinite loop
  const marqueeProducts = [...products, ...products];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Background Decor - Made even lighter */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-brand-primary blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-40 px-10 py-10 flex justify-between items-center bg-white/10 backdrop-blur-[5px] uppercase transition-all duration-700"
        style={{ WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)" }}
      >
        <div className="flex items-center space-x-12">
          <div className="text-2xl font-display font-black tracking-tighter cursor-pointer text-black">
            SAINT de SEREIN<span className="text-brand-primary">.</span>
          </div>
        </div>
        <div className="flex items-center space-x-8 text-black">
          <div className="text-[10px] font-black tracking-widest hidden lg:block">ARCHIVE / 01</div>
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-brand-primary transition-colors" />
        </div>
      </nav>

      {/* Hero Branding */}
      <section className="relative pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-baseline justify-between"
          >
            <div>
              <h1 className="text-[11vw] font-display font-black leading-[0.75] tracking-tighter mb-6 text-black">
                ARCHIVE<br /> <span className="text-brand-primary">COLLECTION</span>
              </h1>
              <p className="text-[10px] tracking-[0.8em] font-black text-gray-400 uppercase">Seamless Aesthetic Identity</p>
            </div>
          </motion.div>
        </div>

        {/* Ultra-Smooth CSS Marquee Section - Updated for Light Mode */}
        <div className="relative py-24 group overflow-hidden">
          <div
            className="flex w-fit animate-marquee hover:[animation-play-state:paused] will-change-transform"
          >
            {marqueeProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                onClick={() => setSelectedProduct(product)}
                className={`flex-none w-[280px] md:w-[450px] px-6 relative group cursor-pointer transition-all duration-700 hover:scale-[1.02] ${(idx % products.length) % 2 === 0 ? "mt-0" : "mt-12"
                  }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] shadow-2xl shadow-black/[0.04] border border-gray-50 transition-all duration-1000 group-hover:rounded-[15px] bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  {/* Info Overlay - Pure White Based */}
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-white/90 backdrop-blur-md border-t border-gray-100 text-black">
                    <p className="text-[10px] tracking-[0.4em] font-black mb-3 uppercase text-gray-400">{product.category}</p>
                    <h3 className="text-xl font-display font-black tracking-tight mb-4">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-display font-bold text-lg">${product.price}</span>
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-brand-primary transition-colors">
                        <Plus className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Index Text */}
                <div className="absolute left-2 top-10 -rotate-90 origin-left text-[9px] font-black tracking-[0.6em] text-gray-200 uppercase pointer-events-none group-hover:text-brand-primary transition-colors">
                  #00{(idx % products.length) + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex items-center justify-center p-6 md:p-24 overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-12 left-12 z-10 flex items-center text-[11px] font-black tracking-[0.5em] uppercase hover:text-brand-primary transition-colors text-black"
            >
              <X className="w-6 h-6 mr-4" /> [ Close_Archive ]
            </button>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl shadow-black/[0.05] border border-gray-50"
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-6 mb-10">
                    <span className="bg-brand-primary/10 text-brand-primary px-6 py-2 rounded-full text-[11px] font-black tracking-widest uppercase">
                      {selectedProduct.category}
                    </span>
                    <div className="h-[1px] w-20 bg-gray-100" />
                  </div>

                  <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-none mb-10 text-black">
                    {selectedProduct.name}
                  </h2>

                  <div className="text-5xl font-display font-black text-black mb-14 underline decoration-brand-primary decoration-8 underline-offset-[12px]">
                    ${selectedProduct.price}
                  </div>

                  <p className="text-gray-400 leading-relaxed font-light mb-20 max-w-md text-xl">
                    {selectedProduct.description} High-performance precision, architectural aesthetics.
                  </p>

                  <div className="flex items-center space-x-8">
                    <button className="flex-1 lg:flex-none bg-black text-white px-20 py-8 rounded-full font-black text-xs tracking-[0.5em] uppercase hover:bg-brand-primary transition-all duration-500 shadow-2xl shadow-black/10">
                      Acquire Item
                    </button>
                    <button className="hidden md:flex w-20 h-20 rounded-full border border-gray-100 items-center justify-center hover:bg-gray-50 transition-colors">
                      <Sparkles className="w-7 h-7 text-gray-200" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-white border-t border-gray-50 pt-48 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-[25vw] font-display font-black leading-none tracking-tighter text-gray-100 mb-32 text-center flex justify-center cursor-default">
            {"SAINT".split("").map((char, i) => (
              <motion.span
                key={i}
                whileHover={{
                  color: ["#3b82f6", "#a855f7", "#ec4899", "#f97316", "#06f2ff"][i],
                  scale: 1.1,
                  textShadow: `0 0 80px ${["#3b82f6", "#a855f7", "#ec4899", "#f97316", "#06f2ff"][i]}`,
                  opacity: 1
                }}
                className="transition-all duration-300 opacity-20"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-gray-100 gap-10">
            <p className="text-[11px] font-black tracking-[0.8em] text-gray-300 uppercase">
              SAINT STUDIO © 2026 / GLOBAL ARCHIVE
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}