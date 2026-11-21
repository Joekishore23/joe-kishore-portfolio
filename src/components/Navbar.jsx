import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const prog = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));
  return (
    <>
      <motion.div style={{ scaleX: prog }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-sky-400 to-fuchsia-400" />
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav className={`glass flex w-full items-center justify-between rounded-full px-5 transition-all duration-500 ${scrolled ? "max-w-3xl py-2 shadow-2xl shadow-violet-900/30" : "max-w-6xl py-3.5"}`}>
          <a href="#home" className="font-display text-lg font-bold">Joe<span className="grad-text">.dev</span></a>
          <ul className="hidden gap-1 md:flex">
            {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="rounded-full px-4 py-1.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">{n.label}</a></li>)}
          </ul>
          <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass fixed inset-x-4 top-20 z-50 rounded-3xl p-3 md:hidden">
            {nav.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/10">{n.label}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
