"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { href: "#hero", label: "Início" },
    { href: "#features", label: "Recursos" },
    { href: "#modules", label: "Módulos" },
    { href: "#pricing", label: "Planos" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl shadow-sm z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - Com animação sutil ao carregar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/Logo2.png"
              alt="EvarPDV Logo"
              fill
              className="rounded-lg object-contain"
            />
          </div>
          <span className="font-black text-2xl tracking-tighter text-slate-900">
            Evar<span className="text-brand">PDV</span>
          </span>
        </motion.div>

        {/* Links - Desktop (Trocado blue-600 por brand) */}
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

        {/* CTA - WhatsApp com sua cor Brand */}
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
    </header>
  );
}