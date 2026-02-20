"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact-form" className="py-32 bg-white dark:bg-zinc-950">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Hablemos de tu <span className="text-blue-600">sistema.</span></h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
              Cuéntanos qué necesitas y cómo podemos ayudarte a matar el caos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Nombre</label>
                <Input placeholder="Tu nombre" required className="rounded-2xl py-6 border-zinc-200 dark:border-zinc-800" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Email</label>
                <Input type="email" placeholder="tu@email.com" required className="rounded-2xl py-6 border-zinc-200 dark:border-zinc-800" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Empresa</label>
                <Input placeholder="Tu empresa" className="rounded-2xl py-6 border-zinc-200 dark:border-zinc-800" />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Mensaje</label>
              <textarea 
                required
                className="flex-1 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <Button 
                type="submit" 
                size="lg" 
                disabled={status !== "idle"}
                className="w-full rounded-2xl py-8 text-xl font-black bg-blue-600 hover:bg-blue-700 transition-all"
              >
                {status === "idle" && "Enviar mensaje"}
                {status === "sending" && "Enviando..."}
                {status === "sent" && "✓ ¡Mensaje enviado!"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
