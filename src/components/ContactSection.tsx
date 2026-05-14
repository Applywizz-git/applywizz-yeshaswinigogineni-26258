import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser, FaAt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  { icon: FaPhone, label: "Phone", value: "+1 (409) 812-9123" },
  { icon: FaEnvelope, label: "Email", value: "yeshaswini9848@gmail.com" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Beaumont, TX" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="Let's Connect" title="Get In" highlight="Touch" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.form
            className="glass-card p-6 md:p-10 space-y-8 relative overflow-hidden group"
            initial={{ opacity: 0, x: -60, rotateY: -20, rotateX: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            onSubmit={(e) => e.preventDefault()}
            whileHover={{
              y: -8,
              scale: 1.01,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0 40px 80px hsl(var(--primary) / 0.3)",
            }}
            style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
          >
            {/* 3D Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ transform: "translateZ(-20px)" }}
            />

            {(["name", "email", "message"] as const).map((field, idx) => (
              <motion.div
                key={field}
                className="relative"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileFocus={{ scale: 1.02, y: -3, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.label
                  className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-3 block flex items-center gap-2"
                  whileHover={{ x: 3 }}
                  style={{ transform: "translateZ(10px)" }}
                >
                  {field === "name" && <FaUser className="text-xs" />}
                  {field === "email" && <FaAt className="text-xs" />}
                  {field}
                </motion.label>
                {field === "message" ? (
                  <motion.textarea
                    rows={5}
                    className="w-full bg-background/30 border border-border/40 rounded-xl px-5 py-4 text-foreground font-body text-sm focus:outline-none focus:border-primary/60 transition-all glow-border"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    whileFocus={{
                      boxShadow: "0 0 30px hsl(var(--primary) / 0.3)",
                      rotateX: 5,
                    }}
                    style={{ transform: "translateZ(5px)" }}
                  />
                ) : (
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    className="w-full bg-background/30 border border-border/40 rounded-xl px-5 py-4 text-foreground font-body text-sm focus:outline-none focus:border-primary/60 transition-all glow-border"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    whileFocus={{
                      boxShadow: "0 0 30px hsl(var(--primary) / 0.3)",
                      rotateX: 5,
                    }}
                    style={{ transform: "translateZ(5px)" }}
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg"
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateX: 10,
                rotateY: -10,
                boxShadow: "0 20px 40px hsl(var(--primary) / 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
            >
              <span>Send Message</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaPaperPlane />
              </motion.div>
            </motion.button>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ transform: "translateZ(10px)" }}
            />
          </motion.form>

          <div className="space-y-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                className="glass-card p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-6 hover-glow relative overflow-hidden group"
                initial={{ opacity: 0, x: 60, rotateY: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateX: 8,
                  rotateY: 8,
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
                  className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex-shrink-0 border border-primary/30"
                  whileHover={{
                    rotateY: 360,
                    rotateX: 360,
                    scale: 1.25,
                    boxShadow: "0 0 50px hsl(var(--primary) / 0.7)",
                  }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    animate={{ rotateZ: [0, 360] }}
                    transition={{ duration: 12 + i, repeat: Infinity, ease: "linear" }}
                  >
                    <info.icon className="text-2xl" style={{ transform: "translateZ(12px)" }} />
                  </motion.div>
                </motion.div>

                <div className="relative z-10" style={{ transform: "translateZ(15px)" }}>
                  <motion.p
                    className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1"
                    whileHover={{ x: 3 }}
                  >
                    {info.label}
                  </motion.p>
                  <motion.p
                    className="font-heading font-semibold text-foreground text-base"
                    whileHover={{ x: 3 }}
                  >
                    {info.value}
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
      </div>
    </section>
  );
};

export default ContactSection;
