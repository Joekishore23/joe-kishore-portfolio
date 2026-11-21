import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { projects } from "../data/content";
import { spot } from "../lib/spot";

function Card({ p, i }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5), y = useMotionValue(0.5);
  const rx = useSpring(useTransform(y, [0, 1], [9, -9]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [0, 1], [-9, 9]), { stiffness: 200, damping: 20 });
  const move = (e) => { const r = ref.current.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width); y.set((e.clientY - r.top) / r.height); spot(e); };
  const leave = () => { x.set(0.5); y.set(0.5); };
  const ext = p.demo.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Reveal delay={(i % 2) * 0.12}>
      <motion.article ref={ref} onMouseMove={move} onMouseLeave={leave} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} className="glass spot group h-full overflow-hidden rounded-3xl">
        <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.grad}`}>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          {p.image ? <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" /> : <p.Icon className="absolute bottom-4 right-6 h-24 w-24 text-white/80 transition duration-500 group-hover:rotate-6 group-hover:scale-110" strokeWidth={1.4} />}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 leading-relaxed text-white/60">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs text-violet-100">{t}</span>)}</div>
          <div className="mt-6 flex gap-3">
            <a href={p.demo} {...ext} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-medium transition hover:shadow-lg hover:shadow-violet-600/40">Live Demo <ExternalLink size={15} /></a>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-white/10">GitHub <Github size={15} /></a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle title="Projects" sub="A selection of things I’ve built and explored." />
        <div className="grid gap-7 md:grid-cols-2">{projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}</div>
      </div>
    </section>
  );
}
