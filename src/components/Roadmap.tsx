"use client";

import { motion } from "framer-motion";
import { CheckCircle, Loader, Clock } from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      title: "Backup em Nuvem",
      desc: "Sincronização automática com Firebase Storage.",
      status: "DISPONÍVEL",
      done: true,
      extra: "R$ 29,90/mês (opcional)",
      icon: CheckCircle,
    },
    {
      title: "NFC-e / NF-e",
      desc: "Emissão de notas fiscais eletrônicas simplificada.",
      status: "EM DESENVOLVIMENTO",
      done: false,
      current: true, // Adicionado para destacar o que está sendo feito agora
      icon: Loader,
    },
    {
      title: "Analytics Pro",
      desc: "Relatórios avançados com exportação PDF e Excel.",
      status: "PLANEJADO",
      done: false,
      icon: Clock,
    },
  ];

  return (
    <section id="roadmap" className="w-full py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Efeito de brilho de fundo para manter a identidade do Hero */}
      <div className="absolute w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full -top-24 -right-24" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Roadmap de <span className="text-brand">Evolução</span>
        </motion.h2>

        <p className="text-slate-400 mt-6 text-xl max-w-2xl mx-auto">
          O sistema que cresce junto com o seu negócio. Estamos sempre implementando novas ferramentas.
        </p>

        <div className="relative mt-24">
          {/* Linha de progresso ao fundo */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }} // Ajuste a porcentagem conforme o progresso real
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-brand shadow-[0_0_15px_rgba(22,163,74,0.5)]" 
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col items-center p-8 rounded-3xl border transition-all duration-300 ${
                    step.done 
                    ? "bg-slate-900/50 border-brand/30 shadow-lg shadow-brand/5" 
                    : step.current
                    ? "bg-slate-900 border-white/20 shadow-2xl scale-105"
                    : "bg-slate-950 border-white/5 opacity-70"
                  }`}
                >
                  {/* Badge de Status */}
                  <div className={`absolute -top-4 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest border ${
                    step.done 
                    ? "bg-brand text-white border-brand" 
                    : "bg-slate-800 text-slate-400 border-slate-700"
                  }`}>
                    {step.status}
                  </div>

                  {/* Ícone com animação se estiver em desenvolvimento */}
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl border-2 transition-colors ${
                      step.done
                        ? "bg-brand/20 border-brand text-brand"
                        : "bg-slate-800 border-slate-700 text-slate-500"
                    }`}
                  >
                    <Icon
                      size={32}
                      className={step.current ? "animate-spin-slow" : ""}
                    />
                  </div>

                  <h4 className="mt-6 font-bold text-2xl text-white">{step.title}</h4>
                  <p className="text-slate-400 text-base mt-3 text-center">
                    {step.desc}
                  </p>

                  {step.extra && (
                    <div className="mt-4 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <span className="text-xs text-yellow-500 font-bold uppercase tracking-tight">
                        {step.extra}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Estilo para animação de rotação lenta que o Tailwind não tem por padrão */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}