"use client";

import React from "react";
import {
  User,
  Mail,
  Phone,
  Grid2X2,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  MapPin,
  Headphones,
} from "lucide-react";
import Section from "@/components/ui/Section";
import { data } from "@/data/data";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <Section className="page-gutter w-full bg-white pt-8">
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.85fr] lg:gap-0 xl:grid-cols-[716px_1fr]">

          <div className="rounded-xl bg-[#f5f8ff] p-5 sm:p-8 lg:p-7">
            
            <div className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[12px] font-semibold tracking-wide text-[#2455a4] sm:text-[13px]">
                  {data.content.contact.formEyebrow}
                </span>

                <span className="h-[2px] w-14 bg-[#3478e5]" />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-[35px]">
                {data.content.contact.formTitleFirst}{" "}
                <span className="text-[#1265e8]">{data.content.contact.formTitleHighlight}</span>
              </h2>

              <p className="mt-2 text-[14px] leading-6 text-[#4a5a85] sm:text-[15px]">
                {data.copy.contact.formIntro}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="relative">
                  <User
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder={data.copy.consultation.placeholders.name}
                    required
                    className="h-[54px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-[14px] text-[#24385f] outline-none transition placeholder:text-[#4a5a85] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder={data.copy.consultation.placeholders.email}
                    required
                    className="h-[54px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-[14px] text-[#24385f] outline-none transition placeholder:text-[#4a5a85] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="relative">
                  <Phone
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder={data.copy.consultation.placeholders.phone}
                    required
                    className="h-[54px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-[14px] text-[#24385f] outline-none transition placeholder:text-[#4a5a85] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>

                <div className="relative">
                  <Grid2X2
                    size={18}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <select
                    name="interest"
                    defaultValue=""
                    className="h-[54px] w-full appearance-none rounded-md border border-[#dce7f7] bg-white pl-12 pr-11 text-[14px] text-[#5d6e89] outline-none transition focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  >
                    <option value="" disabled>
                      {data.copy.contact.interestLabel}
                    </option>
                    <option value="general">{data.copy.contact.interests[0]}</option>
                    <option value="business">{data.copy.contact.interests[1]}</option>
                    <option value="support">{data.copy.contact.interests[2]}</option>
                    <option value="other">{data.copy.contact.interests[3]}</option>
                  </select>

                  <ChevronDown
                    size={19}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#587096]"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare
                  size={19}
                  strokeWidth={1.8}
                  className="absolute left-4 top-4 text-[#7184a7]"
                />

                <textarea
                  name="message"
                  placeholder={data.copy.contact.messagePlaceholder}
                  required
                  rows={6}
                  className="min-h-[150px] w-full resize-y rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 pt-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#4a5a85] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10 sm:min-h-[186px]"
                />
              </div>

              <button
                type="submit"
                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-md bg-[#1168ed] px-7 text-[15px] font-semibold text-white transition hover:bg-[#095bd5] sm:w-[268px]"
              >
                {data.copy.contact.sendMessage}

                <ArrowRight
                  size={20}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          <div className="bg-white p-1 sm:p-2 lg:ml-6 lg:border-l lg:border-[#e6ecf7] lg:py-2 lg:pl-9 lg:pr-0 xl:pl-[44px]">

            <div className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[12px] font-semibold tracking-wide text-[#2455a4] sm:text-[13px]">
                  {data.content.contact.informationEyebrow}
                </span>

                <span className="h-[2px] w-14 bg-[#3478e5]" />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#0b1b4d] sm:text-[35px]">
                {data.content.contact.informationTitleFirst}{" "}
                <span className="text-[#1265e8]">{data.content.contact.informationTitleHighlight}</span>
              </h2>

              <p className="mt-2 max-w-[470px] text-[14px] leading-6 text-[#4a5a85] sm:text-[15px]">
                {data.copy.contact.informationDescription}
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[72px] sm:w-[72px]">
                  <Phone
                    size={26}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-bold text-[#0b1b4d] sm:text-[18px]">
                    {data.content.contact.channels[0]}
                  </h3>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-[15px] font-medium text-[#0b1b4d] sm:text-[17px] hover:text-[#1265e8]"
                  >
                    {data.copy.common.phone}
                  </a>

                  <p className="mt-1 text-[13px] text-[#4a5a85] sm:text-[14px]">
                    {data.copy.contact.channelHours}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[72px] sm:w-[72px]">
                  <Mail
                    size={26}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-bold text-[#0b1b4d] sm:text-[18px]">
                    {data.content.contact.channels[1]}
                  </h3>

                  <a
                    href="mailto:primecore@gmail.com"
                    className="mt-1 block break-all text-[15px] font-medium text-[#0b1b4d] sm:text-[16px] hover:text-[#1265e8]"
                  >
                    {data.copy.common.email}
                  </a>

                  <p className="mt-1 text-[13px] text-[#4a5a85] sm:text-[14px]">
                    {data.copy.contact.responseTime}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[72px] sm:w-[72px]">
                  <MapPin
                    size={26}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-bold text-[#0b1b4d] sm:text-[18px]">
                    {data.content.contact.channels[2]}
                  </h3>

                  <p className="mt-1 text-[15px] leading-6 text-[#0b1b4d] sm:text-[16px]">
                    {data.copy.contact.addressFirstLine}
                    <br />
                    {data.copy.contact.addressSecondLine}
                  </p>

                  <p className="mt-1 text-[13px] text-[#4a5a85] sm:text-[14px]">
                    {data.copy.contact.channelHours}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[72px] sm:w-[72px]">
                  <Headphones
                    size={26}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-bold text-[#0b1b4d] sm:text-[18px]">
                    {data.content.contact.channels[3]}
                  </h3>

                  <p className="mt-1 text-[15px] text-[#0b1b4d]">
                    {data.copy.contact.liveChatDescription}
                  </p>

                  <button
                    type="button"
                    className="group mt-2 flex items-center gap-2 text-[14px] font-semibold text-[#1265e8]"
                  >
                    {data.copy.contact.startLiveChat}

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;

