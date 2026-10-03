"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/* Photo collage (shapes, "30+ Years" badge and corner label are part of the artwork) */
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Collage = () => (
  <div className="relative mx-auto w-full max-w-[594px] aspect-[594/530]">
    <Image
      src="/about-collage.png"
      alt={data.copy.home.aboutImageAlt}
      fill
      sizes="(min-width: 1024px) 594px, 100vw"
      className="object-contain"
    />
  </div>
);

const AboutSection = () => {
  return (
    <Section className={`${inter.className} relative mt-5 w-full overflow-hidden bg-white py-10 sm:py-14 lg:pt-[70px] lg:pb-[82px]`}>
      {/* decorative pale shapes */}
      <div className="pointer-events-none absolute right-0 top-0 h-[150px] w-[140px] bg-gradient-to-br from-[#fafcff] to-[#e8f0fc] [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-[190px] sm:w-[170px] lg:h-[222px] lg:w-[14.6%]" />
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[40%] w-[18%] bg-[#f2f6fd] [clip-path:polygon(0_0,100%_100%,0_100%)] lg:block" />

      <div className="page-gutter relative z-10 mx-auto w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[46.5%_minmax(0,1fr)] lg:gap-x-[3.1%]">
          <Collage />

          <div className="relative z-20 w-full text-left">
            <Reveal delay={0.06}>
              <div className="inline-flex rounded-full border border-[#c9dcf6] bg-white px-[19px] py-[5px] text-[13px] font-medium tracking-[0.3px] text-[#2d6fc4]">
                {data.content.home.about.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="mt-[14px] text-[clamp(28px,3.4vw,46px)] font-bold leading-[1.13] tracking-[-0.01em] text-[#07152f]">
                {data.content.home.about.titleFirst}
                <br />
                {data.content.home.about.titleSecond}{" "}<span className="text-[#2d6fc4]">{data.content.home.about.titleHighlight}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-[14px] h-[3px] w-[60px] bg-[#2d6fc4]" />
            </Reveal>

            <p className="mt-[26px] max-w-[600px] text-[15px] leading-[1.6] text-[#4b5870] lg:text-[15.5px]">
              {data.copy.home.aboutDescriptionLines[0]}
              <br className="hidden lg:block" />{" "}
              {data.copy.home.aboutDescriptionLines[1]}
              <br className="hidden lg:block" />{" "}
              {data.copy.home.aboutDescriptionLines[2]}
              <br className="hidden lg:block" />{" "}
              {data.copy.home.aboutDescriptionLines[3]}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-y-0">
              {data.home.aboutFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`flex min-w-0 items-start gap-3 ${
                      index > 0
                        ? "sm:border-l sm:border-[#dce4ef] sm:pl-[14px]"
                        : "sm:pr-[10px]"
                    } ${index === 1 ? "sm:pr-[10px]" : ""}`}
                  >
                    <div className="group flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#e3ecfb] transition-all duration-200 hover:bg-[#2d6fc4] lg:h-[clamp(46px,4.3vw,58px)] lg:w-[clamp(46px,4.3vw,58px)]">
                      <Icon
                        size={26}
                        strokeWidth={1.9}
                        className="text-[#2d6fc4] group-hover:text-white"
                      />
                    </div>
                    <div className="min-w-0 pt-[2px] text-left">
                      <h3 className="text-[14px] font-semibold leading-[1.3] text-[#17243a] lg:text-[clamp(12px,1.1vw,15px)]">
                        {feature.title}
                        <br />
                        {feature.subtitle}
                      </h3>
                      <p className="mt-[10px] text-[12px] leading-[1.5] text-[#5f6e84] lg:text-[clamp(10px,0.82vw,11.5px)]">
                        {(data.copy.home.aboutFeatureDescriptions[index] ?? [feature.description]).map((line) => (
                          <span key={line} className="block lg:whitespace-nowrap">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="/about-us"
                className="flex h-[50px] w-full max-w-[221px] items-center justify-center gap-5 rounded-[4px] bg-[#2d6fc4] px-6 text-[15px] font-medium text-white transition hover:bg-[#245fa9]"
              >
                {data.content.home.about.cta}
                <ArrowRight size={19} strokeWidth={1.8} />
              </Link>

              <div className="hidden h-[34px] w-px bg-[#9ba8ba] sm:ml-2 sm:block" />

              <p className="text-[13px] leading-[1.5] text-[#4b5870]">
                {data.copy.home.aboutClosing[0]}
                <br />
                {data.copy.home.aboutClosing[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
