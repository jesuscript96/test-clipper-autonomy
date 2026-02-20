import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero */}
        <section className="py-32 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Consultoría Premium
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 leading-[0.95] tracking-tighter">
                Consultoría <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Estratégica</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-12 max-w-3xl">
                Transformamos tu caos operativo en sistemas escalables. Te ayudamos a tomar decisiones tecnológicas correctas y diseñar la arquitectura perfecta para tu negocio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="xl" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-10 py-7 text-lg font-black">
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden">
                    Agendar consulta
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de consultoría */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-16 text-center">
              Qué incluye la consultoría
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Auditoría completa",
                  desc: "Analizamos tus procesos, herramientas y flujos de trabajo actuales. Identificamos cuellos de botella y oportunidades de mejora.",
                  icon: "🔍"
                },
                {
                  title: "Roadmap tecnológico",
                  desc: "Diseñamos un plan de acción claro con prioridades, tiempos y recursos necesarios para tu transformación digital.",
                  icon: "🗺️"
                },
                {
                  title: "Selección de stack",
                  desc: "Te ayudamos a elegir las mejores herramientas según tu presupuesto, equipo y objetivos de negocio.",
                  icon: "🛠️"
                },
                {
                  title: "Optimización de costes",
                  desc: "Identificamos gastos innecesarios en software, licencias duplicadas y oportunidades de consolidación.",
                  icon: "💰"
                }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 transition-all">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-32 bg-zinc-950 text-white">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Nuestro <span className="text-purple-500">proceso</span>
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  phase: "Fase 1",
                  title: "Discovery (1-2 semanas)",
                  desc: "Entrevistas con stakeholders, análisis de documentación, mapeo de procesos actuales y identificación de puntos de dolor."
                },
                {
                  phase: "Fase 2",
                  title: "Análisis (1 semana)",
                  desc: "Evaluación de soluciones, benchmarking con competencia, análisis de costes y propuesta de arquitectura."
                },
                {
                  phase: "Fase 3",
                  title: "Estrategia (1 semana)",
                  desc: "Diseño de roadmap detallado, priorización de iniciativas, estimación de recursos y definición de KPIs."
                },
                {
                  phase: "Fase 4",
                  title: "Entrega (1 semana)",
                  desc: "Presentación ejecutiva, documento estratégico completo, sesión de Q&A y plan de seguimiento."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                  <div className="px-6 py-3 rounded-full bg-purple-600 text-white text-sm font-black flex-shrink-0">
                    {item.phase}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-purple-600 text-white">
          <div className="container px-6 mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
              ¿Listo para ordenar tu caos?
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
              Empezamos con una sesión gratuita de 30 minutos. Te damos un primer diagnóstico y evaluamos si tiene sentido trabajar juntos.
            </p>
            <Button asChild size="xl" className="rounded-full bg-white text-purple-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black shadow-2xl">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden">
                Reservar sesión gratuita
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container px-6 mx-auto text-center">
          <div className="text-2xl font-bold tracking-tighter uppercase mb-4">
            Varullo<span className="text-purple-600">.</span>
          </div>
          <p className="text-sm text-zinc-500">Convertimos el caos en sistemas que se entienden.</p>
        </div>
      </footer>
    </div>
  );
}
