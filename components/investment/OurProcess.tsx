import { data } from "@/data/data";
import { processIcons } from "@/data/icons";
import Section from "@/components/ui/Section";


const OurProcess = () => {
  return (
    <Section className="w-full bg-white pt-12 sm:pt-14 lg:pt-16">
      <div className="page-gutter mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-18" />

            <span className="text-sm font-semibold tracking-wide text-[#6382ae]">
              {data.content.investment.process.eyebrow}
            </span>

            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-18" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102e65] sm:text-4xl lg:text-[42px]">
            {data.content.investment.process.titleFirst}{" "}
            <span className="text-[#1769e0]">
              {data.content.investment.process.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#61799e] sm:text-base sm:leading-7">
            {data.copy.investment.processDescription[0]}
            <br className="hidden sm:block" />
            {data.copy.investment.processDescription[1]}
          </p>
        </div>

        {/* ================= PROCESS STEPS ================= */}
        {/* Mobile par 1 row me 2 cards ke liye grid-cols-2 lagaya gaya hai */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 min-[380px]:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 lg:gap-0">

          {data.processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex min-w-0 flex-col items-center px-1 text-center"
            >

              {/* ================= ICON ================= */}
              <div className="relative mb-4 sm:mb-5">

                {/* NUMBER */}
                <div
                  className="
                    absolute
                    -left-1
                    -top-5
                    z-20
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-[#dbe8fb]
                    bg-white
                    text-xs
                    font-bold
                    text-[#0B1E48]
                    shadow-md
                    sm:-top-6
                    sm:h-11
                    sm:w-11
                    sm:text-base
                  "
                >
                  {step.number}
                </div>

                {/* ICON CIRCLE */}
                <div
                  className="
                    flex
                    h-[76px]
                    w-[76px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#eaf3ff]
                    text-[#1769e0]
                    transition-colors
                    duration-200
                    hover:bg-[#1769e0]
                    hover:text-white
                    sm:h-[92px]
                    sm:w-[92px]
                  "
                >
                  <div className="scale-85 sm:scale-100">
                    {processIcons[step.iconKey]}
                  </div>
                </div>
              </div>

              {/* ================= TITLE ================= */}
              <h3 className="mb-1 text-lg font-bold text-[#102e65] sm:mb-2 sm:text-xl">
                {step.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}
              <p className="max-w-[190px] text-xs leading-4 text-[#60789e] sm:text-sm sm:leading-5">
                {step.description}
              </p>

              {/* ================= ARROW / CONNECTOR ================= */}
              {index < data.processSteps.length - 1 && (
                <div
                  className="
                    absolute
                    left-[calc(100%_-_1px)]
                    top-[46px]
                    hidden
                    w-[70px]
                    lg:block
                  "
                >
                  <div className="relative flex w-full justify-center items-center right-8">

                    {/* LINE */}
                    <div className="h-[2px] w-full bg-[#8ebeff]" />

                    {/* ARROW */}
                    <span
                      className="
                        absolute
                        right-0
                        top-1/2
                        flex
                        h-5
                        w-5
                        -translate-y-1/2
                        items-center
                        justify-center
                        bg-white
                        text-[#1769e0]
                      "
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6H10M6 2L10 6L6 10"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                  </div>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </Section>
  );
};

export default OurProcess;