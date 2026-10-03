import {
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";


const Overview = () => {
  return (
    <Section className="w-full bg-white">
      <div className="page-gutter mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-7 xl:grid-cols-[minmax(0,1fr)_315px]">
          <div>
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_325px]">
              <div className="min-w-0">
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#6883ad]">
                    {data.content.service.overviewEyebrow}
                  </span>

                  <span className="h-[2px] w-20 bg-[#4c9cff]" />
                </div>

                <h1 className="max-w-[540px] text-[34px] font-bold leading-[1.12] text-[#09295f] md:text-[35px]">
                  {data.content.service.overviewTitleFirst}
                  <br />
                  {data.content.service.overviewTitleSecond}{" "}
                  <span className="text-[#1474e8]">
                    {data.content.service.overviewTitleHighlight}
                  </span>
                </h1>

                <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-[#7183a1]">
                  {data.copy.service.overviewDescription[0]}
                </p>

                <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-[#7183a1]">
                  {data.copy.service.overviewDescription[1]}
                </p>
              </div>

              <div className="aspect-4/3 overflow-hidden rounded-xl md:aspect-3/4">
                <img
                  src="/overview.png"
                  alt={data.copy.service.overviewImageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-6 flex items-center gap-5">
                <h2 className="text-[26px] font-bold text-[#09295f]">
                  {data.content.service.benefitsTitle}
                </h2>

                <span className="h-[2px] w-20 bg-[#4c9cff]" />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {data.services.detail.benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={index}
                      className="flex min-h-[120px] items-center gap-6 rounded-xl border border-[#e3eaf3] bg-white px-5 py-5 shadow-[0_2px_10px_rgba(30,80,150,0.03)]"
                    >
                      <div className="group flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#edf5ff] transition-colors duration-200 hover:bg-[#1474e8] sm:h-[76px] sm:w-[76px]">
                        <Icon
                          size={34}
                          strokeWidth={1.8}
                          className="text-[#0874ef] transition-colors duration-200 group-hover:text-white"
                        />
                      </div>

                      <div>
                        <h3 className="text-[17px] font-bold text-[#09295f]">
                          {benefit.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-5 text-[#7183a1]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* OUR PROCESS SECTION UPDATED */}
            <div className="mt-10">
              <div className="mb-6 flex items-center gap-5">
                <h2 className="text-[26px] font-bold text-[#09295f]">
                  {data.content.service.processTitle}
                </h2>

                <span className="h-[2px] w-20 bg-[#4c9cff]" />
              </div>

              {/* grid-cols-2 small screens me 1 row me 2 cards show karega */}
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 min-[420px]:grid-cols-2 sm:gap-8 md:grid-cols-4">
                {data.services.detail.process.map((item, index) => (
                  <div
                    key={index}
                    className="relative text-center"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#edf5ff] text-[20px] font-bold text-[#075ed5] transition-colors duration-200 hover:bg-[#1474e8] hover:text-white">
                        {item.number}
                      </div>

                      {/* Connecting Line (Only for large desktop view) */}
                      {index !== data.services.detail.process.length - 1 && (
                        <div className="absolute left-[calc(50%+38px)] top-1/2 hidden h-[2px] w-[calc(100%-30px)] bg-[#9dcaff] xl:block" />
                      )}
                    </div>

                    <h3 className="mt-4 text-[16px] sm:text-[18px] font-bold text-[#09295f]">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[190px] text-[13px] sm:text-[14px] leading-5 text-[#7183a1]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-6 xl:self-start">
            <div className="rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-7">
              <h2 className="text-[23px] font-bold text-[#09295f]">
                {data.content.service.expertAdviceTitle}
              </h2>

              <div className="mb-5 mt-3 h-[2px] w-12 bg-[#4c9cff]" />

              <p className="text-[15px] leading-6 text-[#7183a1]">
                {data.copy.service.expertAdviceDescription}
              </p>

              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-md bg-[#086df0] px-5 py-4 text-[15px] font-semibold text-white transition hover:bg-[#055dcc]"
              >
                {data.copy.common.getInTouch}
                <ArrowRight size={19} />
              </Link>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0874ef] text-white">
                    <Phone size={16} />
                  </div>

                  <a
                    href="tel:+919876543210"
                    className="text-[14px] font-medium text-[#526887] transition-colors hover:text-[#0874ef]"
                  >
                    {data.copy.common.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0874ef] text-white">
                    <Mail size={16} />
                  </div>

                  <a
                    href="mailto:primecore@gmail.com"
                    className="break-all text-[14px] font-medium text-[#526887] transition-colors hover:text-[#0874ef]"
                  >
                    {data.copy.common.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#e2eaf4] bg-white p-6">
              <h2 className="text-[22px] font-bold text-[#09295f]">
                {data.content.service.otherServicesTitle}
              </h2>

              <div className="mb-4 mt-3 h-[2px] w-12 bg-[#4c9cff]" />

              <div>
                {data.services.detail.otherServices.map((service, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 py-3 ${
                      index !== data.services.detail.otherServices.length - 1
                        ? "border-b border-[#e6edf5]"
                        : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[70px] w-[76px] shrink-0 rounded-lg object-cover"
                    />

                    <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                      <span className="text-[14px] font-semibold leading-5 text-[#09295f]">
                        {service.title}
                      </span>

                      <Link
                        href={service.href}
                        aria-label={`View ${service.title}`}
                        className="shrink-0"
                      >
                        <ArrowRight
                          size={19}
                          className="text-[#0874ef]"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
};

export default Overview;