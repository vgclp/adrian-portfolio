"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  User, BookOpen, Lightbulb, Target, ChevronRight, ShieldCheck, Zap, HeartHandshake,
} from "lucide-react";

import Preloader from "../components/Preloader";
import ScrollProgress from "../components/ScrollProgress";
import CursorGlow from "../components/CursorGlow";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import TypingEffect from "../components/TypingEffect";
import Stats, { HeroBadges, HeroCTAs, ScrollHint } from "../components/HeroBits";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Ausbildung from "../components/Ausbildung";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Page() {
  // Taste "C" öffnet Kontakt
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key.toLowerCase() === "c") {
        document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <Background />
      <Navbar />

      <main>
        {/* ============ HERO ============ */}
        <section id="start" className="relative mx-auto flex min-h-screen max-w-6xl scroll-mt-24 flex-col justify-center px-5 pb-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6, ease }}
            className="glass mx-auto mb-7 flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-5"
          >
            <span className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              neu
            </span>
            <span className="font-mono text-xs text-slate-300">
              Suche Ausbildung & Praktikum als Fachinformatiker SI
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="text-center font-mono text-sm text-cyan-300/90"
          >
            $ whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8, ease }}
            className="mt-3 text-center text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          >
            Adrian
            <br />
            <span className="neon-text text-glow">Neubauer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="mx-auto mt-6 flex h-8 items-center justify-center font-mono text-base text-slate-300 md:text-xl"
          >
            <span className="mr-2 text-cyan-400">&gt;_</span>
            <TypingEffect
              phrases={[
                "Fachinformatiker für Systemintegration",
                "Linux • Server • Netzwerke",
                "Rust-Entwickler",
                "Problemlöser & Autodidakt",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="mx-auto mt-5 max-w-2xl text-center text-slate-400 md:text-lg"
          >
            Ich interessiere mich für{" "}
            <span className="text-cyan-200">Linux, Netzwerke, Server</span> und moderne{" "}
            <span className="text-cyan-200">Softwareentwicklung</span>.
          </motion.p>

          <div className="mt-7">
            <HeroBadges />
          </div>
          <HeroCTAs />
          <Stats />
          <ScrollHint />
        </section>

        <div className="neon-line mx-auto w-2/3 max-w-3xl opacity-50" />

        {/* ============ ÜBER MICH ============ */}
        <section id="ueber-mich" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">$ cat über-mich.md</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Über <span className="neon-text">mich</span>
            </h2>
            <div className="neon-line mx-auto mt-6 w-48" />
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
              className="glass-strong relative overflow-hidden rounded-3xl p-7 md:p-9 lg:col-span-3"
            >
              <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-cyan-500/20 blur-[70px]" />
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_22px_rgba(0,212,255,0.4)]">
                  <User className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">Hi, ich bin Adrian — 16, aus Weinheim.</h3>
                  <p className="font-mono text-[11px] text-slate-500">schüler · linux-enthusiast · rust-entwickler</p>
                </div>
              </div>
              <div className="space-y-4 leading-relaxed text-slate-300">
                <p>
                  Ich bin Schüler und möchte eine Ausbildung als{" "}
                  <span className="font-semibold text-cyan-200">Fachinformatiker für Systemintegration</span>{" "}
                  machen. Ich beschäftige mich viel mit{" "}
                  <span className="text-slate-100">Linux, Systemadministration, Netzwerken</span> und{" "}
                  <span className="text-slate-100">Programmierung</span>.
                </p>
                <p className="text-slate-400">
                  Ich lerne gerne neue Technologien und arbeite mich selbstständig in schwierige Themen ein —
                  von Arch über Gentoo und NixOS bis zu FreeBSD-Grundlagen, vom Bootloader bis zum eigenen Paketmanager.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: BookOpen, t: "Autodidakt", d: "Lernen durch Bauen" },
                  { icon: ShieldCheck, t: "Systemdenken", d: "Boot → Service" },
                  { icon: Zap, t: "Hands-on", d: "Terminal-first" },
                ].map((c, i) => (
                  <motion.div
                    key={c.t}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-cyan-400/30"
                  >
                    <c.icon className="mx-auto h-5 w-5 text-cyan-300" />
                    <p className="mt-2 text-sm font-semibold">{c.t}</p>
                    <p className="font-mono text-[11px] text-slate-500">{c.d}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
              className="flex flex-col gap-6 lg:col-span-2"
            >
              {/* Terminal-Karte */}
              <div className="glass overflow-hidden rounded-3xl">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/40 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500">adrian@weinheim: ~</span>
                </div>
                <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
                  <p><span className="text-cyan-300">$</span> <span className="text-slate-300">cat profil.json</span></p>
                  <p className="text-slate-500">{"{"}</p>
                  <p className="pl-4"><span className="text-violet-300">"name"</span><span className="text-slate-500">:</span> <span className="text-emerald-300">"Adrian Neubauer"</span>,</p>
                  <p className="pl-4"><span className="text-violet-300">"alter"</span><span className="text-slate-500">:</span> <span className="text-amber-300">16</span>,</p>
                  <p className="pl-4"><span className="text-violet-300">"ort"</span><span className="text-slate-500">:</span> <span className="text-emerald-300">"Weinheim, DE"</span>,</p>
                  <p className="pl-4"><span className="text-violet-300">"ziel"</span><span className="text-slate-500">:</span> <span className="text-emerald-300">"Fachinformatiker SI"</span>,</p>
                  <p className="pl-4"><span className="text-violet-300">"fokus"</span><span className="text-slate-500">:</span> <span className="text-slate-300">[</span><span className="text-emerald-300">"linux", "server", "rust"</span><span className="text-slate-300">]</span></p>
                  <p className="text-slate-500">{"}"}</p>
                  <p><span className="text-cyan-300">$</span> <span className="text-slate-300">sudo bewerbung --senden</span> <span className="animate-pulse text-cyan-300">▊</span></p>
                </div>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <Target className="h-5 w-5 text-cyan-300" />
                  <h4 className="font-bold">Aktuelles Ziel</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">
                  Ausbildungs- oder Praktikumsplatz als Fachinformatiker für Systemintegration — mit
                  Schwerpunkt Linux, Server und Netzwerke.
                </p>
                <a href="#ausbildung" className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-cyan-300 hover:text-cyan-100">
                  Mehr zur Bewerbung <ChevronRight className="h-3.5 w-3.5" />
                </a>
                <div className="mt-4 flex items-start gap-2 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3.5 text-sm text-slate-300">
                  <HeartHandshake className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  Offen, lernbereit und zuverlässig — und schon heute täglich am Terminal.
                </div>
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-slate-600">
                  <Lightbulb className="h-3.5 w-3.5" /> Fun-Fact: Dieses Portfolio läuft mit Next.js + Framer Motion
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="neon-line mx-auto w-2/3 max-w-3xl opacity-50" />

        <Skills />
        <div className="neon-line mx-auto w-2/3 max-w-3xl opacity-50" />
        <Projects />
        <div className="neon-line mx-auto w-2/3 max-w-3xl opacity-50" />
        <Ausbildung />
        <div className="neon-line mx-auto w-2/3 max-w-3xl opacity-50" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
