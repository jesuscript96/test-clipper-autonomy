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
      <section id="testimonials" className="relative relative-x-auto px-6 py-16 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <blockquote className="text-center max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            "Por fin entiendo qué está pasando con mi negocio online. Varullo nos dio un plan claro y los resultados llegaron rápido."
          </blockquote>
          <blockquote className="text-center max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            "Profesionales, directos y sin rodeos. Lo que necesitas cuando el caos digital te supera."
          </blockquote>
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
      <footer className="relative bottom-0 w-full bg-zinc-900 text-white py-8 text-sm text-center">
        © {new Date().getFullYear()} Varullo. Todos los derechos reservados.
      </footer>
    </div>
  );
}
