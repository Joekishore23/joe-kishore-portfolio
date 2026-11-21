import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Code2, Database, Brain, Terminal, Atom } from "lucide-react";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";
import Photo from "./Photo";
import useTyping from "../hooks/useTyping";
import { profile } from "../data/content";

const floaters = [
  { I: Atom, c: "-left-3 top-[8%]", d: 0 }, { I: Terminal, c: "-right-3 top-[24%]", d: 1 },
  { I: Brain, c: "-left-5 bottom-[24%]", d: 2 }, { I: Database, c: "right-1 bottom-[6%]", d: 3 }, { I: Code2, c: "left-[42%] -top-4", d: 1.5 },
];
export default function Hero() {
  const ref = useRef(null);
  const text = useTyping(profile.roles);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <motion.div style={{ y: yBg }} aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] animate-pulse rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-700/30 blur-[120px]" />
        <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-fuchsia-700/15 blur-[100px]" />
      </motion.div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.2fr_1fr]">
        <motion.div style={{ opacity: fade }} className="order-2 lg:order-1">
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />Open to new opportunities
          </motion.span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"><SplitText text={profile.name} delay={0.2} /></h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-4 text-sm text-white/50 sm:text-base">{profile.title}</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-5 min-h-[2.2rem] font-display text-2xl font-semibold sm:text-3xl">
            <span className="grad-text">{text}</span><span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-violet-300" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">{profile.intro}</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }} className="mt-9 flex flex-wrap gap-4">
            <Magnetic><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 font-medium shadow-lg shadow-violet-700/30 transition hover:shadow-violet-600/60">View My Projects <ArrowDown size={18} /></a></Magnetic>
            <Magnetic><a href={`${import.meta.env.BASE_URL}Joe_Kishore_Resume.pdf`} download="Joe_Kishore_Resume.pdf" className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium transition hover:bg-white/10">Download Resume <Download size={18} /></a></Magnetic>
          </motion.div>
        </motion.div>
        <motion.div style={{ y: yPhoto }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="order-1 mx-auto w-full max-w-[300px] sm:max-w-sm lg:order-2">
          <Photo>
            {floaters.map(({ I, c, d }, i) => (
              <motion.div key={i} aria-hidden animate={{ y: [0, -14, 0] }} transition={{ duration: 4 + d, repeat: Infinity, ease: "easeInOut", delay: d }} className={`glass absolute grid h-12 w-12 place-items-center rounded-2xl text-violet-300 shadow-xl shadow-violet-900/40 ${c}`}><I size={22} /></motion.div>
            ))}
          </Photo>
        </motion.div>
      </div>
    </section>
  );
}
