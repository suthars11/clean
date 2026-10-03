import Image from "next/image";
import { data } from "@/data/data";
import Section from "@/components/ui/Section";


const Aboutus = () => {
  return (
    <Section
      className="
        w-full
        overflow-hidden
        bg-white
        pt-8
        sm:pt-9
        md:pt-10
        lg:pt-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          page-gutter
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-6
            lg:grid-cols-2
            lg:gap-7
          "
        >
          {/* ================= IMAGE SIDE ================= */}
          <div
            className="
              relative
              mx-auto
              h-full
              w-full
             p-4
            "
          >
            {/* Main Image */}
           <div className="relative mx-auto w-full max-w-[570px]">
            <div
              className="
                relative
                h-[330px]
                w-full
                overflow-hidden
                rounded-[22px]
                sm:h-[400px]
                lg:h-[570px]
              "
            >
              <Image
                src='/about.png'
                alt={data.copy.about.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          </div>

          {/* ================= TEXT SIDE ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              lg:min-h-[420px]
            "
          >
            {/* Badge */}
            <div
              className="
                mb-3
                inline-flex
                w-fit
                rounded-full
                border
                border-blue-300
                px-4
                py-1
              "
            >
              <span
                className="
                  text-xs
                  font-semibold
                  tracking-wide
                  text-blue-600
                "
              >
                {data.content.about.eyebrow}
              </span>
            </div>

            {/* Heading - Exactly 2 Lines */}
            <h2
              className="
                max-w-[520px]
                text-[26px]
                font-bold
                leading-[1.1]
                tracking-[-0.8px]
                text-slate-900
                sm:text-[34px]
                sm:leading-[1.08]
                lg:text-[40px]
                xl:text-[42px]
              "
            >
              {data.content.about.titleFirst}
              <br />
              {data.content.about.titleSecond}{" "}
              <span className="text-blue-600">
                {data.content.about.titleHighlight}
              </span>
            </h2>

            {/* Underline */}
            <div className="mb-4 mt-4 h-[3px] w-12 bg-blue-600" />

            {/* Description */}
            <div
              className="
                max-w-[570px]
                space-y-3
                text-[13px]
                leading-[1.6]
                text-slate-600
                sm:text-[14px]
                sm:leading-6
                lg:text-[15px]
              "
            >
              <p>
                {data.copy.about.description}
              </p>

              <p>
                {data.copy.about.description}
              </p>

              <p>
                {data.copy.about.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Aboutus;