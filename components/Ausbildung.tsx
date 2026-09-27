"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Heart, Server, Network, Puzzle, Code2, Sprout,
  ChevronRight, CheckCircle2, Send
} from "lucide-react";

const reasons = [
  { icon: Server, title: "Linux & Server", desc: "Vom Bootloader bis zum Dienst: Ich will verstehen, wie Systeme wirklich laufen — und sie stabil betreiben." },
  { icon: Network, title: "Netzwerke", desc: "WLAN, Routing, Fehlersuche im Netz — wenn Pakete fließen, bin ich glücklich." },
  { icon: Puzzle, title: "Problemlösung", desc: "Kaputte Systeme sind Rätsel. Logs lesen, Ursache finden, fixen — das ist mein Ding." },
  { icon: Code2, title: "Softwareentwicklung", desc: "Mit Rust baue ich Tools, die Probleme wirklich lösen — CLI und GUI." },
  { icon: Sprout, title: "Selbstständiges Lernen", desc: "Ich arbeite mich eigenständig in schwierige Themen ein: Gentoo, NixOS, LFS-Konzepte." },
];

const timeline = [
  { year: "Heute", title: "Schüler & Linux-Enthusiast", text: "Täglich Linux, Rust und Systemadministration. Eigene Projekte: Silen Linux, SPK-Paketmanager, Tools.", active: true },
  { year: "2026/27", title: "Praktikum gesucht", text: "Ich suche für 2026/27 ein Schülerpraktikum im IT-Bereich — gerne Systemintegration, Netzwerk oder Linux-Administration.", active: false },
  { year: "2026/27", title: "Ausbildung Fachinformatiker SI", text: "Mein Ziel für 2026/27: Ausbildung als Fachinformatiker für Systemintegration. Motivation, Grundlagen und Lernwille bringe ich mit.", active: false },
];

export default function Ausbildung() {
  const [active, setActive] = useState(0);

  return (
    <section id="ausbildung" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">$ cat bewerbung.txt</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          Bewerbung als <span className="neon-text">Fachinformatiker</span>
        </h2>
        <p className="mt-4 text-slate-400 md:text-lg">Fachrichtung Systemintegration — Praktikum & Ausbildung ab 2026/27 gesucht.</p>
        <div className="neon-line mx-auto mt-6 w-48" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Warum IT */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-6 md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-cyan-500 shadow-[0_0_22px_rgba(0,212,255,0.35)]">
              <Heart className="h-5 w-5 text-white" />
            </span>
            <h3 className="text-xl font-bold">Warum IT?</h3>
          </div>
          <div className="space-y-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="group flex gap-3.5 rounded-2xl border border-transparent p-3 transition-colors hover:border-cyan-400/20 hover:bg-cyan-400/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20 transition-all group-hover:shadow-[0_0_18px_rgba(0,212,255,0.4)]">
                  <r.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-100">{r.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-400">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Klickbare Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-6 md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_22px_rgba(0,212,255,0.35)]">
              <GraduationCap className="h-5 w-5 text-white" />
            </span>
            <div>
              <h3 className="text-xl font-bold">Mein Weg</h3>
              <p className="font-mono text-[11px] text-slate-500">klick dich durch die Timeline →</p>
            </div>
          </div>

          <div className="relative space-y-3 pl-2">
            <div className="absolute bottom-4 left-[27px] top-4 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent" />
            {timeline.map((t, i) => {
              const isActive = active === i;
              return (
                <button
                  key={t.title}
                  onClick={() => setActive(i)}
                  className={`relative flex w-full gap-4 rounded-2xl p-4 text-left transition-all ${
                    isActive
                      ? "border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                      : "border border-transparent hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold transition-all ${
                      isActive
                        ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_0_16px_rgba(0,212,255,0.7)]"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-300">{t.year}</span>
                    <span className="flex items-center gap-1.5 font-semibold text-slate-100">
                      {t.title}
                      <ChevronRight className={`h-4 w-4 text-cyan-400 transition-transform ${isActive ? "rotate-90" : ""}`} />
                    </span>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="block overflow-hidden text-sm leading-relaxed text-slate-400"
                        >
                          <span className="block pt-1.5">{t.text}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
            <p className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              Was ich mitbringe: echte Praxis mit Linux & Netzwerken, Programmiererfahrung in Rust, hohe Selbstständigkeit — und große Lust auf Systemintegration.
            </p>
            <a href="#kontakt" className="btn-primary mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white">
              <Send className="h-4 w-4" /> Jetzt Kontakt aufnehmen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
