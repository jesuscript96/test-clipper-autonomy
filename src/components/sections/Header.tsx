"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="container px-6 mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
            Varullo<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Verticales Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-1">
              Verticales
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Agencias", href: "/vertical/agencias" },
                  { name: "E-commerce", href: "/vertical/ecommerce" },
                  { name: "SaaS", href: "/vertical/saas" },
                  { name: "Educación", href: "/vertical/educacion" },
                  { name: "Finanzas", href: "/vertical/finanzas" },
                  { name: "Healthcare", href: "/vertical/healthcare" },
                  { name: "Tecnología", href: "/vertical/tecnologia" },
                  { name: "Energía", href: "/vertical/energia" },
                  { name: "Retail", href: "/vertical/retail" },
                  { name: "Logística", href: "/vertical/logistica" },
                  { name: "Manufactura", href: "/vertical/manufactura" },
                  { name: "Hospitalidad", href: "/vertical/hospitalidad" }
                ].map((vertical) => (
                  <Link
                    key={vertical.href}
                    href={vertical.href}
                    className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    {vertical.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Servicios Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-1">
              Servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
              <div className="space-y-2">
                <Link href="/servicios/automatizacion" className="block p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                  <div className="font-bold text-zinc-900 dark:text-zinc-100">Automatización</div>
                  <div className="text-xs text-zinc-500 mt-1">Procesos automáticos 24/7</div>
                </Link>
                <Link href="/servicios/consultoria" className="block p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                  <div className="font-bold text-zinc-900 dark:text-zinc-100">Consultoría Estratégica</div>
                  <div className="text-xs text-zinc-500 mt-1">Transformación digital</div>
                </Link>
                <div className="pt-2 mt-2 border-t border-zinc-200 dark:border-zinc-700">
                  <Link href="/recursos" className="block p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    <div className="font-bold text-zinc-900 dark:text-zinc-100">📚 Recursos Gratuitos</div>
                    <div className="text-xs text-zinc-500 mt-1">Kits y guías descargables</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/recursos" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Recursos
          </Link>
          <Link href="/casos" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Casos
          </Link>
          <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Metodología
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Testimonios
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="https://calendly.com/dvallejo-varullo/ponemos-orden" 
            target="_blank"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Agendar llamada
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-900 dark:text-white transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`
        md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
      `}>
        <nav className="flex flex-col p-6 gap-4">
          <Link 
            href="#services" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link 
            href="/recursos" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Recursos
          </Link>
          <Link 
            href="/casos" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Casos
          </Link>
          <Link 
            href="#about" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Metodología
          </Link>
          <Link 
            href="#testimonials" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonios
          </Link>
          <Link 
            href="https://calendly.com/dvallejo-varullo/ponemos-orden" 
            target="_blank"
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-bold text-white transition-colors hover:bg-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar llamada
          </Link>
        </nav>
      </div>
    </header>
  );
};
