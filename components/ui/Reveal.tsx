"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  direction?: "left" | "right" | "top" | "bottom" | "center";
};

const Reveal = ({
  delay = 0,
  y = 28,
  x = 52,
  scale = 0.96,
  direction = "left",
  children,
  ...rest
}: RevealProps) => {
  const initialX = direction === "right" ? x : direction === "left" ? -x : 0;
  const initialY = direction === "bottom" ? y : direction === "top" ? -y : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY, scale, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
