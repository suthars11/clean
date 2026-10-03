'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Calendar, ArrowRight, Link as LinkIcon, GraduationCap, Check } from "lucide-react";
import { data } from "@/data/data";
import CountUp from "@/components/ui/CountUp";
import Section from "@/components/ui/Section";

// Custom SVGs for exact Brand Social Icons (LinkedIn, Facebook, X/Twitter) - resized to w-5 h-5
const LinkedinIcon = () => (
  <svg className="w-[18px] h-[18px] fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-[18px] h-[18px] fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TwitterXIcon = () => (
  <svg className="w-[18px] h-[18px] fill-[#0B1E48] transition-colors duration-200 group-hover:fill-white" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function TeamDetail() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined') {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const H = ({ children }: { children: React.ReactNode }) => (
    <>
      <h2 className="text-[20px] font-bold leading-tight text-[#0B1E48] sm:text-[22px]">{children}</h2>
      <div className="mb-5 mt-2 h-0.5 w-[26px] bg-[#1068e8]"></div>
    </>
  )
  const circleBtn =
    'group flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#dbe3f0] bg-white transition-all hover:border-blue-600 hover:bg-blue-600'

  return (
    <Section className="page-gutter mx-auto w-full max-w-[1350px] bg-white pb-14 pt-8 font-sans text-slate-800 antialiased">
      {/* TOP ROW */}
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-[30%_1fr_24%] lg:gap-10">
        <div className="min-w-0 overflow-hidden rounded-xl bg-[#F1F6FE]">
          <div className="relative h-[340px] w-full sm:h-[400px] lg:h-[340px]">
            <Image src="/marry.png" alt={data.copy.team.detailImageAlt} fill className="object-cover object-top" priority />
          </div>
          <div className="grid grid-cols-3 divide-x divide-[#d5e1f3] py-4 text-center">
            {data.counters.teamStats.map(({ value: n, lines: [a, b] }) => (
              <div key={b} className="px-1">
                <div className="text-[22px] font-bold leading-none text-[#0B1E48]"><CountUp value={n} /></div>
                <div className="mt-1.5 text-[12px] leading-[15px] text-[#475569]">
                  {a}
                  <br />
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:border-r lg:border-[#e5eaf3] lg:pr-8">
          <h1 className="text-[32px] font-bold leading-tight text-[#0B1E48] lg:text-[40px]">{data.content.team.detailName}</h1>
          <p className="mt-1 text-[18px] font-medium text-[#1068e8] lg:text-[20px]">{data.content.team.detailRole}</p>
          <div className="mb-4 mt-3 h-0.5 w-[26px] bg-[#1068e8]"></div>
          <p className="mb-6 text-[14px] leading-[22px] text-[#475569]">
            {data.copy.team.detailDescription}
          </p>
          <div className="space-y-4">
            {[
              [Phone, data.copy.common.phone],
              [Mail, data.copy.common.email],
              [MapPin, data.copy.common.location],
            ].map(([Ic, t]) => {
              const I = Ic as typeof Phone
              return (
                <div key={t as string} className="flex items-center gap-3 text-[14px] text-[#334155]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#1068e8] text-white">
                    <I className="h-4 w-4 fill-current" />
                  </span>
                  <span className="min-w-0 break-all">{t as string}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="min-w-0 md:col-span-2 lg:col-span-1">
          <h3 className="mb-4 text-[15px] font-bold text-[#0B1E48]">{data.content.team.shareTitle}</h3>
          <div className="flex flex-wrap items-center gap-3">
            <button aria-label={data.copy.team.socialLabels[0]} className={circleBtn}><LinkedinIcon /></button>
            <button aria-label={data.copy.team.socialLabels[1]} className={circleBtn}><FacebookIcon /></button>
            <button aria-label={data.copy.team.socialLabels[2]} className={circleBtn}><TwitterXIcon /></button>
            <button onClick={handleCopyLink} aria-label={data.copy.team.socialLabels[3]} className={circleBtn}>
              {copied ? <Check className="h-5 w-5 text-green-600" /> : <LinkIcon className="h-5 w-5 text-[#0B1E48] group-hover:text-white" />}
            </button>
          </div>
          <div className="mt-8 rounded-xl bg-[#F1F6FE] p-6">
            <Calendar className="mb-4 h-8 w-8 text-[#1068e8]" strokeWidth={1.5} />
            <h3 className="mb-1 text-[20px] font-bold text-[#0B1E48]">{data.content.team.connectTitle}</h3>
            <p className="mb-5 text-[14px] leading-[20px] text-[#475569]">{data.copy.team.connectDescription}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#1068e8] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-blue-700">
              {data.copy.team.contactCta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* MIDDLE ROW */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr] lg:gap-0">
        <div className="lg:border-r lg:border-[#e5eaf3] lg:pr-12">
          <H>{data.content.team.detailSections[0]}</H>
          <p className="mb-4 text-[14px] leading-[24px] text-[#475569]">
            {data.copy.team.aboutDescription}
          </p>
          <p className="text-[14px] leading-[24px] text-[#475569]">
            {data.copy.team.biography}
          </p>
        </div>
        <div className="lg:pl-12">
          <H>{data.content.team.detailSections[1]}</H>
          <div className="space-y-4">
            {data.team.details.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1.5 flex justify-between text-[14px] font-semibold text-[#0B1E48]">
                  <span>{skill.name}</span>
                  <span className="font-medium">{skill.percentage}%</span>
                </div>
                <div className="h-[7px] w-full overflow-hidden rounded-full bg-[#e6eefb]">
                  <div className="h-full rounded-full bg-[#1068e8] transition-all duration-500" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="mt-10 grid grid-cols-1 items-stretch gap-8 border-t border-[#e5eaf3] pt-8 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1fr] lg:gap-8">
        <div>
          <H>{data.content.team.detailSections[2]}</H>
          <div className="space-y-4">
            {data.team.details.expertise.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#E5EFFD]">
                  <item.icon className="h-5 w-5 text-[#1068e8]" strokeWidth={1.5} />
                </span>
                <span className="text-[14px] text-[#334155]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl bg-[#F1F6FE] p-6 lg:p-7">
          <div>
            <div className="font-serif text-[64px] font-bold leading-[0.8] text-[#1068e8]">{data.copy.common.quoteMark}</div>
            <p className="mt-3 text-[20px] font-medium leading-[30px] text-[#0B1E48]">
              {data.copy.team.quote}
            </p>
          </div>
          <div className="mt-6">
            <div className="mb-3 h-0.5 w-[26px] bg-[#1068e8]"></div>
            <p className="text-[14px] font-bold text-[#0B1E48]">{data.content.team.detailName}</p>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <H>{data.content.team.detailSections[3]}</H>
          <div className="relative -mt-1 ml-1 space-y-5 border-l-2 border-[#1068e8] pl-5">
            {data.team.details.experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-start gap-4">
                <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#1068e8]"></span>
                <span className="w-24 shrink-0 text-[13px] text-[#64748b]">{exp.period}</span>
                <div>
                  <div className="text-[14px] font-semibold text-[#0B1E48]">{exp.company}</div>
                  <div className="text-[13px] text-[#64748b]">{exp.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4 border-t border-[#e5eaf3] pt-5">
            <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#E5EFFD] text-[#1068e8] transition-colors duration-200 hover:bg-[#1068e8] hover:text-white">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <div className="text-[14px] font-semibold text-[#0B1E48]">{data.copy.team.education[0]}</div>
              <div className="text-[13px] text-[#64748b]">{data.copy.team.education[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
