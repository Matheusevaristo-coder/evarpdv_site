"use client";

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const WHATSAPP_NUMBER = "5521991724036";
  const message = "Olá! Gostaria de solicitar uma demonstração do EvarPDV.";
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="w-full py-32 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-brand font-bold uppercase tracking-widest text-sm">
            Contato
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-4">
            Vamos modernizar seu <span className="text-brand">negócio?</span>
          </h2>
          <p className="text-slate-500 mt-6 text-xl max-w-2xl mx-auto">
            Entre em contato agora mesmo e veja como o EvarPDV pode transformar a sua gestão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: <FaWhatsapp size={32} />,
              title: "WhatsApp",
              value: "(21) 99172-4036",
              link: waLink,
              color: "text-brand",
              bgColor: "bg-green-50",
            },
            {
              icon: <Globe size={28} />,
              title: "Website",
              value: "evaristo-solutions.vercel.app",
              link: "https://evaristo-solutions.vercel.app",
              color: "text-sky-600",
              bgColor: "bg-sky-50",
            },
            {
              icon: <Mail size={28} />,
              title: "E-mail",
              value: "matheusevaristo_ti@hotmail.com",
              link: "mailto:matheusevaristo_ti@hotmail.com",
              color: "text-rose-600",
              bgColor: "bg-rose-50",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex flex-col items-center group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-brand/20"
            >
              <div className={`w-20 h-20 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                {item.icon}
              </div>

              <h4 className="font-bold text-xl text-slate-900">
                {item.title}
              </h4>

              <p className="text-slate-500 font-medium mt-2 group-hover:text-brand transition-colors text-sm md:text-base break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={waLink}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-20 bg-brand hover:bg-brand-dark text-white font-bold py-5 px-12 rounded-2xl shadow-xl shadow-brand/20 transition-all"
        >
          Falar no WhatsApp agora
        </motion.a>

        <div className="mt-32 pt-12 border-t border-slate-100 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 EvarPDV — Matheus Evaristo.</p>
          <p className="font-medium text-slate-500 italic">Simples para quem opera, completo para quem gerencia.</p>
        </div>
      </div>
    </section>
  );
}