"use client";

import { CheckCircle2, XCircle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparisons = [
  {
    feature: "Enfoque principal",
    traditional: "Métricas de vanidad (likes, clics)",
    varullo: "Sistemas de conversión y ROI real",
    status: "varullo"
  },
  {
    feature: "Metodología",
    traditional: "Campañas aisladas 'ad-hoc'",
    varullo: "Diagnóstico, orden y ejecución cíclica",
    status: "varullo"
  },
  {
    feature: "Transparencia",
    traditional: "Informes complejos difíciles de leer",
    varullo: "Dashboards en tiempo real y claridad total",
    status: "varullo"
  },
  {
    feature: "Equipo",
    traditional: "Becarios gestionando cuentas",
    varullo: "Equipo senior con manos en la masa",
    status: "varullo"
  },
  {
    feature: "Compromiso",
    traditional: "Foco en gastar presupuesto",
    varullo: "Foco en eficiencia y escalabilidad",
    status: "varullo"
  },
  {
    feature: "Mentalidad",
    traditional: "Ejecutores de tareas",
    varullo: "Partners de crecimiento de negocio",
    status: "varullo"
  }
];

export function TrustSection() {
  return (
    <section className="py-32 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Por qué nosotros
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">
            No somos otra <br /> <span className="text-zinc-400">agencia más.</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            La diferencia entre quemar dinero en publicidad y construir un activo para tu negocio está en el sistema.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Comparison Table */}
          <Card className="lg:col-span-2 overflow-hidden border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-900/50">
                    <th className="p-8 text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-100 dark:border-zinc-800">Característica</th>
                    <th className="p-8 text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-100 dark:border-zinc-800">Agencias 'Humo'</th>
                    <th className="p-8 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 border-b border-zinc-100 dark:border-zinc-800 bg-blue-50/50 dark:bg-blue-900/10">Varullo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {comparisons.map((item, i) => (
                    <tr key={i} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                      <td className="p-8 font-bold text-zinc-900 dark:text-zinc-100">{item.feature}</td>
                      <td className="p-8 text-zinc-500 flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-zinc-300 shrink-0" />
                        {item.traditional}
                      </td>
                      <td className="p-8 font-medium text-zinc-900 dark:text-zinc-100 bg-blue-50/20 dark:bg-blue-900/5">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                          {item.varullo}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Value Props / Guarantees */}
          <div className="space-y-6">
            <div className="p-8 rounded-[2rem] bg-zinc-950 text-white border border-zinc-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700" />
              <Info className="w-8 h-8 text-blue-500 mb-6" />
              <h4 className="text-xl font-bold mb-4">Garantía de Claridad</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Si tras la primera sesión de diagnóstico no tienes más claro tu camino que antes de entrar, no nos contrates. Así de simple.
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-blue-600 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-xl font-bold mb-4 italic">"Varullo: Del caos al sistema."</h4>
              <p className="text-blue-100 font-light leading-relaxed">
                No buscamos ser tus proveedores, buscamos ser el motor que hace que el resto de piezas de tu negocio encajen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
