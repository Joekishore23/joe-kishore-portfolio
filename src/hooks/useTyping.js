import { useEffect, useState } from "react";
export default function useTyping(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0, c = 0, del = false, t;
    const tick = () => {
      const w = words[i]; c += del ? -1 : 1; setText(w.slice(0, c));
      let d = del ? 35 : speed;
      if (!del && c === w.length) { del = true; d = pause; }
      else if (del && c === 0) { del = false; i = (i + 1) % words.length; d = 300; }
      t = setTimeout(tick, d);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [words, speed, pause]);
  return text;
}
