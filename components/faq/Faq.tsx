
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";

// ================= FAQ COMPONENT =================
const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section className="relative w-full overflow-hidden bg-white pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-12 lg:pb-12">
      <div className="page-gutter mx-auto w-full max-w-[1350px]">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-[2px] w-10 bg-blue-600" />

            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#3b5a99] sm:text-[13px]">
              {data.content.faq.eyebrow}
            </span>

            <div className="h-[2px] w-10 bg-blue-600 sm:w-12" />
          </div>

          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#0b1b4d] sm:text-[40px] lg:text-[47px]">
            {data.content.faq.titleFirst}{" "}
            <span className="text-blue-600">{data.content.faq.titleHighlight}</span>
          </h2>

          <p className="mx-auto max-w-[770px] text-[14px] leading-[1.6] text-[#4a5a85] sm:text-[18px]">
            {data.copy.faq.description}
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_390px] lg:gap-[13px]">

          {/* ================= LEFT: FAQ ================= */}
          <div className="flex flex-col gap-2.5">
            {data.faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                    isOpen
                      ? "border-[#cfe0ff] bg-[#eef4ff]"
                      : "border-[#e6ecf7] bg-[#fafcff] hover:border-gray-200"
                  }`}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-4 lg:py-3"
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                      {/* NUMBER */}
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors sm:h-[42px] sm:w-[42px] ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {faq.number}
                      </div>

                      {/* QUESTION */}
                      <h3
                        className={`text-sm font-medium sm:text-[17px] ${
                          isOpen ? "text-[#0b1b4d]" : "text-[#0b1b4d]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* PLUS / MINUS */}
                    <div className="shrink-0">
                      {isOpen ? (
                        <svg
                          className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 pl-16 text-[13px] leading-[1.7] text-[#4a5a85] sm:text-[14px] sm:pr-5 sm:pl-[74px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-4">

            {/* ================= CONTACT CARD ================= */}
            <div className="rounded-xl bg-[#f3f7ff] p-5 sm:p-7">
              <h3 className="mb-2 text-xl font-bold text-[#0b1b4d] sm:text-[28px]">
                {data.content.faq.contactTitleFirst}{" "}
                <span className="text-blue-600">{data.content.faq.contactTitleHighlight}</span>
              </h3>

              <p className="mb-6 text-[14px] leading-[1.6] text-[#4a5a85] sm:text-[15px]">
                {data.copy.faq.contactDescription}
              </p>

              {/* CONTACT METHODS */}
              <div className="mb-7 flex flex-col gap-5">

                {/* CALL */}
                <div className="flex items-center gap-4">
                  <div className="group flex h-14 w-14 shrink-0 sm:h-[68px] sm:w-[68px] items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-[#0b1b4d]">
                      {data.copy.faq.contactMethods[0]}
                    </span>
                    <span className="text-[14px] text-[#4a5a85] sm:text-[15px]">
                      {data.copy.common.phone}
                    </span>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <div className="group flex h-14 w-14 shrink-0 sm:h-[68px] sm:w-[68px] items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <span className="text-[15px] font-bold text-[#0b1b4d]">
                      {data.copy.faq.contactMethods[1]}
                    </span>
                    <span className="break-all text-[14px] text-[#4a5a85] sm:text-[15px]">
                      {data.copy.common.email}
                    </span>
                  </div>
                </div>

                {/* LIVE CHAT */}
                <div className="flex items-center gap-4">
                  <div className="group flex h-14 w-14 shrink-0 sm:h-[68px] sm:w-[68px] items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-[#0b1b4d]">
                      {data.copy.faq.contactMethods[2]}
                    </span>
                    <span className="text-[14px] text-[#4a5a85] sm:text-[15px]">
                      {data.copy.faq.liveChatDescription}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-blue-700 sm:px-6"
              >
                {data.copy.faq.contactCta}

                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* ================= PROMO IMAGE CARD ================= */}
            <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-gray-900 sm:min-h-[340px] lg:min-h-[366px]">

              <Image
                src="/faq.png"
                alt={data.copy.faq.imageAlt}
                fill
                priority
                className="object-cover object-center opacity-100"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              {/* DARK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/40 to-transparent" />

              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-7">
                <h3 className="mb-4 max-w-[150px] text-2xl font-bold leading-tight text-white sm:text-[28px]">
                  {data.content.faq.promoTitle}
                </h3>

                <div className="mb-4 h-[2px] w-8 bg-blue-500" />

                <p className="max-w-[150px] text-[13px] leading-5 text-gray-200">
                  {data.copy.faq.imageDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;



