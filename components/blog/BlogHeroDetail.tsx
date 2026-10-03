import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronRight, Clock3, FolderOpen, UserRound } from "lucide-react";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";


const BlogHeroDetail = () => {
  return (
    <Section className="w-full bg-white pt-8 sm:pt-10 lg:pt-8 pb-10">
      <div className="page-gutter mx-auto max-w-[1350px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_362px] xl:gap-8">
          
          
          <article className="min-w-0">

           
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-[12px] text-[#31558f] sm:gap-x-5 sm:text-[14px]">
              <div className="group flex items-center gap-2">
                <CalendarDays size={22} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{data.copy.blogDetail.date}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <UserRound size={22} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{data.copy.blogDetail.author}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <FolderOpen size={22} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{data.copy.blogDetail.category}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#dce6f3] sm:block" />

              <div className="group flex items-center gap-2">
                <Clock3 size={22} className="rounded-full bg-[#eaf3ff] p-1 text-[#1769e0] transition-colors group-hover:bg-[#1769e0] group-hover:text-white" />
                <span>{data.copy.blogDetail.readTime}</span>
              </div>
            </div>

            
            <div className="relative mb-4 h-[230px] overflow-hidden rounded-md sm:h-[260px] md:h-[300px] lg:h-[280px]">
              <Image
                src="/blogdetail.png"
                alt={data.copy.blogDetail.heroAlt}
                fill
                priority
                className="object-cover"
              />
            </div>

            
            <p className="mb-4 text-[14px] leading-[1.65] text-[#4a5a85] sm:text-[16px] sm:leading-[1.6]">
              {data.copy.blogDetail.intro}
            </p>

           
            <h2 className="mb-1 mt-2 text-lg font-bold text-[#0b1b4d] sm:text-[23px]">
              {data.content.blog.detail.articleTitles[0]}
            </h2>

            <p className="mb-3 text-[14px] leading-[1.65] text-[#4a5a85] sm:text-[16px] sm:leading-[1.6]">
              {data.copy.blogDetail.sections[0]}
            </p>

           
            <div className="mb-4 rounded-md bg-[#e8f1ff] px-5 py-3 sm:px-6">
              <div className="flex items-center gap-4">
                <div className="h-9 pt-3 font-serif text-[64px] font-bold leading-none text-[#5b9bff]">
                  {data.copy.common.quoteMark}
                </div>

                <p className="pt-1 text-[14px] font-semibold leading-5 text-[#0b1b4d] sm:text-[15px]">
                  {data.copy.blogDetail.quote}
                </p>
              </div>
            </div>

            
            <h2 className="mb-1 mt-2 text-lg font-bold text-[#0b1b4d] sm:text-[23px]">
              {data.content.blog.detail.articleTitles[1]}
            </h2>

            <p className="mb-3 text-[14px] leading-[1.65] text-[#4a5a85] sm:text-[16px] sm:leading-[1.6]">
              {data.copy.blogDetail.sections[1]}
            </p>

            
            <h2 className="mb-1 mt-2 text-lg font-bold text-[#0b1b4d] sm:text-[23px]">
              {data.content.blog.detail.articleTitles[2]}
            </h2>

            <p className="mb-3 text-[14px] leading-[1.65] text-[#4a5a85] sm:text-[16px] sm:leading-[1.6]">
              {data.copy.blogDetail.sections[2]}
            </p>

            
            <h2 className="mb-1 mt-2 text-lg font-bold text-[#0b1b4d] sm:text-[23px]">
              {data.content.blog.detail.articleTitles[3]}
            </h2>

            <p className="mb-3 text-[14px] leading-[1.65] text-[#4a5a85] sm:text-[16px] sm:leading-[1.6]">
              {data.copy.blogDetail.sections[3]}
            </p>

            
            <p className="border-b border-[#dce6f3] pb-5 text-[14px] leading-[1.65] text-[#4a5a85] sm:text-[16px] sm:leading-[1.6]">
              {data.copy.blogDetail.conclusion}
            </p>
          </article>

         
          <aside className="space-y-4">


            <div className="rounded-lg bg-[#f4f8fd] p-4">
              <h3 className="mb-4 text-[18px] font-bold text-[#0b1b4d] sm:text-[20px]">
                {data.content.blog.detail.recentTitle}
              </h3>

              <div className="space-y-4">

                <Link
                  href="/service"
                  className="group flex gap-3"
                >
                  <div className="relative h-[72px] w-24 shrink-0 overflow-hidden rounded-md sm:h-[88px] sm:w-[144px]">
                    <Image
                      src="/blog1.png"
                      alt={data.copy.blogDetail.recentImageAlts[0]}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold leading-[1.3] text-[#0b1b4d] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[0].title}
                    </h4>

                    <p className="mt-2 text-[12px] text-[#3982e8] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[0].date}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/service"
                  className="group flex gap-3"
                >
                  <div className="relative h-[72px] w-24 shrink-0 overflow-hidden rounded-md sm:h-[88px] sm:w-[144px]">
                    <Image
                      src="/blog2.png"
                      alt={data.copy.blogDetail.recentImageAlts[1]}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold leading-[1.3] text-[#0b1b4d] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[1].title}
                    </h4>

                    <p className="mt-2 text-[12px] text-[#3982e8] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[1].date}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/service"
                  className="group flex gap-3"
                >
                  <div className="relative h-[72px] w-24 shrink-0 overflow-hidden rounded-md sm:h-[88px] sm:w-[144px]">
                    <Image
                      src="/blog3.png"
                      alt={data.copy.blogDetail.recentImageAlts[2]}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold leading-[1.3] text-[#0b1b4d] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[2].title}
                    </h4>

                    <p className="mt-2 text-[12px] text-[#3982e8] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[2].date}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/service"
                  className="group flex gap-3"
                >
                  <div className="relative h-[72px] w-24 shrink-0 overflow-hidden rounded-md sm:h-[88px] sm:w-[144px]">
                    <Image
                      src="/service.png"
                      alt={data.copy.blogDetail.recentImageAlts[3]}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold leading-[1.3] text-[#0b1b4d] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[3].title}
                    </h4>

                    <p className="mt-2 text-[12px] text-[#3982e8] xl:text-[14px]">
                      {data.content.blog.detail.recentPosts[3].date}
                    </p>
                  </div>
                </Link>

              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-[#0a4cb8] p-6 text-white">
              <Image src="/contact/office.png" alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a4cb8] via-[#0a4cb8]/90 to-[#0a4cb8]/40" />

              <div className="relative">
                <div className="mb-3 h-[2px] w-8 bg-[#9ccfff]" />

                <p className="mb-1 text-[13px] font-medium text-[#dcecff] sm:text-[14px]">
                  {data.content.blog.detail.adviceEyebrow}
                </p>

                <h3 className="mb-3 text-[22px] font-bold leading-[1.3] sm:text-[24px]">
                  {data.content.blog.detail.adviceTitle[0]}
                  <br />
                  {data.content.blog.detail.adviceTitle[1]}
                  <br />
                  {data.content.blog.detail.adviceTitle[2]}
                </h3>

                <p className="mb-5 max-w-[260px] text-[13px] leading-[1.4] text-[#dcecff] sm:text-[14px]">
                  {data.copy.blogDetail.adviceDescription}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-3 text-[14px] font-semibold sm:text-[15px] text-[#1769e0] transition hover:bg-[#f0f6ff] sm:w-auto"
                >
                  {data.copy.blogDetail.contactCta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-lg bg-[#f4f8fd] p-5 sm:p-6">
              <h3 className="mb-3 text-[18px] font-bold text-[#0b1b4d] sm:text-[20px]">
                {data.content.blog.detail.categoriesTitle}
              </h3>

              <div className="divide-y divide-[#dce6f3]">
                {data.blog.categories.map((category) => (
                  <Link
                    key={category}
                    href="/investment"
                    className="group -mx-2 flex items-center justify-between rounded-md px-2 py-2.5 text-[13px] text-[#0b1b4d] sm:text-[14px] transition-colors hover:bg-[#1769e0] hover:text-white"
                  >
                    <span>{category}</span>
                    <ChevronRight size={14} className="text-[#0b1b4d] transition-colors group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </Section>
  );
};

export default BlogHeroDetail;

