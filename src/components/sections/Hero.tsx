import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/5" />
      </div>

      <div className="container px-6 mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
            Estrategia Digital Basada en Datos
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8 max-w-5xl mx-auto leading-[1.1]">
          Convertimos el <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">caos</span> en un sistema que se entiende
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Somos la agencia de consultoría que ordena, clarifica, mide y ejecuta. 
          <span className="block font-semibold mt-2 text-zinc-900 dark:text-zinc-200">Sin humo. Sin bullshit. Solo resultados.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="xl" className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 px-8 text-lg shadow-xl shadow-zinc-200 dark:shadow-none transition-all hover:scale-105 active:scale-95">
            <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank">
              Agendar llamada gratuita
            </Link>
          </Button>
          <Button asChild variant="ghost" size="xl" className="rounded-full px-8 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
            <Link href="#services">
              Ver servicios
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-zinc-200 dark:border-zinc-800 pt-12">
          {[
            { label: "Proyectos ordenados", value: "50+" },
            { label: "Claridad estratégica", value: "100%" },
            { label: "ROI promedio", value: "3.2x" },
            { label: "Países activos", value: "4" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
