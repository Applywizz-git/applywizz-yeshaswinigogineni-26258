import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCogs, FaGraduationCap, FaCertificate, FaEnvelope } from "react-icons/fa";
const navItems = [
  { name: "about", icon: FaUser },
  { name: "experience", icon: FaBriefcase },
  { name: "projects", icon: FaProjectDiagram },
  { name: "skills", icon: FaCogs },
  { name: "education", icon: FaGraduationCap },
  { name: "certifications", icon: FaCertificate },
  { name: "contact", icon: FaEnvelope },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[60] glass"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <span className="font-bold text-xl md:text-2xl text-primary uppercase">Yamini G</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.name}
                  smooth
                  duration={600}
                  offset={-80}
                  className="nav-link cursor-pointer capitalize flex items-center gap-1.5 group"
                >
                  <motion.span
                    className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.3, rotateY: 180 }}
                  >
                    <Icon />
                  </motion.span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="md:hidden flex items-center gap-2 sm:gap-4">
            <div
              className="w-10 h-10 flex items-center justify-center cursor-pointer relative z-[70]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.div
                animate={menuOpen ? "open" : "closed"}
                className="relative w-6 h-5 flex flex-col justify-between"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 9 },
                  }}
                  className="w-full h-0.5 bg-primary rounded-full origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-full h-0.5 bg-primary rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -9 },
                  }}
                  className="w-full h-0.5 bg-primary rounded-full origin-center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#050810] md:hidden overflow-y-auto"
          >
            {/* Header placeholder to avoid layout shift */}
            <div className="flex items-center justify-between py-4 px-6 border-b border-white/5">
              <span className="font-bold text-xl md:text-2xl text-primary uppercase">Yamini G</span>
              <div
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <HiX className="text-primary text-3xl" />
              </div>
            </div>

            <div className="flex flex-col items-center py-12 gap-8 min-h-max">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full px-8"
                  >
                    <Link
                      to={item.name}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="text-2xl font-heading font-bold text-white capitalize group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
