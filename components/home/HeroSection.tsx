"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { data } from "@/data/data";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const HeroSection = () => {
  return (
    <section data-flush data-hero className={`${inter.className} page-inset relative overflow-hidden bg-white`}>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden aspect-[792/572] h-full lg:block"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 16%)",
          maskImage: "linear-gradient(to right, transparent 0%, #000 16%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Image
            src="/hero-right.png"
            alt={data.copy.home.heroImageAlt}
            fill
            priority
            sizes="800px"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[520px] w-full flex-col justify-between pt-12 lg:min-h-[572px] lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[560px] lg:pt-[64px]"
        >
          <p className="text-[10px] font-medium tracking-[2.5px] text-[#33415c] sm:text-[11.5px] sm:tracking-[3px]">
            {data.content.home.hero.eyebrow}
          </p>
          <div className="mb-[22px] mt-[18px] h-[2px] w-[36px] bg-[#2d6fc4] sm:mb-[26px]" />

          <h1 className="text-[40px] font-bold leading-[1.04] tracking-[-1.5px] text-[#07122e] sm:text-[52px] lg:text-[62px] lg:leading-[60px]">
            {data.content.home.hero.titleLines[0]}
            <br />
            {data.content.home.hero.titleLines[1]} <span className="text-[#2d6fc4]">{data.content.home.hero.titleLines[2]}</span>
            <br />
            {data.content.home.hero.titleLines[3]}
          </h1>

          <p className="mt-[22px] max-w-[470px] text-[15px] leading-[23px] text-[#3f4f6b] lg:text-[15.8px]">
            {data.copy.home.heroDescriptionLines[0]}<br className="hidden lg:block" />{" "}
            {data.copy.home.heroDescriptionLines[1]}<br className="hidden lg:block" />{" "}
            {data.copy.home.heroDescriptionLines[2]}
          </p>

          <div className="mt-[34px] flex flex-col gap-3 min-[420px]:flex-row">
            <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link
                href="/book-consultation"
                className="flex h-[43px] items-center justify-center gap-3 rounded-[4px] bg-[#2d6fc4] px-6 text-[14px] font-medium text-white transition hover:bg-[#245fa9] min-[420px]:w-[227px]"
              >
                {data.content.navigation.consultation}
                <ArrowRight size={16} strokeWidth={1.8} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link
                href="/service"
                className="flex h-[43px] items-center justify-center rounded-[4px] border border-[#7d8798] bg-white/60 px-6 text-[14px] font-medium text-[#0b1a33] transition hover:bg-white min-[420px]:w-[207px]"
              >
                {data.copy.home.heroCtas[1]}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div
          className="relative mt-7 aspect-[792/572] lg:hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 14%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, #000 14%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <Image
              src="/hero-right.png"
              alt={data.copy.home.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 pb-8 pt-6 sm:grid-cols-3 sm:gap-0 lg:max-w-[700px] lg:grid-cols-[207px_222px_auto] max-xl:lg:rounded-md max-xl:lg:bg-white/70 max-xl:lg:py-3 max-xl:lg:backdrop-blur-sm lg:mb-[22px] lg:-ml-[7px] lg:pb-0 lg:pt-8">
          {data.home.heroFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const lines = data.copy.home.heroFeatureDescriptions[index] ?? [feature.description];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className={`flex items-center gap-3 sm:px-3 lg:gap-[15px] lg:px-0 ${
                  index !== 0 ? "sm:border-l sm:border-[#d3deec] lg:pl-[15px]" : ""
                }`}
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#dce9f9]">
                  <Icon size={24} strokeWidth={1.6} className="text-[#2d6fc4]" />
                </div>
                <div className="min-h-[49px]">
                  <h3 className="whitespace-nowrap text-[11.4px] font-semibold leading-[16px] text-[#0b1a33]">
                    {feature.title}
                  </h3>
                  <p className="mt-[3px] text-[9.5px] leading-[15px] text-[#5d6c82]">
                    {lines.map((line, i) => (
                      <span key={i} className="block whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
