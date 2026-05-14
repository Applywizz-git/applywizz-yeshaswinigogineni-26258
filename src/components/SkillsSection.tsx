import { motion } from "framer-motion";
import {
  FaPython, FaAws, FaDocker, FaDatabase, FaCode, FaServer, FaCloud, FaNetworkWired,
} from "react-icons/fa";
import {
  SiCisco, SiWireshark, SiAnsible,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, any> = {
  "Networking & Protocols": FaNetworkWired,
  "Network Security": FaServer,
  "Endpoint & Infrastructure": FaCloud,
  "Cloud Networking": FaAws,
  "Monitoring & Troubleshooting": FaDatabase,
  "Automation": FaPython,
  "Infrastructure Platforms": FaCode,
  "Documentation & Operations": FaDocker,
};

const categories = [
  {
    name: "Networking & Protocols",
    skills: [
      { name: "LAN/WAN", icon: FaNetworkWired },
      { name: "TCP/IP", icon: FaServer },
      { name: "IPv4/IPv6", icon: FaServer },
      { name: "VLANs", icon: FaNetworkWired },
      { name: "BGP", icon: FaCode },
      { name: "OSPF", icon: FaCode },
      { name: "MPLS", icon: FaCode },
      { name: "STP", icon: FaCode },
      { name: "RSTP", icon: FaCode },
      { name: "NAT", icon: FaServer },
      { name: "IP Addressing", icon: FaServer },
      { name: "Subnetting", icon: FaServer },
    ],
  },
  {
    name: "Network Security & Connectivity",
    skills: [
      { name: "Cisco ASA", icon: FaServer },
      { name: "Palo Alto", icon: FaServer },
      { name: "IPSec VPN", icon: FaCloud },
      { name: "SSL VPN", icon: FaCloud },
      { name: "ACLs", icon: FaCode },
    ],
  },
  {
    name: "Endpoint & Infrastructure Support",
    skills: [
      { name: "Microsoft Intune", icon: FaCloud },
      { name: "SCCM", icon: FaServer },
      { name: "MECM", icon: FaServer },
      { name: "Endpoint Compliance Support", icon: FaServer },
      { name: "Patch Management", icon: FaCode },
    ],
  },
  {
    name: "Cloud Networking",
    skills: [
      { name: "AWS VPC", icon: FaAws },
      { name: "Transit Gateway", icon: FaAws },
      { name: "Azure Virtual Networks (VNets)", icon: FaCloud },
      { name: "Route Tables", icon: FaCode },
      { name: "Security Groups", icon: FaServer },
      { name: "ExpressRoute", icon: FaCloud },
    ],
  },
  {
    name: "Monitoring & Troubleshooting",
    skills: [
      { name: "SolarWinds", icon: FaDatabase },
      { name: "PRTG", icon: FaDatabase },
      { name: "NetFlow", icon: FaNetworkWired },
      { name: "Wireshark", icon: SiWireshark },
      { name: "tcpdump", icon: FaCode },
      { name: "Ping", icon: FaCode },
      { name: "Traceroute", icon: FaCode },
      { name: "Nslookup", icon: FaCode },
      { name: "Network Troubleshooting", icon: FaServer },
    ],
  },
  {
    name: "Automation",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Ansible", icon: SiAnsible },
    ],
  },
  {
    name: "Infrastructure Platforms",
    skills: [
      { name: "Cisco IOS", icon: SiCisco },
      { name: "Cisco NX-OS", icon: SiCisco },
      { name: "Juniper JunOS", icon: SiCisco },
    ],
  },
  {
    name: "Documentation & Operations",
    skills: [
      { name: "Visio", icon: FaCode },
      { name: "Lucidchart", icon: FaCode },
      { name: "Network Diagrams", icon: FaNetworkWired },
      { name: "Runbooks", icon: FaCode },
      { name: "Incident Management", icon: FaServer },
      { name: "Change Support", icon: FaServer },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="My Toolkit" title="Technical" highlight="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className="glass-card p-8 hover-glow relative overflow-hidden group"
              initial={{ opacity: 0, y: 50, rotateX: 25, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: ci * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateX: 8,
                rotateY: 8,
                boxShadow: "0 35px 70px hsl(var(--primary) / 0.3)",
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
            >
              {/* 3D Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: "translateZ(-20px)" }}
              />

              <motion.h3
                className="font-heading font-bold text-foreground mb-6 text-lg relative z-10"
                whileHover={{ x: 5 }}
                style={{ transform: "translateZ(20px)" }}
              >
                {cat.name}
              </motion.h3>

              <div className="flex flex-wrap justify-center md:justify-start gap-5 relative z-10">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group/skill"
                    whileHover={{
                      scale: 1.25,
                      y: -10,
                      rotateY: 20,
                      rotateX: 10,
                    }}
                    initial={{ opacity: 0, scale: 0.4, rotateY: -180, rotateX: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: ci * 0.1 + si * 0.08,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary border border-primary/30 relative overflow-hidden"
                      whileHover={{
                        boxShadow: "0 0 50px hsl(var(--primary) / 0.7)",
                        rotateY: 360,
                        rotateX: 360,
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        animate={{ rotateZ: [0, 360] }}
                        transition={{ duration: 12 + si, repeat: Infinity, ease: "linear" }}
                      >
                        <skill.icon className="text-4xl" style={{ transform: "translateZ(15px)" }} />
                      </motion.div>

                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        style={{ opacity: 0 }}
                      />
                    </motion.div>

                    <motion.span
                      className="text-xs text-muted-foreground font-body font-medium text-center"
                      whileHover={{ scale: 1.15, y: -3 }}
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

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
};

export default SkillsSection;
