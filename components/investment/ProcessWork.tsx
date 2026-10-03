
"use client";

import Image from "next/image";
import { data } from "@/data/data";
import CountUp from "@/components/ui/CountUp";
import Section from "@/components/ui/Section";

const ProcessWork = () => {
  return (
    <Section className="w-full bg-white pb-12 pt-2 sm:pt-4 lg:pt-16">
      <div className="page-gutter mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">

          <div className="relative h-[400px] overflow-hidden rounded-lg sm:h-[470px] lg:h-[490px]">
            <Image
              src="/experience.png"
              alt={data.copy.investment.workImageAlt}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute bottom-5 left-5 max-w-[285px] rounded-lg bg-white px-5 py-5 shadow-lg sm:bottom-6 sm:left-6 sm:px-6">
              <div className="mb-2 h-7 w-[3px] bg-[#1769e0]" />

              <h3 className="text-xl font-bold leading-6 text-[#102e65]">
                {data.content.investment.work.imageTitle[0]}
                <br />
                {data.content.investment.work.imageTitle[1]}
              </h3>

              <p className="mt-2 text-sm leading-5 text-[#5c7397]">
                {data.copy.investment.workImageDescription[0]}
                <br />
                {data.copy.investment.workImageDescription[1]}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[#f3f8ff] px-6 py-7 sm:px-8 sm:py-8 lg:px-7 lg:py-7">

            <h2 className="text-3xl font-bold leading-tight text-[#102e65] sm:text-4xl">
              {data.content.investment.work.titleFirst}{" "}
              <span className="text-[#1769e0]">
                {data.content.investment.work.titleHighlight}
              </span>
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#61799e] sm:text-base sm:leading-7">
              {data.copy.investment.workDescription}
            </p>

            <div className="mt-6 space-y-5 sm:mt-7 sm:space-y-6">

              <div className="flex items-center gap-4">
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3f0ff] text-[#1769e0] transition-colors duration-200 hover:bg-[#1769e0] hover:text-white">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle
                      cx="24"
                      cy="14"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <circle
                      cx="10"
                      cy="21"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <circle
                      cx="38"
                      cy="21"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      d="M13 39C13 31 17.5 27 24 27C30.5 27 35 31 35 39"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 37C3 31.5 6 28 11 28"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M45 37C45 31.5 42 28 37 28"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#102e65] sm:text-lg">
                    {data.content.investment.work.featureTitles[0]}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#61799e]">
                    {data.copy.investment.workFeatureDescriptions[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3f0ff] text-[#1769e0] transition-colors duration-200 hover:bg-[#1769e0] hover:text-white">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 5L39 11V22C39 31 33 38 24 43C15 38 9 31 9 22V11L24 5Z"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 8V40M11 20H37"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#102e65] sm:text-lg">
                    {data.content.investment.work.featureTitles[1]}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#61799e]">
                    {data.copy.investment.workFeatureDescriptions[1]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3f0ff] text-[#1769e0] transition-colors duration-200 hover:bg-[#1769e0] hover:text-white">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M5 24C10 15 17 10 24 10C31 10 38 15 43 24C38 33 31 38 24 38C17 38 10 33 5 24Z"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#102e65] sm:text-lg">
                    {data.content.investment.work.featureTitles[2]}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#61799e]">
                    {data.copy.investment.workFeatureDescriptions[2]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3f0ff] text-[#1769e0] transition-colors duration-200 hover:bg-[#1769e0] hover:text-white">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M7 39V25H15V39H7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 39V17H28V39H20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M33 39V9H41V39H33Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7 19L16 14L23 17L40 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 7H40V12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#102e65] sm:text-lg">
                    {data.content.investment.work.featureTitles[3]}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#61799e]">
                    {data.copy.investment.workFeatureDescriptions[3]}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 overflow-hidden rounded-lg bg-[#f3f8ff] sm:grid-cols-4">
          {data.counters.processStats.map((stat, i, all) => (
            <div key={stat.label} className="relative flex flex-col items-center justify-center px-4 py-5 text-center sm:py-6">
              <h3 className="text-3xl font-bold text-[#1769e0] sm:text-4xl">
                <CountUp value={stat.value} />
              </h3>

              <p className="mt-1 text-sm font-medium text-[#17376d] sm:text-base">
                {stat.label}
              </p>

              {i < all.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-16 w-[2px] -translate-y-1/2 bg-[#b9d8ff] sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProcessWork;