"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      
      {/* Background Glows Animados - Dão profundidade ao site */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-brand opacity-20 blur-[120px] rounded-full -top-24 -left-24" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute w-[500px] h-[500px] bg-sky-500 opacity-20 blur-[120px] rounded-full -bottom-24 -right-24" 
      />

      <div className="z-10 text-center px-6 max-w-4xl">
        {/* Título - Removido pt-32 para centralizar melhor */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tighter"
        >
          Evar<span className="text-brand">PDV</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-slate-400 font-medium leading-relaxed"
        >
          O próximo nível da gestão comercial. <br className="hidden md:block" />
          <span className="text-white">Simples</span> para quem opera, <span className="text-white">completo</span> para quem gerencia.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a 
            href="#pricing" 
            className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand/20"
          >
            Começar Agora
          </a>
          <a 
            href="#features" 
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all"
          >
            Ver Recursos
          </a>
        </motion.div>
      </div>

      {/* Indicador de Scroll (Opcional) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}