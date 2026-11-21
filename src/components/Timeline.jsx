import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { timeline } from "../data/content";
export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <section id="journey" className="py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle title="Education & Journey" />
        <div ref={ref} className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <motion.div style={{ scaleY: h }} className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-violet-400 to-sky-400 md:left-1/2" />
          {timeline.map((t, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div key={t.title + t.when} initial={{ opacity: 0, x: right ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className={`relative mb-8 pl-12 md:w-1/2 ${right ? "md:ml-auto md:pl-10" : "md:pl-0 md:pr-10 md:text-right"}`}>
                <span className={`absolute left-[9px] top-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-violet-400 to-sky-400 shadow-[0_0_18px_#8b5cf6] ring-4 ring-[#05060d] ${right ? "md:-left-[7px]" : "md:left-auto md:-right-[7px]"}`} />
                <div className="glass rounded-2xl p-5 transition hover:border-violet-400/40">
                  <p className="text-sm text-violet-300">{t.when} · {t.tag}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="text-white/60">{t.org}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
