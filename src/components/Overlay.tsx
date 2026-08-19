import React from 'react';
import { MoveRight, ShoppingCart, Menu } from 'lucide-react';

export default function Overlay() {
  return (
    <div className="relative z-10 w-full">
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-anton tracking-tighter text-white">COCA-COLA</div>
        <div className="flex gap-12 items-center">
          <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest">
            <a href="#" className="hover:text-brand-red transition-colors">PRODUCTS</a>
            <a href="#" className="hover:text-brand-red transition-colors">HISTORY</a>
            <a href="#" className="hover:text-brand-red transition-colors">MAGIC</a>
          </div>
          <div className="flex gap-6">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <Menu className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </nav>
      <section className="section-height flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-[15vw] leading-[0.8] font-anton text-center uppercase tracking-tighter">
          Real<br /><span className="text-brand-red">Magic</span>
        </h1>
        <p className="mt-8 text-sm font-inter tracking-[0.3em] opacity-50 uppercase">Refreshment Redefined</p>
      </section>
      <section className="section-2 section-height grid grid-cols-1 md:grid-cols-2 px-12 md:px-24 items-center">
        <div className="pointer-events-none">
          <h2 className="text-7xl font-anton leading-none uppercase mb-6">The Iconic<br />Taste</h2>
          <p className="max-w-md text-zinc-400 leading-relaxed">Crafted with the same secret recipe for over a century. Experience the crisp, cold, and classic refreshment that defines a generation.</p>
          <button className="mt-10 group flex items-center gap-4 bg-brand-red text-white px-8 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform pointer-events-auto">
            EXPLORE FLAVORS <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="flex flex-col items-end text-right pointer-events-none">
          <div className="text-outline text-8xl font-anton opacity-20">ORIGINAL</div>
          <div className="text-outline text-8xl font-anton opacity-20">CLASSIC</div>
          <div className="text-outline text-8xl font-anton opacity-20">MAGIC</div>
        </div>
      </section>
      <section className="section-height flex flex-col items-center justify-center p-24">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-16 rounded-[40px] text-center max-w-4xl w-full">
          <h3 className="text-5xl font-anton mb-8">JOIN THE MAGIC</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input type="email" placeholder="YOUR@EMAIL.COM" className="bg-black/50 border border-white/20 px-8 py-4 rounded-full font-anton outline-none focus:border-brand-red transition-colors md:w-96" />
            <button className="bg-white text-black px-12 py-4 rounded-full font-bold tracking-widest hover:bg-brand-red hover:text-white transition-colors">SUBSCRIBE</button>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-24 w-full opacity-30 text-[10px] font-bold tracking-[0.5em] uppercase">
          <div>© 2024 THE COCA-COLA COMPANY.</div>
          <div>PRIVACY POLICY / TERMS</div>
          <div>ACCESSIBILITY / COOKIES</div>
          <div className="text-right">DESIGNED BY VYRNETHOS</div>
        </div>
      </section>
    </div>
  );
}