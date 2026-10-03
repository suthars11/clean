"use client";

import { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const PHONE_DISPLAY = "+91 XXXXXXXXXX";
const PHONE_HREF = "tel:+919876543210";

const socials = [
  { label: "LinkedIn", Icon: FaLinkedinIn, hover: "hover:bg-[#2867b2]" },
  { label: "Facebook", Icon: FaFacebookF, hover: "hover:bg-[#1877f2]" },
  { label: "Instagram", Icon: FaInstagram, hover: "hover:bg-[#1877f2]" },
  { label: "YouTube", Icon: FaYoutube, hover: "hover:bg-[#1877f2]" },
];

/** Social icons: clicking any of them reveals the contact mobile number instead of opening a link. */
const FooterSocials = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="mt-4 pt-2 lg:mt-auto">
      <div className="flex items-center gap-3">
        {socials.map(({ label, Icon, hover }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            aria-expanded={showPhone}
            onClick={() => setShowPhone((open) => !open)}
            className={`flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-[#e3e8f0] bg-white text-[#0b2855] transition-all duration-300 hover:text-white ${hover}`}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      {showPhone && (
        <a
          href={PHONE_HREF}
          className="mt-3 inline-block text-[15px] font-semibold text-[#0b2855] transition-colors hover:text-[#0052cc]"
        >
          {PHONE_DISPLAY}
        </a>
      )}
    </div>
  );
};

export default FooterSocials;
