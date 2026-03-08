import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="relative inline-block font-heading text-3xl font-bold text-primary md:text-4xl">
        {title}
        <span className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-primary" />
      </h2>
      {subtitle && (
        <p className="mt-6 text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
