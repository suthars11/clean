
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data";
import { serviceIcons } from "@/data/icons";
import Section from "@/components/ui/Section";


const ServiceGoal = () => {
  return (
    <Section className="w-full bg-white pt-12 sm:pt-14 lg:pt-16">
      <div className="page-gutter mx-auto max-w-7xl">

        <div className="mb-9 text-center sm:mb-11 lg:mb-12">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-[68px]" />

            <span className="text-sm font-semibold tracking-wide text-[#6682ad]">
              {data.content.service.goalEyebrow}
            </span>

            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-[68px]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102e65] sm:text-4xl lg:text-[42px]">
            {data.content.service.goalTitleFirst}{" "}
            <span className="text-[#1769e0]">
              {data.content.service.goalTitleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#62799e] sm:text-base sm:leading-7">
            {data.copy.service.serviceGoalDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {data.services.list.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e2eaf5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                />
              </div>

              <div className="relative flex flex-1 flex-col px-5 pb-5 pt-12">

                <div className="absolute -top-8 left-5 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-white bg-[#e8f2ff] text-[#1769e0] shadow-sm transition-colors duration-200 hover:bg-[#1769e0] hover:text-white">
                  {serviceIcons[service.iconKey]}
                </div>

                <h3 className="min-h-12 text-lg font-bold leading-6 text-[#102e65]">
                  {service.title}
                </h3>

                <p className="mt-2 min-h-[68px] flex-1 text-sm leading-6 text-[#61799e]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-4 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#1769e0] transition hover:gap-4"
                >
                  {data.copy.common.readMore}

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 7L19 12L14 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}

        </div>
      </div>
    </Section>
  );
};

export default ServiceGoal;