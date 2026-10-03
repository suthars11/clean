"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { data } from "@/data/data";
import Section from "@/components/ui/Section";

const OurTeam: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlider = (direction: number) => {
    const slider = sliderRef.current;
    const firstCard = slider?.firstElementChild;
    if (!slider || !(firstCard instanceof HTMLElement)) return;

    const gap = Number.parseFloat(window.getComputedStyle(slider).columnGap) || 0;
    const cardStep = firstCard.getBoundingClientRect().width + gap;
    const cardsPerView = Math.round((slider.clientWidth + gap) / cardStep);
    const maxStartIndex = Math.max(0, slider.children.length - cardsPerView);
    const currentIndex = Math.round(slider.scrollLeft / cardStep);
    const nextIndex = currentIndex + cardsPerView * direction;

    const targetIndex =
      nextIndex > maxStartIndex ? 0 : nextIndex < 0 ? maxStartIndex : nextIndex;
    slider.scrollTo({ left: targetIndex * cardStep, behavior: "smooth" });
  };

  return (
    <Section className="page-gutter mx-auto w-full max-w-[1350px] bg-white pb-14 pt-10 lg:pt-8">
      <div className="mb-8 text-center lg:mb-9">
        <div className="mb-1 flex items-center justify-center gap-4">
          <span className="h-[2px] w-12 bg-[#2563eb] sm:w-[78px]"></span>
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#334155] sm:text-[16px]">
            {data.content.team.listEyebrow}
          </span>
          <span className="h-[2px] w-12 bg-[#2563eb] sm:w-[78px]"></span>
        </div>
        <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-[#0B1E48] sm:text-[46px] lg:text-[54px]">
          {data.content.team.listTitleFirst} <span className="text-[#1068e8]">{data.content.team.listTitleHighlight}</span>
        </h2>
        <p className="mx-auto mt-2 max-w-[640px] text-[15px] leading-[29px] text-[#475569] sm:text-[19px]">
          {data.copy.team.listDescription}
        </p>
      </div>

      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label={data.copy.team.previousMembers}
          title={data.copy.team.previousMembers}
          onClick={() => moveSlider(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe3f0] text-[#1068e8] transition-colors hover:bg-[#eaf3ff]"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={data.copy.team.nextMembers}
          title={data.copy.team.nextMembers}
          onClick={() => moveSlider(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe3f0] text-[#1068e8] transition-colors hover:bg-[#eaf3ff]"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div ref={sliderRef} className="team-slider flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth">
        {data.team.members.map((member) => (
          <article
            key={member.id}
            className="team-slide flex flex-col rounded-[14px] border border-[#e8edf5] bg-white p-1 shadow-[0_1px_4px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-md"
          >
            <div className="relative aspect-[295/312] w-full overflow-hidden rounded-[10px] bg-slate-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
              <h3 className="text-[22px] font-bold leading-tight text-[#0B1E48]">
                {member.name}
              </h3>
              <p className="mt-1 text-[16px] font-medium text-[#1068e8]">
                {member.role}
              </p>
              <div className="my-3.5 h-[2px] w-[26px] bg-[#1068e8]"></div>
              <p className="mb-5 flex-1 text-[16px] leading-[25px] text-[#475569]">
                {member.description}
              </p>
              <Link
                href={member.profileUrl}
                className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#1068e8] transition-all duration-200 hover:gap-3"
              >
                {data.copy.team.viewProfile}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default OurTeam
