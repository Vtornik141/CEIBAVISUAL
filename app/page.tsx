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
      <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
        Ceiba <span className="text-[#7C8C70]">Visual</span>
      </span>

      <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">
        <button onClick={() => scrollTo('proyectos')} className="hover:text-[#7C8C70] transition-colors">Proyectos</button>
        <button onClick={() => scrollTo('nosotros')} className="hover:text-[#7C8C70] transition-colors">Sobre Nosotros</button>
        <button onClick={() => scrollTo('contacto')} className="hover:text-[#7C8C70] transition-colors">Contacto</button>
      </nav>

      <a
        href="https://wa.me/50233790244"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] font-bold uppercase tracking-[0.2em] border border-[#1A1A1A] px-5 py-2 hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all duration-300"
      >
        Contacto
      </a>
    </header>
  );
}

// ── PÁGINA PRINCIPAL ──────────────────────────────────────────────────────────
export default function Home() {
  const identidadVisual = [
    { nombre: "American DropGT", imagen: "/proyectos/american.png" },
    { nombre: "ImpoAutoventas", imagen: "/proyectos/impoautoventas.png" },
    { nombre: "La Chatita", imagen: "/proyectos/chatita.png" },
    { nombre: "Manolo Store", imagen: "/proyectos/manolo.png" },
  ];

  const solucionesDigitales = [
    { nombre: "RoadKing GT", url: "https://roadking-main.vercel.app/#contacto" },
    { nombre: "Clínica Vet", url: "https://clinicavet-r44b.vercel.app/" },
  ];

  return (
    <main className="bg-[#F4F1EA] text-[#1A1A1A] selection:bg-[#7C8C70] selection:text-white overflow-x-hidden">
      <Header />
      
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 border-b border-[#1A1A1A] pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[10px] uppercase tracking-[0.4em] mb-4 block opacity-60">Ceiba Visual // Est. 2026</span>
          <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-serif leading-[0.9] tracking-tighter">
            Ingeniería <span className="text-[#7C8C70] block md:inline">de alto Impacto</span>
          </h1>
        </motion.div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="px-6 md:px-12 py-20">
        <div className="flex justify-between items-end mb-12 border-b border-[#1A1A1A] pb-8">
          <h2 className="text-3xl md:text-4xl font-serif">Proyectos Realizados</h2>
          <span className="text-[10px] uppercase tracking-[0.2em]">01 — 06</span>
        </div>

        <div className="mb-20">
          <span className="text-[12px] uppercase tracking-[0.3em] opacity-50 block mb-10">Identidad Visual</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A]">
            {identidadVisual.map((p) => (
              <div key={p.nombre} className="bg-[#F4F1EA] p-6 hover:bg-[#E8EAE2] transition-colors group flex flex-col gap-4">
                <div className="relative w-full aspect-square bg-[#1A1A1A]/5 overflow-hidden">
                  <Image src={p.imagen} alt={p.nombre} fill className="object-contain p-4" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">{p.nombre}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[12px] uppercase tracking-[0.3em] opacity-50 block mb-10">Soluciones Digitales</span>
          <div className="flex flex-col border-t border-[#1A1A1A]">
            {solucionesDigitales.map((p, i) => (
              <a key={p.nombre} href={p.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#1A1A1A] gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-30">0{i + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-serif">{p.nombre}</h3>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 group-hover:text-[#7C8C70]">Ver proyecto →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE NOSOTROS ── */}
      <section id="nosotros" className="py-20 bg-[#3A4A33] text-[#F4F1EA] px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-60 text-center">Metodología OACA</h4>
          <p className="text-2xl md:text-5xl font-serif italic leading-relaxed text-center">"Disciplina digital. Resultados impecables"</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#F4F1EA]/10">
            {["Observar", "Arquitectar", "Construir"].map((titulo) => (
              <div key={titulo} className="text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#7C8C70] font-bold block mb-3">{titulo}</span>
                <p className="text-sm opacity-50">Contenido sobre {titulo.toLowerCase()}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTORIDAD ── */}
      <section className="py-20 px-6 border-t border-[#1A1A1A]/10 bg-[#F4F1EA]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h3 className="text-3xl font-serif">Resultados que validan la visión</h3>
          <p className="text-lg font-serif italic text-[#1A1A1A]/80">"Ceiba Visual no solo entrega una web, entrega una ventaja competitiva."</p>
          <div className="border-l-2 border-[#1A1A1A] pl-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Helton Jiménez</p>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Dirección Ejecutiva</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#1A1A1A]/10 flex flex-col items-center gap-6 text-center">
        <span className="text-sm font-bold tracking-[0.2em] uppercase">Ceiba Visual</span>
        <span className="text-[10px] uppercase tracking-widest opacity-50">© 2026 Ceiba Visual GT</span>
      </footer>
    </main>
  );
}