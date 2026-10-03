import React from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { data } from "@/data/data";

const GetInTouch = () => {
  return (
    <Section className="w-full bg-white pt-8 pb-4 sm:pt-10 lg:pt-12">
      <div className="page-gutter mx-auto w-full max-w-7xl">
        <div
          className="
            relative
            min-h-[310px]
            overflow-hidden
            rounded-xl
            bg-[#edf5ff]
            bg-cover
            bg-center
            sm:min-h-[300px]
            md:min-h-[280px]
            lg:min-h-[220px]
          "
          style={{
            backgroundImage: "url('/contact.png')",
          }}
        >
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-center
              gap-6
              px-5
              py-8
              sm:px-8
              md:px-10
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-8
              lg:px-12
              lg:py-8
            "
          >
            <div className="min-w-0 lg:max-w-[68%]">
              {/* Top Label */}
              <div className="mb-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="text-[10px] font-semibold tracking-wide text-[#607ba5] sm:text-xs md:text-sm">
                  {data.content.service.getInTouchEyebrow}
                </span>

                <span className="h-[2px] w-10 shrink-0 bg-[#1769e0] sm:w-16" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold leading-tight text-[#102e65] sm:text-3xl lg:text-[34px]">
                {data.content.service.getInTouchTitle}
              </h2>

              {/* Description */}
              <p className="mt-2 max-w-[580px] text-sm leading-5 text-[#60789e] sm:text-base sm:leading-6">
                {data.copy.service.getInTouchDescription}
              </p>
            </div>

            {/* Button */}
            <Link
              href="/contact"
              className="
                mt-0
                flex
                w-full
                items-center
                gap-3
                rounded-md
                bg-[#1769e0]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-[#0f56c5]

                sm:w-fit
                lg:absolute
                lg:right-[23%]
                lg:top-1/2
                lg:shrink-0
                lg:-translate-y-1/2
              "
            >
              {data.copy.common.getInTouch}

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M4 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M14 7L19 12L14 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GetInTouch;