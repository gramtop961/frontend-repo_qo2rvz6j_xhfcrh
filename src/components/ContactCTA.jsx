import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ContactCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0A0F17] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl"
          aria-live="polite"
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative p-8 md:p-10">
              <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 blur-3xl" />
              <h3 className="relative z-10 bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-extrabold text-transparent">
                Secure your perimeter
              </h3>
              <p className="relative z-10 mt-2 text-sm text-white/70">
                Request a free security audit and roadmap tailored to your environment.
              </p>
              <ul className="relative z-10 mt-6 space-y-3 text-sm text-white/70" role="list">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />Attack surface analysis</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" />Prioritized risk insights</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />Actionable remediation plan</li>
              </ul>
            </div>

            <div className="relative border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="text-xl font-semibold text-white">Request received</div>
                  <p className="mt-2 text-sm text-white/70">Our team will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="text-xs text-white/60">Name</label>
                    <input
                      id="name"
                      required
                      type="text"
                      className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
                      placeholder="Jane Doe"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-white/60">Email</label>
                    <input
                      id="email"
                      required
                      type="email"
                      className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
                      placeholder="jane@company.com"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs text-white/60">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
                      placeholder="Tell us about your environment and goals..."
                      aria-required="true"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Submit audit request"
                  >
                    Request Audit
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
