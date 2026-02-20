import { Card } from "@/components/ui/card";

const faqs = [
  {
    q: "¿Para quién es Varullo?",
    a: "Para dueños de negocio, CEOs y directivos de marketing que sienten que sus esfuerzos digitales son un caos y necesitan un sistema profesional, predecible y medible."
  },
  {
    q: "¿Cuánto tardáis en dar resultados?",
    a: "El diagnóstico es inmediato. El plan de acción táctico se ejecuta en las primeras 2 semanas. Los resultados tangibles suelen verse desde el primer ciclo de optimización (30-45 días)."
  },
  {
    q: "¿Varullo es una agencia de publicidad?",
    a: "Somos una consultoría de sistemas de marketing. Gestionamos publicidad, sí, pero solo como parte de un sistema más grande que incluye estrategia, conversión y medición."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 scroll-mt-24">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100">
            Dudas habituales
          </h2>
        </div>
        <div className="grid gap-12">
          {faqs.map((faq, i) => (
            <Card key={i} className="group pb-12 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 group-hover:text-blue-600 transition-colors">{faq.q}</h4>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">{faq.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}