"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Receipt, Package, BarChart3 } from "lucide-react";

export default function Modules() {
  const items = [
    {
      icon: <ShoppingCart size={32} />,
      title: "PDV Ágil",
      desc: "Carrinho fluido com múltiplos meios de pagamento e interface intuitiva.",
    },
    {
      icon: <Receipt size={32} />,
      title: "Impressão Térmica",
      desc: "Suporte nativo para impressoras de 58mm e 80mm, sem complicações.",
    },
    {
      icon: <Package size={32} />,
      title: "Gestão de Estoque",
      desc: "Controle total de produtos, categorias e alertas de estoque baixo.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Dashboard Pro",
      desc: "Visão clara do seu faturamento, lucro e produtos mais vendidos.",
    },
  ];

  return (
    <section id="modules" className="w-full py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-slate-900">
            Completo por <span className="text-brand">natureza</span>
          </h2>
          <p className="text-slate-500 mt-6 text-xl max-w-2xl mx-auto">
            Recursos pensados para o comércio real, eliminando a burocracia do seu dia a dia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }} 
              // CORREÇÃO: rounded-[2rem] -> rounded-4xl
              className="group bg-white p-8 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-brand/30"
            >
              <div className="w-16 h-16 bg-slate-50 text-brand rounded-2xl mb-6 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-inner">
                {item.icon}
              </div>
              
              <h4 className="font-bold text-xl text-slate-800 text-left">
                {item.title}
              </h4>
              
              <p className="text-slate-500 mt-3 text-left leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}