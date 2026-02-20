interface Paso {
  step: string;
  title: string;
  desc: string;
}

const pasos: Paso[] = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "No recetamos sin examinar. Analizamos tus datos y procesos actuales para encontrar fugas."
  },
  {
    step: "02",
    title: "Orden",
    desc: "Priorizamos lo que tiene más impacto con el menor esfuerzo. Creamos tu hoja de ruta."
  },
  {
    step: "03",
    title: "Ejecución",
    desc: "Hacemos que las cosas pasen. Implementamos los cambios sin excusas ni retrasos."
  },
  {
    step: "04",
    title: "Medición",
    desc: "Lo que no se mide no existe. Informes semanales sobre lo que importa: conversiones y ventas."
  }
];

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-fade-in-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Metodología
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-[0.95] tracking-tighter text-zinc-900 dark:text-zinc-100">
              Un método para <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-500">matar el caos.</span>
            </h2>
            <div className="space-y-10">
              {pasos.map((item) => (
                <div key={item.step} className="flex gap-8 group">
                  <span className="text-2xl font-black text-zinc-200 dark:text-zinc-800 group-hover:text-blue-500 transition-colors duration-300">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="aspect-[4/5] rounded-[3rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-16 text-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-4xl mb-8 shadow-xl">🛠️</div>
                <h5 className="text-2xl font-bold mb-4">Sistemas de Alto Rendimiento</h5>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Diseñamos la infraestructura que tu negocio necesita para crecer sin romperse.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 p-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-[2rem] shadow-2xl hidden md:block border border-zinc-800 dark:border-zinc-100">
              <div className="text-5xl font-black mb-1">Cero</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Humo garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
