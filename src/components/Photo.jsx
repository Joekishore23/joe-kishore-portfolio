import { motion } from "framer-motion";
export default function Photo({ className = "", children }) {
  return (
    <div className={`relative ${className}`}>
      <div className="ring absolute inset-8 -z-10 rounded-full opacity-40 blur-3xl" />
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="ring rounded-[2.4rem] p-[3px]">
        <img src={`${import.meta.env.BASE_URL}joe.jpg`} alt="Portrait of Joe Kishore S" width="900" height="1078" className="aspect-[4/5] w-full rounded-[2.2rem] object-cover object-top" />
      </motion.div>
      {children}
    </div>
  );
}
