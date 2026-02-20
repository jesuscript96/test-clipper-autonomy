import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function VerticalAgenciasPage() {
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
                Vertical Agencias
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 leading-[0.95] tracking-tighter">
                Sistemas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">agencias escalables</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-12 max-w-3xl">
                Deja de depender de horas facturables. Construimos la infraestructura que te permite crecer sin romper tu modelo de negocio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="xl" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-10 py-7 text-lg font-black">
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?focus=agencias">
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
                  "Dependencia total de horas facturables",
                  "No puedes escalar sin contratar más",
                  "Clientes insatisfechos con tiempos",
                  "Procesos manuales que consumen tiempo",
                  "No tienes visibilidad de rentabilidad por cliente",
                  "Sin sistemas para onboarding eficiente",
                  "Comunicación caótica con clientes",
                  "Sin automatización de reporting"
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
                Lo que hacemos <span className="text-zinc-400">por tu agencia</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Sistema de Pricing & Packaging",
                  desc: "Diseñamos tus paquetes de servicios con márgenes claros y valor percibido. Deja de regalar trabajo y empieza a cobrar por resultados.",
                  icon: "💰",
                  result: "Aumento del 40% en facturación sin más clientes"
                },
                {
                  title: "Automatización de Procesos",
                  desc: "Automatizamos el onboarding, reporting, facturación y comunicación con clientes. Tu equipo se enfoca en lo que realmente genera valor.",
                  icon: "⚙️",
                  result: "Reducción del 60% en tiempo operativo"
                },
                {
                  title: "Stack Tecnológico Integrado",
                  desc: "Conectamos tus herramientas (CRM, project mgmt, analytics) para tener visibilidad total de la rentabilidad y performance.",
                  icon: "🔗",
                  result: "Control total de márgenes por cliente"
                },
                {
                  title: "Sistema de Reporting & KPIs",
                  desc: "Dashboards automatizados que muestran a tus clientes el valor real que entregas. Adiós a las horas perdidas en reportes manuales.",
                  icon: "📊",
                  result: "Clientes más satisfechos, menos churn"
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

        {/* Casos específicos */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Casos de Éxito en Agencias
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">Resultados reales de agencias reales</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  client: "Agencia de Marketing Digital",
                  challenge: "Facturación por horas, sin escalabilidad. Margen por cliente desconocido.",
                  solution: "Implementación de sistema de pricing basado en resultados + automatización de reporting",
                  result: "Facturación +150%, margen +35%, reducción del 40% en horas operativas"
                },
                {
                  client: "Consultoría de Estrategia",
                  challenge: "Onboarding manual, clientes esperando semanas para iniciar proyectos",
                  solution: "Sistema automatizado de onboarding + CRM personalizado + plantillas estandarizadas",
                  result: "Tiempo onboarding -80%, clientes nuevos +60% anual"
                }
              ].map((c, i) => (
                <div key={i} className="p-10 rounded-3xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                  <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-6">Caso Real</div>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{c.client}</h3>
                  <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                    <p><strong>Reto:</strong> {c.challenge}</p>
                    <p><strong>Solución:</strong> {c.solution}</p>
                    <p className="text-purple-600 dark:text-purple-400 font-bold text-lg">✅ {c.result}</p>
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
              <h2 className="text-4xl font-bold mb-6">Nuestro Stack para Agencias</h2>
              <p className="text-xl text-zinc-400 font-light">Las herramientas que usamos para escalar tu agencia</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["HubSpot", "Monday.com", "Asana", "ClickUp", "Notion", "Make.com", "Zapier", "Google Workspace", "Slack", "Trello", "Jira", "Basecamp", "Teamwork", "Airtable"].map(tech => (
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
              ¿Listo para escalar tu agencia?
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
              Agenda una sesión de diagnóstico gratuita. Analizaremos tus procesos y te mostraremos cómo duplicar tu facturación sin duplicar tu equipo.
            </p>
            <Button asChild size="xl" className="rounded-full bg-white text-purple-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black shadow-2xl transition-all hover:scale-105">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?focus=agencias" target="_blank">
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
            © {new Date().getFullYear()} Varullo. Especialistas en agencias.
          </div>
        </div>
      </footer>
    </div>
  );
}
