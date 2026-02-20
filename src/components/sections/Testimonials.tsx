interface Testimonio {
  quote: string;
  author: string;
  role: string;
}

const testimonios: Testimonio[] = [
  {
    quote: "Varullo nos dio el sistema que necesitábamos para escalar. Pasamos del caos total a tener una máquina de ventas predecible en solo dos meses.",
    author: "Marta R.",
    role: "CEO, EcoStyle"
  },
  {
    quote: "Directos, profesionales y sobre todo, resolutivos. Si buscas una agencia que hable menos y haga más, son ellos. Los recomiendo al 100%.",
    author: "Javier G.",
    role: "Founder, TechFlow"
  },
  {
    quote: "Lo que más valoro es la claridad. Ahora sé exactamente dónde va cada euro de mi presupuesto de marketing. El ROI se ha disparado.",
    author: "Elena P.",
    role: "Marketing Manager, Aris"
  },
  {
    quote: "No son solo otra agencia más. Son el equipo que realmente entiende nuestro negocio y nos ayuda a crecer de forma sostenible.",
    author: "Carlos S.",
    role: "COO, InnovaTech"
  },
  {
    quote: "La transparencia con la que trabajan es refrescante. Cada euro invertido está justificado y los resultados son medibles.",
    author: "Laura M.",
    role: "CMO, BioHealth"
  },
  {
    quote: "Pasamos de sentirnos perdidos en el marketing digital a tener un sistema claro y predecible. Su metodología es efectiva.",
    author: "David R.",
    role: "Founder, RetailHub"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-zinc-950 text-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px]" />
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-zinc-800">
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Lo que dicen los que ya <br /> <span className="text-blue-500">tienen orden.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-blue-500 text-sm group-hover:scale-125 transition-transform duration-300"
                    style={{ transitionDelay: `${star * 50}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed font-light italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-blue-500 border border-zinc-700">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-bold text-lg">{t.author}</div>
                  <div className="text-zinc-500 text-sm uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
