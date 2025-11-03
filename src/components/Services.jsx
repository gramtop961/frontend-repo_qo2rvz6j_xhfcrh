import React from 'react';
import { Shield, Radar, AlertTriangle, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Penetration Testing',
    icon: Shield,
    desc: 'Full-spectrum assessments uncover vulnerabilities across apps, APIs, and infrastructure.',
  },
  {
    title: 'Threat Intelligence',
    icon: Radar,
    desc: 'Real-time intelligence fused with AI models to anticipate and neutralize emerging threats.',
  },
  {
    title: 'Incident Response',
    icon: AlertTriangle,
    desc: 'Rapid containment, forensic analysis, and recovery to minimize breach impact.',
  },
  {
    title: 'Cloud Security',
    icon: Cloud,
    desc: 'Hardened cloud posture with continuous monitoring and policy enforcement.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0A0F17] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Cyber Defense Services
          </h2>
          <p className="mt-3 text-white/70">Modular capabilities engineered for precision, speed, and resilience.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 text-cyan-300 ring-1 ring-white/10">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-white/70">{s.desc}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <button className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-transform group-hover:scale-[1.02]">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
