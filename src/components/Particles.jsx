import { useEffect, useRef } from "react";
export default function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    let w, h, raf, mx = -999, my = -999;
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const resize = () => { const d = Math.min(devicePixelRatio || 1, 2); w = c.clientWidth; h = c.clientHeight; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    resize();
    const N = Math.min(70, Math.floor(w / 18));
    const P = Array.from({ length: N }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.6 + 0.6 }));
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of P) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < 120) { p.x += (dx / d) * 0.8; p.y += (dy / d) * 0.8; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fillStyle = "rgba(196,181,253,.8)"; ctx.fill();
      }
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const a = P[i], b = P[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) { ctx.strokeStyle = `rgba(139,92,246,${0.16 * (1 - d / 110)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    const mm = (e) => { mx = e.clientX; my = e.clientY; };
    addEventListener("resize", resize); addEventListener("mousemove", mm);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("mousemove", mm); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />;
}
