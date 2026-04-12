"use client";

import { useState } from "react";
import { products } from "./data/products";
import { motion, AnimatePresence } from "framer-motion";
import { LuX, LuShoppingBag, LuPlus, LuSparkles } from "react-icons/lu";
import { SiInstagram, SiTiktok, SiShopee, SiWhatsapp } from "react-icons/si";

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
          <div className="text-[10px] font-black tracking-widest hidden lg:block">BUY NOW</div>
          <LuShoppingBag className="w-5 h-5 cursor-pointer hover:text-brand-primary transition-colors" />
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
              <p className="text-[10px] tracking-[0.8em] font-black text-gray-400 uppercase">Tapestry Jacket Collection</p>
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
                        <LuPlus className="w-5 h-5" />
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
            className="fixed inset-0 z-50 bg-white flex items-center justify-center p-4 md:p-12 overflow-hidden"
          >
            {/* Close Button - Sticky at Top */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 left-8 md:top-12 md:left-12 z-[60] flex items-center text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase hover:text-brand-primary transition-colors text-black"
            >
              <LuX className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
            </button>

            <div className="max-w-7xl w-full h-full max-h-[90vh] md:max-h-[80vh] flex flex-col md:flex-row items-stretch gap-8 md:gap-20">
              {/* Image Section - Scaled to fit height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative flex-1 min-h-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-black/[0.05] border border-gray-50 bg-gray-50"
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text Section - Centered vertically and overflow-controlled */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center space-x-4 mb-4 md:mb-8">
                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                      {selectedProduct.category}
                    </span>
                    <div className="h-[1px] flex-1 max-w-[80px] bg-gray-100" />
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-6 text-black uppercase">
                    {selectedProduct.name}
                  </h2>

                  <div className="text-2xl md:text-4xl font-display font-black text-black mb-6 md:mb-10 inline-block border-l-4 border-brand-primary pl-6">
                    ${selectedProduct.price}
                  </div>

                  <p className="text-gray-500 leading-relaxed font-light mb-8 md:mb-12 max-w-md text-sm md:text-lg lg:text-xl overflow-hidden line-clamp-3 md:line-clamp-none">
                    {selectedProduct.description} High-performance precision with architectural aesthetics.
                  </p>

                  <div className="flex items-center space-x-4">
                    <button className="flex-1 md:flex-none bg-black text-white px-8 md:px-16 py-4 md:py-6 rounded-full font-black text-[10px] md:text-xs tracking-[0.5em] uppercase hover:bg-brand-primary transition-all duration-500 shadow-xl shadow-black/10">
                      BUY
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
          <div className="relative mb-32 select-none flex flex-col items-center">
            {/* Primary Brand - SAINT */}
            <div className="flex justify-center gap-x-[0.02em] text-[25vw] md:text-[20vw] font-display font-black leading-[0.7] tracking-tighter text-black/5 cursor-default">
              {"SAINT".split("").map((char, i) => {
                const colors = ["#3b82f6", "#a855f7", "#ec4899", "#ef4444", "#f59e0b", "#10b981", "#06b6d4"];
                const color = colors[i % colors.length];
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{
                      color: color,
                      scale: 1.1,
                      textShadow: `0 0 100px ${color}, 0 0 40px ${color}`,
                      opacity: 1,
                    }}
                    className="transition-all duration-300"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>

            {/* Sub Brand - de SEREIN */}
            <div className="flex justify-center gap-x-[0.05em] text-[4vw] md:text-[3vw] font-display font-black tracking-[0.8em] text-black/10 cursor-default uppercase mt-4">
              {"de SEREIN".split("").map((char, i) => {
                const colors = ["#3b82f6", "#a855f7", "#ec4899", "#ef4444", "#f59e0b", "#10b981", "#06b6d4"];
                const color = colors[(i + 5) % colors.length];
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 + (i * 0.01), duration: 0.5 }}
                    whileHover={{
                      color: color,
                      scale: 1.2,
                      textShadow: `0 0 40px ${color}`,
                      opacity: 1,
                    }}
                    className={`transition-all duration-300 inline-block ${char === " " ? "w-[0.5em]" : ""}`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 0.1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-black to-transparent mt-16 max-w-4xl"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-gray-100 gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-[11px] font-black tracking-[0.8em] text-gray-300 uppercase">
                SAINT DE SEREIN © 2026
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-8">
              <span className="text-[10px] font-black tracking-[0.5em] text-black uppercase opacity-40">Connect With Us</span>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                {[
                  { name: "Instagram", icon: SiInstagram, href: "https://instagram.com" },
                  { name: "TikTok", icon: SiTiktok, href: "https://tiktok.com" },
                  { name: "Shopee", icon: SiShopee, href: "https://shopee.com" },
                  { name: "WhatsApp", icon: SiWhatsapp, href: "https://wa.me/yournumber" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-5 py-3 rounded-full border border-gray-100 bg-white text-black hover:text-brand-primary hover:border-brand-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 group"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span className="text-[10px] font-black tracking-widest uppercase">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}