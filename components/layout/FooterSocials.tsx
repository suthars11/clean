import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedinIn, hover: "hover:bg-[#2867b2]" },
  { label: "Facebook", href: "https://www.facebook.com", Icon: FaFacebookF, hover: "hover:bg-[#1877f2]" },
  { label: "Instagram", href: "https://www.instagram.com", Icon: FaInstagram, hover: "hover:bg-[#c13584]" },
  { label: "YouTube", href: "https://www.youtube.com", Icon: FaYoutube, hover: "hover:bg-[#ff0000]" },
];

const FooterSocials = () => {
  return (
    <div className="mt-4 pt-2 lg:mt-auto">
      <div className="flex items-center gap-3">
        {socials.map(({ label, href, Icon, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#e3e8f0] bg-white text-[#0b2855] transition-all duration-300 hover:text-white ${hover}`}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
