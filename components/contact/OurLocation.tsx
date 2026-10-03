import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { data } from "@/data/data";

const OurLocation = () => {
  return (
    <Section className="page-gutter w-full bg-white pt-10 pb-10">
      <div className="mx-auto w-full max-w-[1350px]">

        <div className="mb-5">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-[12px] font-semibold tracking-wide sm:text-[13px] text-[#2455a4]">
              {data.content.contact.locationEyebrow}
            </span>

            <span className="h-[2px] w-16 bg-[#3478e5]" />
          </div>

          <h2 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-[36px]">
            {data.content.contact.locationTitleFirst}{" "}
            <span className="text-[#1265e8]">{data.content.contact.locationTitleHighlight}</span>
          </h2>

          <p className="mt-2 max-w-[620px] text-[14px] leading-6 text-[#4a5a85] sm:text-[15px]">
            {data.copy.contact.locationDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2.5fr_1fr] xl:grid-cols-[884px_1fr]">

          <div className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[330px]">
  <iframe
    src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title={data.copy.contact.locationMapTitle}
    className="h-full w-full"
  />
</div>

          <div className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[330px]">
            <Image
              src="/contact/office.png"
              alt={data.copy.contact.officeAlt}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#0a2a6a]/60" />

            <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-8">
              <h3 className="max-w-[230px] text-2xl font-bold leading-tight text-white sm:text-[25px]">
                {data.content.contact.locationCardTitle[0]}
                <br />
                {data.content.contact.locationCardTitle[1]}
                <br />
                {data.content.contact.locationCardTitle[2]}
              </h3>

              <div className="my-5 h-[2px] w-10 bg-white" />

              <p className="text-base leading-6 text-white">
                {data.copy.contact.locationTagline[0]}
                <br />
                {data.copy.contact.locationTagline[1]}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default OurLocation;

