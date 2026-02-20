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
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Servicios
          </Link>
          <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Metodología
          </Link>
          <Link href="#team" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Equipo
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            Casos
          </Link>
          <Link href="#faq" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            FAQ
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
            href="#about" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Metodología
          </Link>
          <Link 
            href="#team" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Equipo
          </Link>
          <Link 
            href="#testimonials" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Casos
          </Link>
          <Link 
            href="#faq" 
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-900"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
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
