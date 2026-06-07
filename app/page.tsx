'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// ── HEADER ────────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuAbierto(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-16 py-4 flex items-center justify-between ${scrolled ? 'bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#1A1A1A]/10' : 'bg-[#F4F1EA]/80 backdrop-blur-sm'}`}>
        <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
          Ceiba <span className="text-[#7C8C70]">Visual</span>
        </span>

        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">
          <button onClick={() => scrollTo('proyectos')} className="hover:text-[#7C8C70] transition-colors">Proyectos</button>
          <button onClick={() => scrollTo('nosotros')} className="hover:text-[#7C8C70] transition-colors">Sobre Nosotros</button>
          <button onClick={() => scrollTo('contacto')} className="hover:text-[#7C8C70] transition-colors">Contacto</button>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/50233790244" target="_blank" rel="noopener noreferrer" className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] border border-[#1A1A1A] px-5 py-2 hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all duration-300">
            Contacto
          </a>
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuAbierto(!menuAbierto)}>
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuAbierto ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      <div className={`fixed top-0 left-0 w-full h-screen z-40 bg-[#F4F1EA] flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden ${menuAbierto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {['proyectos', 'nosotros', 'contacto'].map((id) => (
          <button key={id} onClick={() => scrollTo(id)} className="text-2xl font-serif capitalize text-[#1A1A1A] hover:text-[#7C8C70]">
            {id === 'nosotros' ? 'Sobre Nosotros' : id}
          </button>
        ))}
        <a href="https://wa.me/50233790244" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-[0.2em] border border-[#1A1A1A] px-8 py-3" onClick={() => setMenuAbierto(false)}>
          Iniciar Consultoría
        </a>
      </div>
    </>
  );
}

// ── PÁGINA PRINCIPAL ──────────────────────────────────────────────────────────
export default function Home() {
  const proyectos = [
    { nombre: "American DropGT", imagen: "/proyectos/american.png" },
    { nombre: "ImpoAutoventas", imagen: "/proyectos/impoautoventas.png" },
    { nombre: "La Chatita", imagen: "/proyectos/chatita.png" },
    { nombre: "Manolo Store", imagen: "/proyectos/manolo.png" },
  ];

  return (
    <main className="bg-[#F4F1EA] text-[#1A1A1A] selection:bg-[#7C8C70] selection:text-white">
      <Header />

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-24 pb-16 border-b border-[#1A1A1A]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-6 block opacity-60">Ceiba Visual // Est. 2026</span>
          <h1 className="text-[clamp(2.8rem,10vw,8rem)] font-serif leading-[0.95] tracking-tighter mb-8">
            Ingeniería <br /><span className="text-[#7C8C70]">de alto impacto.</span>
          </h1>
          <p className="text-sm md:text-base opacity-50 max-w-sm leading-relaxed mb-10">Diseño, desarrollo web y automatización para negocios guatemaltecos.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] font-bold uppercase tracking-[0.3em] border border-[#1A1A1A] px-8 py-4 hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all">Ver Proyectos</button>
            <a href="https://wa.me/50233790244" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.3em] bg-[#3A4A33] text-[#F4F1EA] px-8 py-4 hover:bg-[#7C8C70] transition-all text-center">Iniciar Consultoría</a>
          </div>
        </motion.div>
      </section>

      {/* Resto de tus secciones aquí (Proyectos, Nosotros, etc) con los mismos ajustes... */}
      
    </main>
  );
}