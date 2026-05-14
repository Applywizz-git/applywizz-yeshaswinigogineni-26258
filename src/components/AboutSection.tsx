import { motion } from "framer-motion";
import { FaNetworkWired, FaShieldAlt, FaCloud, FaServer, FaChartLine } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const expertise = [
  { title: "LAN/WAN Networking", desc: "Supporting enterprise switching and routing using BGP, OSPF, VLANs, and MPLS", icon: FaNetworkWired },
  { title: "Network Security", desc: "Configuring Cisco ASA, Palo Alto firewalls, IPSec VPN, SSL VPN, and ACLs", icon: FaShieldAlt },
  { title: "Cloud Networking", desc: "Hybrid cloud networking using AWS VPC, Transit Gateway, and Azure VNets", icon: FaCloud },
  { title: "Endpoint & Infrastructure", desc: "Managing endpoint compliance with Intune, SCCM, and MECM across enterprise environments", icon: FaServer },
  { title: "Monitoring & Troubleshooting", desc: "Analyzing performance with SolarWinds, PRTG, Wireshark, NetFlow, and tcpdump", icon: FaChartLine },
];

const counters = [
  { value: "2+", label: "Years Experience" },
  { value: "20%", label: "Escalations Reduced" },
  { value: "180+", label: "Endpoints Managed" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading accent="Who I Am" title="About" highlight="Me" />

        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground font-body leading-relaxed text-base mb-4">
            Network Engineer with 2+ years of experience supporting enterprise LAN/WAN infrastructure using BGP, OSPF, VLANs, and VPN connectivity across distributed network environments.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-base">
            Experienced in monitoring and troubleshooting network performance using SolarWinds, NetFlow, Wireshark, and tcpdump to maintain service reliability and reduce incident resolution time. Hands-on exposure to hybrid cloud networking using AWS VPC and Azure VNets, along with endpoint compliance support using Microsoft Intune, SCCM, and MECM.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-8 hover-glow group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateX: 25, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                boxShadow: "0 30px 60px hsl(var(--primary) / 0.3)",
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
            >
              {/* 3D Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: "translateZ(-20px)" }}
              />

              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary mb-6 relative z-10 border border-primary/30"
                whileHover={{
                  rotateY: 360,
                  rotateX: 360,
                  scale: 1.2,
                  boxShadow: "0 0 40px hsl(var(--primary) / 0.6)",
                }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{ rotateZ: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <item.icon className="text-3xl" style={{ transform: "translateZ(10px)" }} />
                </motion.div>
              </motion.div>

              <motion.h3
                className="font-heading font-bold text-foreground mb-3 text-lg relative z-10"
                whileHover={{ x: 5 }}
                style={{ transform: "translateZ(15px)" }}
              >
                {item.title}
              </motion.h3>

              <motion.p
                className="text-muted-foreground text-sm font-body leading-relaxed relative z-10"
                whileHover={{ x: 5 }}
                style={{ transform: "translateZ(10px)" }}
              >
                {item.desc}
              </motion.p>

              {/* Hover Line Effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-500"
                style={{ transform: "translateZ(5px)" }}
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              className="text-center glass-card p-10 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.6, rotateX: 30, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 120 }}
              whileHover={{
                scale: 1.1,
                rotateX: 15,
                rotateY: 15,
                y: -10,
                boxShadow: "0 40px 80px hsl(var(--primary) / 0.4)",
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
            >
              {/* 3D Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: "translateZ(-15px)" }}
              />

              <motion.p
                className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-3 relative z-10"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                style={{ transform: "translateZ(20px)" }}
              >
                {c.value}
              </motion.p>

              <motion.p
                className="text-muted-foreground text-sm font-body font-medium relative z-10"
                whileHover={{ y: 3 }}
                style={{ transform: "translateZ(10px)" }}
              >
                {c.label}
              </motion.p>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ transform: "translateZ(5px)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
