import { Globe, Palette, Braces, Atom, Terminal, Sigma, Table2, LineChart, BarChart3, Brain, Database, Server, Heart, Sparkles, Camera } from "lucide-react";

export const social = {
  email: "joekishore.it.23@gmail.com",
  phone: "+919159317061",
  linkedin: "https://www.linkedin.com/in/joekishore-tech",
  github: "https://github.com/Joekishore23",
};
export const profile = {
  name: "JOE KISHORE S",
  title: "Software Developer | Python Developer | Machine Learning Enthusiast",
  roles: ["Software Developer", "Python Developer", "Machine Learning Enthusiast"],
  intro: "I build fast, elegant web apps and data-driven solutions with Python, React and Machine Learning. A B.Tech IT graduate from Chennai who loves turning ideas into polished, real-world products.",
};
export const nav = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" }, { id: "journey", label: "Journey" }, { id: "contact", label: "Contact" },
];
export const skills = [
  { name: "HTML", Icon: Globe, d: "Semantic, accessible markup" },
  { name: "CSS", Icon: Palette, d: "Responsive, modern layouts" },
  { name: "JavaScript", Icon: Braces, d: "Interactive web experiences" },
  { name: "React.js", Icon: Atom, d: "Hooks and component UIs" },
  { name: "Python", Icon: Terminal, d: "Scripting and backend logic" },
  { name: "NumPy", Icon: Sigma, d: "Fast numerical computing" },
  { name: "Pandas", Icon: Table2, d: "Data cleaning and analysis" },
  { name: "Matplotlib", Icon: LineChart, d: "Charts and visual reports" },
  { name: "Seaborn", Icon: BarChart3, d: "Statistical visualisation" },
  { name: "Machine Learning", Icon: Brain, d: "Models with scikit-learn" },
  { name: "MySQL", Icon: Database, d: "Relational data and queries" },
  { name: "Django", Icon: Server, d: "REST APIs and full-stack apps" },
];
const demo = (n) => `mailto:${social.email}?subject=${encodeURIComponent("Demo request: " + n)}`;
export const projects = [
  { title: "Love Prediction using Machine Learning", Icon: Heart, grad: "from-fuchsia-600 via-purple-700 to-indigo-900",
    desc: "A machine learning model that predicts compatibility from user inputs, with data preprocessing, training and evaluation.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"], demo: demo("Love Prediction"), github: social.github },
  { title: "Image Denoising using Autoencoder", Icon: Sparkles, grad: "from-blue-600 via-indigo-700 to-slate-900",
    desc: "A deep learning autoencoder that removes noise from images and reconstructs clean, sharper outputs.",
    tech: ["Python", "Autoencoder", "Deep Learning", "NumPy"], demo: demo("Image Denoising"), github: social.github },
  { title: "Instagram Clone using React", Icon: Camera, grad: "from-pink-600 via-violet-700 to-blue-900",
    desc: "A responsive social feed UI with posts, likes, profiles and smooth interactions built with React Hooks.",
    tech: ["React.js", "JavaScript", "CSS"], demo: demo("Instagram Clone"), github: social.github },
  { title: "Data Analysis Projects using Python", Icon: BarChart3, grad: "from-cyan-600 via-blue-700 to-purple-900",
    desc: "Exploratory data analysis on real datasets: cleaning, insights and clear visual storytelling.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"], demo: demo("Data Analysis"), github: social.github },
];
export const timeline = [
  { when: "2022 – 2026", title: "B.Tech in Information Technology", org: "Dhanalakshmi Srinivasan University", tag: "Education" },
  { when: "Mar 2025", title: "Machine Learning Workshop", org: "IIT Madras", tag: "Certification" },
  { when: "Feb 2025", title: "Introduction to Artificial Intelligence", org: "Simplilearn SkillUp", tag: "Certification" },
  { when: "Jan 2025", title: "Python Zero To Hero In Tamil", org: "GUVI", tag: "Certification" },
  { when: "2025", title: "Full Stack Development", org: "SLA Academy", tag: "Certification" },
  { when: "2021 – 2022", title: "Higher Secondary School", org: "St Ignatious Matric Higher School", tag: "Education" },
  { when: "2019 – 2020", title: "Higher Secondary School", org: "Mary Immaculate Matriculation School", tag: "Education" },
];
