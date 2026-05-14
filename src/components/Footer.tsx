import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 md:px-12 lg:px-20 border-t border-border/20">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <motion.a
            href="mailto:yeshaswini9848@gmail.com"
            className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary text-xl transition-all"
            whileHover={{ 
              scale: 1.3, 
              y: -6, 
              rotateY: 360,
              boxShadow: "0 0 30px hsl(var(--primary) / 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        <p className="text-muted-foreground text-sm font-body">
          © {year} — YESHASWINI GOGINENI
        </p>

        <Link to="hero" smooth duration={800}>
          <motion.button
            className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 text-primary cursor-pointer text-lg"
            whileHover={{ scale: 1.3, y: -8, rotate: 360, boxShadow: "0 0 30px hsl(var(--primary) / 0.6)" }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaArrowUp />
          </motion.button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
