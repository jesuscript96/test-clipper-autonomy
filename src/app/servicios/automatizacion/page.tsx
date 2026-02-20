import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function AutomatizacionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero */}
        <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Servicio Premium
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 leading-[0.95] tracking-tighter">
                Automatización de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Procesos</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-12 max-w-3xl">
                Libera a tu equipo de tareas repetitivas. Automatizamos procesos end-to-end para que tu empresa funcione 24/7 sin intervención manual.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="xl" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg font-black">
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden">
                    Agendar consulta
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="rounded-full px-10 py-7 text-lg font-bold border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="#beneficios">
                    Ver beneficios
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas que resuelve */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-16 text-center">
              ¿Tu equipo pierde tiempo en...?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tareas repetitivas",
                  desc: "Copiar datos entre sistemas, enviar emails manuales, actualizar hojas de cálculo",
                  icon: "🔄"
                },
                {
                  title: "Procesos lentos",
                  desc: "Aprobaciones que tardan días, reportes manuales, seguimiento de tareas",
                  icon: "🐌"
                },
                {
                  title: "Errores humanos",
                  desc: "Datos duplicados, información desactualizada, pérdida de información",
                  icon: "❌"
                }
              ].map((problem, i) => (
                <div key={i} className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light">{problem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solución */}
        <section id="beneficios" className="py-32 bg-zinc-950 text-white">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Cómo lo <span className="text-blue-500">automatizamos</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  step: "01",
                  title: "Mapeo de procesos",
                  desc: "Identificamos todos los pasos manuales y puntos de fricción en tus operaciones actuales."
                },
                {
                  step: "02",
                  title: "Diseño de flujos",
                  desc: "Creamos workflows inteligentes que conectan tus herramientas y eliminan trabajo manual."
                },
                {
                  step: "03",
                  title: "Implementación",
                  desc: "Configuramos las automatizaciones usando las mejores herramientas del mercado (Zapier, Make, n8n)."
                },
                {
                  step: "04",
                  title: "Monitoreo y mejora",
                  desc: "Supervisamos el rendimiento y optimizamos continuamente para maximizar eficiencia."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-black text-blue-500 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-zinc-400 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Resultados reales
            </h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { value: "70%", label: "Reducción de tiempo", desc: "En tareas administrativas" },
                { value: "95%", label: "Menos errores", desc: "Por automatización de datos" },
                { value: "24/7", label: "Operación continua", desc: "Sin intervención humana" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-6xl md:text-7xl font-black text-blue-600 mb-4">{stat.value}</div>
                  <div className="text-xl font-bold uppercase tracking-wider text-zinc-400 mb-2">{stat.label}</div>
                  <p className="text-zinc-500 dark:text-zinc-400">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-blue-600 text-white">
          <div className="container px-6 mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
              ¿Listo para automatizar?
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
              Agenda una sesión de diagnóstico gratuita. Te mostramos exactamente qué puedes automatizar y cuánto tiempo ahorrarás.
            </p>
            <Button asChild size="xl" className="rounded-full bg-white text-blue-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black shadow-2xl">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden">
                Reservar diagnóstico gratuito
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container px-6 mx-auto text-center">
          <div className="text-2xl font-bold tracking-tighter uppercase mb-4">
            Varullo<span className="text-blue-600">.</span>
          </div>
          <p className="text-sm text-zinc-500">Convertimos el caos en sistemas que se entienden.</p>
        </div>
      </footer>
    </div>
  );
}
