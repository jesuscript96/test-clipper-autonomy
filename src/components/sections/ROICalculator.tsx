"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Card } from "../ui/card";

export function ROICalculator() {
  const [adSpend, setAdSpend] = useState(1000);
  const [conversionRate, setConversionRate] = useState(2);
  const [avgTicket, setAvgTicket] = useState(100);

  const sales = (adSpend / 1) * (conversionRate / 100); // simplified
  const revenue = sales * avgTicket;
  const roi = adSpend > 0 ? (revenue - adSpend) / adSpend : 0;

  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-900/10">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Calculadora de <span className="text-blue-600">ROI Proyectado</span></h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            Estimación rápida del retorno de tu inversión en marketing digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 md:p-12 space-y-8 rounded-[2.5rem] border-zinc-200 dark:border-zinc-800">
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Inversión Mensual (€)</label>
              <Input 
                type="number" 
                value={adSpend} 
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="text-2xl font-bold py-8 rounded-2xl border-zinc-200 dark:border-zinc-800"
              />
              <input 
                type="range" 
                min="500" 
                max="50000" 
                step="500" 
                value={adSpend} 
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full mt-6 accent-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Tasa de Conversión (%)</label>
              <Input 
                type="number" 
                value={conversionRate} 
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="text-2xl font-bold py-8 rounded-2xl border-zinc-200 dark:border-zinc-800"
              />
              <input 
                type="range" 
                min="0.1" 
                max="10" 
                step="0.1" 
                value={conversionRate} 
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full mt-6 accent-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Ticket Promedio (€)</label>
              <Input 
                type="number" 
                value={avgTicket} 
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="text-2xl font-bold py-8 rounded-2xl border-zinc-200 dark:border-zinc-800"
              />
            </div>
          </Card>

          <div className="flex flex-col justify-center gap-6">
            <div className="p-10 rounded-[2.5rem] bg-zinc-950 text-white border border-zinc-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl -z-10" />
              <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Ingresos Estimados</div>
              <div className="text-6xl md:text-7xl font-black text-blue-500">
                {revenue.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">ROI</div>
                <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100">x{roi.toFixed(1)}</div>
              </div>
              <div className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Ventas</div>
                <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100">{Math.floor(sales)}</div>
              </div>
            </div>
            <p className="text-zinc-400 text-sm font-light italic">
              * Estos números son proyecciones basadas en promedios de la industria. El rendimiento real depende de múltiples factores del sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
