"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Seus imports de imagem (Mantenha como fizemos no passo anterior)
import printPDV from "@/assets/pontodevenda.png";
import printDash from "@/assets/dashboard.png";
import printProd from "@/assets/cadastroproduto.png";

export default function Showcase() {
  const screenshots = [
    {
      title: "Ponto de Venda",
      desc: "Interface intuitiva para vendas rápidas e seguras.",
      src: printPDV,
    },
    {
      title: "Dashboard de Gestão",
      desc: "Gráficos detalhados sobre o desempenho do seu negócio.",
      src: printDash,
    },
    {
      title: "Cadastro de Produtos",
      desc: "Controle total do seu estoque de forma simples.",
      src: printProd,
    },
  ];

  return (
    <section id="showcase" className="w-full py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand font-bold uppercase tracking-widest text-sm">
            Demonstração
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-4">
            O sistema por <span className="text-brand">dentro</span>
          </h2>
          <p className="text-slate-500 mt-6 text-xl max-w-2xl mx-auto">
            Desenvolvido para oferecer a melhor experiência de uso, com telas limpas e funções poderosas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* CORREÇÕES APLICADAS AQUI: */}
              {/* 1. h-75 em vez de h-[300px] */}
              {/* 2. rounded-4xl em vez de rounded-[2rem] */}
              <div className="relative h-75 w-full rounded-4xl overflow-hidden border border-slate-200 shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-slate-200">
                <Image
                  src={screen.src}
                  alt={screen.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* CORREÇÃO APLICADA AQUI: */}
                {/* 3. bg-linear-to-t em vez de bg-gradient-to-t (Sintaxe do Tailwind v4) */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white font-bold text-2xl">{screen.title}</h4>
                  <p className="text-slate-200 mt-2 text-sm">{screen.desc}</p>
                </div>
              </div>
              
              <div className="mt-6 md:hidden">
                <h4 className="font-bold text-xl text-slate-900">{screen.title}</h4>
                <p className="text-slate-500 text-sm mt-1">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}