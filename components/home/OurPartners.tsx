import Image from "next/image";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";

const Dots = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute hidden grid-cols-5 gap-[14px] md:grid ${className}`}>
    {Array.from({ length: 25 }).map((_, i) => (
      <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#b8d4fa]" />
    ))}
  </div>
);

const OurPartners = () => {
  return (
    <Section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:pb-24 lg:pt-12">
      <Dots className="left-[55px] top-[80px]" />
      <Dots className="bottom-[40px] right-[55px]" />

      <div className="page-gutter relative z-10 mx-auto max-w-[850px] text-center">
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="h-[2px] w-[56px] bg-[#2778e8]" />
          <span className="text-[14px] font-medium tracking-[0.5px] text-[#2778e8]">{data.content.home.partners.eyebrow}</span>
          <span className="h-[2px] w-[56px] bg-[#2778e8]" />
        </div>

        <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.5px] text-[#0a1f4d] sm:text-[44px] lg:text-[48px]">
          {data.content.home.partners.titleFirst}
          <br />
          {data.content.home.partners.titleSecond} <span className="text-[#1474e8]">{data.content.home.partners.titleHighlight}</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.5] text-[#5d6f8c] sm:text-[17px]">
          {data.copy.home.partnersDescription}
        </p>
      </div>

      <div className="page-gutter relative z-10 mx-auto mt-10 max-w-[1240px]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-[12px]">
          {data.partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex h-[110px] min-w-0 items-center justify-center overflow-hidden rounded-[10px] border border-[#e8eef7] bg-white px-2 py-2 shadow-[0_2px_8px_rgba(20,60,120,0.03)] transition-all duration-300 hover:border-[#bdd3f0] hover:shadow-[0_8px_20px_rgba(30,90,160,0.1)] sm:h-[120px] lg:h-[124px]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={300}
                height={120}
                className="h-full w-full scale-105 object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurPartners;
