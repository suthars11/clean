import type { LucideIcon } from "lucide-react";

// ================= HERO / BANNER =================
export interface HeroData {
  title: string;
  image: string;
}

export type HeroPage =
  | "about"
  | "contact"
  | "blog"
  | "service"
  | "investment"
  | "BlogDetail"
  | "serviceDetail"
  | "missionVision"
  | "whyChooseUs"
  | "ourTeam"
  | "teamDetails"
  | "ourPartners"
  | "testimonials"
  | "faqs"
  | "awards"
  | "privacyPolicy"
  | "bookConsultation";

export type HeroContextType = Record<HeroPage, HeroData>;

// ================= COMMON =================
export interface LinkItem {
  name: string;
  href: string;
}

export interface IconFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IconFeatureWithSubtitle extends IconFeature {
  subtitle: string;
}

export interface NumberedStep {
  number: string;
  title: string;
  description: string;
}

// ================= FAQ =================
export interface Faq {
  id: number;
  number: string;
  question: string;
  answer: string;
}

// ================= HOME =================
export interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
}

export interface HomeTestimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  mainImage: string;
  rating: number;
  quote: string;
}

export interface HowItWorksStep extends NumberedStep {
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

// ================= TESTIMONIALS PAGE =================
export interface Review {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

// ================= BLOG =================
export interface Blog {
  id: number;
  date: string;
  month: string;
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

// ================= AWARDS =================
export type AwardCategory =
  | "Industry Awards"
  | "Client Recognition"
  | "Corporate Excellence";

export interface AwardFeature {
  id: number;
  title: string;
  description: string;
  /** SVG `d` attribute of the feature icon */
  iconPath: string;
}

export interface Award {
  id: number;
  image: string;
  title: string;
  year: string;
  organization: string;
  category: AwardCategory;
}

// ================= SERVICES =================
export interface HomeService {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export interface Service {
  /** key of the svg inside `serviceIcons` (app/data/icons.tsx) */
  iconKey: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface OtherService {
  title: string;
  image: string;
  href: string;
}

// ================= INVESTMENT PROCESS =================
export interface ProcessStep extends NumberedStep {
  /** key of the svg inside `processIcons` (app/data/icons.tsx) */
  iconKey: string;
}

// ================= CONSULTATION =================
export interface ConsultationStep extends NumberedStep {
  icon: LucideIcon;
}

// ================= PRIVACY POLICY =================
export interface PolicySection {
  id: string;
  title: string;
  content: string;
}

// ================= TEAM =================
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  profileUrl: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Expertise {
  title: string;
  icon: LucideIcon;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
}
