"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// 1. IMPORTANTE: Importe a imagem aqui
// Certifique-se de mover a imagem para a pasta correta (ex: src/assets)
import logoImg from "@/assets/Logo2.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Início" },
    { href: "#features", label: "Recursos" },
    { href: "#showcase", label: "Telas" },
    { href: "#modules", label: "Módulos" },
    { href: "#pricing", label: "Planos" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-10 h-10">
            {/* 2. Alteração aqui: Usando a variável importada */}
            <Image
              src={logoImg} 
              alt="EvarPDV Logo"
              fill
              className="rounded-lg object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajuda na performance
              priority // Como é o logo e está no topo, carregamos com prioridade
              placeholder="blur" // Cria um efeito de carregamento bonito e leve automático
            />
          </div>
          <span className="font-black text-2xl tracking-tighter text-slate-900">
            Evar<span className="text-brand">PDV</span>
          </span>
        </motion.div>

        {/* ... Resto do código permanece igual ... */}
        
        <nav className="hidden md:flex gap-8 text-slate-600 font-semibold text-sm uppercase tracking-wide">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group transition-colors hover:text-brand"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5521991724036"
            target="_blank"
            className="bg-brand text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-dark transition-all shadow-md shadow-brand/20"
          >
            CONTRATAR AGORA
          </motion.a>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 p-2"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 font-bold text-lg hover:text-brand transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5521991724036"
                target="_blank"
                className="bg-brand text-white text-center py-4 rounded-xl font-bold shadow-lg"
              >
                CONTRATAR AGORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}