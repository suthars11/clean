"use client";
import { data } from "@/data/data";
import CountUp from "@/components/ui/CountUp";
import Section from "@/components/ui/Section";

const Trusted = () => {
  return (
    <Section data-flush className="page-inset relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/building.png" alt="" className="h-full w-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-[#062b58]/80" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] py-12 lg:py-[60px]">
        {/* Heading */}
        <div className="mx-auto max-w-[1000px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-[30px] bg-white/75 sm:w-[44px]" />
            <span className="text-[10px] font-medium tracking-[3px] text-white sm:text-[12px] sm:tracking-[5px]">
              {data.counters.trusted.eyebrow}
            </span>
            <span className="h-[1px] w-[30px] bg-white/75 sm:w-[44px]" />
          </div>

          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.5px] text-white sm:text-[34px] lg:text-[40px]">
            {data.counters.trusted.heading}{" "}
            <span className="text-[#4c9df5]">{data.counters.trusted.highlight}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-[13px] leading-[1.6] text-white/85 sm:text-[15px]">
            {data.counters.trusted.description}
          </p>
        </div>

        {/* Stats */}
        <div className="relative mx-auto mt-8 grid max-w-[1100px] grid-cols-2 gap-y-8 lg:mt-10 lg:grid-cols-4 lg:gap-y-0">
          {data.home.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.number} className="group relative flex flex-col items-center px-2 text-center">
                {index !== 0 && (
                  <div className="absolute left-0 top-[30px] hidden h-[112px] w-[1px] bg-white/30 lg:block" />
                )}
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#1d7cf2] sm:h-[70px] sm:w-[70px]">
                  <Icon strokeWidth={1.5} className="h-[26px] w-[26px] text-white transition-transform duration-300 group-hover:scale-110 sm:h-[32px] sm:w-[32px]" />
                </div>
                <h3 className="mt-5 text-[34px] font-bold leading-none tracking-[-0.5px] text-white sm:text-[44px]">
                  <CountUp value={stat.number} />
                </h3>
                <p className="mt-3 text-[13px] font-medium text-white sm:text-[16px]">{stat.label}</p>
                <div className="mt-4 h-[2px] w-[34px] bg-[#1d7cf2]" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Trusted;
