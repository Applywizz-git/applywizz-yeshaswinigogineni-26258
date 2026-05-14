import { motion } from "framer-motion";

interface SectionHeadingProps {
  accent: string;
  title: string;
  highlight: string;
}

const SectionHeading = ({ accent, title, highlight }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="font-accent text-primary text-xl mb-2">{accent}</p>
      <h2 className="text-4xl md:text-5xl font-heading font-bold">
        <span className="text-foreground">{title} </span>
        <span className="gradient-text">{highlight}</span>
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
