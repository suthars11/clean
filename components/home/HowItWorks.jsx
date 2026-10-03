"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";

const HowItWorks = () => {
  return (
    <Section className="relative w-full overflow-hidden bg-white pb-12 pt-10 lg:pb-[70px] lg:pt-[41px]">
      <div className="page-gutter mx-auto w-full">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex rounded-full border border-[#d8e7fa] bg-[#f7fbff] px-5 py-[7px] text-[13px] font-medium text-[#1f5fd0]">
            {data.copy.home.howItWorks.eyebrow}
          </div>

          <h2 className="mt-[16px] text-[clamp(26px,3.3vw,44px)] font-semibold leading-[0.97] tracking-[-0.02em] text-[#071b43]">
            {data.copy.home.howItWorks.titleFirst}
            <br className="hidden sm:block" />
            <span className="text-[#1f64dc]">
              {" "}
              {data.copy.home.howItWorks.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-[20px] max-w-[720px] text-[14px] leading-[1.45] text-[#5f6e84] lg:text-[clamp(12px,1.05vw,14.5px)]">
            {data.copy.home.howItWorks.descriptionFirst}
            <br className="hidden sm:block" />
            {data.copy.home.howItWorks.descriptionSecond}
          </p>
        </div>

        <div className="relative mt-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:mt-[4px] lg:grid-cols-4 lg:gap-y-0">
          {data.home.howItWorks.map((step, index) => (
            <Fragment key={step.number}>
              <div className="relative z-10 mx-auto w-full max-w-[300px] text-center lg:max-w-[260px]">
                <div className="relative mx-auto h-[195px] w-[195px] lg:h-[clamp(150px,14.2vw,195px)] lg:w-[clamp(150px,14.2vw,195px)]">
                  <div className="absolute inset-0 rounded-full bg-[#eef4fd]" />
                  <div className="absolute left-[7.7%] top-[8.7%] h-[71.8%] w-[71.8%] overflow-hidden rounded-full">
                    <Image
                      src={data.copy.home.howItWorksImages[index] || step.image}
                      alt={step.title}
                      fill
                      sizes="140px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute left-0 top-[2%] z-20 flex h-[24%] w-[24%] items-center justify-center rounded-full border-[3px] border-white bg-[#1a5fdb] text-[clamp(13px,1.3vw,18px)] font-medium text-white shadow-[0_4px_12px_rgba(23,109,224,0.22)]">
                    {step.number}
                  </div>
                </div>

                <h3 className="mt-[22px] text-[18px] font-medium leading-[1.25] text-[#071b43] lg:text-[clamp(15px,1.4vw,19px)]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-[12px] max-w-[250px] text-[13px] leading-[1.35] text-[#66748a] lg:text-[clamp(11.5px,1.02vw,14.5px)]">
                  {step.description}
                </p>

                <div className="mx-auto mt-[14px] h-[2px] w-[49px] bg-[#1f64dc]" />
              </div>

              {index < data.home.howItWorks.length - 1 && (
                <div
                  className="pointer-events-none absolute z-[5] hidden lg:block"
                  style={{
                    left: `${(index + 1) * 25}%`,
                    top: "clamp(52px,5.4vw,73px)",
                    width: "13%",
                    height: "44px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <svg
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full overflow-visible"
                  >
                    <path
                      d="M0 30 C25 4 75 4 100 30"
                      fill="none"
                      stroke="#bcd0ea"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <div className="absolute left-1/2 top-[24%] flex h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e6eefa] bg-white shadow-[0_3px_10px_rgba(50,100,160,0.08)]">
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="text-[#1f64dc]"
                    />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
