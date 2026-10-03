import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";

type BlogItem = {
  id: number;
  date: string;
  month: string;
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

export const BlogHeader = () => (
  <div className="mb-10 text-center">
    <div className="mb-3 flex items-center justify-center gap-4">
      <span className="h-[2px] w-[48px] bg-[#1b66e6]" />
      <span className="text-[14px] font-semibold tracking-[2.5px] text-[#1b66e6]">{data.content.blog.headerEyebrow}</span>
      <span className="h-[2px] w-[48px] bg-[#1b66e6]" />
    </div>
    <h2 className="mx-auto max-w-[1000px] text-[28px] font-bold leading-[1.2] tracking-[-0.5px] text-[#0b2454] sm:text-[38px] lg:text-[44px]">
      {data.content.blog.headerTitle} <span className="text-[#1b66e6]">{data.content.blog.headerHighlight}</span>
    </h2>
    <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-[1.5] text-[#3d4f6d] sm:text-[17px]">
      {data.copy.home.blogsDescription}
    </p>
  </div>
);

export const BlogCard = ({ blog }: { blog: BlogItem }) => (
  <Link
    href="/blogdetail"
    className="group flex flex-col overflow-hidden rounded-[14px] border border-[#e3eaf3] bg-white p-[7px] shadow-[0_2px_12px_rgba(20,60,120,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,75,160,0.10)]"
  >
    <div className="relative h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[162px] lg:h-[162px]">
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
      />
      <div className="absolute left-[14px] top-[14px] flex h-[66px] w-[74px] origin-center flex-col items-center justify-center rounded-[10px] bg-[#0b5ae6] text-white shadow-md transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105">
        <span className="text-[26px] font-bold leading-none">{blog.date}</span>
        <span className="mt-1 text-[11px] font-medium uppercase">
          {blog.month} {blog.year}
        </span>
      </div>
    </div>

    <div className="flex flex-1 flex-col px-[13px] pb-5 pt-4">
      <div>
        <span className="inline-flex rounded-full bg-[#e8f0fc] px-3 py-[4px] text-[11px] font-semibold uppercase tracking-[0.2px] text-[#1b66e6]">
          {blog.category}
        </span>
      </div>
      <h3 className="mt-3 pr-6 text-[22px] font-bold leading-[27px] tracking-[-0.3px] text-[#0b2454]">{blog.title}</h3>
      <p className="mt-3 text-[15px] leading-[21px] text-[#3d4f6d]">{blog.description}</p>
      <span className="mt-auto flex items-center gap-3 pt-5 text-[14px] font-semibold text-[#1b66e6]">
        {data.copy.common.readMore}
        <ArrowRight size={22} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

const BlogsSection = () => (
  <Section className="w-full bg-white py-10 sm:py-12 lg:pb-16 lg:pt-12">
    <div className="page-gutter mx-auto max-w-[1260px]">
      <BlogHeader />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.home.blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  </Section>
);

export default BlogsSection;
