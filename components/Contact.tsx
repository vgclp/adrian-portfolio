"use client";
import { motion } from "framer-motion";
import { Mail, Copy, Check, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const EMAIL = "adrian.neub@icloud.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="kontakt" className="relative mx-auto max-w-4xl scroll-mt-24 px-5 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">$ ./kontakt --offen-fuer-angebote</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          Lass uns <span className="neon-text">sprechen</span>
        </h2>
        <p className="mt-4 text-slate-400 md:text-lg">
          Praktikums- oder Ausbildungsplatz (2026/27) als Fachinformatiker für Systemintegration? Ich freue mich auf Ihre Nachricht.
        </p>
        <div className="neon-line mx-auto mt-6 w-48" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center md:p-12"
      >
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-[80px]" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-blue-700/25 blur-[80px]" />

        <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_40px_rgba(0,212,255,0.5)]">
          <Mail className="h-7 w-7 text-white" />
        </span>

        <h3 className="relative mt-5 text-xl font-bold md:text-2xl">Adrian Neubauer</h3>
        <p className="relative mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-cyan-300" /> Weinheim, Deutschland</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-cyan-300" /> Antwort i. d. R. innerhalb von 24h</span>
        </p>

        <div className="relative mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
          <a href={`mailto:${EMAIL}?subject=Bewerbung%20als%20Fachinformatiker%20(Systemintegration)%20–%20Praktikum%20/%20Ausbildung`} className="btn-primary flex flex-1 items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-white">
            <Mail className="h-4 w-4" /> E-Mail schreiben
          </a>
          <button onClick={copy} className="btn-ghost flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-mono text-sm text-cyan-100">
            {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
            {copied ? "Kopiert!" : "Kopieren"}
          </button>
        </div>

        <button
          onClick={copy}
          className="relative mx-auto mt-4 block rounded-xl bg-black/40 px-5 py-2.5 font-mono text-sm text-cyan-200 ring-1 ring-cyan-400/20 transition-all hover:ring-cyan-400/50"
          title="Klicken zum Kopieren"
        >
          {EMAIL}
        </button>

        <p className="relative mt-6 font-mono text-[11px] text-slate-600">
          Tipp: Taste <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-slate-300">C</kbd> öffnet direkt den Kontakt
        </p>
      </motion.div>
    </section>
  );
}
