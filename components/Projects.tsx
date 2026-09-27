"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, AppWindow, TerminalSquare, Package, ChevronDown, Star, Hammer, Layers } from "lucide-react";

const projects = [
  {
    id: "silen",
    icon: Rocket,
    tag: "Eigenes Linux-Projekt",
    title: "Silen Linux",
    desc: "Eigene Linux-Distribution mit Fokus auf einfache Bedienung. LFS-basierte Idee — vom Bootloader bis zum Userspace alles verstehen und selbst bauen.",
    points: ["Fokus auf einfache Bedienung", "LFS-basierte Idee / Konzept", "Eigener SPK-Paketmanager in Entwicklung", "Systemverständnis: Boot → Kernel → Userspace"],
    tech: ["Linux From Scratch", "Bash", "SPK", "Systemd"],
    gradient: "from-cyan-400 via-sky-500 to-blue-700",
    status: "in Entwicklung",
  },
  {
    id: "rust",
    icon: AppWindow,
    tag: "Rust • GUI & CLI",
    title: "Rust GUI / CLI Apps",
    desc: "Kleine Desktop-Programme mit egui/eframe sowie CLI-Projekte, Terminal-Tools und Bash-Skripte für den Alltag am System.",
    points: ["Desktop-Apps mit egui / eframe", "CLI-Projekte & Terminal-Tools", "Kleine Rust-Utilities", "Bash-Skripte zur Automatisierung"],
    tech: ["Rust", "egui", "Cargo", "Bash"],
    gradient: "from-violet-500 via-fuchsia-500 to-cyan-400",
    status: "laufend",
  },
  {
    id: "scripts",
    icon: TerminalSquare,
    tag: "System & Automatisierung",
    title: "Bash-Skripte & Utilities",
    desc: "Sammlung kleiner Helfer: Installations-Skripte für verschiedene Betriebssysteme, WLAN- und Systemkonfiguration, Fehlerdiagnose-Tools.",
    points: ["Installations-Helfer für diverse OS", "WLAN- & Netzwerk-Skripte", "Systemkonfiguration per Skript", "Fehleranalyse-Workflows"],
    tech: ["Bash", "Systemd", "Git", "Linux"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    status: "erweiterbar",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<string | null>("silen");

  return (
    <section id="projekte" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">$ ls ~/projekte --highlight</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          Meine <span className="neon-text">Projekte</span>
        </h2>
        <p className="mt-4 text-slate-400 md:text-lg">Groß denken, klein anfangen, alles selbst bauen.</p>
        <div className="neon-line mx-auto mt-6 w-48" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => {
          const isOpen = open === p.id;
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`glass card-hover relative flex flex-col overflow-hidden rounded-3xl ${isOpen ? "!border-cyan-400/40 shadow-[0_20px_60px_-12px_rgba(0,212,255,0.35)]" : ""}`}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} shadow-[0_0_24px_rgba(0,212,255,0.4)]`}>
                    <p.icon className="h-6 w-6 text-white" />
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-200">
                    <Star className="h-3 w-3" /> {p.status}
                  </span>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300/70">{p.tag}</p>
                <h3 className="mt-1.5 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>

                <button
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  className="mt-4 flex items-center gap-2 font-mono text-xs text-cyan-300 hover:text-cyan-100"
                >
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                  {isOpen ? "Details einklappen" : "Details ansehen"}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-2 border-t border-white/10 pt-4">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(0,212,255,0.9)]" />
                            {pt}
                          </li>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-center md:flex-row md:text-left"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
            <Hammer className="h-5 w-5" />
          </span>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">SPK-Paketmanager</span> — mein eigenes Paketformat für Silen Linux, aktuell in Entwicklung.
          </p>
        </div>
        <span className="flex items-center gap-2 font-mono text-xs text-slate-500">
          <Layers className="h-4 w-4 text-cyan-400" /> <Package className="h-4 w-4 text-cyan-400" /> build • pack • install
        </span>
      </motion.div>
    </section>
  );
}
