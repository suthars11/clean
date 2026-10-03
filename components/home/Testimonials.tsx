"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const list = data.home.testimonials;
  const testimonial = list[current];

  const nextSlide = () => setCurrent((p) => (p === list.length - 1 ? 0 : p + 1));
  const previousSlide = () => setCurrent((p) => (p === 0 ? list.length - 1 : p - 1));

  const arrowBtn =
    "flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#dbe8f8] bg-white text-[#2776df] shadow-[0_3px_10px_rgba(30,100,180,0.05)] transition hover:bg-[#eef6ff]";

  return (
    <Section className="page-gutter relative w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[45%_55%]">
        {/* ============ PHOTO ============ */}
        <div className="relative z-20 h-[300px] w-full sm:h-[420px] lg:h-[549px]">
          <div className="absolute inset-0">
            <Image
              src={testimonial.mainImage}
              alt={testimonial.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 608px"
              className="object-cover object-[44%_center]"
            />
          </div>

          <div className="absolute right-4 top-1/2 z-30 flex h-[105px] w-[105px] -translate-y-1/2 items-center justify-center rounded-full border-[10px] border-white/70 bg-[#0a56c4] shadow-[0_5px_20px_rgba(0,0,0,0.12)] lg:right-[-56px] lg:top-1/2 lg:h-[113px] lg:w-[113px] lg:-translate-y-1/2 lg:translate-x-0">
            <Quote size={44} strokeWidth={0} fill="white" className="text-white" />
          </div>
        </div>

        {/* ============ CONTENT ============ */}
        <div className="page-gutter relative flex min-h-[420px] flex-col justify-center overflow-hidden bg-[#f7faff] pb-10 pt-20 lg:min-h-[549px] lg:py-12">
          <div className="pointer-events-none absolute -right-[90px] -top-[130px] hidden h-[330px] w-[330px] rounded-full border-[40px] border-[#edf3fd] sm:block" />

          <div className="pointer-events-none absolute right-[30px] top-[32px] hidden grid-cols-4 gap-[11px] sm:grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#a8c8f4]" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[620px]"
            >
              <Reveal delay={0.06}>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-[50px] bg-[#2f6fe0]" />
                  <span className="text-[12px] font-medium tracking-[1.5px] text-[#2f6fe0]">
                    {data.content.home.testimonials.eyebrow}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 className="mt-4 text-[40px] font-bold leading-[1.02] tracking-[-1.5px] text-[#071b43] sm:text-[50px] lg:text-[58px]">
                  {data.content.home.testimonials.titleFirst}
                  <br />
                  <span className="text-[#126ce4]">{data.content.home.testimonials.titleHighlight}</span>
                </h2>
              </Reveal>

              <div className="mt-5 inline-flex items-center gap-[8px] rounded-full bg-[#e9f0fc] px-[14px] py-[7px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-[15px] leading-none ${
                      i < testimonial.rating ? "text-[#1471df]" : "text-[#c9d8ec]"
                    }`}
                  >
                    <FaStar />
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-[14px]">
                <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full border border-[#dce8f7]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="70px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold leading-tight text-[#10254a]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-[14px] tracking-[0.3px] text-[#6b7b93]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-[490px] text-[16px] leading-[1.55] text-[#4a5b75] sm:text-[18px] sm:leading-[25px]">
                “{testimonial.quote}”
              </p>

              <div className="mt-7 flex items-center gap-[34px]">
                <motion.button
                  type="button"
                  onClick={previousSlide}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label={data.copy.home.testimonialControls[0]}
                  className={arrowBtn}
                >
                  <ArrowLeft size={19} strokeWidth={1.8} />
                </motion.button>

                <div className="text-[15px] font-semibold text-[#10254a]">
                  {String(current + 1).padStart(2, "0")}
                  <span className="mx-1 font-normal text-[#8292a9]">/ {String(list.length).padStart(2, "0")}</span>
                </div>

                <motion.button
                  type="button"
                  onClick={nextSlide}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label={data.copy.home.testimonialControls[1]}
                  className={arrowBtn}
                >
                  <ArrowRight size={19} strokeWidth={1.8} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Avatar list */}
          <div className="absolute right-[56px] top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-[10px] lg:flex">
            <div className="absolute left-1/2 top-[-10px] h-[225px] w-[1px] -translate-x-1/2 bg-[#dce8f7]" />
            {list.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`${data.copy.testimonials.showPrefix} ${item.name}`}
                className={`relative z-10 overflow-hidden rounded-full transition-all duration-300 ${
                  current === index
                    ? "h-[50px] w-[50px] border-2 border-[#1471df] p-[2px]"
                    : "h-[42px] w-[42px] border border-white bg-[#e6edf5] opacity-80"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="50px"
                  className="rounded-full object-cover"
                />
              </button>
            ))}
            <span className="absolute -left-[36px] top-1/2 h-[30px] w-[3px] -translate-y-1/2 rounded-full bg-[#1471df]" />
          </div>

          <div className="absolute bottom-[40px] right-[56px] hidden items-center gap-3 sm:flex">
            <div className="text-right text-[11px] font-semibold leading-[1.3] tracking-[2px] text-[#a2aec0]">
              <p>{data.copy.home.testimonialFootnote[0]}</p>
              <p>{data.copy.home.testimonialFootnote[1]}</p>
            </div>
            <span className="h-[2px] w-[50px] bg-[#2776df]" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
