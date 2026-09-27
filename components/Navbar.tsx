"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, Menu, X, Mail } from "lucide-react";

const links = [
  { href: "#start", label: "Start" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#skills", label: "Skills" },
  { href: "#projekte", label: "Projekte" },
  { href: "#ausbildung", label: "Ausbildung" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-Sperre, solange das Mobile-Menü offen ist
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 top-0 z-[80] w-full transition-all duration-300 ${
          scrolled ? "glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#start" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_20px_rgba(0,212,255,0.45)] transition-transform group-hover:rotate-6 group-hover:scale-105">
              <TerminalSquare className="h-5 w-5 text-white" />
            </span>
            <span className="font-mono text-sm">
              <span className="text-cyan-300">adrian</span>
              <span className="text-slate-400">@weinh​eim:~$</span>
              <span className="ml-1 inline-block h-3.5 w-[7px] animate-pulse bg-cyan-300 align-middle" />
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 font-mono text-[13px] text-slate-300 transition-all hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_16px_rgba(0,212,255,0.2)]"
              >
                <span className="text-cyan-500/70">./</span>
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="btn-primary ml-3 rounded-xl px-5 py-2 text-sm font-semibold text-white"
            >
              Bewerben
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="glass rounded-xl p-2.5 text-slate-200 active:scale-95 md:hidden"
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      {/* Vollbild-Menü für Mobilgeräte */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[95] flex flex-col bg-[#030014]/95 backdrop-blur-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menü"
          >
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_20px_rgba(0,212,255,0.45)]">
                  <TerminalSquare className="h-5 w-5 text-white" />
                </span>
                <span className="font-mono text-sm text-slate-300">
                  <span className="text-cyan-300">$</span> menü
                </span>
              </span>
              <button
                type="button"
                onClick={close}
                className="glass rounded-xl p-2.5 text-slate-200 active:scale-95"
                aria-label="Menü schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="neon-line w-full opacity-60" />

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 rounded-2xl px-4 py-3 text-2xl font-bold text-slate-100 active:bg-cyan-400/10 active:text-cyan-200"
                >
                  <span className="font-mono text-xs font-normal text-cyan-400">0{i + 1}</span>
                  {l.label}
                  <span className="ml-auto font-mono text-lg text-cyan-500/50">→</span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="space-y-3 px-7 pb-10"
            >
              <a
                href="#kontakt"
                onClick={close}
                className="btn-primary flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-white"
              >
                <Mail className="h-4 w-4" /> Praktikum / Ausbildung anfragen
              </a>
              <p className="text-center font-mono text-xs text-slate-500">
                adrian.neub@icloud.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
