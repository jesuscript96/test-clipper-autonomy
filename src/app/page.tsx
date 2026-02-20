import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-blue-100 dark:selection:bg-blue-900/30 transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/20">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">Servicios</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                Soluciones diseñadas para <br /> la ejecución, no para el Powerpoint.
              </h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Nos enfocamos en las áreas críticas que mueven la aguja de tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Estrategia Digital", 
                  desc: "Diagnosticamos tu embudo de ventas y definimos un plan de acción con KPIs claros. Sabrás exactamente dónde estás perdiendo dinero.",
                  icon: "🎯"
                },
                { 
                  title: "Marketing y Publicidad", 
                  desc: "Gestión de campañas en Meta, Google y LinkedIn Ads orientadas a ROI. Menos 'likes', más clientes cualificados.",
                  icon: "📈"
                },
                { 
                  title: "Desarrollo de Sistemas", 
                  desc: "Landing pages de alta conversión y automatizaciones que liberan tiempo de tu equipo. Tecnología al servicio del negocio.",
                  icon: "⚙️"
                }
              ].map((service) => (
                <div key={service.title} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-500/5">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{service.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link href="#contact" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
                    Saber más <span className="ml-1">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Methodology Section */}
        <section id="about" className="py-24">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 leading-tight">
                  Un método para <br /> <span className="text-zinc-400">matar el caos.</span>
                </h2>
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Diagnóstico", desc: "No recetamos sin examinar. Analizamos tus datos y procesos actuales." },
                    { step: "02", title: "Orden", desc: "Priorizamos lo que tiene más impacto con el menor esfuerzo posible." },
                    { step: "03", title: "Ejecución", desc: "Hacemos que las cosas pasen. Sin excusas, sin retrasos innecesarios." },
                    { step: "04", title: "Medición", desc: "Lo que no se mide no existe. Informes directos sobre lo que importa: €." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <span className="text-xl font-black text-zinc-200 dark:text-zinc-800">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h4>
                        <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                   {/* Placeholder for an abstract image/illustration */}
                   <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-700 font-bold text-lg p-12 text-center">
                     [Espacio para ilustración de sistema/flujo ordenado]
                   </div>
                </div>
                <div className="absolute -bottom-10 -left-10 p-8 bg-blue-600 text-white rounded-2xl shadow-2xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">Cero</div>
                  <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Humo garantizado</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-zinc-950 text-white overflow-hidden">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Lo que dicen los que ya tienen orden.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   quote: "Varullo nos dio el sistema que necesitábamos para escalar. Pasamos del caos total a tener una máquina de ventas predecible.",
                   author: "Marta R.",
                   role: "CEO, EcoStyle"
                 },
                 {
                   quote: "Directos, profesionales y sobre todo, resolutivos. Si buscas una agencia que hable menos y haga más, son ellos.",
                   author: "Javier G.",
                   role: "Founder, TechFlow"
                 },
                 {
                   quote: "Lo que más valoro es la claridad. Ahora sé exactamente dónde va cada euro de mi presupuesto de marketing.",
                   author: "Elena P.",
                   role: "Marketing Manager, Aris"
                 }
               ].map((t, i) => (
                 <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <p className="text-xl text-zinc-300 mb-8 italic">"{t.quote}"</p>
                    <div>
                      <div className="font-bold">{t.author}</div>
                      <div className="text-zinc-500 text-sm">{t.role}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 border-t border-zinc-100 dark:border-zinc-900">
          <div className="container px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-8">
              {[
                { q: "¿Para quién es Varullo?", a: "Para dueños de negocio y directivos que sienten que su marketing es un caos y necesitan un sistema profesional y medible." },
                { q: "¿Cuánto tardáis en dar resultados?", a: "El diagnóstico es inmediato. El plan de acción se ejecuta en semanas, no en meses. Los resultados suelen verse desde el primer ciclo de optimización." },
                { q: "¿Trabajáis con cualquier presupuesto?", a: "Trabajamos con empresas que tienen validación de mercado y están listas para escalar con inversión profesional." }
              ].map((faq, i) => (
                <div key={i} className="group">
                  <h4 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{faq.q}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contact" className="py-24">
          <div className="container px-6 mx-auto">
            <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Ponemos orden?</h2>
                <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
                  Agenda una sesión estratégica de 15 minutos. Sin compromiso. <br className="hidden md:block" /> Solo claridad.
                </p>
                <Button asChild size="xl" className="rounded-full bg-white text-blue-600 hover:bg-zinc-100 px-12 text-lg font-bold transition-all hover:scale-105 shadow-2xl shadow-blue-900/20">
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank">
                    Reservar mi sesión ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 dark:border-zinc-900">
        <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter uppercase">
            Varullo<span className="text-blue-600">.</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Aviso Legal</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Privacidad</Link>
          </div>
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Varullo. Hecho con ❤️ en España.
          </div>
        </div>
      </footer>
    </div>
  );
}
