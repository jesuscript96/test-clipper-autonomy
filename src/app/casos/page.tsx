import Link from "next/link";
import { Button } from "@/components/ui/button";

const cases = [
  {
    slug: "reestructuracion-ecommerce",
    client: "E-commerce de Moda Premium",
    challenge: "Caos en la gestión de inventario y ROI estancado en 1.5x.",
    solution: "Implementación de sistema de automatización con Make.com y optimización de Meta Ads.",
    result: "ROI aumentado a 4.2x y reducción del 60% en horas operativas.",
    tag: "Marketing & Automatización"
  },
  {
    slug: "digitalizacion-servicios-profesionales",
    client: "Bufete de Abogados Elite",
    challenge: "Captación de leads manual y procesos internos en papel.",
    solution: "CRM HubSpot personalizado y estrategia de contenidos SEO local.",
    result: "Aumento del 200% en leads cualificados en 4 meses.",
    tag: "Consultoría Digital"
  },
  {
    slug: "automatización-logistica",
    client: "Operador Logístico Nacional",
    challenge: "Falta de visibilidad de datos en tiempo real y errores humanos constantes.",
    solution: "Dashboard en tiempo real y flujo de trabajo automatizado.",
    result: "Eliminación total de errores de data-entry y claridad total para la dirección.",
    tag: "Operaciones"
  }
];

export default function CasosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <header className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-sm bg-white/70 dark:bg-black/70 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Varullo
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Casos de Éxito</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto italic">
            "Donde otros ven caos, nosotros ejecutamos orden."
          </p>
        </div>

        <div className="grid gap-12">
          {cases.map((item) => (
            <div key={item.slug} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-2">
                    {item.tag}
                  </span>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{item.client}</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">El Reto</h3>
                  <p className="text-zinc-700 dark:text-zinc-300">{item.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">La Solución</h3>
                  <p className="text-zinc-700 dark:text-zinc-300">{item.solution}</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-blue-100 dark:border-blue-900/20">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Resultado</h3>
                  <p className="text-zinc-900 dark:text-zinc-100 font-semibold">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser el próximo caso de éxito?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Agenda una llamada de diagnóstico y busquemos los cuellos de botella de tu negocio.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-zinc-100 font-bold">
            <Link href="https://calendly.com/dvallejo-varullo/ponemos-orden" target="_blank">
              Agendar ahora
            </Link>
          </Button>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
        © {new Date().getFullYear()} Varullo. Sin humo, solo orden.
      </footer>
    </div>
  );
}
