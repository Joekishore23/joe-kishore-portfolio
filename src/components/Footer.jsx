import { Github, Linkedin, Mail } from "lucide-react";
import { social } from "../data/content";
const icons = [
  { Icon: Github, href: social.github, label: "GitHub" },
  { Icon: Linkedin, href: social.linkedin, label: "LinkedIn" },
  { Icon: Mail, href: `mailto:${social.email}`, label: "Email" },
];
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row">
        <p className="text-sm text-white/50">© {new Date().getFullYear()} Joe Kishore S. All rights reserved.</p>
        <div className="flex gap-3">
          {icons.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass grid h-10 w-10 place-items-center rounded-full text-white/70 transition hover:-translate-y-1 hover:text-violet-300"><Icon size={18} /></a>
          ))}
        </div>
      </div>
    </footer>
  );
}
