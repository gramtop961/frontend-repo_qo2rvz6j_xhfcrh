import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ContactCTA from './components/ContactCTA.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070A0F] text-white">
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-black/80 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3" aria-label="Aegis Security home">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-sm font-semibold tracking-widest text-transparent">
              AEGIS // SECURITY
            </span>
          </div>
          <nav aria-label="Primary" className="hidden gap-6 text-sm text-white/75 sm:flex">
            <a href="#services" className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Services</a>
            <a href="#why" className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Why Us</a>
            <a href="#contact" className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_16px_rgba(59,130,246,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Request a security audit"
          >
            Request Audit
          </a>
        </div>
      </header>

      {/* Sections */}
      <main id="main">
        <Hero />
        <Services />
        <div id="why">
          <WhyChooseUs />
        </div>
        <ContactCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-10 text-center text-xs text-white/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-2 text-white/80">© {new Date().getFullYear()} Aegis Security</div>
          <p className="mx-auto max-w-xl leading-relaxed">
            Precision cyber defense, powered by AI and human expertise. Built for availability, confidentiality, and integrity.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
