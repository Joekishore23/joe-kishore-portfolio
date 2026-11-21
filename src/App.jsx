import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Loader from "./components/Loader";
import Particles from "./components/Particles";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1800); return () => clearTimeout(t); }, []);
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Particles />
      <Cursor />
      {!loading && (
        <>
          <Navbar />
          <main><Hero /><About /><Skills /><Projects /><Timeline /><Contact /></main>
          <Footer />
        </>
      )}
    </MotionConfig>
  );
}
