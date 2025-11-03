import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ContactCTA from './components/ContactCTA.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070A0F] text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-sm font-semibold tracking-widest text-transparent">
              AEGIS // SECURITY
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_16px_rgba(59,130,246,0.35)]"
          >
            Request Audit
          </a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <div id="why">
          <WhyChooseUs />
        </div>
        <ContactCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-8 text-center text-xs text-white/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} Aegis Security. Precision cyber defense.
        </div>
      </footer>
    </div>
  );
}

export default App;
