import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";

const Policy = () => {
  return (
    <Section className="w-full bg-white pt-8 md:pt-12 pb-10">
      <div className="page-gutter mx-auto max-w-[1184px]">
        
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-8 bg-[#0052cc] sm:w-12" />
            <span className="text-[13px] font-semibold uppercase tracking-widest text-[#3b5a99]">
              {data.content.privacyPolicy.eyebrow}
            </span>
            <span className="h-[1.5px] w-8 bg-[#0052cc] sm:w-12" />
          </div>

          <h2 className="mt-2 text-3xl font-bold text-[#0b1b4d] sm:text-[38px] md:text-[44px]">
            {data.content.privacyPolicy.titleFirst} <span className="text-[#0052cc]">{data.content.privacyPolicy.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[900px] text-[14px] leading-[1.6] text-[#4a5a85] sm:text-[17px]">
            {data.copy.privacyPolicy.description}
          </p>
        </div>

        {/* Policy Items List with reduced spacing */}
        <div className="mt-4 divide-y divide-[#eaf0fa] sm:mt-6">
          {data.policySections.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 py-3 sm:gap-[46px]"
            >
              {/* Circle Badge */}
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#e8f1ff] font-bold text-[14px] text-[#0052cc] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 hover:text-white">
                {item.id}
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-[17px] font-bold text-[#0b1b4d] sm:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-[1.5] text-[#4a5a85] sm:text-[16px]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}

          {/* Item 09: Contact Us */}
          <div className="flex items-start gap-3 py-3 sm:gap-[46px]">
            <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#e8f1ff] font-bold text-[#0052cc] text-[14px]">
              {data.copy.privacyPolicy.contactId}
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="text-[17px] font-bold text-[#0b1b4d] sm:text-[19px]">
                {data.content.privacyPolicy.contactTitle}
              </h3>
              <p className="mt-1 text-[13.5px] leading-[1.5] text-[#4a5a85] sm:text-[16px]">
                {data.copy.privacyPolicy.contactDescription}
              </p>

              {/* Inline Contact Details */}
              <div className="mt-2 flex flex-col items-start gap-2 text-[14px] font-medium sm:text-[15px] text-[#0052cc] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-14">
                <a
                  href="mailto:primecore@gmail.com"
                  className="flex min-w-0 items-center gap-1.5 hover:underline"
                >
                  <Mail size={17} className="text-[#0052cc]" />
                  <span className="break-all">{data.copy.common.email}</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-1.5 hover:underline"
                >
                  <Phone size={17} className="text-[#0052cc]" />
                  <span>{data.copy.common.phone}</span>
                </a>

                <div className="flex min-w-0 items-start gap-1.5 text-[#4a5a85] sm:items-center">
                  <MapPin size={17} className="text-[#0052cc] shrink-0" />
                  <span className="break-words">{data.copy.common.addressInline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Policy;

