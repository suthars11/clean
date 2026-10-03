
"use client";

import React from "react";
import Image from "next/image";
import { data } from "@/data/data";
import type { Review as ReviewType } from "@/data/types";
import Section from "@/components/ui/Section";


interface ReviewCardProps {
  review: ReviewType;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="relative flex h-full flex-col rounded-[14px] border border-[#e6edf6] bg-white p-5 shadow-[0_2px_10px_rgba(20,60,120,0.04)] transition-shadow duration-300 hover:shadow-md sm:p-6">

      {/* Quote Icon */}
      <div className="pointer-events-none absolute right-5 top-5 text-[#dbe7f8] sm:right-7 sm:top-7">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* User Info */}
      <div className="flex items-start gap-3 sm:gap-4">

        {/* Avatar */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:h-[68px] sm:w-[68px]">
          <Image
            src={review.image}
            alt={review.name}
            fill
            sizes="68px"
            className="object-cover"
          />
        </div>

        {/* Name + Location + Rating */}
        <div className="min-w-0 pr-8">
          <h3 className="text-[17px] font-bold text-[#0b2454] sm:text-[18px]">
            {review.name}
          </h3>

          <p className="text-[13px] text-[#6b7b93] sm:text-[14px]">
            {review.location}
          </p>

          {/* Stars */}
          <div className="mt-2 flex gap-1">
            {Array.from({ length: review.rating }).map((_, index) => (
              <svg
                key={index}
                className="h-4 w-4 fill-[#f7a707] sm:h-[18px] sm:w-[18px]"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-[15px] leading-[1.65] text-[#3d4f6d] sm:text-[16px]">
        {data.copy.testimonials.quoteMark}{review.text}{data.copy.testimonials.quoteMark}
      </p>
    </div>
  );
};

const Review = () => {
  return (
    <Section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        pt-10
        pb-10
        sm:pt-12
        sm:pb-12
        md:pt-14
        md:pb-14
        lg:pt-14
        lg:pb-14
      "
    >

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="page-gutter relative mx-auto w-full max-w-[1260px]">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-[760px] text-center sm:mb-12">

          {/* Small Heading */}
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">
            <div className="h-[2px] w-12 bg-[#1b66e6]" />

            <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#1b66e6] sm:text-[13px]">
              {data.content.testimonials.eyebrow}
            </span>

            <div className="h-[2px] w-12 bg-[#1b66e6]" />
          </div>

          {/* Main Heading */}
          <h2 className="mb-3 text-[32px] font-bold tracking-tight text-[#0b2454] sm:mb-4 sm:text-[44px] lg:text-[50px]">
            {data.content.testimonials.titleFirst}{" "}
            <span className="text-blue-600">
              {data.content.testimonials.titleHighlight}
            </span>
          </h2>

          {/* Description */}
          <p className="text-[15px] leading-[1.6] text-[#5d6f8c] sm:text-[17px]">
            {data.copy.testimonials.description}
          </p>
        </div>

        {/* ================= REVIEWS GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {data.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>
      </div>
    </Section>
  );
};

export default Review;

