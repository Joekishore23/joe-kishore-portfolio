import { motion } from "framer-motion";
import SplitText from "./SplitText";
export default function SectionTitle({ title, sub }) {
  return (
    <div className="mb-14">
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl"><SplitText text={title} /></h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }} className="mt-4 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
      {sub && <p className="mt-4 max-w-xl text-white/60">{sub}</p>}
    </div>
  );
}
