'use client'
import React, { useState } from "react";
import Image from "next/image";
import { data } from "@/data/data";
import type { AwardCategory } from "@/data/types";
import Section from "@/components/ui/Section";


// ================= COMPONENT =================
const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState<AwardCategory | "All">("All");
  const categories = data.awards.categories;
  const filteredAwards = data.awards.items.filter(
    (award) => activeCategory === "All" || award.category === activeCategory,
  );

  return (
    <Section className="w-full bg-white py-8 sm:py-10 lg:py-6">
      <div className="page-gutter mx-auto w-full max-w-[1350px]">

        {/* ================= TOP AREA ================= */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#3b5a99] sm:text-[13px]">
                {data.content.achievements.eyebrow}
              </span>

              <div className="h-[2px] w-12 bg-blue-600" />
            </div>

            <h2 className="mb-5 text-[26px] font-bold leading-[1.2] text-[#0b1b4d] sm:text-[30px] lg:text-[32px]">
              {data.content.achievements.titleFirst}
              <br className="hidden sm:block" />
              {data.content.achievements.titleSecond}{" "}
              <span className="text-blue-600">
                {data.content.achievements.titleHighlight}
              </span>
            </h2>

            <p className="max-w-[600px] text-[14px] leading-[1.7] text-[#4a5a85] sm:text-[16px]">
              {data.copy.achievements.description}
            </p>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 rounded-xl bg-[#eef4ff] p-5 sm:grid-cols-2 sm:p-6 lg:p-7 sm:[&>div:nth-child(odd)]:border-r sm:[&>div:nth-child(odd)]:border-blue-100">
            {data.awards.features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col gap-1.5 sm:pr-4"
              >
                <div className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 transition-colors duration-200 hover:bg-blue-600">
                  <svg
                    className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.iconPath}
                    />
                  </svg>
                </div>

                <h4 className="text-[15px] font-semibold leading-snug text-[#0b1b4d] sm:text-[16px]">
                  {feature.title}
                </h4>

                <p className="text-[13px] leading-[1.5] text-[#4a5a85] sm:text-[14px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= AWARDS HEADING ================= */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-12 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-[#0b1b4d] sm:text-[28px]">
              {data.content.achievements.awardsTitle}
            </h3>

            <div className="hidden h-[2px] w-14 bg-blue-600 sm:block" />
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex w-full flex-wrap gap-2 lg:w-auto" role="group" aria-label={data.copy.achievements.filterLabel}>
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-5 py-2 text-[13px] font-medium sm:text-[13.5px] transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-[#0b1b4d] hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= AWARDS GRID ================= */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px] xl:grid-cols-4">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-[#e6ecf7] bg-white transition-all duration-300 hover:shadow-md"
            >
              {/* IMAGE */}
              <div className="relative aspect-[292/214] w-full overflow-hidden bg-white">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 py-3">
                <h4 className="mb-1 text-[13px] font-bold leading-snug text-[#0b1b4d] xl:text-[14px]">
                  {award.title}
                </h4>

                <span className="mb-1 block text-[11px] font-medium text-[#0b1b4d] xl:text-[12px]">
                  {award.year}
                </span>

                <p className="text-[11px] leading-4 text-[#0b1b4d] xl:text-[12px]">
                  {award.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Achievements;



