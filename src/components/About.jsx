import { GraduationCap, Cpu, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Photo from "./Photo";
const tiles = [
  { Icon: GraduationCap, t: "Education", d: "B.Tech in Information Technology (2022 – 2026), Dhanalakshmi Srinivasan University." },
  { Icon: Cpu, t: "Technical interests", d: "Machine Learning, full-stack web development, data analysis and IoT." },
  { Icon: MapPin, t: "Based in", d: "Chennai, Tamil Nadu, India. Fluent in English, native in Tamil." },
];
export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal><Photo className="mx-auto max-w-[300px]" /></Reveal>
        <div>
          <SectionTitle title="About me" />
          <Reveal delay={0.1}><p className="text-lg leading-relaxed text-white/70">I’m a Software Developer with a strong base in Python, React and Django, and a growing passion for Machine Learning. I enjoy building responsive interfaces, clean APIs and models that turn raw data into useful answers.</p></Reveal>
          <Reveal delay={0.2}><p className="mt-4 text-lg leading-relaxed text-white/70">I attended a Machine Learning workshop at IIT Madras and keep learning through certifications and hands-on projects. I’m a quick learner, adaptable, and eager to contribute to real-world teams.</p></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {tiles.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={0.1 * i}>
                <div className="glass h-full rounded-2xl p-5"><Icon className="text-violet-300" size={22} /><h3 className="mt-3 font-display font-semibold">{t}</h3><p className="mt-1.5 text-sm leading-relaxed text-white/60">{d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
