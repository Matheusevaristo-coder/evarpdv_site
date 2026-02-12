"use client";

import { motion } from "framer-motion";
import { Bolt, ShieldCheck, Monitor } from "lucide-react";
import Image from "next/image";

export default function Features() {
  const featureList = [
    {
      icon: <Bolt size={24} />,
      title: "Agilidade no Atendimento",
      desc: "PDV otimizado para realizar vendas em poucos segundos.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Segurança de Dados",
      desc: "Banco SQLite local com sistema de backup redundante.",
    },
    {
      icon: <Monitor size={24} />,
      title: "UX Moderna",
      desc: "Interface limpa e intuitiva que elimina erros de operação.",
    },
  ];

  return (
    <section id="features" className="w-full py-32 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-brand font-bold uppercase tracking-widest text-sm">
            Apresentação
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 text-slate-900">
            Simplicidade & <span className="text-brand">Performance</span>
          </h2>
          <p className="text-slate-500 mt-6 text-xl max-w-2xl mx-auto">
            A solução ideal para hortifrutis, padarias, bares e lanchonetes que buscam eficiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Lista de Features */}
          <div className="space-y-6">
            {featureList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand/30 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lado Direito: Imagem do Sistema com Brilho */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full opacity-50" />
            
            <div className="relative p-2 bg-slate-200 rounded-[2.5rem] shadow-2xl border border-white">
              <Image
                src="/EvarPDV.png"
                alt="Interface do sistema EvarPDV"
                width={800}
                height={600}
                className="rounded-[2rem] object-cover"
                priority
              />
            </div>

            {/* Floating Badge (Opcional - dá um toque extra de SaaS) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden md:flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center text-brand">
                <ShieldCheck size={20} />
              </div>
              <div className="pr-4">
                <p className="text-[10px] uppercase font-bold text-slate-400">Status</p>
                <p className="text-sm font-bold text-slate-800">100% Offline e Seguro</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}