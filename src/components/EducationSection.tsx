import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendar, FaAward } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const education = [
  { degree: "Master of Science in Computer Science", school: "Lamar University | Beaumont, TX", icon: FaGraduationCap },
  { degree: "Bachelor of Technology in Computer Science", school: "Jawaharlal Nehru Technological University | India", icon: FaUniversity },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading accent="Academic Background" title="My" highlight="Education" />

      <div className="max-w-3xl mx-auto grid gap-8">
        {education.map((e, i) => (
          <motion.div
            className="glass-card p-6 md:p-10 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 hover-glow relative overflow-hidden group"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotateY: i % 2 === 0 ? -25 : 25, rotateX: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{
              y: -15,
              scale: 1.03,
              rotateX: 8,
              rotateY: 8,
              boxShadow: "0 40px 80px hsl(var(--primary) / 0.3)",
            }}
            style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
          >
            {/* 3D Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ transform: "translateZ(-20px)" }}
            />

            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex-shrink-0 border border-primary/30 relative z-10"
              whileHover={{
                rotateY: 360,
                rotateX: 360,
                scale: 1.2,
                boxShadow: "0 0 50px hsl(var(--primary) / 0.7)",
              }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <e.icon className="text-4xl" style={{ transform: "translateZ(15px)" }} />
              </motion.div>
            </motion.div>

            <div className="relative z-10 text-center md:text-left" style={{ transform: "translateZ(15px)" }}>
              <motion.h3
                className="font-heading font-bold text-foreground text-xl mb-2"
                whileHover={{ x: 5 }}
              >
                {e.degree}
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-sm font-body flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <FaUniversity className="text-sm" />
                {e.school}
              </motion.p>
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

export default EducationSection;
