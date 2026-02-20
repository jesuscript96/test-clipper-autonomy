"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import Link from "next/link";

interface VerticalPageProps {
  vertical: {
    title: string;
    subtitle: string;
    heroEmoji: string;
    description: string;
    challenges: Array<{
      title: string;
      description: string;
    }>;
    solutions: Array<{
      title: string;
      description: string;
    }>;
    results: Array<{
      metric: string;
      value: string;
      description: string;
    }>;
    cta: {
      text: string;
      href: string;
    };
  };
}

export function VerticalPageLayout({ vertical }: VerticalPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-blue-100 dark:selection:bg-blue-900/30 transition-colors duration-300">
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] -z-10" />
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-blue-500/30">
                Vertical: {vertical.title}
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                Varullo para <br /> <span className="text-blue-500">{vertical.title}.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-zinc-400 font-light leading-relaxed">
                {vertical.subtitle}
              </p>
              <Button asChild size="xl" className="rounded-full bg-blue-600 hover:bg-blue-700 px-10 py-8 text-xl font-black transition-all hover:scale-105 shadow-2xl shadow-blue-500/20">
                <Link href={vertical.cta.href}>
                  {vertical.cta.text}
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="aspect-square rounded-[3rem] bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10rem] shadow-inner group">
                <div className="group-hover:scale-110 transition-transform duration-700">
                  {vertical.heroEmoji}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Los problemas que <br /> <span className="text-zinc-400">frenan tu {vertical.title}.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vertical.challenges.map((c, i) => (
              <Card key={i} className="p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-all duration-300">
                <div className="text-3xl mb-6">⚠️</div>
                <h3 className="text-2xl font-black mb-4">{c.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{c.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] -z-10" />
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl md:text-6xl font-black mb-8">Nuestra receta <br /> <span className="text-blue-500">anti-caos.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {vertical.solutions.map((s, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  0{i+1}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
                  <p className="text-zinc-400 font-light leading-relaxed text-lg">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {vertical.results.map((r, i) => (
              <div key={i} className="space-y-4">
                <div className="text-6xl md:text-8xl font-black text-blue-600 tracking-tighter">{r.value}</div>
                <div className="text-xl font-bold uppercase tracking-widest text-zinc-400">{r.metric}</div>
                <p className="text-zinc-500 dark:text-zinc-400 font-light">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-blue-600 text-white text-center">
        <div className="container px-6 mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">¿Escalamos tu {vertical.title}?</h2>
          <Button asChild size="xl" className="rounded-full bg-white text-blue-600 hover:bg-zinc-100 px-16 py-8 text-2xl font-black transition-all hover:scale-110 shadow-2xl shadow-blue-900/40">
            <Link href={vertical.cta.href}>
              {vertical.cta.text}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
