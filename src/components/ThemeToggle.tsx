import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full border border-border/40 bg-muted/50 backdrop-blur-sm flex items-center px-1 cursor-pointer"
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs"
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
