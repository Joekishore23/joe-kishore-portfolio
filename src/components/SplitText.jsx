import { motion } from "framer-motion";
export default function SplitText({ text, className = "", delay = 0, stagger = 0.035 }) {
  let n = 0;
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="mr-[.25em] inline-block overflow-hidden pb-[.14em] align-bottom">
          {[...w].map((ch, j) => (
            <motion.span key={j} className="inline-block" initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: delay + n++ * stagger, ease: [0.2, 0.8, 0.2, 1] }}>{ch}</motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
