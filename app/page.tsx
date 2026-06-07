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
      <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">
        <button onClick={() => scrollTo('proyectos')} className="hover:text-[#7C8C70]">Proyectos</button>
        <button onClick={() => scrollTo('nosotros')} className="hover:text-[#7C8C70]">Nosotros</button>
      </nav>
      <a href="https://wa.me/50233790244" target="_blank" className="text-[10px] font-bold uppercase tracking-[0.2em] border border-[#1A1A1A] px-5 py-2 hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all">Contacto</a>
    </header>
  );
}

// ── HOME ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-[#F4F1EA] text-[#1A1A1A] selection:bg-[#7C8C70] selection:text-white">
      <Header />
      
      {/* ── HERO ── */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-24 pt-20 border-b border-[#1A1A1A]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[9px] uppercase tracking-[0.3em] mb-4 block opacity-60">Ceiba Visual // Est. 2026</span>
          <h1 className="text-[3.5rem] md:text-[8rem] font-serif leading-[0.85] tracking-tighter">
            Ingeniería <br /> <span className="text-[#7C8C70]">de alto Impacto</span>
          </h1>
        </motion.div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 border-b border-[#1A1A1A] pb-4">Proyectos Realizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Aquí mantienes tu lógica de mapeo de proyectos */}
        </div>
      </section>

      {/* ── SOBRE NOSOTROS ── */}
      <section id="nosotros" className="py-20 bg-[#3A4A33] text-[#F4F1EA] text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-60">Metodología OACA</h4>
          <p className="text-2xl md:text-5xl font-serif italic leading-relaxed">"Disciplina digital. Resultados impecables"</p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section id="contacto" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-8xl font-serif mb-10">¿Listo para escalar?</h2>
        <a href="https://wa.me/50233790244" target="_blank" className="inline-block px-12 py-4 border border-[#1A1A1A] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-all">
          Iniciar Consultoría
        </a>
      </section>
    </main>
  );
}