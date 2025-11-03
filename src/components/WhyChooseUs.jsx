import React from 'react';
import { ShieldCheck, Activity, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Stat = ({ value, label, icon: Icon }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    <div className="relative flex items-center gap-4">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 text-cyan-300 ring-1 ring-white/10">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <div className="text-2xl font-extrabold text-white">{value}</div>
        <div className="text-sm text-white/70">{label}</div>
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative w-full bg-[#070A0F] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
              Why choose us
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              We combine elite human expertise with AI-driven detection to safeguard your most critical assets. Precision engineering, relentless monitoring, and rapid response — built into every engagement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3" role="list" aria-label="Key metrics">
              <Stat value="24/7" label="Monitoring" icon={Activity} />
              <Stat value="0" label="Breaches" icon={ShieldCheck} />
              <Stat value="300+" label="Clients" icon={Users} />
            </div>

            <div className="mt-10" aria-labelledby="trusted-by-heading">
              <div id="trusted-by-heading" className="text-xs uppercase tracking-widest text-white/50">Trusted by</div>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {['Atlas AI', 'NovaCloud', 'HexaOps', 'Photonix', 'CipherLab', 'EdgeWorks', 'NeuraNet', 'QuantX'].map((brand, idx) => (
                  <motion.div
                    key={brand}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 backdrop-blur-md"
                    role="img"
                    aria-label={`${brand} logo`}
                  >
                    {brand}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white/70 shadow-2xl backdrop-blur-md">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
              <h3 className="text-xl font-semibold text-white">AI-driven threat intelligence</h3>
              <p className="mt-2 text-sm">
                Our models continuously ingest telemetry, enrich indicators, and correlate signals across your stack to surface real attacks — not noise. You get accuracy, speed, and context for decisive action.
              </p>
              <ul className="mt-6 space-y-3 text-sm" role="list">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />Behavioral anomaly detection</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" />Automated playbooks & response</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />Attack surface mapping</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" />Intel feeds & vulnerability scoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
