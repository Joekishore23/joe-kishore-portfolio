import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Cursor() {
  const [on, setOn] = useState(false), [big, setBig] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 300, damping: 28 }), ry = useSpring(y, { stiffness: 300, damping: 28 });
  useEffect(() => {
    if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    setOn(true); document.documentElement.classList.add("has-cursor");
    const mv = (e) => { x.set(e.clientX); y.set(e.clientY); setBig(!!e.target.closest?.("a,button,input,textarea")); };
    addEventListener("mousemove", mv);
    return () => { removeEventListener("mousemove", mv); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);
  if (!on) return null;
  const s = big ? 56 : 34;
  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white" style={{ x, y }} />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-violet-300/60" style={{ x: rx, y: ry, width: s, height: s, marginLeft: -s / 2, marginTop: -s / 2, background: big ? "rgba(139,92,246,.22)" : "transparent", transition: "width .25s,height .25s,margin .25s,background .25s" }} />
    </>
  );
}
