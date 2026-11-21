import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/content";
import { spot } from "../lib/spot";
const box = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 30, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } } };
export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle title="Skills" sub="Tools and technologies I use to design, build and analyse." />
        <motion.div variants={box} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ name, Icon, d }) => (
            <motion.div key={name} variants={item} whileHover={{ y: -8 }} onMouseMove={spot} className="glass spot rounded-2xl p-5">
              <motion.div whileHover={{ rotate: 8, scale: 1.1 }} className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 text-violet-200"><Icon size={24} /></motion.div>
              <h3 className="mt-4 font-display text-lg font-semibold">{name}</h3>
              <p className="mt-1 text-sm text-white/55">{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
