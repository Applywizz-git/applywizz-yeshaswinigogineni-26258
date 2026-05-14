import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaNetworkWired, FaCloud, FaCode, FaServer, FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
  const floatingIcons = [
    { icon: FaNetworkWired, size: 60, delay: 0, duration: 6, orbit: 200 },
    { icon: FaCloud, size: 50, delay: 1, duration: 7, orbit: 250 },
    { icon: FaCode, size: 45, delay: 2, duration: 5, orbit: 180 },
    { icon: FaServer, size: 55, delay: 3, duration: 8, orbit: 220 },
    { icon: FaShieldAlt, size: 48, delay: 4, duration: 6.5, orbit: 190 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden perspective-1000">
      {/* 3D Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'rotateX(60deg) scale(2)',
            transformOrigin: 'center',
          }}
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating 3D Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        const positions = [
          { top: "15%", left: "10%" },
          { top: "25%", right: "12%" },
          { bottom: "20%", left: "15%" },
          { bottom: "30%", right: "10%" },
          { top: "50%", left: "8%" },
        ];
        const position = positions[index];

        return (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            style={{
              ...position,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotateX: [0, 15, 0],
              rotateY: [0, -15, 0],
              rotateZ: [0, 360, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-md border border-primary/30 shadow-2xl"
              style={{
                width: item.size,
                height: item.size,
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                scale: 1.3,
                rotateX: 360,
                rotateY: 360,
                boxShadow: "0 0 60px hsl(var(--primary) / 0.8)",
              }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="text-primary text-2xl" style={{ transform: "translateZ(20px)" }} />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10 pt-32 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="space-y-8 max-w-4xl"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <motion.p
            className="text-sm tracking-[0.4em] uppercase text-muted-foreground font-body"
            initial={{ opacity: 0, y: 30, rotateY: -20 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-[1.1] md:leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.05 }}
            style={{ willChange: "transform" }}
          >
            <span className="gradient-text" style={{ textShadow: "0 0 30px rgba(250,204,21,0.2)" }}>
              YESHASWINI GOGINENI
            </span>
          </motion.h1>

          <motion.p
            className="text-xl font-accent text-primary"
            initial={{ opacity: 0, y: 20, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Network Engineer
          </motion.p>

          <motion.p
            className="text-muted-foreground font-body leading-relaxed text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Network Engineer with 2+ years of experience supporting enterprise LAN/WAN infrastructure using BGP, OSPF, VLANs, and VPN connectivity. Experienced in monitoring and troubleshooting with SolarWinds, Wireshark, and tcpdump across hybrid cloud networking environments.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <motion.button
                className="btn-primary cursor-pointer px-8 py-4 text-lg"
                whileHover={{
                  scale: 1.1,
                  rotateX: 15,
                  rotateY: -15,
                  boxShadow: "0 20px 40px hsl(var(--primary) / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                View Projects
              </motion.button>
            </Link>
            <motion.a
              href="/resume.pdf"
              download="YESHASWINI_GOGINENI_Resume.pdf"
              className="btn-outline inline-block cursor-pointer px-8 py-4 text-lg"
              whileHover={{
                boxShadow: "0 10px 20px hsl(var(--primary) / 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          whileHover={{ scale: 1.2, rotateX: 30 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
