'use client';

import React, { useState } from 'react';

// ── BASE DE DATOS LOCAL ──────────────────────────────────────────────────────
const servicios = [
  {
    id: 1,
    nombre: "Consulta General",
    precio: "Q 150",
    descripcion: "Evaluación completa del estado de salud de tu mascota con médico veterinario certificado.",
    disponible: true,
    icono: "🩺",
  },
  {
    id: 2,
    nombre: "Peluquería y Estética",
    precio: "Q 200",
    descripcion: "Baño, corte y arreglo profesional adaptado a la raza y necesidades de tu mascota.",
    disponible: true,
    icono: "✂️",
  },
  {
    id: 3,
    nombre: "Cirugía y Laboratorio",
    precio: "Q 800",
    descripcion: "Procedimientos quirúrgicos y análisis clínicos con equipos de última generación.",
    disponible: true,
    icono: "🔬",
  },
  {
    id: 4,
    nombre: "Plan de Vacunación",
    precio: "Q 250",
    descripcion: "Esquema completo de vacunas para perros y gatos con carnet oficial y seguimiento.",
    disponible: true,
    icono: "💉",
  },
];

// ── COMPONENTE TARJETA ───────────────────────────────────────────────────────
function TarjetaServicio({ servicio }: { servicio: typeof servicios[0] }) { 
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col gap-4">
      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl">
        {servicio.icono}
      </div>
      <div className="flex-1">
        <h3 className="text-gray-900 font-bold text-lg">{servicio.nombre}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{servicio.descripcion}</p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-emerald-600 font-black text-lg">{servicio.precio}</span>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${servicio.disponible ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
          {servicio.disponible ? '✓ Disponible' : 'No disponible'}
        </span>
      </div>
    </div>
  );
}

// ── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function Home() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const mensaje = encodeURIComponent("Hola, me gustaría agendar una cita para mi mascota 🐾");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-black text-gray-900 text-lg tracking-tight">Clínica<span className="text-emerald-500">Vet</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#servicios" className="hover:text-emerald-600 transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-emerald-600 transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-emerald-600 transition-colors">Contacto</a>
        </div>
        <a 
        
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-sm shadow-emerald-200"
        >
          Agendar Cita
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-50/80 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-4 py-2 rounded-full border border-emerald-100">
            🏥 Atención veterinaria de confianza en Guatemala
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tighter">
            La salud de tu mascota<br />
            <span className="text-emerald-500">nuestra prioridad</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Más de 10 años cuidando perros y gatos en Guatemala. Atención personalizada, médicos certificados y amor por los animales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a 
             
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200"
            >
              📅 Agendar por WhatsApp
            </a>
            <a 
              href="#servicios"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-all"
            >
              Ver Servicios
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-8 pt-8 border-t border-gray-100 w-full justify-center">
            {[["500+", "Pacientes atendidos"], ["10+", "Años de experiencia"], ["98%", "Clientes satisfechos"]].map(([num, label]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl font-black text-gray-900">{num}</span>
                <span className="text-xs text-gray-400 font-medium mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">Lo que ofrecemos</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 tracking-tight">Nuestros Servicios</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">Todos los servicios que tu mascota necesita en un solo lugar.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio) => (
              <TarjetaServicio key={servicio.id} servicio={servicio} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSOTROS ── */}
      <section id="nosotros" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">Quiénes somos</span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">Médicos que aman lo que hacen</h2>
            <p className="text-gray-500 leading-relaxed">
              Somos una clínica veterinaria fundada con una misión clara: brindar atención médica de calidad a las mascotas de Guatemala con precios justos y un trato humano.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Nuestro equipo está formado por veterinarios certificados con más de 5 años de experiencia en medicina y cirugía animal.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {["Médicos veterinarios certificados", "Equipos de diagnóstico modernos", "Atención personalizada para cada paciente", "Seguimiento post-consulta incluido"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-3xl p-10 flex flex-col gap-6 border border-emerald-100">
            <div className="text-5xl">🏥</div>
            <h3 className="text-2xl font-black text-gray-900">Clínica VetGT</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Ubicados en el corazón de Guatemala, listos para atender a tu mascota de lunes a sábado.</p>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <span>📍 Zona 10, Ciudad de Guatemala</span>
              <span>🕐 Lun – Sáb: 8:00am – 6:00pm</span>
            
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-24 px-6 md:px-12 bg-emerald-500">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            ¿Lista tu mascota para su próxima consulta?
          </h2>
          <p className="text-emerald-100 text-lg max-w-xl">
            Escríbenos por WhatsApp y agenda tu cita en menos de 2 minutos. Sin esperas, sin complicaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 px-10 py-4 rounded-full font-black text-sm hover:bg-emerald-50 transition-all shadow-xl"
            >
              💬 Escribir por WhatsApp
            </a>
            <a 
            
              className="bg-emerald-600 text-white px-10 py-4 rounded-full font-black text-sm hover:bg-emerald-700 transition-all border border-emerald-400"
            >
              📞 Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
{/* — FOOTER — */}
<footer className="py-10 px-6 bg-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
  <div className="flex items-center gap-2">
    <span className="text-lg">🐾</span>
    <span className="font-bold text-white">Clínica<span className="text-emerald-400">Vet</span></span>
  </div>
  
  <span className="text-gray-600">
    Desarrollado por 
    <a 
      href="https://sites.google.com/view/ceibavisualgt/sobre-nosotros" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-emerald-400 font-bold hover:underline ml-1"
    >
      Ceiba Visual
    </a>
  </span>
</footer>

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <a 
        
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-emerald-300 hover:bg-emerald-600 hover:scale-110 transition-all"
        title="Contactar por WhatsApp"
      >
        💬
      </a>

    </div>
  );
}