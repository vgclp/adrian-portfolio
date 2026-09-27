"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, Menu, X } from "lucide-react";

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

  return (
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
          onClick={() => setOpen(!open)}
          className="glass rounded-xl p-2 text-slate-200 md:hidden"
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass-strong overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 font-mono text-sm text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  <span className="text-cyan-500/70">./</span>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
