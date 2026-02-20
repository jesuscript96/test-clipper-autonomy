import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function KitDiagnosticoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero */}
        <section className="py-32 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Recurso Gratuito
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 leading-[0.95] tracking-tighter">
                Kit de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Diagnóstico Empresarial</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-12 max-w-3xl mx-auto">
                Descarga gratis nuestro kit completo para diagnosticar el estado de tus procesos, identificar ineficiencias y descubrir oportunidades de mejora.
              </p>
              <Button asChild size="xl" className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-7 text-lg font-black">
                <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?kit=diagnostico">
                  Solicitar kit gratuito
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-16 text-center">
              Qué incluye el kit
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cuestionario de diagnóstico",
                  desc: "50+ preguntas estructuradas para evaluar procesos, tecnología, equipo y operaciones.",
                  icon: "📋"
                },
                {
                  title: "Matriz de priorización",
                  desc: "Framework para decidir qué problemas atacar primero según impacto y esfuerzo.",
                  icon: "📊"
                },
                {
                  title: "Checklist de automatización",
                  desc: "Lista de tareas comunes que puedes automatizar hoy mismo para ganar eficiencia.",
                  icon: "✅"
                },
                {
                  title: "Calculadora de ROI",
                  desc: "Hoja de cálculo para estimar el retorno de inversión en mejoras tecnológicas.",
                  icon: "💰"
                },
                {
                  title: "Plantillas de proceso",
                  desc: "Ejemplos de workflows optimizados para ventas, soporte, finanzas y más.",
                  icon: "🗺️"
                },
                {
                  title: "Guía de herramientas",
                  desc: "Comparativa de las mejores herramientas por categoría con pros, contras y precios.",
                  icon: "🛠️"
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-all">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo usarlo */}
        <section className="py-32 bg-zinc-50 dark:bg-zinc-900/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-16 text-center">
                Cómo usar el kit
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Completa el cuestionario",
                    desc: "Dedica 20-30 minutos a responder las preguntas con honestidad. Involucra a tu equipo si es necesario."
                  },
                  {
                    step: "2",
                    title: "Analiza tus resultados",
                    desc: "El kit te mostrará automáticamente tus áreas más críticas y te dará una puntuación por categoría."
                  },
                  {
                    step: "3",
                    title: "Prioriza acciones",
                    desc: "Usa la matriz de priorización para decidir qué problemas abordar primero según impacto y recursos."
                  },
                  {
                    step: "4",
                    title: "Implementa mejoras",
                    desc: "Sigue las plantillas y checklists incluidos para empezar a optimizar inmediatamente."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-black flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios / Social proof */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Lo que dicen quienes lo han usado</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "El kit nos ayudó a identificar 15 procesos que estábamos haciendo mal. En 3 meses ahorramos 20 horas semanales.",
                  author: "María González",
                  role: "CEO, TechStart"
                },
                {
                  quote: "La calculadora de ROI nos convenció de invertir en automatización. Ya recuperamos la inversión en 4 meses.",
                  author: "Carlos Ruiz",
                  role: "CFO, RetailCo"
                },
                {
                  quote: "Super práctico. En lugar de teoría, te dan herramientas que puedes usar el mismo día.",
                  author: "Ana Martínez",
                  role: "Ops Manager, AgenciaPro"
                }
              ].map((testimonial, i) => (
                <div key={i} className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 font-light mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-emerald-600 text-white">
          <div className="container px-6 mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
              Descarga el kit ahora
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
              100% gratuito. Sin compromiso. Empieza a diagnosticar tu negocio en los próximos 5 minutos.
            </p>
            <Button asChild size="xl" className="rounded-full bg-white text-emerald-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black shadow-2xl">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?kit=diagnostico">
                Solicitar kit gratuito
              </Link>
            </Button>
            <p className="mt-8 text-sm opacity-75">📧 Te lo enviamos por email en menos de 5 minutos</p>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container px-6 mx-auto text-center">
          <div className="text-2xl font-bold tracking-tighter uppercase mb-4">
            Varullo<span className="text-emerald-600">.</span>
          </div>
          <p className="text-sm text-zinc-500">Convertimos el caos en sistemas que se entienden.</p>
        </div>
      </footer>
    </div>
  );
}
