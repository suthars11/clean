"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Users,
  Gem,
  Shield,
  Eye,
  Lightbulb,
  BarChart2,
  Star,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import { data } from "@/data/data";

type Feat = { icon: LucideIcon; label: readonly [string, string] };

const Label = ({ text, both }: { text: string; both?: boolean }) => (
  <div className="flex items-center gap-3">
    <span className="h-[2px] w-10 bg-[#1468E8]" />
    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#173B78]">
      {text}
    </span>
    {both && <span className="h-[2px] w-10 bg-[#1468E8]" />}
  </div>
);

const Features = ({ items }: { items: Feat[] }) => (
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
    {items.map((f, i) => (
      <div
        key={f.label[0]}
        className={`flex items-center gap-3 sm:justify-start sm:px-4 first:sm:pl-0 ${
          i > 0 ? "sm:border-l sm:border-[#D9E2F0]" : ""
        }`}
      >
        <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#E5EFFD] text-[#1468E8]">
          <f.icon className="h-[26px] w-[26px]" strokeWidth={1.5} />
        </span>
        <span className="text-[13px] font-medium leading-[18px] text-[#17233D]">
          {f.label[0]}
          <br />
          {f.label[1]}
        </span>
      </div>
    ))}
  </div>
);

const Block = ({
  icon: Icon,
  label,
  both,
  title,
  desc,
  feats,
  img,
  alt,
  imgFirst,
  split,
}: {
  icon: LucideIcon;
  label: string;
  both?: boolean;
  title: React.ReactNode;
  desc: string;
  feats: Feat[];
  img: string;
  alt: string;
  imgFirst?: boolean;
  split: string;
}) => (
  <div
    className={`grid overflow-hidden rounded-xl border border-[#DCE8FA] bg-[#F5F9FF] ${split}`}
  >
    <div
      className={`relative h-[240px] sm:h-[300px] lg:h-auto lg:min-h-[254px] ${
        imgFirst ? "order-1" : "order-1 lg:order-2"
      }`}
    >
      <Image
        src={img}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
    <div
      className={`flex flex-col justify-center px-5 py-6 sm:px-8 lg:px-9 lg:py-5 ${
        imgFirst ? "order-2" : "order-2 lg:order-1"
      }`}
    >
      <div className="flex items-start gap-5 sm:gap-7">
        <span className="hidden h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0B4DB8] to-[#06265F] text-white sm:flex lg:h-[80px] lg:w-[80px]">
          <Icon className="h-9 w-9" strokeWidth={1.4} />
        </span>
        <div className="min-w-0">
          <Label text={label} both={both} />
          <h3 className="mt-5 text-[22px] font-bold leading-[1.15] text-[#0B1E48] sm:text-[26px] lg:text-[26px]">
            {title}
          </h3>
          <p className="mt-4 text-[13px] leading-[18px] text-[#475569]">{desc}</p>
        </div>
      </div>
      <Features items={feats} />
    </div>
  </div>
);

const OurValue: React.FC = () => (
  <Section className="w-full bg-white">
    <div className="page-gutter mx-auto w-full max-w-[1350px]">
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-[34px] bg-[#1468E8] sm:w-[68px]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#0B1E48] sm:text-[12px]">
            {data.content.missionVision.eyebrow}
          </span>
          <span className="h-[2px] w-[34px] bg-[#1468E8] sm:w-[68px]" />
        </div>
        <h2 className="mt-1 text-[32px] font-bold leading-tight text-[#0B1E48] sm:text-[40px] lg:text-[40px]">
          {data.content.missionVision.titleFirst} <span className="text-[#1468E8]">{data.content.missionVision.titleHighlight}</span>
        </h2>
        <p className="mt-1 text-[14px] text-[#475569] sm:text-[16px]">
          {data.copy.missionVision.description}
        </p>
      </div>

      <div className="space-y-4">
        <Block
          imgFirst
          split="lg:grid-cols-[45.5%_1fr]"
          icon={Target}
          label={data.content.missionVision.missionLabel}
          title={
            <>
              {data.content.missionVision.missionTitleFirst}
              <br />
              <span className="text-[#1468E8]">{data.content.missionVision.missionTitleHighlight}</span> {data.content.missionVision.missionTitleLast}
            </>
          }
          desc="Our mission is to deliver trusted investment advisory solutions that empower individuals and businesses, build long-term relationships, and contribute to a stronger, more secure financial future."
          feats={[
            { icon: Users, label: data.copy.missionVision.missionFeatures[0] },
            { icon: Gem, label: data.copy.missionVision.missionFeatures[1] },
            { icon: Shield, label: data.copy.missionVision.missionFeatures[2] },
          ]}
          img="/value1.png"
          alt={data.copy.missionVision.missionAlt}
        />
        <Block
          split="lg:grid-cols-[54%_1fr]"
          icon={Eye}
          label={data.content.missionVision.visionLabel}
          both
          title={
            <>
              {data.content.missionVision.visionTitleFirst}
              <br />
              {data.content.missionVision.visionTitleSecond} <span className="text-[#1468E8]">{data.content.missionVision.visionTitleHighlight}</span>
            </>
          }
          desc="Our vision is to be a leading and most trusted investment advisory firm, recognized for integrity, innovation, and excellence, creating opportunities and inspiring financial growth for generations to come."
          feats={[
            { icon: Lightbulb, label: data.copy.missionVision.visionFeatures[0] },
            { icon: BarChart2, label: data.copy.missionVision.visionFeatures[1] },
            { icon: Star, label: data.copy.missionVision.visionFeatures[2] },
          ]}
          img="/value2.png"
          alt={data.copy.missionVision.visionAlt}
        />
      </div>
    </div>
  </Section>
);

export default OurValue;
