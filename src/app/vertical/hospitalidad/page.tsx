import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function VerticalHospitalidadPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 scroll-smooth">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/10 blur-[100px] -z-10" />
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Vertical Hospitalidad
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 leading-[0.95] tracking-tighter">
                Sistemas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Hoteles y Restaurantes</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-12 max-w-3xl">
                Optimiza reservas, gestión de inventario, atención al cliente y operaciones. Automatiza todo para que tu equipo se enfoque en la experiencia del huésped.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="xl" className="rounded-full bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 text-lg font-black">
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?focus=hospitalidad">
                    Diagnóstico gratuito
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="rounded-full px-10 py-7 text-lg font-bold border-amber-600 text-amber-600 hover:bg-amber-50">
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
                Problemas típicos en hospitalidad
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                {[
                  "Reservas duplicadas o perdidas",
                  "Gestión manual de inventario",
                  "Comunicación desorganizada con huéspedes",
                  "Procesos de check-in/out lentos",
                  "Reviews dispersas en múltiples plataformas",
                  "Falta de visibilidad en ocupación real",
                  "Personal sobrecargado con tareas administrativas",
                  "Dificultad para escalar sin más personal"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
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
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">
                Cómo lo <span className="text-amber-600">solucionamos</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Sistema unificado de reservas",
                  desc: "Centralizamos todas tus reservas (Booking, Airbnb, web propia) en un solo sistema. Cero conflictos, cero overbooking.",
                  icon: "📅",
                  result: "100% sincronización en tiempo real"
                },
                {
                  title: "Automatización de comunicaciones",
                  desc: "Mensajes automáticos de confirmación, recordatorios, encuestas post-estancia. Tu equipo ahorra 15+ horas semanales.",
                  icon: "💬",
                  result: "15 horas ahorradas por semana"
                },
                {
                  title: "Dashboard operativo en tiempo real",
                  desc: "Visibilidad completa de ocupación, ingresos, tareas pendientes y métricas clave en un solo lugar.",
                  icon: "📊",
                  result: "Decisiones basadas en datos reales"
                },
                {
                  title: "Gestión inteligente de reviews",
                  desc: "Recopilamos y respondemos automáticamente reviews de todas las plataformas. Mejora tu reputación online.",
                  icon: "⭐",
                  result: "30% más reviews positivas"
                }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500 transition-all duration-500 shadow-lg hover:shadow-amber-500/10">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-4xl mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light mb-6 leading-relaxed">{service.desc}</p>
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/20">
                    <p className="text-amber-600 dark:text-amber-400 font-bold text-sm">Resultado: {service.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-32 bg-zinc-950 text-white">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Nuestro Stack para Hospitalidad</h2>
              <p className="text-xl text-zinc-400 font-light">Herramientas que usamos para optimizar hoteles y restaurantes</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["Guesty", "Cloudbeds", "Hostaway", "Zapier", "WhatsApp API", "Airtable", "Stripe", "Google Analytics", "Trustpilot"].map(tech => (
                <span key={tech} className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-bold text-zinc-300 hover:border-amber-500 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-amber-600">
          <div className="container px-6 mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              ¿Listo para optimizar tu hotel o restaurante?
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
              Agenda una sesión gratuita. Te mostramos cómo automatizar tus operaciones y mejorar la experiencia de tus huéspedes.
            </p>
            <Button asChild size="xl" className="rounded-full bg-white text-amber-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black shadow-2xl transition-all hover:scale-105">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden?focus=hospitalidad" target="_blank">
                Reservar diagnóstico
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/10">
        <div className="container px-6 mx-auto text-center">
          <div className="text-2xl font-bold tracking-tighter uppercase mb-4">
            Varullo<span className="text-amber-600">.</span>
          </div>
          <p className="text-sm text-zinc-500">Convertimos el caos en sistemas que se entienden.</p>
        </div>
      </footer>
    </div>
  );
}
