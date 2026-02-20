import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[80vh] flex flex-col justify-center">
      {/* Background decoration - Advanced Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/10 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/10 animate-pulse delay-700" />
        <div className="absolute top-[20%] left-[30%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[100px] dark:bg-indigo-600/5" />
      </div>

      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 mb-8 animate-fade-in shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]">
            Estrategia Digital Basada en Datos
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-8 max-w-5xl mx-auto leading-[0.95] md:leading-[1.1]">
          Convertimos el <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400">caos</span> en un sistema que se entiende
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Somos la agencia de consultoría que <span className="text-zinc-900 dark:text-zinc-200 font-medium">ordena, clarifica, mide y ejecuta</span>. 
          <span className="block mt-4 text-zinc-500 dark:text-zinc-500 italic">Sin humo. Sin bullshit. Solo sistemas de alto rendimiento.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild size="xl" className="group rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-10 text-lg font-bold shadow-2xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 border-b-4 border-blue-800 dark:border-blue-700">
            <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank" className="flex items-center gap-2">
              Agendar llamada estratégica
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="xl" className="rounded-full px-10 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800">
            <Link href="#services">
              Ver servicios
            </Link>
          </Button>
        </div>

        {/* Dynamic Stats - Glassmorphism */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {[
            { label: "Proyectos ordenados", value: "50+" },
            { label: "Claridad estratégica", value: "100%" },
            { label: "ROI promedio", value: "3.2x" },
            { label: "Países activos", value: "4" }
          ].map((stat, i) => (
            <div key={i} className="group p-6 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/20 dark:border-zinc-800/50 shadow-sm hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5">
              <div className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600 animate-bounce">
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};
