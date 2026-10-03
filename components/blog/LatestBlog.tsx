import { data } from "@/data/data";
import { BlogCard, BlogHeader } from "@/components/home/BlogsSection";
import Section from "@/components/ui/Section";

const LatestBlog = () => (
  <Section className="w-full bg-white py-10 sm:py-12 lg:py-14">
    <div className="page-gutter mx-auto max-w-[1260px]">
      <BlogHeader />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6">
        {data.blog.latest.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  </Section>
);

export default LatestBlog;
