'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// ── HEADER ───────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-16 py-5 flex items-center justify-between ${scrolled ? 'bg-[#F4F1EA]/90 backdrop-blur-md border-b border-[#1A1A1A]/10' : ''}`}>
      <span className="text-sm font-bold tracking-[0.2em] uppercase">Ceiba <span className="text-[#7C8C70]">Visual</span></span>
      <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">
        <button onClick={() => scrollTo('proyectos')} className="hover:text-[#7C8C70]">Proyectos</button>
        <button onClick={() => scrollTo('nosotros')} className="hover:text-[#7C8C70]">Nosotros</button>
        <button onClick={() => scrollTo('contacto')} className="hover:text-[#7C8C70]">Contacto</button>
      </nav>
      <a href="https://wa.me/50233790244" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.2em] border border-[#1A1A1A] px-5 py-2 hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all">Contacto</a>
    </header>
  );
}

// ── PÁGINA PRINCIPAL ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-[#F4F1EA] text-[#1A1A1A] selection:bg-[#7C8C70] selection:text-white">
      <Header />

      {/* ── HERO ── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-24 pt-32 pb-10 border-b border-[#1A1A1A]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[9px] uppercase tracking-[0.4em] mb-4 block opacity-60">Ceiba Visual // Est. 2026</span>
          <h1 className="text-[3rem] md:text-[8rem] font-serif leading-[0.9] tracking-tighter">
            Ingeniería <br /> <span className="text-[#7C8C70]">de alto Impacto</span>
          </h1>
        </motion.div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="px-6 md:px-12 py-20">
        <div className="flex justify-between items-end mb-16 border-b border-[#1A1A1A] pb-8">
          <h2 className="text-3xl md:text-4xl font-serif">Proyectos</h2>
          <span className="text-[10px] uppercase tracking-[0.2em]">01 — 06</span>
        </div>

        {/* Identidad Visual */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-8">Identidad Visual</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1A1A1A]">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-[#F4F1EA] p-6 hover:bg-[#E8EAE2] transition-colors group">
                <div className="relative w-full aspect-square bg-[#1A1A1A]/5 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-200" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Proyecto {i}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soluciones Digitales */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-8">Soluciones Digitales</span>
          <div className="border-t border-[#1A1A1A]">
            {[1,2].map((i) => (
              <div key={i} className="py-8 border-b border-[#1A1A1A] flex justify-between items-center">
                <h3 className="text-xl md:text-3xl font-serif">Proyecto Digital {i}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section id="contacto" className="py-24 px-6 text-center border-t border-[#1A1A1A]">
        <h2 className="text-4xl md:text-8xl font-serif mb-10">¿Listo para escalar?</h2>
        <a href="https://wa.me/50233790244" target="_blank" className="inline-block px-10 py-4 border border-[#1A1A1A] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-all">
          Iniciar Consultoría
        </a>
      </section>
    </main>
  );
}