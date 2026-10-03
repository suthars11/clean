"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
  HeroContext,
  type HeroPage,
} from "@/context/HeroProvide";
import { data as siteData } from "@/data/data";

interface HeroProps {
  page: HeroPage;
}

const Hero = ({ page }: HeroProps) => {
  const heroData = useContext(HeroContext);

  if (!heroData) {
    return null;
  }

  const data = heroData[page];

  if (!data) {
    return <div>{siteData.copy.ui.heroNotFound}</div>;
  }

  const { title, image } = data;

  return (
    <section data-flush data-hero className="page-inset relative h-[200px] overflow-hidden sm:h-[280px] lg:h-[361px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="(min-width: 1350px) 1350px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0b1426]/65" />

      <div className="absolute inset-0 flex items-center justify-center pb-4">
        <h1 className="text-center text-[30px] font-bold leading-tight text-white sm:text-[40px] lg:text-[52px]">
          {title}
        </h1>
      </div>

      <div className="absolute bottom-0 right-0 flex h-[40px] items-center gap-3 bg-white px-5 text-[13px] font-medium sm:h-[44px] lg:h-[50px] lg:px-[30px] lg:text-[15px]">
        <Link href="/" className="text-[#0b1426]">{siteData.copy.ui.breadcrumbHome}</Link>
        <span className="grid grid-cols-3 gap-[2px]" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="h-[4px] w-[4px] rounded-[1px] bg-[#0b1426]" />
          ))}
        </span>
        <span className="text-[#2d6fc4]">{title}</span>
      </div>
    </section>
  );
};

export default Hero;
