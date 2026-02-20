import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero */}
        <section className="py-32 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 leading-[0.95] tracking-tighter">
                Recursos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Gratuitos</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-12 max-w-3xl mx-auto">
                Herramientas, guías y plantillas para optimizar tu negocio. Todo gratis, sin trucos.
              </p>
            </div>
          </div>
        </section>

        {/* Kits descargables */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Kits descargables
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16">Paquetes completos de herramientas listas para usar</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/kits/diagnostico" className="group">
                <div className="p-10 rounded-3xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 hover:border-emerald-500 transition-all h-full">
                  <div className="text-6xl mb-6">📋</div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                    Kit de Diagnóstico Empresarial
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light mb-6 leading-relaxed">
                    Cuestionarios, matrices y calculadoras para identificar exactamente dónde están tus problemas operativos.
                  </p>
                  <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                    Descargar gratis
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <div className="p-10 rounded-3xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 opacity-75">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold mb-4">
                  Kit de Automatización Rápida
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light mb-6 leading-relaxed">
                  Plantillas de workflows listos para implementar en Zapier, Make y n8n. Ahorra 20+ horas semanales.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-bold">
                  Próximamente
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/30 opacity-75">
                <div className="text-6xl mb-6">💼</div>
                <h3 className="text-3xl font-bold mb-4">
                  Kit SaaS Starter
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light mb-6 leading-relaxed">
                  Stack tecnológico completo para lanzar tu SaaS: arquitectura, herramientas, checklist y roadmap.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-bold">
                  Próximamente
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900/30 opacity-75">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-3xl font-bold mb-4">
                  Kit de Escalado
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light mb-6 leading-relaxed">
                  Frameworks y plantillas para escalar de 10 a 100 clientes sin colapsar tus operaciones.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-bold">
                  Próximamente
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guías y artículos */}
        <section className="py-32 bg-zinc-50 dark:bg-zinc-900/20">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Guías prácticas
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16">Aprende a optimizar tu negocio paso a paso</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cómo automatizar tu onboarding de clientes",
                  category: "Automatización",
                  time: "10 min lectura",
                  coming: false
                },
                {
                  title: "Guía completa de integración de herramientas",
                  category: "Integraciones",
                  time: "15 min lectura",
                  coming: true
                },
                {
                  title: "De caos a sistema: 5 pasos para ordenar tus procesos",
                  category: "Procesos",
                  time: "8 min lectura",
                  coming: true
                },
                {
                  title: "ROI de automatización: cómo calcularlo correctamente",
                  category: "Finanzas",
                  time: "12 min lectura",
                  coming: true
                },
                {
                  title: "Stack tecnológico para startups en 2025",
                  category: "Tecnología",
                  time: "20 min lectura",
                  coming: true
                },
                {
                  title: "Errores comunes al escalar operaciones",
                  category: "Escalado",
                  time: "10 min lectura",
                  coming: true
                }
              ].map((guide, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold">
                      {guide.category}
                    </span>
                    {guide.coming && (
                      <span className="px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold">
                        Pronto
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{guide.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Herramientas recomendadas */}
        <section className="py-32">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Herramientas que recomendamos
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16">El stack que usamos nosotros y con nuestros clientes</p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Zapier", category: "Automatización", icon: "⚡" },
                { name: "Make", category: "Workflows", icon: "🔗" },
                { name: "Notion", category: "Productividad", icon: "📝" },
                { name: "Airtable", category: "Bases de datos", icon: "🗄️" },
                { name: "Stripe", category: "Pagos", icon: "💳" },
                { name: "Calendly", category: "Scheduling", icon: "📅" },
                { name: "Intercom", category: "Soporte", icon: "💬" },
                { name: "Vercel", category: "Hosting", icon: "▲" }
              ].map((tool, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <div className="font-bold mb-1">{tool.name}</div>
                  <div className="text-sm text-zinc-500">{tool.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-orange-600 text-white">
          <div className="container px-6 mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
              ¿Necesitas ayuda personalizada?
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
              Los recursos están geniales, pero a veces necesitas a alguien que lo implemente por ti. Hablemos.
            </p>
            <Button asChild size="xl" className="rounded-full bg-white text-orange-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black shadow-2xl">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden">
                Agendar consulta gratuita
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container px-6 mx-auto text-center">
          <div className="text-2xl font-bold tracking-tighter uppercase mb-4">
            Varullo<span className="text-orange-600">.</span>
          </div>
          <p className="text-sm text-zinc-500">Convertimos el caos en sistemas que se entienden.</p>
        </div>
      </footer>
    </div>
  );
}
