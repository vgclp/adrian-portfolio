"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { MapPin, Calendar, ChevronDown, FolderGit2, Mail } from "lucide-react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 45, damping: 16 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
    return unsub;
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 6, suffix: "+", label: "Distributionen & BSD installiert", sub: "Arch • Gentoo • NixOS • FreeBSD…" },
  { value: 15, suffix: "+", label: "Eigene Tools & Skripte", sub: "Rust • Bash • CLI • GUI" },
  { value: 100, suffix: "%", label: "Lernbereitschaft", sub: "autodidaktisch, täglich" },
  { value: 2026, suffix: "", label: "Ausbildungsstart angepeilt", sub: "Fachinformatiker SI" },
];

export default function Stats() {
  return (
    <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 30, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass card-hover rounded-2xl p-5 text-center"
        >
          <div className="neon-text font-mono text-3xl font-bold md:text-4xl">
            <Counter to={s.value} suffix={s.suffix} />
          </div>
          <p className="mt-2 text-sm font-medium text-slate-200">{s.label}</p>
          <p className="mt-1 font-mono text-[11px] text-slate-500">{s.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function HeroBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.6, duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      <span className="glass flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs text-slate-300">
        <MapPin className="h-3.5 w-3.5 text-cyan-300" /> Weinheim, Deutschland
      </span>
      <span className="glass flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs text-slate-300">
        <Calendar className="h-3.5 w-3.5 text-cyan-300" /> 16 Jahre
      </span>
      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 font-mono text-xs text-emerald-300">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
        offen für Ausbildung & Praktikum
      </span>
    </motion.div>
  );
}

export function ScrollHint() {
  return (
    <motion.a
      href="#ueber-mich"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.2 }}
      className="mx-auto mt-14 flex w-fit flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-cyan-300"
    >
      scroll
      <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
        <ChevronDown className="h-4 w-4 text-cyan-300" />
      </motion.span>
    </motion.a>
  );
}

export function HeroCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.9, duration: 0.6 }}
      className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
    >
      <a
        href="#projekte"
        className="btn-primary flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-white"
      >
        <FolderGit2 className="h-5 w-5" /> Projekte ansehen
      </a>
      <a href="#kontakt" className="btn-ghost flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-cyan-100">
        <Mail className="h-5 w-5" /> Kontakt
      </a>
    </motion.div>
  );
}
