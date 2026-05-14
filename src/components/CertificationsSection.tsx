import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const certs = [
  { name: "Cisco Certified Network Associate - CCNA", issuer: "Cisco", icon: FaCertificate },
  { name: "CCNP Enterprise - In Progress", issuer: "Cisco", icon: FaAward },
  { name: "Enterprise Architecture: Familiar with TOGAF framework concepts and enterprise architecture principles", issuer: "Enterprise Architecture", icon: FaStar },
  { name: "Google IT Support Professional Certificate - Coursera", issuer: "Google", icon: FaCertificate },
  { name: "IBM IT Support Professional Certificate - Coursera", issuer: "IBM", icon: FaAward },
  { name: "AWS Fundamentals Specialization - Coursera", issuer: "AWS", icon: FaCertificate },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading accent="Credentials" title="My" highlight="Certifications" />

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            className="glass-card p-8 flex items-center gap-5 hover-glow relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.7, rotateX: 30, rotateY: -20, z: -50 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.12, duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{
              y: -12,
              scale: 1.05,
              rotateX: 10,
              rotateY: 10,
              boxShadow: "0 35px 70px hsl(var(--primary) / 0.3)",
            }}
            style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          >
            {/* 3D Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ transform: "translateZ(-20px)" }}
            />

            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex-shrink-0 border border-primary/30 relative overflow-hidden"
              whileHover={{
                rotateY: 360,
                rotateX: 360,
                scale: 1.25,
                boxShadow: "0 0 50px hsl(var(--primary) / 0.7)",
              }}
              transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 14 + i, repeat: Infinity, ease: "linear" }}
              >
                <cert.icon className="text-3xl" style={{ transform: "translateZ(12px)" }} />
              </motion.div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                style={{ opacity: 0 }}
              />
            </motion.div>

            <div className="relative z-10 flex-1" style={{ transform: "translateZ(15px)" }}>
              <motion.span
                className="font-heading font-semibold text-foreground text-sm block"
                whileHover={{ x: 5 }}
              >
                {cert.name}
              </motion.span>
              <motion.p
                className="text-xs text-muted-foreground font-body mt-1"
                whileHover={{ x: 5 }}
              >
                {cert.issuer}
              </motion.p>
            </div>

            <motion.div
              className="ml-auto relative z-10"
              whileHover={{
                rotate: 360,
                scale: 1.4,
              }}
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              style={{ transform: "translateZ(18px)" }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaStar className="text-primary text-xl" />
              </motion.div>
            </motion.div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ transform: "translateZ(10px)" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
