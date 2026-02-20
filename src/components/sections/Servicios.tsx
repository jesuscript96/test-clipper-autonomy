import Link from "next/link";

interface Servicio {
  title: string;
  desc: string;
  icon: string;
  delay: string;
}

const servicios: Servicio[] = [
  {
    title: "Estrategia Digital",
    desc: "Diagnosticamos tu embudo de ventas y definimos un plan de acción con KPIs claros. Sabrás exactamente dónde estás perdiendo dinero y cómo arreglarlo.",
    icon: "🎯",
    delay: "0s"
  },
  {
    title: "Marketing y Ads",
    desc: "Gestión de campañas en Meta, Google y LinkedIn Ads orientadas a ROI real. Menos métricas de vanidad y más clientes cualificados en tu CRM.",
    icon: "📈",
    delay: "0.1s"
  },
  {
    title: "Sistemas de Conversión",
    desc: "Landing pages de alto rendimiento y automatizaciones que liberan tiempo de tu equipo. Tecnología robusta puesta al servicio del negocio.",
    icon: "⚙️",
    delay: "0.2s"
  }
];

const tecnologias = [
  "Meta Ads", "Google Ads", "LinkedIn Ads", "HubSpot", "Salesforce", "Make.com", "Next.js", "PostgreSQL"
];

const estats = [
  { valor: "98%", label: "Retención clientes" },
  { valor: "+2M€", label: "Ad Spend Gestionado" },
  { valor: "x3.2", label: "ROI Promedio" },
  { valor: "24/7", label: "Monitorización" }
];

export function Servicios() {
  return (
    <section id="services" className="py-32 bg-zinc-50 dark:bg-zinc-900/20 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] -z-10" />
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Servicios
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">
            Soluciones diseñadas para <br className="hidden md:block" /> <span className="text-zinc-400">la ejecución</span>, no para el PowerPoint.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light">
            Nos enfocamos en las áreas críticas que mueven la aguja de tu negocio. Claridad total, cero humo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {servicios.map((service) => (
            <div
              key={service.title}
              style={{ animationDelay: service.delay }}
              className="group p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 animate-fade-in-up fill-mode-both"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-4">{service.title}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-lg font-light">
                {service.desc}
              </p>
              <Link
                href="https://calendly.com/dvallejo-varullo/ponemos-orden"
                target="_blank"
                className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group/link"
              >
                Saber más <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Sub-services / Stack */}
        <div className="p-12 rounded-[3rem] bg-zinc-950 text-white overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6">Nuestra caja de herramientas</h3>
              <p className="text-zinc-400 text-lg font-light mb-8">
                No nos casamos con ninguna herramienta, pero dominamos las mejores del mercado para construir sistemas escalables.
              </p>
              <div className="flex flex-wrap gap-4">
                {tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-bold text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {estats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-3xl font-black text-blue-500 mb-1">{stat.valor}</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-8">
                {estats.slice(2, 4).map((stat) => (
                  <div key={stat.label} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-3xl font-black text-blue-500 mb-1">{stat.valor}</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
