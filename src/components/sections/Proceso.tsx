import { GlassCard } from "@/components/ui/GlassCard";

const steps = [
  {
    number: "01",
    title: "Auditoría de Caos",
    description: "Analizamos tus datos, embudos y procesos actuales para identificar dónde se está perdiendo la eficiencia y el dinero.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Arquitectura de Sistemas",
    description: "Diseñamos la hoja de ruta técnica y estratégica. Menos parches, más cimientos sólidos para escalar.",
    icon: "📐"
  },
  {
    number: "03",
    title: "Ejecución Implacable",
    description: "Implementamos las campañas, automatizaciones y cambios estructurales. Nos ensuciamos las manos contigo.",
    icon: "🚀"
  },
  {
    number: "04",
    title: "Optimización Continua",
    description: "Lo que no se mide no mejora. Ajustamos cada pieza del sistema basándonos en resultados reales, no en intuiciones.",
    icon: "🎯"
  }
];

export const Proceso = () => {
  return (
    <section id="proceso" className="py-32 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Cómo <span className="text-blue-600">ponemos orden</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            Un método estructurado en 4 fases para transformar el desorden operativo en un motor de crecimiento predecible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <GlassCard key={index} className="p-8 group hover:border-blue-500/50 transition-all duration-500">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 block">
                {step.icon}
              </div>
              <div className="text-sm font-black text-blue-600 mb-2 uppercase tracking-widest">
                Fase {step.number}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                {step.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
