"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type SectionProps = HTMLMotionProps<"section"> & {
  delay?: number;
  scale?: number;
};

/** <section> that fades and slides up the first time it scrolls into view. */
const Section = ({
  children,
  delay = 0,
  scale = 0.98,
  whileHover,
  ...rest
}: SectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 30, scale }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={whileHover ?? { y: -2 }}
    {...rest}
  >
    {children}
  </motion.section>
);

export default Section;
