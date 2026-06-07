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

    <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 md:px-16 py-5 flex items-center justify-between ${scrolled ? 'bg-[#F4F1EA]/90 backdrop-blur-md border-b border-[#1A1A1A]/10' : ''}`}>

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



// ── PROYECTOS IDENTIDAD VISUAL ────────────────────────────────────────────────

const identidadVisual = [

  { nombre: "American DropGT", imagen: "/proyectos/american.png" },

  { nombre: "ImpoAutoventas",  imagen: "/proyectos/impoautoventas.png" },

  { nombre: "La Chatita",      imagen: "/proyectos/chatita.png" },

  { nombre: "Manolo Store",    imagen: "/proyectos/manolo.png" },

];



// ── SOLUCIONES DIGITALES ──────────────────────────────────────────────────────

const solucionesDigitales = [

  { nombre: "RoadKing GT",  url: "https://roadking-main.vercel.app/#contacto" },

  { nombre: "Clínica Vet",  url: "https://clinicavet-r44b.vercel.app/" },

];



// ── PÁGINA PRINCIPAL ──────────────────────────────────────────────────────────

export default function Home() {

  return (

    <main className="bg-[#F4F1EA] text-[#1A1A1A] selection:bg-[#7C8C70] selection:text-white">



      <Header />



     

      {/* ── HERO ── */}

      <section className="h-screen flex flex-col md:flex-row justify-between items-center px-12 md:px-24 border-b border-[#1A1A1A]">

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="flex-3"

        >

          <span className="text-[10px] uppercase tracking-[0.4em] mb-4 block opacity-60">

            Ceiba Visual // Est. 2026

          </span>

          <h1 className="text-[clamp(3rem,8vw,8rem)] font-serif leading-[0.9] tracking-tighter">

            Ingeniería

            <span className="text-[#7C8C70]"> de alto Impacto</span>

          </h1>

        </motion.div>



        {/* ── ISOTIPO INTEGRADO ── */}

        <motion.div

          initial={{ opacity: 0, scale: 0.9 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 1, delay: 0.2 }}

          className="hidden md:flex flex-0.09 justify-end"

        >

          <Image

            src="/proyectos/ceibavisual.png"

            alt="Isotipo Ceiba Visual"

            width={750}

            height={800}

            className="object-contain opacity-100"

          />

        </motion.div>

      </section>



      {/* ── PROYECTOS ── */}

      <section id="proyectos" className="px-12 py-32">



        {/* Header sección */}

        <div className="flex justify-between items-end mb-20 border-b border-[#1A1A1A] pb-8">

          <h2 className="text-4xl font-serif">Proyectos Realizados</h2>

          <span className="text-[10px] uppercase tracking-[0.2em]">01 — 06</span>

        </div>



        {/* IDENTIDAD VISUAL */}

        <div className="mb-20">

          <span className="text-[15px] uppercase tracking-[0.3em] opacity+50 block mb-10">

            Identidad Visual

          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A]">

            {identidadVisual.map((p) => (

              <div

                key={p.nombre}

                className="bg-[#F4F1EA] p-8 hover:bg-[#E8EAE2] transition-colors duration-500 group flex flex-col gap-4"

              >

                <div className="relative w-full aspect-square overflow-hidden bg-[#1A1A1A]/5">

                  <Image

                    src={p.imagen}

                    alt={p.nombre}

                    fill

                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"

                  />

                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-70">

                  {p.nombre}

                </p>

              </div>

            ))}

          </div>

        </div>



        {/* SOLUCIONES DIGITALES */}

        <div>

          <span className="text-[15px] uppercase tracking-[0.3em] opacity+50 block mb-10">

            Soluciones Digitales

          </span>

          <div className="flex flex-col border-t border-[#1A1A1A]">

            {solucionesDigitales.map((p, i) => (

              <a

                key={p.nombre}

                href={p.url}

                target="_blank"

                rel="noopener noreferrer"

                className="group flex items-center justify-between py-8 border-b border-[#1A1A1A] hover:px-4 transition-all duration-300"

              >

                <div className="flex items-center gap-6">

                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-30">

                    0{i + 1}

                  </span>

                  <h3 className="text-2xl md:text-3xl font-serif group-hover:text-[#7C8C70] transition-colors duration-300">

                    {p.nombre}

                  </h3>

                </div>

                <span className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 group-hover:text-[#7C8C70] transition-all duration-300">

                  Ver proyecto →

                </span>

              </a>

            ))}

          </div>

        </div>

      </section>



      {/* ── SOBRE NOSOTROS ── */}

     

      <section id="nosotros" className="py-32 bg-[#3A4A33] text-[#F4F1EA] text-center px-6">

        <div className="max-w-3xl mx-auto space-y-12">

          <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-60">Metodología OACA</h4>

          <p className="text-3xl md:text-5xl font-serif italic leading-relaxed">

            "Disciplina digital. Resultados impecables"

          </p>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[#F4F1EA]/10">

            {[

             ["Observar", "Analizamos tu mercado y competencia antes de escribir una línea de código."],

              ["Arquitectar", "Diseñamos la estructura pensando en conversión, no solo en estética."],

              ["Construir", "Desarrollamos con tecnología de punta y entregamos en tiempo récord."],

            ].map(([titulo, desc]) => (

              <div key={titulo} className="text-center">

                <center><span className="text-[10px] uppercase tracking-[0.3em] text-[#7C8C70] font-bold block mb-3">{titulo}</span></center>

                <p className="text-sm opacity-50 leading-relaxed">{desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

   



      {/* ── SECCIÓN DE AUTORIDAD (AÑADIR ESTO) ── */}

      <section className="py-50 px-15 border-t border-[#1A1A1A]/10 bg-[#F4F1EA]">

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-11 items-center">

          <div className="w-full md:w-1/3">

            <h3 className="text-4xl font-serif mt-4 leading-tight">Resultados que <br/>validan la visión</h3>

          </div>

          <div className="w-full md:w-2/3 border-l border-[#1A1A1A] pl-12">

            <p className="text-xl md:text-2xl font-serif italic text-[#1A1A1A]/80 mb-10">

              "Ceiba Visual no solo entrega una web, entrega una ventaja competitiva. Su enfoque en ingeniería y precisión cambió la forma en que operamos"

            </p>

            <div className="flex items-center gap+10">

              <div className="w+15 h- bg-[#1A1A1A] rounded-full" />

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Dirección Ejecutiva</p>

                <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Helton Jiménez</p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ── CTA FINAL ── */}

      <section id="contacto" className="h-[50vh] flex flex-col justify-center items-center gap-12">

        <h2 className="text-6xl md:text-8xl font-serif">¿Listo para escalar?</h2>

        <a

          href="https://wa.me/50233790244"

          target="_blank"

          rel="noopener noreferrer"

          className="group relative px-12 py-4 border border-[#1A1A1A] overflow-hidden"

        >

          <span className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">

            Iniciar Consultoría

          </span>

          <div className="absolute inset-0 bg-[#1A1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

        </a>

      </section>



      {/* ── FOOTER ── */}

      <footer className="py-10 px-12 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row items-center justify-between gap-4">

        <span className="text-sm font-bold tracking-[0.2em] uppercase">

          Ceiba <span className="text-[#7C8C70]">Visual</span>

        </span>

        <span className="text-[10px] uppercase tracking-widest opacity+5">

          © {new Date().getFullYear()} Ceiba Visual GT — Ingeniería digital para negocios que escalan

        </span>

        <div className="flex gap-8 text-[12px] uppercase tracking-widest opacity+30">

          <button onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}>Proyectos</button>

          <button onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}>Nosotros</button>

          <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>Contacto</button>

        </div>

      </footer>



    </main>

  );

}