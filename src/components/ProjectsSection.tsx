import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { FaExternalLinkAlt, FaGithub, FaRocket, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import "swiper/css";
import "swiper/css/effect-coverflow";

import cloudNetwork from "@/assets/cloud_network_v2.png";
import complianceLab from "@/assets/compliance_lab_v2.png";

const techIcons: Record<string, any> = {
  "AWS VPC": FaServer,
  "Transit Gateway": FaServer,
  "Azure ExpressRoute": FaCode,
  "Cisco IOS": FaServer,
  "Cisco ASA": FaServer,
  "OSPF": FaCode,
  "VLANs": FaDatabase,
  "Visio": FaCode,
};

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="perspective-1500"
    >
      {children}
    </motion.div>
  );
};

const projects = [
  {
    title: "Cloud-Native Network Infrastructure & Traffic Management Platform",
    tech: ["AWS VPC", "Transit Gateway", "Azure ExpressRoute"],
    desc: "Designed hybrid cloud routing using AWS VPC Transit Gateway and Azure ExpressRoute enabling resilient communication across multi-network enterprise workloads and improving cross-environment connectivity stability. Configured AWS route tables and security groups across segmented subnets improving controlled east–west traffic flow.",
    image: cloudNetwork,
    features: ["Hybrid cloud routing design", "AWS route tables & security groups", "Failover & packet-path validation"],
  },
  {
    title: "Enterprise Endpoint-Aware Network Compliance & Patch Visibility Integration Lab",
    tech: ["Cisco IOS", "Cisco ASA", "OSPF", "VLANs", "Visio"],
    desc: "Configured VLAN segmentation and OSPF-based routing using Cisco IOS environments improving traffic isolation and ensuring structured communication across departmental access network zones. Established Remote Access VPN using Cisco ASA enabling secure authenticated connectivity for distributed endpoints.",
    image: complianceLab,
    features: ["VLAN segmentation & OSPF routing", "Remote Access VPN via Cisco ASA", "Topology documentation with Visio"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="What I've Built" title="Featured" highlight="Projects" />

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="max-w-[90%] sm:max-w-lg">
              <TiltCard>
                <motion.div
                  className="glass-card overflow-hidden hover-glow h-full relative group"
                  whileHover={{ y: -15, scale: 1.03 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* 3D Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(-25px)" }}
                  />

                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={512}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      style={{ transform: "translateZ(10px)" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
                      style={{ transform: "translateZ(5px)" }}
                    />
                  </div>

                  <div className="p-6 md:p-8 relative">
                    <motion.h3
                      className="text-2xl font-heading font-bold text-foreground mb-4"
                      whileHover={{ x: 5, scale: 1.02 }}
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground text-sm font-body mb-6 leading-relaxed"
                      whileHover={{ x: 3 }}
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {project.desc}
                    </motion.p>

                    <motion.div
                      className="mb-6 space-y-2"
                      style={{ transform: "translateZ(12px)" }}
                    >
                      {project.features.map((f, idx) => (
                        <motion.div
                          key={f}
                          className="flex items-center gap-3 text-sm text-muted-foreground font-body"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                            whileHover={{
                              scale: 2,
                              rotate: 360,
                              boxShadow: "0 0 15px hsl(var(--primary) / 0.8)",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          {f}
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-3"
                      style={{ transform: "translateZ(18px)" }}
                    >
                      {project.tech.map((t) => {
                        const TechIcon = techIcons[t];
                        return (
                          <motion.span
                            key={t}
                            className="text-xs font-body px-4 py-2 rounded-full border border-primary/40 text-primary bg-primary/10 flex items-center gap-2"
                            whileHover={{
                              scale: 1.2,
                              y: -5,
                              rotateY: 15,
                              rotateX: 10,
                              boxShadow: "0 10px 30px hsl(var(--primary) / 0.4)",
                            }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {TechIcon && (
                              <motion.div
                                animate={{ rotateZ: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                              >
                                <TechIcon className="text-xs" />
                              </motion.div>
                            )}
                            {t}
                          </motion.span>
                        );
                      })}
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ transform: "translateZ(15px)" }}
                  />
                </motion.div>
              </TiltCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
