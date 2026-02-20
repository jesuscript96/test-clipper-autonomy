import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function VerticalFinanzasPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 scroll-smooth">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero específico */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 blur-[100px] -z-10" />
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Vertical Finanzas
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 leading-[0.95] tracking-tighter">
                Sistemas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Finanzas</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-12 max-w-3xl">
                Si tu negocio en el sector de finanzas tiene desafíos específicos, te entendemos. Diseñamos soluciones a medida que resuelven tus problemas reales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="xl" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-10 py-7 text-lg font-black">
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?focus=finanzas">
                    Diagnóstico gratuito
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="rounded-full px-10 py-7 text-lg font-bold border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20">
                  <Link href="#soluciones">
                    Ver soluciones
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas comunes */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                ¿Te suena familiar?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                {[
                  "Retos específicos del sector finanzas",
                  "Necesidad de soluciones personalizadas",
                  "Cumplimiento normativo complejo",
                  "Adaptación a cambios del mercado",
                  "Optimización de procesos internos",
                  "Digitalización de operaciones",
                  "Mejora de experiencia del cliente",
                  "Escalabilidad sostenible"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30">
                    <span className="text-2xl">🔴</span>
                    <span className="text-lg text-zinc-700 dark:text-zinc-300 font-light">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Soluciones */}
        <section id="soluciones" className="py-32 bg-zinc-50 dark:bg-zinc-900/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Nuestras Soluciones
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">
                Lo que hacemos <span className="text-zinc-400">por tu sector finanzas</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Diagnóstico Sectorial Especializado",
                  desc: "Analizamos los desafíos específicos de tu industria y diseñamos soluciones a medida que resuelven problemas reales.",
                  icon: "🔍",
                  result: "Plan de acción personalizado para tu sector"
                },
                {
                  title: "Implementación de Tecnología Adecuada",
                  desc: "Seleccionamos y configuramos las herramientas tecnológicas que mejor se adaptan a las necesidades de tu industria.",
                  icon: "⚙️",
                  result: "Stack tecnológico optimizado para tu sector"
                },
                {
                  title: "Optimización de Procesos",
                  desc: "Reingeniería de procesos internos para aumentar eficiencia y reducir costes operativos.",
                  icon: "⚡",
                  result: "Reducción del 40% en tiempo operativo"
                },
                {
                  title: "Cumplimiento y Normativa",
                  desc: "Aseguramos que todas tus soluciones cumplan con la normativa vigente de tu sector.",
                  icon: "⚖️",
                  result: "Cumplimiento total garantizado"
                }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 transition-all duration-500 shadow-lg hover:shadow-purple-500/10">
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-4xl mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light mb-6 leading-relaxed">{service.desc}</p>
                  <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/20">
                    <p className="text-purple-600 dark:text-purple-400 font-bold text-sm">Resultado esperado: {service.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack tecnológico */}
        <section className="py-32 bg-zinc-950 text-white">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Nuestro Stack para Finanzas</h2>
              <p className="text-xl text-zinc-400 font-light">Las herramientas que usamos para tu sector</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["finanzas", "Tecnología", "Digitalización", "Automatización", "Analytics", "CRM", "ERP", "Cloud", "Seguridad"].map(tech => (
                <span key={tech} className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-bold text-zinc-300 hover:border-purple-500 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-purple-600">
          <div className="container px-6 mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              ¿Listo para transformar tu negocio en finanzas?
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
              Agenda una sesión de diagnóstico gratuita. Analizaremos tus desafíos específicos y te mostraremos cómo resolverlos.
            </p>
            <Button asChild size="xl" className="rounded-full bg-white text-purple-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black shadow-2xl transition-all hover:scale-105">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?focus=finanzas" target="_blank">
                Reservar mi diagnóstico
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/10">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-2xl font-bold tracking-tighter uppercase mb-2">
                Varullo<span className="text-purple-600">.</span>
              </div>
              <p className="text-sm text-zinc-500">Convertimos el caos en sistemas que se entienden.</p>
            </div>
            <div className="flex gap-8">
              <Link href="/" className="text-zinc-600 hover:text-purple-600 font-medium">Inicio</Link>
              <Link href="/casos" className="text-zinc-600 hover:text-purple-600 font-medium">Casos</Link>
              <Link href="/vertical" className="text-zinc-600 hover:text-purple-600 font-medium">Verticales</Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Varullo. Especialistas en finanzas.
          </div>
        </div>
      </footer>
    </div>
  );
}
