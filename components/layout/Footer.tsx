import Image from "next/image";
import Link from "next/link";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { data } from "@/data/data";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans text-[#52637e]">
      {/* ================= Main Footer ================= */}
      {/* Bottom padding reduced here (pb-4 sm:pb-6 lg:pb-6) */}
      <div className="page-gutter mx-auto max-w-[1350px] pt-8 pb-6 sm:pt-10 lg:pt-[50px] lg:pb-[50px]">
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1.1fr] lg:gap-0">
          
          {/* ================= Column 1: Logo & Info ================= */}
          <div className="flex h-full flex-col justify-between pr-0 lg:pr-10">
            <div>
              {/* Logo */}
              <div className="mb-4">
                <Link href="/" aria-label={`${data.copy.common.brand} Home`}>
                  <Image
                    src="/logo.png"
                    alt={data.copy.common.brand}
                                width={285}
              height={55}
                    className="h-auto w-[260px] object-contain sm:w-[330px] -ml-1"
                    priority
                  />
                </Link>
              </div>

              {/* Description */}
              <p className="max-w-[320px] text-[15px] leading-[25px] text-[#3f4f6b] sm:text-[16px]">
                {data.copy.footer.brandDescription[0]}
                <br />
                {data.copy.footer.brandDescription[1]}
                <br />
                {data.copy.footer.brandDescription[2]}
              </p>
            </div>

            {/* Social icons: click shows the mobile number */}
            <FooterSocials />
          </div>

          {/* ================= Column 2: Quick Links ================= */}
          <div className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-10">
            <h3 className="mb-2 text-[22px] font-bold text-[#06194a]">
              {data.content.footer.quickLinksTitle}
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <ul className="space-y-[10px]">
              {data.footer.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[16px] text-[#3f4f6b] transition-colors duration-200 hover:text-[#0052cc]"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-[#0052cc] transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Column 3: Our Services ================= */}
          <div className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-10">
            <h3 className="mb-2 text-[22px] font-bold text-[#06194a]">
              {data.content.footer.servicesTitle}
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <ul className="space-y-[10px]">
              {data.footer.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[16px] text-[#3f4f6b] transition-colors duration-200 hover:text-[#0052cc]"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-[#0052cc] transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Column 4: Contact Us ================= */}
          <div className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-10">
            <h3 className="mb-2 text-[22px] font-bold text-[#06194a]">
              {data.content.footer.contactTitle}
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <div className="space-y-[14px]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#e9f0fb] text-[#1763d1]">
                  <FaMapMarkerAlt size={15} />
                </div>
                <p className="pt-0.5 text-[16px] leading-snug text-[#52637e]">
                  {data.copy.common.addressLines[0]}
                  <br />
                  {data.copy.common.addressLines[1]}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#e9f0fb] text-[#1763d1]">
                  <FaPhoneAlt size={14} />
                </div>
                <div className="pt-0.5 text-[16px] leading-relaxed text-[#3f4f6b]">
                  <a
                    href="#"
                    className="block transition-colors hover:text-[#0052cc]"
                  >
                    {data.copy.common.phone}</a><a href="#" className="block transition-colors hover:text-[#0052cc]">{data.copy.common.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#e9f0fb] text-[#1763d1]">
                  <FaEnvelope size={14} />
                </div>
                <a
                  href="mailto:primecore@gmail.com"
                  className="text-[16px] text-[#3f4f6b] transition-colors hover:text-[#0052cc]"
                >
                  {data.copy.common.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#e9f0fb] text-[#1763d1]">
                  <FaClock size={14} />
                </div>
                <p className="text-[16px] text-[#3f4f6b]">
                  {data.copy.common.officeHours}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= Bottom Bar ================= */}
      <div className="bg-[#06194a] py-[18px] text-white">
        <div className="page-gutter mx-auto flex max-w-[1350px] flex-col items-center justify-between gap-3 text-center lg:flex-row lg:text-left">
          <p className="text-[15px] text-slate-200">
            {data.copy.footer.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] text-slate-200">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              {data.copy.footer.legalLinks[0]}
            </Link>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              {data.copy.footer.legalLinks[1]}
            </Link>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              {data.copy.footer.legalLinks[2]}
            </Link>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              {data.copy.footer.legalLinks[3]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;