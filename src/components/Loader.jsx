import { motion } from "framer-motion";
export default function Loader() {
  return (
    <motion.div className="fixed inset-0 z-[200] grid place-items-center bg-[#05060d]" exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }} transition={{ duration: 0.7 }}>
      <div className="text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grad-text font-display text-6xl font-bold">JK</motion.div>
        <div className="mx-auto mt-6 h-[3px] w-48 overflow-hidden rounded bg-white/10">
          <motion.div className="h-full bg-gradient-to-r from-violet-500 to-sky-400" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} />
        </div>
        <p className="mt-4 text-sm text-white/50">Loading portfolio</p>
      </div>
    </motion.div>
  );
}
