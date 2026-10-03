"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { data } from "@/data/data";

const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const isParentActive = (paths: string[]) => {
    return paths.some((path) => pathname === path);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (e: React.MouseEvent, menu: string) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="relative w-full max-w-full overflow-x-clip border-t border-[#2d6fc4] bg-white">
      <nav
        onPointerUpCapture={(event) => {
          if (event.target instanceof Element) {
            event.target.closest("a")?.blur();
          }
        }}
        className="page-gutter mx-auto w-full max-w-full"
      >
        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden h-[90px] w-full items-center justify-start gap-4 lg:flex">
          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt={data.copy.common.brand}
              width={285}
              height={55}
              className="h-auto w-[170px] lg:w-[210px] xl:w-[300px]"
              priority
            />
          </Link>

          {/* LEFT DIVIDER */}
          <div className="h-[36px] w-px shrink-0 bg-[#e5e7eb]" />

          {/* NAV LINKS CONTAINER */}
          <div className="flex h-full min-w-0 flex-1 items-center justify-center gap-4">
            {/* HOME */}
            <Link
              href="/"
              className={`relative flex h-full items-center whitespace-nowrap text-[13px] xl:text-[14px] ${
                isActive("/")
                  ? "font-semibold text-[#1763b5]"
                  : "font-medium text-[#111827] hover:text-[#1763b5]"
              }`}
            >
              {data.content.navigation.home}
              {isActive("/") && (
                <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className="group relative h-full">
              <Link
                href="/about-us"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive([
                    "/about-us",
                    "/why-choose-us",
                    "/mission-vision",
                    "/our-team",
                    "/teamdetail",
                  ])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {data.content.navigation.about}
                {isParentActive([
                  "/about-us",
                  "/why-choose-us",
                  "/mission-vision",
                  "/our-team",
                  "/teamdetail",
                ]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              {/* DROPDOWN MENU */}
              <div className="invisible absolute left-1/2 top-[90px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/why-choose-us"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.aboutLinks[0]}
                </Link>
                <Link
                  href="/mission-vision"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.aboutLinks[1]}
                </Link>
                <Link
                  href="/our-team"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.aboutLinks[2]}
                </Link>
                <Link
                  href="/teamdetail"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.aboutLinks[3]}
                </Link>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className="group relative h-full">
              <Link
                href="/service"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(["/service", "/servicedetail"])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {data.content.navigation.services}
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(["/service", "/servicedetail"]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[90px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/servicedetail"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.serviceLinks[0]}
                </Link>
              </div>
            </div>

            {/* INVESTMENT PROCESS */}
            <div className="group relative h-full">
              <Link
                href="/investment"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive([
                    "/investment",
                    "/our-partners",
                    "/testimonials",
                    "/awards",
                    "/faqs",
                  ])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {data.content.navigation.investment}
                {isParentActive([
                  "/investment",
                  "/our-partners",
                  "/testimonials",
                  "/awards",
                  "/faqs",
                ]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[90px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/our-partners"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.investmentLinks[0]}
                </Link>
                <Link
                  href="/testimonials"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.investmentLinks[1]}
                </Link>
                <Link
                  href="/awards"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.investmentLinks[2]}
                </Link>
                <Link
                  href="/faqs"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.investmentLinks[3]}
                </Link>
              </div>
            </div>

            {/* BLOG */}
            <div className="group relative h-full">
              <Link
                href="/blog"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(["/blog", "/blogdetail"])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {data.content.navigation.blog}
                {isParentActive(["/blog", "/blogdetail"]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[90px] z-50 w-[180px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/blogdetail"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.blogLinks[0]}
                </Link>
              </div>
            </div>

            {/* CONTACT DROPDOWN (UPDATED) */}
            <div className="group relative h-full">
              <Link
                href="/contact"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(["/contact", "/book-consultation"])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {data.content.navigation.contact}
                {isParentActive(["/contact", "/book-consultation"]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              {/* CONTACT DROPDOWN MENU */}
              <div className="invisible absolute left-1/2 top-[90px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/book-consultation"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  {data.content.navigation.contactLinks[0]}
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT DIVIDER */}
          <div className="h-[36px] w-px shrink-0 bg-[#e5e7eb]" />

          {/* BUTTON */}
          <Link
            href="/book-consultation"
            className="flex h-[42px] shrink-0 items-center justify-center gap-2 rounded-[6px] bg-[#2d6fc4] px-4 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#245fa9] xl:h-[50px] xl:text-[14px]"
          >
            <span className="whitespace-nowrap">{data.content.navigation.consultation}</span>
            <ArrowRight size={16} strokeWidth={1.8} className="shrink-0" />
          </Link>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="flex h-[66px] w-full items-center justify-between lg:hidden">
          <Link href="/" onClick={closeMobileMenu} className="shrink-0">
            <Image
              src="/logo.png"
              alt={data.copy.common.brand}
              width={285}
              height={55}
              className="h-auto w-[160px] sm:w-[190px]"
              priority
            />
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? data.copy.navigation.closeMenu : data.copy.navigation.openMenu}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#e5e7eb] text-[#111827]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="w-full max-w-full overflow-hidden border-t border-[#e5e7eb] bg-white p-3 lg:hidden">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block border-b border-[#f0f0f0] py-3 text-[15px] ${
                isActive("/") ? "font-semibold text-[#1763b5]" : "font-medium text-[#111827]"
              }`}
            >
              {data.content.navigation.home}
            </Link>

            {/* ABOUT */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {data.content.navigation.about}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "about")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "about" && (
                <div className="mx-3 my-2 border-l-2 border-[#e8f1fb] px-3">
                  <Link href="/why-choose-us" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.aboutLinks[0]}
                  </Link>
                  <Link href="/mission-vision" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.aboutLinks[1]}
                  </Link>
                  <Link href="/our-team" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.aboutLinks[2]}
                  </Link>
                  <Link href="/teamdetail" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.aboutLinks[3]}
                  </Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/service"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {data.content.navigation.services}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "services")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "services" && (
                <div className="mx-3 my-2 border-l-2 border-[#e8f1fb] px-3">
                  <Link href="/servicedetail" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.serviceLinks[0]}
                  </Link>
                </div>
              )}
            </div>

            {/* INVESTMENT */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/investment"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {data.content.navigation.investment}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "investment")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "investment" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "investment" && (
                <div className="mx-3 my-2 border-l-2 border-[#e8f1fb] px-3">
                  <Link href="/our-partners" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.investmentLinks[0]}
                  </Link>
                  <Link href="/testimonials" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.investmentLinks[1]}
                  </Link>
                  <Link href="/awards" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.investmentLinks[2]}
                  </Link>
                  <Link href="/faqs" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.investmentLinks[3]}
                  </Link>
                </div>
              )}
            </div>

            {/* BLOG */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {data.content.navigation.blog}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "blog")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "blog" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "blog" && (
                <div className="mx-3 my-2 border-l-2 border-[#e8f1fb] px-3">
                  <Link href="/blogdetail" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.blogLinks[0]}
                  </Link>
                </div>
              )}
            </div>

            {/* CONTACT DROPDOWN (UPDATED) */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {data.content.navigation.contact}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "contact")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "contact" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "contact" && (
                <div className="mx-3 my-2 border-l-2 border-[#e8f1fb] px-3">
                  <Link href="/book-consultation" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    {data.content.navigation.contactLinks[0]}
                  </Link>
                </div>
              )}
            </div>

            {/* CONSULTATION BUTTON */}
            <Link
              href="/book-consultation"
              onClick={closeMobileMenu}
              className="mt-3 flex h-[46px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#2d6fc4] text-[14px] font-semibold text-white"
            >
              {data.content.navigation.consultation}
              <ArrowRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;