import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-blue-100 dark:selection:bg-blue-900/30 transition-colors duration-300 scroll-smooth">
      <Header />
      
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-32 bg-zinc-50 dark:bg-zinc-900/20 relative overflow-hidden">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((service) => (
                <div key={service.title} 
                     style={{ animationDelay: service.delay }}
                     className="group p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 animate-fade-in-up fill-mode-both">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-4">{service.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-lg font-light">
                    {service.desc}
                  </p>
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank" className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group/link">
                    Saber más <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Methodology Section */}
        <section id="about" className="py-32">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="animate-fade-in-left">
                <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  Metodología
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-12 leading-[0.95] tracking-tighter">
                  Un método para <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-500">matar el caos.</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { step: "01", title: "Diagnóstico", desc: "No recetamos sin examinar. Analizamos tus datos y procesos actuales para encontrar fugas." },
                    { step: "02", title: "Orden", desc: "Priorizamos lo que tiene más impacto con el menor esfuerzo. Creamos tu hoja de ruta." },
                    { step: "03", title: "Ejecución", desc: "Hacemos que las cosas pasen. Implementamos los cambios sin excusas ni retrasos." },
                    { step: "04", title: "Medición", desc: "Lo que no se mide no existe. Informes semanales sobre lo que importa: conversiones y ventas." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-8 group">
                      <span className="text-2xl font-black text-zinc-200 dark:text-zinc-800 group-hover:text-blue-500 transition-colors duration-300">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <div className="aspect-[4/5] rounded-[3rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner group">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-16 text-center">
                     <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-4xl mb-8 shadow-xl">🛠️</div>
                     <h5 className="text-2xl font-bold mb-4">Sistemas de Alto Rendimiento</h5>
                     <p className="text-zinc-500 dark:text-zinc-400">Diseñamos la infraestructura que tu negocio necesita para crecer sin romperse.</p>
                   </div>
                </div>
                <div className="absolute -bottom-10 -left-10 p-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-[2rem] shadow-2xl hidden md:block border border-zinc-800 dark:border-zinc-100">
                  <div className="text-5xl font-black mb-1">Cero</div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Humo garantizado</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - NEW */}
        <section id="team" className="py-32 bg-zinc-50 dark:bg-zinc-900/10">
          <div className="container px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Equipo
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-zinc-900 dark:text-zinc-100">Expertos en <span className="text-blue-600">ejecución.</span></h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
                No somos una agencia de 50 becarios. Somos un equipo senior que se ensucia las manos con tu proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: "Diego Vallejo", role: "Estrategia & Growth", initials: "DV" },
                { name: "Daniela Martínez", role: "Operaciones & CRM", initials: "DM" },
                { name: "Marcos Sanz", role: "Performance Marketing", initials: "MS" }
              ].map((member, i) => (
                <div key={i} className="group text-center">
                  <div className="relative w-48 h-48 mx-auto mb-8">
                    <div className="absolute inset-0 bg-blue-600 rounded-full scale-105 opacity-0 group-hover:opacity-20 transition-all duration-500" />
                    <div className="w-full h-full rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-4xl font-black text-zinc-400 dark:text-zinc-600 border-2 border-transparent group-hover:border-blue-600 transition-all duration-500 overflow-hidden">
                      {member.initials}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{member.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px]" />
          <div className="container px-6 mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-zinc-800">
                Testimonios
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Lo que dicen los que ya <br /> <span className="text-blue-500">tienen orden.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
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
                 }
               ].map((t, i) => (
                 <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
                    <div className="flex gap-1 mb-8">
                      {[1,2,3,4,5].map(star => <span key={star} className="text-blue-500 text-sm group-hover:scale-125 transition-transform duration-300" style={{ transitionDelay: `${star * 50}ms` }}>★</span>)}
                    </div>
                    <p className="text-xl text-zinc-300 mb-10 leading-relaxed font-light italic">"{t.quote}"</p>
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

        {/* FAQ Section */}
        <section id="faq" className="py-32 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
          <div className="container px-6 mx-auto max-w-4xl">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100">Dudas habituales</h2>
            </div>
            <div className="grid gap-12">
              {[
                { q: "¿Para quién es Varullo?", a: "Para dueños de negocio, CEOs y directivos de marketing que sienten que sus esfuerzos digitales son un caos y necesitan un sistema profesional, predecible y medible." },
                { q: "¿Cuánto tardáis en dar resultados?", a: "El diagnóstico es inmediato. El plan de acción táctico se ejecuta en las primeras 2 semanas. Los resultados tangibles suelen verse desde el primer ciclo de optimización (30-45 días)." },
                { q: "¿Varullo es una agencia de publicidad?", a: "Somos una consultoría de sistemas de marketing. Gestionamos publicidad, sí, pero solo como parte de un sistema más grande que incluye estrategia, conversión y medición." }
              ].map((faq, i) => (
                <div key={i} className="group pb-12 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
                  <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 transition-colors duration-300">{faq.q}</h4>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contact" className="py-32">
          <div className="container px-6 mx-auto">
            <div className="bg-blue-600 rounded-[4rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-500/20 group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/20 rounded-full -ml-32 -mb-32 blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">¿Ponemos orden?</h2>
                <p className="text-xl md:text-3xl mb-16 opacity-90 font-light leading-relaxed">
                  Agenda una sesión estratégica gratuita de 15 minutos. <br className="hidden md:block" /> Analizaremos tu caso y verás el camino. Sin compromisos.
                </p>
                <Button asChild size="xl" className="rounded-full bg-white text-blue-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black transition-all hover:scale-110 active:scale-95 shadow-2xl shadow-blue-900/40">
                  <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank">
                    Reservar mi sesión ahora
                  </Link>
                </Button>
                <p className="mt-10 text-sm font-bold uppercase tracking-[0.3em] opacity-60">Últimos huecos para esta semana</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900/10">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
            <div>
              <div className="text-3xl font-black tracking-tighter uppercase mb-4">
                Varullo<span className="text-blue-600">.</span>
              </div>
              <p className="text-zinc-500 dark:text-zinc-500 max-w-xs text-lg font-light">
                Convertimos el caos en un sistema que se entiende. Consultoría estratégica para negocios que quieren crecer de verdad.
              </p>
            </div>
            <div className="flex flex-wrap gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <span className="font-bold uppercase tracking-widest text-xs text-zinc-400">Navegación</span>
                <Link href="#services" className="hover:text-blue-600 transition-colors">Servicios</Link>
                <Link href="#about" className="hover:text-blue-600 transition-colors">Metodología</Link>
                <Link href="#team" className="hover:text-blue-600 transition-colors">Equipo</Link>
                <Link href="#testimonials" className="hover:text-blue-600 transition-colors">Casos</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold uppercase tracking-widest text-xs text-zinc-400">Contacto</span>
                <Link href="mailto:hola@varullo.com" className="hover:text-blue-600 transition-colors">hola@varullo.com</Link>
                <Link href="https://linkedin.com/company/varullo" className="hover:text-blue-600 transition-colors">LinkedIn</Link>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-200 dark:border-zinc-800 gap-8">
            <div className="text-sm text-zinc-400 font-medium">
              © {new Date().getFullYear()} Varullo Consulting. Todos los derechos reservados.
            </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Aviso Legal</Link>
              <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
