"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Mail, Phone, LayoutGrid, Calendar, Clock, MessageSquare, ArrowRight, Lock, Users, MapPin, ShieldCheck } from "lucide-react";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";

const Consultation = () => {
  return (
    <Section className="w-full bg-white pt-8 sm:pt-10 lg:pt-10 pb-12">
      <div className="page-gutter mx-auto max-w-[1350px]">
        
        {/* ================= SECTION 1: FORM & RIGHT CARD ================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px] xl:grid-cols-[750px_1fr] lg:gap-7">
          
          {/* LEFT: FORM CONTAINER */}
          <div className="flex flex-col justify-between rounded-xl bg-[#f5f8ff] p-5 sm:p-7">
            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold tracking-[1px] uppercase text-[#3b5a99] sm:text-[13px]">
                  {data.content.consultation.eyebrow}
                </span>
                <span className="h-[2px] w-10 bg-[#1a73e8]" />
              </div>

              {/* Title */}
              <h2 className="mt-2 text-[26px] font-bold text-[#0b1b4d] sm:text-[32px] lg:text-[37px] leading-[1.15]">
                {data.content.consultation.titleFirst} <span className="text-[#1a73e8]">{data.content.consultation.titleHighlight}</span> {data.content.consultation.titleLast}
              </h2>

              <p className="mt-2 text-[14px] text-[#4a5a85] sm:text-[16px]">
                {data.copy.consultation.intro}
              </p>

              {/* Form Fields Grid */}
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="text"
                      placeholder={data.copy.consultation.placeholders.name}
                      className="w-full h-[54px] rounded-md border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#0b1b4d] placeholder-[#4a5a85] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="email"
                      placeholder={data.copy.consultation.placeholders.email}
                      className="w-full h-[54px] rounded-md border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#0b1b4d] placeholder-[#4a5a85] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="tel"
                      placeholder={data.copy.consultation.placeholders.phone}
                      className="w-full h-[54px] rounded-md border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#0b1b4d] placeholder-[#4a5a85] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Select Consultation Type */}
                  <div className="relative">
                    <LayoutGrid className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <select className="w-full h-[54px] rounded-md border border-[#e2e8f0] bg-white py-3 pl-11 pr-8 text-[14px] text-[#4a5a85] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] appearance-none cursor-pointer">
                      <option value="">{data.copy.consultation.typeLabel}</option>
                      <option value="financial">{data.copy.consultation.types[0]}</option>
                      <option value="investment">{data.copy.consultation.types[1]}</option>
                      <option value="tax">{data.copy.consultation.types[2]}</option>
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#8fa0b5]" />
                  </div>

                  {/* Preferred Date */}
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      placeholder={data.copy.consultation.placeholders.date}
                      className="w-full h-[54px] rounded-md border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#0b1b4d] placeholder-[#4a5a85] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <select className="w-full h-[54px] rounded-md border border-[#e2e8f0] bg-white py-3 pl-11 pr-8 text-[14px] text-[#4a5a85] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] appearance-none cursor-pointer">
                      <option value="">{data.copy.consultation.timeLabel}</option>
                      <option value="morning">{data.copy.consultation.times[0]}</option>
                      <option value="afternoon">{data.copy.consultation.times[1]}</option>
                      <option value="evening">{data.copy.consultation.times[2]}</option>
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#8fa0b5]" />
                  </div>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 text-[#8fa0b5]" size={18} />
                  <textarea
                    rows={4}
                    placeholder={data.copy.consultation.placeholders.goals}
                    className="w-full min-h-[132px] rounded-md border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#0b1b4d] placeholder-[#4a5a85] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0066ff] px-8 py-4 text-[15px] font-semibold sm:text-[16px] text-white transition hover:bg-[#0052cc] sm:w-auto"
                  >
                    {data.copy.consultation.submit}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Privacy Text */}
                <div className="flex items-start gap-2 pt-1 text-[13px] text-[#5e6e82]">
                  <Lock size={14} className="mt-0.5 shrink-0 text-[#091e42]" />
                  <span>{data.copy.consultation.privacy}</span>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: CARD WITH IMAGE & FEATURES */}
          <div>
            <div className="overflow-hidden rounded-xl bg-[#f5f8ff]">
              
              {/* Image Banner Container */}
              <div className="relative h-[220px] w-full sm:h-[250px] lg:h-[320px]">
                <Image
                  src="/consultation.png" 
                  alt={data.copy.consultation.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#031127]/80 via-[#031127]/40 to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute left-6 top-6 max-w-[170px]">
                  <h3 className="text-[22px] font-bold leading-[1.2] text-white sm:text-[27px]">
                    {data.content.consultation.imageTitle}
                  </h3>
                  <div className="mt-3 h-[3px] w-8 bg-[#1a73e8]" />
                </div>
              </div>
              {/* Benefits List */}
              <div className="space-y-4 bg-[#f5f8ff] p-5 sm:px-6 sm:py-5">
                
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-14 w-14 sm:h-[64px] sm:w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1b4d] sm:text-[17px]">{data.content.consultation.featureTitles[0]}</h4>
                    <p className="text-[13px] leading-[1.5] text-[#4a5a85] sm:text-[14.5px]">
                      {data.copy.consultation.featureDescriptions[0]}
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-14 w-14 sm:h-[64px] sm:w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1b4d] sm:text-[17px]">{data.content.consultation.featureTitles[1]}</h4>
                    <p className="text-[13px] leading-[1.5] text-[#4a5a85] sm:text-[14.5px]">
                      {data.copy.consultation.featureDescriptions[1]}
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-14 w-14 sm:h-[64px] sm:w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1b4d] sm:text-[17px]">{data.content.consultation.featureTitles[2]}</h4>
                    <p className="text-[13px] leading-[1.5] text-[#4a5a85] sm:text-[14.5px]">
                      {data.copy.consultation.featureDescriptions[2]}
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-14 w-14 sm:h-[64px] sm:w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1b4d] sm:text-[17px]">{data.content.consultation.featureTitles[3]}</h4>
                    <p className="text-[13px] leading-[1.5] text-[#4a5a85] sm:text-[14.5px]">
                      {data.copy.consultation.featureDescriptions[3]}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ================= SECTION 2: WHAT TO EXPECT ================= */}
        <div className="mt-10 text-center">
          
          {/* Header Subtitle */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-[12px] font-semibold tracking-[1px] uppercase text-[#3b5a99] sm:text-[13px]">
              {data.content.consultation.expectationsEyebrow}
            </span>
            <span className="h-[2px] w-10 bg-[#1a73e8]" />
          </div>

          {/* Title */}
          <h3 className="mt-2 text-[26px] font-bold text-[#0b1b4d] sm:text-[36px]">
            {data.content.consultation.expectationsTitle} <span className="text-[#1a73e8]">{data.content.consultation.expectationsHighlight}</span>
          </h3>

          {/* Description */}
          <p className="mt-2 text-[14px] text-[#4a5a85] sm:text-[16px]">
            {data.copy.consultation.expectationsDescription}
          </p>

          {/* Process Grid: Set default 2 columns (grid-cols-2) for mobile/small screens */}
          <div className="relative mt-12 grid grid-cols-1 gap-x-4 gap-y-8 min-[420px]:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-8 lg:px-6">
            {data.consultationSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  
                  {/* Dashed Connector Line Between Circle Icons (Desktop Only) */}
                  {idx < data.consultationSteps.length - 1 && (
                    <div className="pointer-events-none absolute left-[calc(50%+64px)] right-[calc(-50%+64px)] top-[46px] hidden lg:block border-t-[2px] border-dotted border-[#c0d8f8]" />
                  )}

                  {/* Soft Light-Blue Circular Icon Wrapper */}
                  <div className="group relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef5ff] transition-colors duration-200 hover:bg-[#0066ff] sm:h-[92px] sm:w-[92px]">
                    <Icon size={24} className="text-[#0066ff] transition-colors duration-200 group-hover:text-white sm:hidden" />
                    <Icon size={28} className="hidden text-[#0066ff] transition-colors duration-200 group-hover:text-white sm:block" />
                  </div>

                  {/* Step Title */}
                  <h4 className="mt-3 sm:mt-5 text-[15px] sm:text-[18px] font-bold text-[#0b1b4d]">
                    <span>{step.number} </span>
                    <span>{step.title}</span>
                  </h4>

                  {/* Step Description */}
                  <p className="mt-1 sm:mt-1.5 max-w-[180px] sm:max-w-[230px] text-[12px] sm:text-[15px] leading-[1.4] text-[#4a5a85]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </Section>
  );
};

export default Consultation;


