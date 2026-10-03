"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import { data } from "@/data/data";
import CountUp from "@/components/ui/CountUp";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const Spark = ({ className, color }: { className: string; color: string }) => (
  <svg viewBox="0 0 60 56" className={className} aria-hidden="true">
    <g stroke={color} strokeWidth="4" strokeLinecap="round">
      <line x1="6" y1="4" x2="12" y2="30" />
      <line x1="26" y1="14" x2="42" y2="30" />
      <line x1="34" y1="42" x2="56" y2="48" />
    </g>
  </svg>
);

const Whychoose = () => {
  return (
    <Section data-flush className="page-inset relative overflow-hidden bg-[#031d46] py-12 lg:py-0 lg:h-[clamp(480px,41.3vw,557px)]">
      {/* decorative circles */}
      <div className="absolute -left-[130px] top-[38%] h-[300px] w-[300px] rounded-full bg-[#06265a] opacity-80" />
      <div className="absolute left-[50%] -top-[150px] h-[330px] w-[330px] rounded-full bg-[#06265a] opacity-70" />
      <div className="absolute bottom-[-60px] left-[62%] hidden h-[330px] w-[330px] rounded-full bg-[#052a5f] opacity-60 lg:block" />
      <div className="absolute -right-[110px] top-[35%] hidden h-[260px] w-[260px] rounded-full bg-[#052a5f] opacity-60 lg:block" />
      <div className="absolute bottom-0 left-[64%] hidden h-[280px] w-[280px] -translate-x-full rounded-full bg-[#052a5f] opacity-70 lg:block" />

      <div className="page-gutter relative z-10 mx-auto grid h-full w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_46.9%] lg:gap-0">
        {/* LEFT */}
        <div className="relative z-20 max-w-[600px]">
          <Reveal delay={0.08}>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="block h-0 w-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-[#38a8ff]" />
                <span className="-ml-[5px] block h-0 w-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-[#7268ff]" />
              </div>
              <span className="text-[13px] font-medium tracking-[1.2px] text-white">
                {data.content.home.whyChoose.eyebrow}
              </span>
              <span className="ml-1 h-px w-[58px] bg-white/70" />
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h2 className="mt-[24px] text-[clamp(36px,4vw,54px)] font-semibold leading-[1.0] tracking-[-0.02em] text-white">
              {data.content.home.whyChoose.titleFirst}
              <br />
              <span className="text-[#55baff]">{data.content.home.whyChoose.titleSecond}</span>
              <br />
              {data.content.home.whyChoose.titleThird}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-[20px] max-w-[480px] text-[15px] leading-[1.5] text-white/85 lg:text-[clamp(14px,1.3vw,17.5px)]">
              {data.copy.home.whyChooseDescription}
            </p>
          </Reveal>

          <div className="mt-[22px] flex items-center">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#1554a2] transition-colors duration-200 hover:bg-[#1d7cf2] lg:h-[60px] lg:w-[60px]">
              <Handshake size={26} strokeWidth={1.7} className="text-white" />
            </div>
            <h3 className="ml-[14px] text-[15px] font-medium leading-[1.3] text-white lg:text-[clamp(14px,1.3vw,17.5px)]">
              {data.counters.trustedBy.prefix} <CountUp value={data.counters.trustedBy.value} />
              <br />
              {data.counters.trustedBy.label}
            </h3>
            <div className="mx-[16px] h-[60px] w-px bg-white/30 lg:mx-[clamp(14px,1.8vw,24px)]" />
            <p className="max-w-[200px] text-[12px] leading-[1.5] text-white/75 lg:text-[clamp(11px,0.97vw,13.5px)]">
              {data.copy.home.whyChooseSupport[0]}
              <br />
              {data.copy.home.whyChooseSupport[1]}
              <br />
              {data.copy.home.whyChooseSupport[2]}
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-[28px] flex h-[54px] w-[243px] items-center justify-between rounded-full bg-gradient-to-r from-[#0da9f7] to-[#2565ee] pl-8 pr-[9px] text-[16px] font-medium text-white shadow-[0_7px_20px_rgba(0,135,255,0.25)] transition hover:scale-[1.02]"
          >
            <span>{data.copy.home.whyChooseCta}</span>
            <span className="flex h-[40px] w-[48px] items-center justify-center rounded-full bg-white">
              <ArrowUpRight size={22} strokeWidth={1.8} className="text-[#1665d9]" />
            </span>
          </Link>
        </div>

        {/* RIGHT circles */}
        <div className="relative mx-auto aspect-[544/498] w-full max-w-[560px] [container-type:inline-size] lg:max-w-none">
          <div className="absolute left-[7.9%] top-[0.8%] z-10 aspect-square w-[46.5%] overflow-hidden rounded-full border-2 border-[#1b4f9a]">
            <Image src="/servicebanner.png" alt={data.copy.home.whyChooseImageAlts[0]} fill sizes="260px" className="object-cover object-[55%_center]" />
          </div>

          <div className="absolute right-0 top-0 group z-20 flex aspect-square w-[49.3%] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#10a8f7] via-[#2175ed] to-[#3732d7] text-center shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
            <div className="flex aspect-square w-[25%] items-center justify-center rounded-full bg-white transition-colors duration-200 group-hover:bg-[#1766d7]">
              <ShieldCheck className="h-[56%] w-[56%] text-[#1766d7] transition-colors duration-200 group-hover:text-white" strokeWidth={1.8} />
            </div>
            <h3 className="mt-[4%] text-[max(12px,3.7cqw)] font-semibold leading-[1.15] text-white">
              {data.content.home.whyChoose.insuranceTitle[0]}
              <br />
              {data.content.home.whyChoose.insuranceTitle[1]}
            </h3>
            <p className="mt-[2%] max-w-[60%] text-[max(9px,2.5cqw)] leading-[1.45] text-white/90">
              {data.copy.home.whyChooseDescriptions[0]}
            </p>
          </div>

          <div className="absolute bottom-[2.4%] right-[2.2%] z-10 aspect-square w-[49.6%] overflow-hidden rounded-full">
            <Image src="/goal3.png" alt={data.copy.home.whyChooseImageAlts[1]} fill sizes="270px" className="object-cover object-[60%_center]" />
          </div>

          <div className="absolute bottom-0 left-0 group z-20 flex aspect-square w-[51.5%] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#13aaf7] via-[#2376ed] to-[#3630d7] text-center shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
            <div className="flex aspect-square w-[25%] items-center justify-center rounded-full bg-white transition-colors duration-200 group-hover:bg-[#1766d7]">
              <TrendingUp className="h-[56%] w-[56%] text-[#1766d7] transition-colors duration-200 group-hover:text-white" strokeWidth={1.8} />
            </div>
            <h3 className="mt-[4%] text-[max(12px,3.7cqw)] font-semibold leading-[1.15] text-white">
              {data.content.home.whyChoose.investmentTitle[0]}
              <br />
              {data.content.home.whyChoose.investmentTitle[1]}
            </h3>
            <p className="mt-[2%] max-w-[55%] text-[max(9px,2.5cqw)] leading-[1.45] text-white/90">
              {data.copy.home.whyChooseDescriptions[1]}
            </p>
          </div>

          <Spark color="#6f7fff" className="absolute -right-[4%] -top-[2%] z-30 hidden w-[10%] sm:block" />
          <Spark color="#3e9eff" className="absolute -left-[5%] top-[40%] z-30 hidden w-[9%] -scale-x-100 sm:block" />

          <div className="absolute bottom-[2%] right-[-3%] z-30 hidden grid-cols-4 gap-[7px] sm:grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#3264c3]" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Whychoose;
