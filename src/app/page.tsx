import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 px-6 py-4 flex flex-col sm:flex-row justify-between items-center backdrop-blur-sm bg-white/70 dark:bg-black/70 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <Link href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Varullo
        </Link>
        <nav className="flex gap-6">
          <Link href="#services" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            Servicios
          </Link>
          <Link href="#about" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            Sobre Nosotros
          </Link>
          <Link href="#testimonials" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            Testimonios
          </Link>
          <Link href="#contact" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            Contacto
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-between px-6 py-32">
        <div className="text-center w-full max-w-4xl animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6 leading-tight tracking-tight">
            Convertimos el caos en un sistema que se entiende
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Somos una agencia de marketing y consultoría digital que ordena, clarifica, mide y ejecuta. Sin humo. Sin bullshit. Solo resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button asChild size="lg" className="h-12 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank" rel="noopener noreferrer">
                <span className="font-semibold">Agendar llamada</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg border-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300">
              <Link href="#services">
                <span className="font-semibold">Ver servicios</span>
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Proyectos ordenados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Clientes con claridad</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">3×</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">ROI promedio</div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="relative relative-x-auto px-6 py-20 w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">¿Por qué elegirnos?</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            No vendemos humo. Entregamos resultados medibles con un enfoque basado en datos y años de experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Rapidez</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Entregamos proyectos en tiempo récord sin sacrificar calidad. Tu ventaja competitiva no puede esperar.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Calidad garantizada</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Cada línea de código, cada diseño, cada estrategia está optimizada para resultados.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-600 dark:text-pink-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Atención personalizada</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Cada cliente es único. trabajamos uno a uno para entender tus necesidades específicas.</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">Nuestro proceso</h3>
            <ol className="space-y-6 relative">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {[
                { step: 1, text: "Diagnosticamos tu situación actual y identificamos puntos de mejora" },
                { step: 2, text: "Diseñamos una estrategia personalizada y priorizada" },
                { step: 3, text: "Implementamos con tecnología moderna y buenas prácticas" },
                { step: 4, text: "Medimos resultados y optimizamos continuamente" }
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    {item.step}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 pt-1">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative relative-x-auto px-6 py-16 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Estrategia Digital", desc: "Analizamos tu negocio y definimos un plan de acción claro, medible y alcanzable." },
            { title: "Marketing y Publicidad", desc: "Campañas que funcionan. Desde Google Ads hasta redes sociales, optimizamos cada euro invertido." },
            { title: " Desarrollo Web", desc: "Landing pages que convierten, webs corporativas sólidas y tiendas online que venden." }
          ].map((service) => (
            <div key={service.title} className="border rounded-lg p-6 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="relative px-6 py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-16">Resultados reales, clientes tranquilos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Por fin entiendo qué está pasando con mi negocio online. Varullo nos dio un plan claro y los resultados llegaron en el primer mes. Un sistema que de verdad funciona.",
                author: "Marta R.",
                role: "CEO en EcoStyle",
                image: "MR"
              },
              {
                text: "Profesionales, directos y sin rodeos. Lo que necesitas cuando el caos digital te supera. Han transformado nuestro embudo de ventas por completo.",
                author: "Javier G.",
                role: "Fundador de TechFlow",
                image: "JG"
              },
              {
                text: "Trabajar con Varullo ha sido un antes y un después. No solo ejecutan, sino que te enseñan a medir lo que importa. Cero humo, 100% ejecución.",
                author: "Elena P.",
                role: "Marketing Manager en Aris",
                image: "EP"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 italic mb-6">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-zinc-800 dark:text-zinc-100">{testimonial.author}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative relative-x-auto px-6 py-16 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {[
              {
                question: "¿Cuánto tiempo tardan en entregar un proyecto?",
                answer: "Depende de la complejidad, pero generalmente entregamos resultados en 2-4 semanas para proyectos de marketing y 4-6 semanas para desarrollos web más complejos. Nos ajustamos a tus deadlines."
              },
              {
                question: "¿Trabajan con empresas de todos los tamaños?",
                answer: "Sí, desde startups hasta empresas consolidadas. Nuestro enfoque se adapta a tu escala y presupuesto."
              },
              {
                question: "¿Puedo ver ejemplos de proyectos anteriores?",
                answer: "Por supuesto. Durante la llamada te mostraremos casos de éxito relevantes para tu industria. La confidencialidad es clave para nosotros."
              },
              {
                question: "¿Qué resultados puedo esperar?",
                answer: "Nuestro objetivo es un ROI mínimo de 3x. Medimos todo: tráfico, conversiones, ventas. Sin humo, solo números."
              },
              {
                question: "¿Ofrecen soporte después de terminar el proyecto?",
                answer: "Sí, incluimos 30 días de soporte post-entrega. Luego puedes contratar mantenimiento mensual si lo necesitas."
              }
            ].map((faq) => (
              <div key={faq.question} className="border rounded-lg p-6 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{faq.question}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="relative relative-x-auto px-6 py-16 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-8">
          ¡Hablemos!
        </h2>
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            ¿Cansado del caos digital? Agenda una llamada gratuita y te contamos cómo podemos ayudarte.
          </p>
          <div className="self-center whitespace-nowrap">
            <Button asChild size="lg" className="flex justify-center items-center gap-2">
              <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank" rel="noopener noreferrer">
                <span className="font-medium">Agendar llamada</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white pt-20 pb-10 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6 block">
              Varullo
            </Link>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-6">
              Convertimos el caos en un sistema que se entiende. Somos la agencia que ordena tu estrategia digital para que tú solo te preocupes de crecer.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-zinc-500">Compañía</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link href="#about" className="hover:text-white transition-colors">Sobre nosotros</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonios</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-zinc-500">Legal</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
          <p>© {new Date().getFullYear()} Varullo. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en España.</p>
        </div>
      </footer>
    </div>
  );
}
