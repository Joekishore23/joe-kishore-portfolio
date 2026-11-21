import { useState } from "react";
import { Mail, Linkedin, Github, Send, Phone, Loader2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { social } from "../data/content";
const field = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/35 outline-none transition focus:border-violet-400 focus:bg-white/10";
const links = [
  { Icon: Mail, label: "Email", v: social.email, href: `mailto:${social.email}` },
  { Icon: Phone, label: "Phone", v: "+91 91593 17061", href: `tel:${social.phone}` },
  { Icon: Linkedin, label: "LinkedIn", v: "joekishore-tech", href: social.linkedin },
  { Icon: Github, label: "GitHub", v: "Joekishore23", href: social.github },
];
export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" }), [status, setStatus] = useState("idle");
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!key) {
      const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
      window.location.href = `mailto:${social.email}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: key, name: f.name, email: f.email, message: f.message, subject: `Portfolio message from ${f.name}`, from_name: "Portfolio Website", botcheck: "" }),
      });
      const d = await r.json();
      if (d.success) { setStatus("sent"); setF({ name: "", email: "", message: "" }); } else setStatus("error");
    } catch { setStatus("error"); }
  };
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle title="Let’s work together" sub="Have a role, project or idea in mind? Send a message and I’ll get back to you." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid content-start gap-4">
            {links.map(({ Icon, label, v, href }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet-400/40">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 text-violet-200"><Icon size={22} /></span>
                  <span><span className="block text-sm text-white/50">{label}</span><span className="font-medium">{v}</span></span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="glass grid gap-4 rounded-3xl p-6 sm:p-8">
              <label className="grid gap-1.5 text-sm text-white/70">Name<input required value={f.name} onChange={on("name")} placeholder="Your name" className={field} /></label>
              <label className="grid gap-1.5 text-sm text-white/70">Email<input required type="email" value={f.email} onChange={on("email")} placeholder="you@example.com" className={field} /></label>
              <label className="grid gap-1.5 text-sm text-white/70">Message<textarea required rows={5} value={f.message} onChange={on("message")} placeholder="Tell me about your project or opportunity" className={field} /></label>
              <div className="flex flex-wrap items-center gap-4">
                <Magnetic><button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 font-medium shadow-lg shadow-violet-700/30 transition hover:shadow-violet-600/60 disabled:opacity-70">{status === "sending" ? <>Sending <Loader2 size={17} className="animate-spin" /></> : <>Send message <Send size={17} /></>}</button></Magnetic>
                {status === "sent" && <p role="status" className="text-sm text-emerald-300">Thanks! Your message has been sent. I’ll get back to you soon.</p>}
                {status === "error" && <p role="alert" className="text-sm text-rose-300">Something went wrong. Please try again or email me directly.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
