"use client";

import { motion } from "framer-motion";
import { Check, Crown, Clock, Calendar } from "lucide-react";

export default function Pricing() {
  const WHATSAPP_NUMBER = "5521991724036";

  const plans = [
    {
      title: "Vitalício",
      price: "R$ 1.990",
      subtitle: "Pag. único",
      highlight: false,
      icon: Crown,
      description: "Ideal para quem quer investir uma vez só",
      buttonText: "Adquirir licença",
      features: [
        "Licença por máquina",
        "Funções atuais inclusas",
        "Atualizações de segurança",
      ],
    },
    {
      title: "Mensal",
      price: "R$ 89,90",
      subtitle: "/mês",
      highlight: true,
      icon: Clock,
      description: "Flexibilidade total, cancele quando quiser",
      buttonText: "Assinar agora",
      features: [
        "Atualizações mensais",
        "Suporte prioritário",
        "Gestão via cloud",
        "Novas features inclusas",
      ],
    },
    {
      title: "Anual",
      price: "R$ 830",
      subtitle: "/ano",
      highlight: false,
      icon: Calendar,
      description: "Melhor custo-benefício para longo prazo",
      buttonText: "Economizar com anual",
      features: [
        "23% de economia",
        "Suporte completo",
        "Atualizações de versão",
        "Treinamento incluso",
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-slate-800"
        >
          Planos e Licenciamento
        </motion.h2>

        <p className="text-slate-500 mt-6 text-xl">
          Escolha a melhor forma de utilizar o EvarPDV
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            
            // Gerador de link dinâmico
            const message = `Olá! Gostaria de saber mais sobre o Plano ${plan.title} do EvarPDV.`;
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col rounded-3xl border p-10 text-left shadow-md transition ${
                  plan.highlight
                    ? "border-brand bg-green-50/50 shadow-xl ring-2 ring-brand/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-brand" size={28} />
                  <h3 className="text-2xl font-bold text-slate-800">
                    Plano {plan.title}
                  </h3>
                </div>

                <p className="mt-2 text-slate-500 min-h-[50px]">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 ml-2">{plan.subtitle}</span>
                </div>

                <ul className="mt-8 space-y-4 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-600"
                    >
                      <Check className="text-brand" size={18} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Botão transformado em Link */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-10 w-full py-4 rounded-xl font-bold text-center transition shadow-lg ${
                    plan.highlight
                      ? "bg-brand hover:bg-brand-dark text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {plan.buttonText}
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}