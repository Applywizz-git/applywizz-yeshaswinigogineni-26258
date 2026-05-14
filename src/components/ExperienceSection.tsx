import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt, FaCalendar, FaChevronDown, FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Techecy",
    role: "Associate Network Engineer",
    period: "Jan 2021 – Jul 2023",
    location: "Hyderabad, India",
    highlights: [
      "Provisioned VLAN segmentation and structured IP addressing strategies across campus switching environments improving secure traffic isolation for 4 departmental network zones and reducing broadcast domain overlap.",
      "Maintained OSPF adjacency health and monitored route redistribution behavior improving route propagation consistency across multi-layer enterprise switching infrastructure during network changes.",
      "Supported SCCM-driven patch deployment coordination with systems engineering teams improving compliance visibility and maintaining patch alignment across 180+ enterprise Windows endpoints.",
      "Analyzed network latency patterns using PRTG and SolarWinds dashboards identifying performance bottlenecks and reducing recurring service-desk escalations by nearly 20%.",
      "Collaborated with firewall administrators to maintain IPSec VPN tunnel availability between branch locations improving inter-site communication stability for remote operations teams.",
      "Validated Azure VNet route table alignment during hybrid connectivity integration ensuring stable communication between on-prem infrastructure and cloud-hosted workloads.",
      "Investigated packet-level anomalies using Wireshark and NetFlow accelerating troubleshooting resolution and minimizing downtime for intermittent WAN application connectivity issues.",
      "Produced Lucidchart-based topology diagrams and structured runbooks strengthening cross-team incident coordination and improving readiness during infrastructure upgrade activities.",
    ],
  },
];

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="My Journey" title="Work" highlight="Experience" />

        <div className="max-w-4xl mx-auto space-y-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block rounded-full" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="glass-card overflow-hidden hover-glow cursor-pointer relative group"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, rotateY: i % 2 === 0 ? -20 : 20, rotateX: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 40px 80px hsl(var(--primary) / 0.3)",
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* 3D Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: "translateZ(-20px)" }}
              />

              <div className="p-6 md:p-8 relative">
                {i > 0 && (
                  <motion.div
                    className="absolute -left-10 top-10 w-5 h-5 rounded-full bg-primary hidden md:block z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{
                      scale: 1.5,
                      rotate: 360,
                      boxShadow: "0 0 30px hsl(var(--primary) / 0.8)",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start gap-5">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex-shrink-0 mt-1 border border-primary/30"
                      whileHover={{
                        rotateY: 360,
                        rotateX: 360,
                        scale: 1.15,
                        boxShadow: "0 0 40px hsl(var(--primary) / 0.6)",
                      }}
                      transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        animate={{ rotateZ: [0, 360] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      >
                        <FaBuilding className="text-2xl" style={{ transform: "translateZ(10px)" }} />
                      </motion.div>
                    </motion.div>
                    <div style={{ transform: "translateZ(15px)" }}>
                      <motion.h3
                        className="text-2xl font-heading font-bold text-primary mb-1"
                        whileHover={{ x: 5 }}
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        className="text-foreground font-body text-lg font-medium mb-3"
                        whileHover={{ x: 5 }}
                      >
                        {exp.company}
                      </motion.p>
                      <div className="flex flex-wrap items-center gap-4">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 3 }}
                        >
                          <FaMapMarkerAlt className="text-sm text-muted-foreground" />
                          <p className="text-muted-foreground text-sm font-body">{exp.location}</p>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 3 }}
                        >
                          <FaCalendar className="text-sm text-muted-foreground" />
                          <p className="text-muted-foreground text-sm font-body">{exp.period}</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="mt-4 flex items-center gap-3 text-muted-foreground text-sm font-medium"
                  transition={{ duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  style={{ transform: "translateZ(10px)" }}
                >
                  <motion.div
                    animate={{ rotate: expanded === i ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                  <span>{expanded === i ? "Click to collapse" : "Click to expand"}</span>
                </motion.div>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0, rotateX: -20 }}
                      animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                      exit={{ height: 0, opacity: 0, rotateX: -20 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="mt-6 space-y-4 overflow-hidden ml-4 md:ml-20"
                      style={{ transformOrigin: "top" }}
                    >
                      {exp.highlights.map((h, idx) => (
                        <motion.li
                          key={h}
                          initial={{ opacity: 0, x: -30, rotateY: -15 }}
                          animate={{ opacity: 1, x: 0, rotateY: 0 }}
                          transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                          className="flex items-start gap-4 text-muted-foreground text-sm font-body leading-relaxed"
                          whileHover={{ x: 10, scale: 1.02 }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <motion.span
                            className="mt-2 w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0"
                            whileHover={{
                              scale: 2,
                              rotate: 360,
                              boxShadow: "0 0 20px hsl(var(--primary) / 0.8)",
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transform: "translateZ(5px)" }}
                          />
                          <span style={{ transform: "translateZ(8px)" }}>{h}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Animated Border on Hover */}
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

export default ExperienceSection;
