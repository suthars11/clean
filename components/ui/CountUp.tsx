"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CountUpProps = {
  /** Display text such as "500+", "98%" or "₹1,200 Cr+"; the first number in it is animated. */
  value: string;
  duration?: number;
  className?: string;
};

const CountUp = ({ value, duration = 2, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const match = value.match(/[\d,]+(?:\.\d+)?/);
  const target = match ? parseFloat(match[0].replace(/,/g, "")) : 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setCount(latest),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  if (!match) return <span className={className}>{value}</span>;

  const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
  const shown = match[0].includes(",")
    ? Math.round(count).toLocaleString("en-IN")
    : count.toFixed(decimals);
  const start = match.index ?? 0;

  return (
    <span ref={ref} className={className}>
      {value.slice(0, start)}
      {shown}
      {value.slice(start + match[0].length)}
    </span>
  );
};

export default CountUp;
