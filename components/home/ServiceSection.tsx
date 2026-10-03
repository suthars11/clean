"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import serviceImage from "@/public/about.png";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const ServiceSection = () => {
  return (
    <Section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:pt-[56px] lg:pb-[50px]">

      <div className="page-gutter relative z-10 mx-auto w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,32.8fr)_minmax(0,62fr)] lg:gap-[2.6%]">
          {/* LEFT IMAGE (collage with its own corner label and tab) */}
          <div className="relative mx-auto w-full max-w-[443px] lg:max-w-none">
            <Image
              src={serviceImage}
              alt={data.copy.home.servicesImageAlt}
              priority
              sizes="(max-width: 1024px) 90vw, 443px"
              className="h-auto w-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-20 w-full">
            <div className="mx-auto text-center lg:w-[76%] lg:mx-0">
              <Reveal delay={0.06}>
                <div className="inline-flex rounded-full border border-[#d4e3f7] bg-white px-4 py-[5px] text-[13px] font-medium text-[#2d6fc4]">
                  {data.content.home.services.eyebrow}
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 className="mt-[10px] text-[clamp(28px,2.85vw,39px)] font-bold leading-[1.0] tracking-[-0.02em] text-[#07152f]">
                  {data.content.home.services.titleFirst}
                  <br />
                  {data.content.home.services.titleSecond} <span className="text-[#1264d4]">{data.content.home.services.titleHighlight}</span>
                </h2>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mx-auto mt-[18px] max-w-[680px] text-[14px] leading-[1.45] text-[#4b5870] lg:text-[clamp(12px,0.98vw,13.5px)]">
                  {data.copy.home.servicesDescription}
                </p>
              </Reveal>
            </div>

            <div className="mt-[22px] grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-[1.6%]">
              {data.home.services.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    href="/service"
                    key={`${item.title}-${item.subtitle}`}
                    className="group relative flex min-h-[160px] flex-col rounded-[6px] border border-[#e3e9f2] bg-white px-[10px] py-[12px] shadow-[0_2px_8px_rgba(25,65,120,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bdd3f0] hover:shadow-[0_8px_20px_rgba(30,90,160,0.08)] lg:min-h-[clamp(140px,12vw,165px)] lg:px-[2.2%]"
                  >
                    <div className="flex items-center gap-2 sm:gap-[10px] lg:gap-[clamp(6px,0.9vw,12px)]">
                      <div className="flex h-[36px] w-[36px] shrink-0 sm:h-[50px] sm:w-[50px] items-center justify-center rounded-full bg-[#e6effc] transition-all duration-200 group-hover:bg-[#1264d4] lg:h-[clamp(38px,3.6vw,52px)] lg:w-[clamp(38px,3.6vw,52px)]">
                        <Icon
                          size={24}
                          strokeWidth={1.9}
                          className="h-[46%] w-[46%] text-[#1264d4] transition-colors duration-200 group-hover:text-white"
                        />
                      </div>
                      <h3 className="min-w-0 text-[12px] font-semibold sm:text-[14px] leading-[1.3] text-[#15233b] lg:text-[clamp(11px,1.07vw,15px)]">
                        {item.title}
                        <br />
                        {item.subtitle}
                      </h3>
                    </div>

                    <p className="mb-3 mt-[10px] max-w-[170px] text-[11px] sm:mt-[14px] sm:text-[12px] leading-[1.45] text-[#5f6e84] lg:text-[clamp(10px,0.93vw,13px)]">
                      {item.description}
                    </p>

                    <div className="mt-auto flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#e1ecfc] pt-0 transition group-hover:bg-[#1264d4]">
                      <ArrowRight
                        size={14}
                        strokeWidth={2.2}
                        className="text-[#1264d4] transition group-hover:text-white"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceSection;
