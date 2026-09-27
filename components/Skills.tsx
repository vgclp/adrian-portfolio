"use client";
import { motion } from "framer-motion";
import {
  Terminal, Cpu, MonitorSmartphone, Cog, Wifi, Wrench, Boxes,
  GitBranch, Package, AppWindow, Shell, ShieldCheck, Network, Server, Bug, Disc3, Timer
} from "lucide-react";

const groups = [
  {
    icon: Terminal,
    title: "Linux",
    color: "from-cyan-400 to-blue-600",
    items: [
      { icon: Disc3, name: "Arch Linux", level: 90, note: "Daily Driver" },
      { icon: Cog, name: "Gentoo", level: 78, note: "USE-Flags, Kompilieren" },
      { icon: Boxes, name: "NixOS", level: 72, note: "Deklarativ" },
      { icon: ShieldCheck, name: "FreeBSD", level: 45, note: "Grundkenntnisse" },
    ],
    footer: ["Terminal", "Bash", "Systemd", "Bootloader", "Treiber"],
  },
  {
    icon: Cpu,
    title: "Programmierung",
    color: "from-violet-400 to-cyan-400",
    items: [
      { icon: Shell, name: "Rust", level: 82, note: "Hauptsprache" },
      { icon: Terminal, name: "Bash", level: 85, note: "Skripte & Tools" },
      { icon: GitBranch, name: "Git", level: 80, note: "Versionierung" },
      { icon: Package, name: "Cargo", level: 78, note: "Build & Crates" },
    ],
    footer: ["CLI-Anwendungen", "GUI mit egui / eframe"],
  },
  {
    icon: MonitorSmartphone,
    title: "IT & Systemadministration",
    color: "from-emerald-400 to-cyan-500",
    items: [
      { icon: Wifi, name: "WLAN-Konfiguration", level: 84, note: "wpa_supplicant, NM" },
      { icon: Server, name: "Systemkonfiguration", level: 88, note: "systemd, Dienste" },
      { icon: Bug, name: "Fehleranalyse", level: 86, note: "Logs, Debugging" },
      { icon: Network, name: "OS-Installation", level: 92, note: "diverse Systeme" },
    ],
    footer: ["Netzwerke", "Server", "Problemlösung"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">$ skills --list</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          Meine <span className="neon-text">Fähigkeiten</span>
        </h2>
        <p className="mt-4 text-slate-400 md:text-lg">
          Alles selbst beigebracht — durch Ausprobieren, Kaputtmachen und Reparieren.
        </p>
        <div className="neon-line mx-auto mt-6 w-48" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: gi * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="glass card-hover group relative overflow-hidden rounded-3xl p-6"
          >
            <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${g.color} opacity-15 blur-2xl transition-opacity group-hover:opacity-30`} />
            <div className="mb-5 flex items-center gap-3">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${g.color} shadow-[0_0_22px_rgba(0,212,255,0.4)]`}>
                <g.icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="text-lg font-bold">{g.title}</h3>
            </div>

            <div className="space-y-4">
              {g.items.map((s) => (
                <div key={s.name} className="group/skill">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
                      <s.icon className="h-4 w-4 text-cyan-300" /> {s.name}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">{s.note}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${g.color} shadow-[0_0_10px_rgba(0,212,255,0.7)]`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {g.footer.map((f) => (
                <span key={f} className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-[11px] text-cyan-200 transition-colors hover:bg-cyan-400/20">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl px-6 py-4 font-mono text-xs text-slate-400"
      >
        <span className="flex items-center gap-2"><Timer className="h-3.5 w-3.5 text-cyan-300" /> systemd • Bootloader • Treiber</span>
        <span className="flex items-center gap-2"><AppWindow className="h-3.5 w-3.5 text-cyan-300" /> egui / eframe • CLI-Apps</span>
        <span className="flex items-center gap-2"><Wrench className="h-3.5 w-3.5 text-cyan-300" /> selbstständiges Einarbeiten in schwere Themen</span>
      </motion.div>
    </section>
  );
}
