import {
  Award as AwardIcon,
  BarChart2,
  BarChart3,
  Calendar,
  FileText,
  Globe2,
  Handshake,
  MessageSquare,
  PieChart,
  Settings,
  Shield,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Trophy,
  UserCheck,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";

import type {
  Award,
  AwardCategory,
  AwardFeature,
  Blog,
  ConsultationStep,
  Experience,
  Expertise,
  Faq,
  HeroContextType,
  HomeService,
  HomeTestimonial,
  HowItWorksStep,
  IconFeature,
  IconFeatureWithSubtitle,
  LinkItem,
  NumberedStep,
  OtherService,
  Partner,
  PolicySection,
  ProcessStep,
  Review,
  Service,
  Skill,
  Stat,
  TeamMember,
} from "@/data/types";

// ================= HERO / BANNER =================
const hero: HeroContextType = {
  about: { title: "About Us", image: "/banner.png" },
  contact: { title: "Contact Us", image: "/banner.png" },
  blog: { title: "Blogs", image: "/banner.png" },
  service: { title: "Our Services", image: "/banner.png" },
  investment: { title: "Investment Process", image: "/banner.png" },
  BlogDetail: { title: "Blog Detail", image: "/banner.png" },
  serviceDetail: { title: "Service Detail", image: "/banner.png" },
  missionVision: { title: "Mission & Vision", image: "/banner.png" },
  whyChooseUs: { title: "Why Choose Us", image: "/banner.png" },
  ourTeam: { title: "Our Team", image: "/banner.png" },
  teamDetails: { title: "Team Detail", image: "/banner.png" },
  ourPartners: { title: "Our Partners", image: "/banner.png" },
  testimonials: { title: "Testimonials", image: "/banner.png" },
  faqs: { title: "FAQ", image: "/banner.png" },
  awards: { title: "Awards & Achievements", image: "/banner.png" },
  privacyPolicy: { title: "Privacy & Policy", image: "/banner.png" },
  bookConsultation: { title: "Book Consultation", image: "/banner.png" },
};

// ================= FOOTER =================
const footer: { quickLinks: LinkItem[]; services: LinkItem[] } = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/service" },
    { name: "Investment Solutions", href: "/investment" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],
  services: [
    { name: "Wealth Management", href: "/investment" },
    { name: "Financial Planning", href: "/investment" },
    { name: "Mutual Funds", href: "/investment" },
    { name: "Portfolio Management", href: "/investment" },
  { name: "Business Advisory", href: "/investment" },
  { name: "Risk Management", href: "/investment" },
  ],
};

// ================= HOME =================
const home = {
  heroFeatures: [
    {
      icon: BarChart3,
      title: "Personalized Strategies",
      description: "Tailored to your unique goals.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Expertise",
      description: "Guidance from experienced financial advisors.",
    },
    {
      icon: Users,
      title: "Long-Term Focus",
      description: "Building sustainable wealth for future generations.",
    },
  ] satisfies IconFeature[],

  aboutFeatures: [
    {
      icon: BarChart3,
      title: "Strategic",
      subtitle: "Advisory",
      description: "Data-driven strategies for measurable growth.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted",
      subtitle: "Partnership",
      description: "A relationship built on integrity and trust.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      subtitle: "Approach",
      description: "Your goals, our priority in every decision.",
    },
  ] satisfies IconFeatureWithSubtitle[],

  services: [
    {
      icon: BarChart3,
      title: "Investment",
      subtitle: "Advisory",
      description: "Data-driven strategies to grow your wealth.",
    },
    {
      icon: Shield,
      title: "Wealth",
      subtitle: "Management",
      description: "Preserve, grow, and transfer your wealth.",
    },
    {
      icon: FileText,
      title: "Financial",
      subtitle: "Planning",
      description: "Personalized plans for every life stage.",
    },
    {
      icon: Globe2,
      title: "Global",
      subtitle: "Opportunities",
      description: "Access international markets with confidence.",
    },
    {
      icon: Users,
      title: "Retirement",
      subtitle: "Planning",
      description: "Build a secure and independent future.",
    },
    {
      icon: PieChart,
      title: "Risk",
      subtitle: "Management",
      description: "Identify, assess, and minimize financial risks.",
    },
    {
      icon: Sprout,
      title: "Tax",
      subtitle: "Consulting",
      description: "Smarter tax solutions for higher savings.",
    },
    {
      icon: Handshake,
      title: "Business",
      subtitle: "Advisory",
      description: "Strategic support to accelerate growth.",
    },
  ] satisfies HomeService[],

  stats: [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: FileText, number: "1,200+", label: "Projects Completed" },
    { icon: Trophy, number: "30+", label: "Years of Experience" },
    { icon: Handshake, number: "98%", label: "Client Satisfaction" },
  ] satisfies Stat[],

  testimonials: [
    {
      id: 1,
      name: "Rahul Mehta",
      role: "BUSINESS OWNER",
      image: "/profile1.png",
      mainImage: "/testimonials.png",
      rating: 4,
      quote:
        "The team provided exceptional support and guidance throughout the entire process. Their expertise and professionalism made everything simple and hassle-free. Highly recommended!",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "ENTREPRENEUR",
      image: "/profile2.png",
      mainImage: "/testimonials.png",
      rating: 5,
      quote:
        "Their personalized approach and attention to detail made a real difference. The entire experience was smooth, transparent, and focused on achieving our goals.",
    },
    {
      id: 3,
      name: "Ananya Kapoor",
      role: "COMPANY DIRECTOR",
      image: "/profile3.png",
      mainImage: "/testimonials.png",
      rating: 5,
      quote:
        "I truly appreciated the team's professionalism and commitment. They understood our requirements and provided practical solutions at every step.",
    },
    {
      id: 4,
      name: "Arjun Malhotra",
      role: "INVESTOR",
      image: "/profile4.png",
      mainImage: "/testimonials.png",
      rating: 4,
      quote:
        "The guidance we received was clear, reliable, and easy to understand. Their team made the entire process comfortable and straightforward.",
    },
    {
      id: 5,
      name: "Neha Verma",
      role: "BUSINESS CONSULTANT",
      image: "/profile.png",
      mainImage: "/testimonials.png",
      rating: 5,
      quote:
        "Excellent communication and strong expertise. They stayed involved throughout the process and delivered exactly what we needed.",
    },
  ] satisfies HomeTestimonial[],

  howItWorks: [
    {
      number: "01",
      image: "/goal1.png",
      title: "Understand Your Goals",
      description:
        "We start by learning about your business, objectives, and challenges to understand what truly matters to you.",
    },
    {
      number: "02",
      image: "/goal2.png",
      title: "Plan & Strategize",
      description:
        "Our experts analyze insights and develop a customized strategy tailored to your goals.",
    },
    {
      number: "03",
      image: "/goal3.png",
      title: "Collaborate & Execute",
      description:
        "We work closely with your team to implement the plan, ensuring seamless execution at every step.",
    },
    {
      number: "04",
      image: "/team1.png",
      title: "Achieve Greater Results",
      description:
        "We track progress, optimize performance, and help you unlock new opportunities for long-term growth.",
    },
  ] satisfies HowItWorksStep[],

  blogs: [
    {
      id: 1,
      date: "15",
      month: "AUG",
      year: "2026",
      category: "INVESTMENT STRATEGY",
      title: "5 Smart Investment Strategies for Long-Term Wealth",
      description:
        "Discover practical investment strategies that can help you build a stronger financial future and achieve your goals with confidence.",
      image: "/blog1.png",
    },
    {
      id: 2,
      date: "10",
      month: "AUG",
      year: "2026",
      category: "FINANCIAL PLANNING",
      title: "How to Plan Your Finances in a Changing Economy",
      description:
        "Learn how to adapt your financial plan to economic changes and stay on track toward your life goals.",
      image: "/blog2.png",
    },
    {
      id: 3,
      date: "05",
      month: "AUG",
      year: "2026",
      category: "WEALTH MANAGEMENT",
      title: "Key Benefits of Working with a Financial Advisor",
      description:
        "Explore how a professional advisor can help you make informed decisions and create a more secure tomorrow.",
      image: "/blog3.png",
    },
  ] satisfies Blog[],
};

// ================= PARTNERS =================
const partners: Partner[] = [
  { id: 1, name: "Allianz", logo: "/partners/allianz.png" },
  { id: 2, name: "AXA", logo: "/partners/axa.png" },
  { id: 3, name: "HDFC Life", logo: "/partners/hdfc-life.png" },
  { id: 4, name: "ICICI Lombard", logo: "/partners/icici-lombard.png" },
  { id: 5, name: "Bajaj Allianz", logo: "/partners/bajaj-allianz.png" },
  { id: 6, name: "TATA AIA", logo: "/partners/tata-aia.png" },
  { id: 7, name: "SBI Life", logo: "/partners/sbi-life.png" },
  { id: 8, name: "Max Life", logo: "/partners/max-life.png" },
  {
    id: 9,
    name: "Reliance General Insurance",
    logo: "/partners/reliance-general-insurance.png",
  },
  {
    id: 10,
    name: "Kotak General Insurance",
    logo: "/partners/kotak-general-insurance.png",
  },
  { id: 11, name: "Bharti AXA", logo: "/partners/bharti-axa.png" },
  { id: 12, name: "LIC", logo: "/partners/lic.png" },
  { id: 13, name: "Digit", logo: "/partners/digit.png" },
  {
    id: 14,
    name: "Kotak Life Insurance",
    logo: "/partners/kotak-life-insurance.png",
  },
  { id: 15, name: "Policybazaar", logo: "/partners/policybazaar.png" },
];

// ================= TESTIMONIALS PAGE =================
const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Mehta",
    location: "New Delhi, India",
    image: "/profile1.png",
    rating: 5,
    text: "PrimeCore helped me create a clear investment plan tailored to my goals. Their advice is practical, transparent, and truly client-focused. I now feel more confident about my financial future.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Gurgaon, India",
    image: "/profile2.png",
    rating: 5,
    text: "The team at PrimeCore made the entire process simple and easy to understand. They explained every option clearly and helped me choose the right investment strategy for my needs.",
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Mumbai, India",
    image: "/profile3.png",
    rating: 5,
    text: "Excellent service and genuine guidance. PrimeCore takes time to understand your goals and provides solutions that actually work. I highly recommend them to anyone looking for trustworthy financial advisors.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    location: "Bangalore, India",
    image: "/profile3.png",
    rating: 5,
    text: "I've been investing with PrimeCore for over 3 years now, and the experience has been great. Their insights and regular updates help me stay on track with my financial goals.",
  },
  {
    id: 5,
    name: "Vikram Soni",
    location: "Pune, India",
    image: "/profile4.png",
    rating: 5,
    text: "Professional, knowledgeable, and always available to answer questions. PrimeCore has been a valuable partner in my wealth creation journey.",
  },
  {
    id: 6,
    name: "Anjali Desai",
    location: "Ahmedabad, India",
    image: "/profile.png",
    rating: 5,
    text: "PrimeCore's personalized approach made all the difference. They genuinely care about their clients and provide solutions that align with long-term financial growth.",
  },
];

// ================= FAQ =================
const faqs: Faq[] = [
  {
    id: 1,
    number: "01",
    question: "What services does PrimeCore offer?",
    answer:
      "We offer a comprehensive range of investment advisory services including wealth management, retirement planning, financial planning, tax planning, estate planning, and risk management. Our solutions are tailored to meet the unique goals and needs of each client.",
  },
  {
    id: 2,
    number: "02",
    question: "How do I get started with PrimeCore?",
    answer:
      "Getting started is easy. Simply reach out to us through our contact form or give us a call. We will schedule an initial consultation to understand your financial goals and recommend a tailored strategy.",
  },
  {
    id: 3,
    number: "03",
    question: "Are your investment strategies suitable for long-term goals?",
    answer:
      "Absolutely. Our investment strategies are designed with a long-term perspective in mind, focusing on sustainable growth and wealth preservation aligned with your future objectives.",
  },
  {
    id: 4,
    number: "04",
    question: "What makes PrimeCore different from other advisory firms?",
    answer:
      "We pride ourselves on transparency, personalized service, and a client-first approach. Unlike many firms, we take the time to deeply understand your unique situation before recommending any financial products.",
  },
  {
    id: 5,
    number: "05",
    question: "Do you offer personalized financial plans?",
    answer:
      "Yes, every financial plan we create is 100% personalized. We analyze your income, expenses, risk tolerance, and future goals to build a strategy that works specifically for you.",
  },
  {
    id: 6,
    number: "06",
    question: "How do you manage risk in investments?",
    answer:
      "We use a diversified approach to risk management, spreading investments across various asset classes based on your risk profile. We also conduct regular portfolio reviews to ensure alignment with market conditions and your goals.",
  },
  {
    id: 7,
    number: "07",
    question: "Can you help with retirement planning?",
    answer:
      "Yes, retirement planning is one of our core services. We help you estimate future expenses, optimize your savings, and choose the right retirement accounts to ensure a comfortable post-retirement life.",
  },
  {
    id: 8,
    number: "08",
    question: "What is the minimum investment amount?",
    answer:
      "Our minimum investment requirements vary depending on the specific services and strategies. Please contact us directly to discuss your situation and find a plan that fits your budget.",
  },
  {
    id: 9,
    number: "09",
    question: "How often will I receive updates on my investments?",
    answer:
      "You will receive regular quarterly reports, as well as annual comprehensive reviews. Additionally, we provide timely updates whenever there are significant market shifts or changes to your portfolio.",
  },
  {
    id: 10,
    number: "10",
    question: "Do you provide support for tax planning?",
    answer:
      "Yes, we offer integrated tax planning services to help minimize your tax liability and maximize your returns, ensuring your investment strategy is tax-efficient.",
  },
];

// ================= BLOG =================
const blog = {
  latest: [
    {
      id: 1,
      date: "15",
      month: "AUG",
      year: "2026",
      category: "INVESTMENT STRATEGY",
      title: "5 Smart Investment Strategies for Long-Term Wealth",
      description:
        "Discover practical investment strategies that can help you build a stronger financial future and achieve your goals with confidence.",
      image: "/blog1.png",
    },
    {
      id: 2,
      date: "10",
      month: "AUG",
      year: "2026",
      category: "FINANCIAL PLANNING",
      title: "How to Plan Your Finances in a Changing Economy",
      description:
        "Learn how to adapt your financial plan to economic changes and stay on track toward your life goals.",
      image: "/blog2.png",
    },
    {
      id: 3,
      date: "05",
      month: "AUG",
      year: "2026",
      category: "WEALTH MANAGEMENT",
      title: "Key Benefits of Working with a Financial Advisor",
      description:
        "Explore how a professional advisor can help you make informed decisions and create a more secure tomorrow.",
      image: "/blog3.png",
    },
    {
      id: 4,
      date: "20",
      month: "AUG",
      year: "2026",
      category: "INVESTMENT STRATEGY",
      title: "5 Smart Investment Strategies for Long-Term Wealth",
      description:
        "Discover practical investment strategies that can help you build a stronger financial future and achieve your goals with confidence.",
      image: "/blog4.png",
    },
    {
      id: 5,
      date: "25",
      month: "AUG",
      year: "2026",
      category: "FINANCIAL PLANNING",
      title: "How to Plan Your Finances in a Changing Economy",
      description:
        "Learn how to adapt your financial plan to economic changes and stay on track toward your life goals.",
      image: "/blog5.png",
    },
    {
      id: 6,
      date: "13",
      month: "AUG",
      year: "2026",
      category: "WEALTH MANAGEMENT",
      title: "Key Benefits of Working with a Financial Advisor",
      description:
        "Explore how a professional advisor can help you make informed decisions and create a more secure tomorrow.",
      image: "/blog2.png",
    },
  ] satisfies Blog[],

  categories: [
    "Investment Planning",
    "Retirement Planning",
    "Wealth Management",
    "Tax Planning",
    "Financial Tips",
    "Market Insights",
  ],
};

// ================= AWARDS =================
const awards = {
  categories: [
    "All",
    "Industry Awards",
    "Client Recognition",
    "Corporate Excellence",
  ] as Array<AwardCategory | "All">,

  features: [
    {
      id: 1,
      title: "Industry Recognition",
      description: "Honored for excellence in financial advisory services.",
      iconPath:
        "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    },
    {
      id: 2,
      title: "Client Trust",
      description: "Awarded for outstanding client satisfaction.",
      iconPath:
        "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    },
    {
      id: 3,
      title: "Innovation in Advisory",
      description: "Recognized for innovative wealth management solutions.",
      iconPath:
        "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    },
    {
      id: 4,
      title: "Commitment to Excellence",
      description: "Celebrated for ethics, transparency, and long-term impact.",
      iconPath:
        "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
  ] satisfies AwardFeature[],

  items: [
    {
      id: 1,
      image: "/award1.png",
      title: "Best Investment Advisory Firm",
      year: "2024",
      organization: "Global Finance Summit",
      category: "Industry Awards",
    },
    {
      id: 2,
      image: "/award2.png",
      title: "Excellence in Wealth Management",
      year: "2023",
      organization: "National Financial Awards",
      category: "Industry Awards",
    },
    {
      id: 3,
      image: "/award3.png",
      title: "Client Satisfaction Award",
      year: "2023",
      organization: "Wealth & Finance Forum",
      category: "Client Recognition",
    },
    {
      id: 4,
      image: "/award4.png",
      title: "Innovation in Financial Solutions",
      year: "2022",
      organization: "Business Leadership Awards",
      category: "Corporate Excellence",
    },
    {
      id: 5,
      image: "/award5.png",
      title: "Trusted Advisory Partner",
      year: "2022",
      organization: "Investment Business Review",
      category: "Client Recognition",
    },
    {
      id: 6,
      image: "/award6.png",
      title: "Excellence in Client Service",
      year: "2021",
      organization: "Financial Services Network",
      category: "Client Recognition",
    },
    {
      id: 7,
      image: "/award7.png",
      title: "Rising Firm of the Year",
      year: "2021",
      organization: "Business Growth Awards",
      category: "Corporate Excellence",
    },
    {
      id: 8,
      image: "/award8.png",
      title: "Contribution to Financial Literacy",
      year: "2020",
      organization: "Financial Education Council",
      category: "Corporate Excellence",
    },
  ] satisfies Award[],
};

// ================= CONSULTATION =================
const consultationSteps: ConsultationStep[] = [
  {
    number: "01.",
    title: "Book a Slot",
    description: "Choose a date and time that works for you.",
    icon: Calendar,
  },
  {
    number: "02.",
    title: "Discuss Your Goals",
    description: "Share your financial goals and ask your questions.",
    icon: MessageSquare,
  },
  {
    number: "03.",
    title: "Get Expert Advice",
    description: "Receive personalized recommendations.",
    icon: UserCheck,
  },
  {
    number: "04.",
    title: "Plan for the Future",
    description: "Take confident steps toward your financial goals.",
    icon: BarChart2,
  },
];

// ================= PRIVACY POLICY =================
const policySections: PolicySection[] = [
  {
    id: "01",
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, and other details when you fill out a form, subscribe to our newsletter, or contact us. We may also collect non-personal information such as browser type, device information, and website usage data.",
  },
  {
    id: "02",
    title: "How We Use Your Information",
    content:
      "We use your information to provide and improve our services, respond to your inquiries, send important updates, and offer personalized investment insights. We do not use your information for any unauthorized purpose.",
  },
  {
    id: "03",
    title: "Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information. We may share your information with trusted service providers who help us operate our website and deliver our services, under strict confidentiality agreements and only for legitimate business purposes.",
  },
  {
    id: "04",
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, no method of transmission over the internet is 100% secure.",
  },
  {
    id: "05",
    title: "Cookies & Tracking Technologies",
    content:
      "We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can manage your cookie preferences through your browser settings.",
  },
  {
    id: "06",
    title: "Your Rights",
    content:
      "You have the right to access, update, or request deletion of your personal information. If you would like to exercise any of these rights, please contact us using the details provided below.",
  },
  {
    id: "07",
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing any personal information.",
  },
  {
    id: "08",
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised effective date.",
  },
];

// ================= TEAM =================
const team = {
  members: [
    {
      id: "1",
      name: "Amelia Margaret",
      role: "Director",
      description:
        "Leads our strategic vision with deep industry expertise and a client-first approach.",
      image: "/team1.png",
      profileUrl: "/teamdetail",
    },
    {
      id: "2",
      name: "Mary Merrill",
      role: "Operations Director",
      description:
        "Ensures seamless operations and delivers excellence across every client interaction.",
      image: "/team2.png",
      profileUrl: "/teamdetail",
    },
    {
      id: "3",
      name: "Andrew Cameron",
      role: "Team Leader",
      description:
        "Guides and motivates the team to deliver the best financial solutions for our clients.",
      image: "/team3.png",
      profileUrl: "/teamdetail",
    },
    {
      id: "4",
      name: "Sofia Charlotte",
      role: "Manager",
      description:
        "Brings expertise and dedication to help clients make confident financial decisions.",
      image: "/team4.png",
      profileUrl: "/teamdetail",
    },
    {
      id: "5",
      name: "Lucas Bennett",
      role: "Investment Advisor",
      description:
        "Develops tailored investment strategies to help clients make confident, long-term decisions.",
      image: "/profile1.png",
      profileUrl: "/teamdetail",
    },
    {
      id: "6",
      name: "Olivia Chen",
      role: "Financial Planner",
      description:
        "Works with individuals and families to turn long-term financial goals into practical plans.",
      image: "/profile2.png",
      profileUrl: "/teamdetail",
    },
    {
      id: "7",
      name: "David Kim",
      role: "Portfolio Manager",
      description:
        "Monitors portfolio performance and identifies opportunities aligned with each client's risk profile.",
      image: "/profile3.png",
      profileUrl: "/teamdetail",
    },
    {
      id: "8",
      name: "Ethan Brooks",
      role: "Client Relations Manager",
      description:
        "Builds lasting client relationships through clear guidance and consistent support.",
      image: "/profile4.png",
      profileUrl: "/teamdetail",
    },
  ] satisfies TeamMember[],

  // Team member detail page (Mary Merrill)
  details: {
    skills: [
      { name: "Strategic Planning", percentage: 90 },
      { name: "Client Engagement", percentage: 85 },
      { name: "Operations Management", percentage: 88 },
      { name: "Financial Analysis", percentage: 80 },
    ] satisfies Skill[],

    expertise: [
      { title: "Client Relationship Management", icon: Users },
      { title: "Operational Strategy & Process Improvement", icon: Settings },
      { title: "Investment Planning & Advisory", icon: TrendingUp },
      { title: "Team Leadership & Development", icon: AwardIcon },
    ] satisfies Expertise[],

    experiences: [
      {
        period: "2018 - Present",
        company: "PrimeCore Investment Advisors",
        role: "Operations Director",
      },
      {
        period: "2014 - 2018",
        company: "FinTrust Capital",
        role: "Senior Operations Manager",
      },
      {
        period: "2010 - 2014",
        company: "Global Finance Solutions",
        role: "Operations Associate",
      },
    ] satisfies Experience[],
  },
};

// ================= INVESTMENT PROCESS =================
const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your financial goals, current situation, and future aspirations.",
    iconKey: "understand",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We analyze your needs and create a personalized investment strategy.",
    iconKey: "plan",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "We put your plan into action with the right investment solutions.",
    iconKey: "implement",
  },
  {
    number: "04",
    title: "Monitor",
    description:
      "We continuously track performance and make adjustments as needed.",
    iconKey: "monitor",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "We help you stay on track to achieve long-term financial success.",
    iconKey: "grow",
  },
];

// ================= SERVICES =================
const services = {
  list: [
    {
      title: "Wealth Management",
      description:
        "Personalized strategies to grow and preserve your wealth for the long term.",
      image: "/service1.png",
      href: "/servicedetail",
      iconKey: "wealth",
    },
    {
      title: "Retirement Planning",
      description:
        "Plan today for a financially independent and comfortable tomorrow.",
      image: "/service2.png",
      href: "/servicedetail",
      iconKey: "retirement",
    },
    {
      title: "Financial Planning",
      description:
        "Holistic financial plans tailored to your goals, lifestyle, and future aspirations.",
      image: "/service3.png",
      href: "/servicedetail",
      iconKey: "financial",
    },
    {
      title: "Investment Advisory",
      description:
        "Expert guidance to help you make informed and confident investment decisions.",
      image: "/service.png",
      href: "/servicedetail",
      iconKey: "advisory",
    },
    {
      title: "Risk Management",
      description:
        "Protect what matters most with customized risk management solutions.",
      image: "/service4.png",
      href: "/servicedetail",
      iconKey: "risk",
    },
    {
      title: "Tax Planning",
      description:
        "Strategic tax planning to maximize savings and enhance returns.",
      image: "/service5.png",
      href: "/servicedetail",
      iconKey: "tax",
    },
    {
      title: "Estate Planning",
      description:
        "Ensure a smooth transfer of your wealth for future generations.",
      image: "/service6.png",
      href: "/servicedetail",
      iconKey: "estate",
    },
    {
      title: "Business Financial Advisory",
      description:
        "Tailored financial strategies to help your business grow and stay resilient.",
      image: "/service1.png",
      href: "/servicedetail",
      iconKey: "business",
    },
  ] satisfies Service[],

  // Service detail page
  detail: {
    benefits: [
      {
        icon: UserRound,
        title: "Personalized Strategies",
        description: "Solutions tailored to your unique financial goals.",
      },
      {
        icon: TrendingUp,
        title: "Long-Term Growth",
        description: "Focused on sustainable wealth creation.",
      },
      {
        icon: ShieldCheck,
        title: "Risk Management",
        description: "Protecting your assets in changing markets.",
      },
      {
        icon: UsersRound,
        title: "Expert Guidance",
        description: "Support from experienced financial advisors.",
      },
    ] satisfies IconFeature[],

    otherServices: [
      { title: "Retirement Planning", image: "/blog1.png", href: "/service" },
      { title: "Financial Planning", image: "/blog2.png", href: "/service" },
      { title: "Investment Advisory", image: "/blog3.png", href: "/service" },
      { title: "Risk Management", image: "/blog4.png", href: "/service" },
      { title: "Tax Planning", image: "/blog5.png", href: "/service" },
      { title: "Estate Planning", image: "/goal1.png", href: "/service" },
      {
        title: "Business Financial Advisory",
        image: "/blogdetail.png",
        href: "/service",
      },
    ] satisfies OtherService[],

    process: [
      {
        number: "01",
        title: "Understand",
        description:
          "We learn about your goals and current financial situation.",
      },
      {
        number: "02",
        title: "Plan",
        description: "We create a customized wealth management strategy.",
      },
      {
        number: "03",
        title: "Implement",
        description: "We put the plan into action with continuous guidance.",
      },
      {
        number: "04",
        title: "Grow",
        description:
          "We monitor and adjust to keep you on track for long-term success.",
      },
    ] satisfies NumberedStep[],
  },
};

// ================= COUNTERS & SECTION HEADINGS =================
const counters = {
  trusted: {
    eyebrow: "OUR IMPACT IN NUMBERS",
    heading: "Trusted Today,",
    highlight: "Building A Brighter Tomorrow",
    description:
      "Our numbers reflect the trust of our clients, the strength of our partnerships, and our commitment to creating real growth.",
  },
  trustedBy: { value: "500+", prefix: "Trusted by", label: "Happy Clients" },
  processStats: [
    { value: "500+", label: "Happy Clients" },
    { value: "15+", label: "Years of Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "₹1,200 Cr+", label: "Assets Under Guidance" },
  ],
  teamStats: [
    { value: "10+", lines: ["Years", "Experience"] },
    { value: "50+", lines: ["Client", "Portfolios"] },
    { value: "98%", lines: ["Client", "Satisfaction"] },
  ],
};

// ================= STATIC PAGE HEADINGS =================
const content = {
  about: {
    eyebrow: "ABOUT US",
    titleFirst: "Empowering Businesses",
    titleSecond: "To Grow",
    titleHighlight: "Smarter",
  },
  achievements: {
    eyebrow: "Our Achievements",
    titleFirst: "Recognized for",
    titleSecond: "Creating",
    titleHighlight: "Brighter Financial Futures",
    awardsTitle: "Our Awards & Recognition",
  },
  blog: {
    headerEyebrow: "OUR LATEST BLOGS",
    headerTitle: "Insights That Drive",
    headerHighlight: "Your Financial Growth",
    detail: {
      articleTitles: [
        "1. Understand Your Financial Goals",
        "2. Diversify Your Portfolio",
        "3. Focus on Long-Term Growth",
        "4. Review and Adjust Regularly",
      ],
      recentTitle: "Recent Posts",
      recentPosts: [
        { title: "Smart Investment Strategies for a Brighter Future", date: "August 22, 2026", image: "/blog1.png", alt: "Smart Investment Strategies" },
        { title: "How to Plan for a Secure Retirement", date: "August 15, 2026", image: "/blog2.png", alt: "Secure Retirement" },
        { title: "Top 5 Ways to Build Wealth in 2026", date: "August 10, 2026", image: "/blog3.png", alt: "Build Wealth" },
        { title: "A Guide to Smart Tax Planning", date: "August 05, 2026", image: "/service.png", alt: "Smart Tax Planning" },
      ],
      adviceEyebrow: "Need Expert Advice?",
      adviceTitle: ["Let's Plan Your", "Financial Future", "Together"],
      categoriesTitle: "Categories",
    },
  },
  consultation: {
    eyebrow: "SCHEDULE YOUR MEETING",
    titleFirst: "Let's Plan",
    titleHighlight: "Your Future",
    titleLast: "Together",
    featureTitles: ["Personalized Session", "Talk to Experts", "No Obligation", "Your Privacy Matters"],
    imageTitle: "Expert Advice for a Brighter Tomorrow",
    expectationsEyebrow: "WHAT TO EXPECT",
    expectationsTitle: "A Simple",
    expectationsHighlight: "4-Step Process",
  },
  contact: {
    formEyebrow: "SEND US A MESSAGE",
    formTitleFirst: "Let's Start a",
    formTitleHighlight: "Conversation",
    informationEyebrow: "CONTACT INFORMATION",
    informationTitleFirst: "Reach Out to",
    informationTitleHighlight: "Us",
    channels: ["Call Us", "Email Us", "Visit Our Office", "Live Support"],
    locationEyebrow: "OUR LOCATION",
    locationTitleFirst: "Find Us",
    locationTitleHighlight: "Here",
    locationCardTitle: ["Your Financial", "Future Starts", "Here."],
  },
  faq: {
    eyebrow: "FAQs",
    titleFirst: "Your Questions,",
    titleHighlight: "Our Answers",
    contactTitleFirst: "Still Have",
    contactTitleHighlight: "Questions?",
    promoTitle: "Let's Build a Brighter Financial Future",
  },
  home: {
    hero: {
      eyebrow: "SMART INVESTMENTS. BRIGHTER POSSIBILITIES.",
      titleLines: ["Build Wealth", "with", "Clarity", "and Confidence."],
    },
    about: {
      eyebrow: "ABOUT US",
      titleFirst: "Empowering Businesses",
      titleSecond: "To Grow",
      titleHighlight: "Smarter",
      cta: "Know More",
    },
    partners: {
      eyebrow: "OUR PARTNERS",
      titleFirst: "Stronger Together",
      titleSecond: "With Our",
      titleHighlight: "Trusted Partners",
    },
    services: {
      eyebrow: "OUR SERVICES",
      titleFirst: "Tailored Financial Solutions",
      titleSecond: "For Your",
      titleHighlight: "Greater Tomorrow",
    },
    testimonials: {
      eyebrow: "TESTIMONIALS",
      titleFirst: "What Our",
      titleHighlight: "Clients Say",
    },
    whyChoose: {
      eyebrow: "WHY CHOOSE US",
      titleFirst: "Why You Should",
      titleSecond: "Choose Our",
      titleThird: "Company?",
      insuranceTitle: ["Insurance", "Managements"],
      investmentTitle: ["Strategic", "Investments"],
    },
  },
  investment: {
    process: {
      eyebrow: "OUR PROCESS",
      titleFirst: "A Clear Path to",
      titleHighlight: "Financial Success",
    },
    work: {
      imageTitle: ["Your Goals", "Our Commitment"],
      titleFirst: "Why Our",
      titleHighlight: "Process Works",
      featureTitles: ["Client-Centric Approach", "Data-Driven Strategies", "Transparent Communication", "Long-Term Partnership"],
    },
  },
  footer: {
    quickLinksTitle: "Quick Links",
    servicesTitle: "Our Services",
    contactTitle: "Contact Us",
  },
  missionVision: {
    eyebrow: "Our Values",
    titleFirst: "Our Mission &",
    titleHighlight: "Vision",
    missionLabel: "Our Mission",
    missionTitleFirst: "To Create Meaningful",
    missionTitleHighlight: "Financial Impact",
    missionTitleLast: "Every Day",
    visionLabel: "Our Vision",
    visionTitleFirst: "To Be a Trusted Partner",
    visionTitleSecond: "for a",
    visionTitleHighlight: "Brighter Tomorrow",
  },
  privacyPolicy: {
    eyebrow: "Our Privacy Policy",
    titleFirst: "Your Trust",
    titleHighlight: "Matters",
    contactTitle: "Contact Us",
  },
  service: {
    goalEyebrow: "OUR SERVICES",
    goalTitleFirst: "Financial Solutions for",
    goalTitleHighlight: "Every Goal",
    overviewEyebrow: "Overview",
    overviewTitleFirst: "Building Wealth",
    overviewTitleSecond: "for",
    overviewTitleHighlight: "a Brighter Tomorrow",
    benefitsTitle: "Key Benefits",
    processTitle: "Our Process",
    expertAdviceTitle: "Get Expert Advice",
    otherServicesTitle: "Our Other Services",
    getInTouchEyebrow: "LET'S PLAN A BRIGHTER TOMORROW",
    getInTouchTitle: "Ready to Take the Next Step?",
  },
  team: {
    listEyebrow: "Our Team",
    listTitleFirst: "Meet Our",
    listTitleHighlight: "Experts",
    detailName: "Mary Merrill",
    detailRole: "Operations Director",
    shareTitle: "Share Profile",
    connectTitle: "Let's Connect",
    detailSections: ["About Mary Merrill", "Key Skills", "Areas of Expertise", "Experience & Education"],
  },
  testimonials: {
    eyebrow: "Testimonials",
    titleFirst: "What Our",
    titleHighlight: "Clients Say",
  },
  navigation: {
    home: "Home",
    about: "About Us",
    aboutLinks: ["Why Choose Us", "Mission & Vision", "Our Team", "Team Details"],
    services: "Services",
    serviceLinks: ["Services Details"],
    investment: "Investment Process",
    investmentLinks: ["Our Partners", "Testimonials", "Awards", "FAQ"],
    blog: "Blog",
    blogLinks: ["Blog Details"],
    contact: "Contact Us",
    contactLinks: ["Book Consultation"],
    consultation: "Book a Consultation",
  },
  notFound: {
    numberDigits: ["4", "0", "4"],
    titleFirst: "Page Not",
    titleHighlight: "Found",
  },
};

const copy = {
  common: {
    brand: "PrimeCore Investment Advisors",
    phone: "+91 XXXXXXXXXX",
    email: "primecore@gmail.com",
    location: "New Delhi, India",
    addressLines: ["123 Business Avenue,", "New Delhi, 110001, India"],
    addressInline: "123 Business Avenue, New Delhi, 110001, India",
    officeHours: "Mon - Sat: 9:00 AM - 6:00 PM",
    readMore: "Read More",
    getInTouch: "Get in Touch",
    quoteMark: "“",
  },
  notFound: {
    description: [
      "The page you're looking for doesn't exist or may have been moved.",
      "Let's get you back on track.",
    ],
    backHome: "Back to Home",
    exploreServices: "Or explore our services",
    arrow: "→",
  },
  about: {
    imageAlt: "PrimeCore Investment Advisors",
    description:
      "At PrimeCore, we are committed to helping businesses and individuals make informed financial decisions. With deep market knowledge and a client-first approach, we provide tailored investment advisory solutions designed to create long-term value and sustainable growth.",
  },
  achievements: {
    description:
      "At PrimeCore, our work is driven by a simple belief — our clients' success matters. Over the years, our commitment to transparency, innovation, and client-centric solutions has been recognized by industry leaders and esteemed organizations.",
    filterLabel: "Filter awards by category",
  },
  blogDetail: {
    date: "August 22, 2026",
    author: "By Rahul Mehta",
    category: "Investment Planning",
    readTime: "5 Min Read",
    heroAlt: "Smart Investment Strategies",
    intro:
      "Investing is one of the most effective ways to build wealth and secure your financial future. However, with so many options available, it can be challenging to know where to start. In this article, we'll explore practical investment strategies that can help you make informed decisions and stay on track toward your goals.",
    sections: [
      "Before making any investment, it's important to define what you want to achieve. Are you saving for retirement, a home, or your children's education? Clear goals help you choose the right investment options and set a realistic timeline.",
      "Diversification helps reduce risk by spreading your investments across different asset classes such as equities, bonds, mutual funds, and real estate. A well-diversified portfolio can provide more stable returns over the long term.",
      "While short-term gains can be tempting, long-term investing typically offers greater rewards. Staying invested through market fluctuations allows you to benefit from the power of compounding.",
      "Your financial situation and market conditions can change over time. Regularly reviewing your portfolio ensures that your investments remain aligned with your goals and risk tolerance.",
    ],
    quote:
      "A goal without a plan is just a wish. Define your goals, create a strategy, and take consistent action.",
    conclusion:
      "At PrimeCore, we help individuals and businesses create personalized investment strategies designed for long-term success. If you're ready to take control of your financial future, get in touch with our experts today.",
    recentImageAlts: ["Smart Investment Strategies", "Secure Retirement", "Build Wealth", "Smart Tax Planning"],
    adviceDescription: "Get in touch with our advisors for personalized investment guidance.",
    contactCta: "Get in Touch",
  },
  consultation: {
    intro: "Fill out the form below and our team will confirm your appointment.",
    placeholders: {
      name: "Full Name *",
      email: "Email Address *",
      phone: "Phone Number *",
      date: "Preferred Date *",
      goals: "Tell us about your goals or any specific questions (Optional)",
    },
    typeLabel: "Select Consultation Type *",
    types: ["Financial Planning", "Investment Advisory", "Tax Optimization"],
    timeLabel: "Preferred Time *",
    times: ["Morning (10:00 AM - 1:00 PM)", "Afternoon (1:00 PM - 5:00 PM)", "Evening (5:00 PM - 8:00 PM)"],
    submit: "Book My Consultation",
    privacy: "Your information is safe with us. We respect your privacy.",
    imageAlt: "Expert Consultation",
    featureDescriptions: [
      "Get tailored advice based on your unique financial goals.",
      "Consult with certified investment advisors.",
      "It's a free consultation with no commitment.",
      "Your information is always secure with us.",
    ],
    expectationsDescription: "We've made it easy to connect with our experts and get the guidance you need.",
  },
  contact: {
    formIntro: "Fill out the form below and our team will get back to you shortly.",
    interestLabel: "Select Your Interest",
    interests: ["General Inquiry", "Business Consultation", "Support", "Other"],
    messagePlaceholder: "Tell us how we can help you...",
    sendMessage: "Send Message",
    informationDescription: "Feel free to contact us through any of the following channels. We're always happy to assist you.",
    channelHours: "Mon - Sat, 9:00 AM - 6:00 PM",
    responseTime: "We typically respond within 24 hours.",
    addressFirstLine: "123 Business Avenue, New Delhi,",
    addressSecondLine: "110001, India",
    liveChatDescription: "Chat with our team for quick assistance.",
    startLiveChat: "Start a Live Chat",
    locationDescription: "Visit our office for a face-to-face consultation. We'd love to meet you and help you plan a brighter financial future.",
    locationMapTitle: "PrimeCore Investment Advisors Location",
    officeAlt: "PrimeCore Investment Advisors office",
    locationTagline: ["Plan. Invest. Grow.", "With Confidence."],
  },
  faq: {
    description: "We've answered some of the most common questions to help you better understand our services and how we can support your financial goals.",
    contactDescription: "Our team is here to help you. Get in touch and we'll be happy to assist you.",
    contactMethods: ["Call Us", "Email Us", "Live Chat"],
    liveChatDescription: "Chat with our support team",
    contactCta: "Get in Touch",
    imageAlt: "Financial Advisor",
    imageDescription: "Expert guidance for every step of your journey.",
  },
  home: {
    aboutImageAlt: "PrimeCore advisors in a client meeting",
    aboutDescriptionLines: [
      "At PrimeCore, we are committed to helping businesses and individuals",
      "make informed financial decisions. With deep market knowledge and a",
      "client-first approach, we provide tailored investment advisory solutions",
      "designed to create long-term value and sustainable growth.",
    ],
    aboutFeatureDescriptions: [
      ["Data-driven strategies", "for measurable growth."],
      ["A relationship built on", "integrity and trust."],
      ["Your goals, our priority", "in every decision."],
    ],
    aboutClosing: ["Turn Your Financial Goals", "Into Real Opportunities."],
    blogsDescription: "Explore our latest articles, market trends, and expert advice to help you make smarter investment decisions.",
    heroImageAlt: "Plan, invest, grow, achieve with PrimeCore",
    heroDescriptionLines: [
      "At PrimeCore, we provide expert investment advisory",
      "services designed to help you achieve your financial goals",
      "and create a more secure tomorrow.",
    ],
    heroCtas: ["Book a Consultation", "Explore Our Services"],
    heroFeatureDescriptions: [
      ["Tailored to your unique goals."],
      ["Guidance from experienced", "financial advisors."],
      ["Building sustainable wealth", "for future generations."],
    ],
    howItWorks: {
      eyebrow: "HOW IT WORKS",
      titleFirst: "Connect, Collaborate, & Create",
      titleHighlight: "Limitless Opportunities.",
      descriptionFirst: "Our simple and streamlined process helps you turn your goals into real results —",
      descriptionSecond: "with the right strategy, the right people, and the right support.",
    },
    howItWorksImages: ["/consultation.png", "/experience.png", "/blog2.png", "/step2.png"],
    partnersDescription: "We collaborate with leading organizations to deliver greater value, innovation, and opportunities for our clients.",
    servicesImageAlt: "PrimeCore Financial Services",
    servicesDescription: "At PrimeCore, we deliver expert-driven financial services to help you plan, grow, and secure what matters most. Our solutions are designed around your goals, with clarity and confidence.",
    testimonialControls: ["Previous testimonial", "Next testimonial"],
    testimonialFootnote: ["REAL STORIES", "REAL IMPACT"],
    whyChooseDescription: "We are committed to delivering exceptional solutions that help your business grow. Our customer-focused approach, industry expertise, and innovative strategies set us apart from the rest.",
    whyChooseSupport: ["Your success is our priority,", "and we're with you every", "step of the way."],
    whyChooseCta: "Get In Touch",
    whyChooseImageAlts: ["Financial consultation", "Business meeting"],
    whyChooseDescriptions: ["Secure your future with reliable coverage solutions.", "Build wealth with smart and sustainable strategies."],
  },
  investment: {
    processDescription: [
      "We follow a simple, transparent, and client-focused process to understand your needs,",
      "create the right strategy, and help you achieve your financial goals.",
    ],
    workImageAlt: "Investment planning discussion",
    workImageDescription: ["A disciplined approach for", "a brighter financial future."],
    workDescription: "Our structured approach ensures clarity, confidence, and consistency at every step of your investment journey.",
    workFeatureDescriptions: [
      "Your goals and needs are always our top priority.",
      "We use insights and analysis to make informed decisions.",
      "You stay informed at every step.",
      "We are committed to your financial well-being, today and tomorrow.",
    ],
  },
  footer: {
    brandDescription: ["Empowering individuals and businesses", "with strategic investment solutions for a", "secure and prosperous tomorrow."],
    legalLinks: ["Privacy Policy", "Terms & Conditions", "Disclaimer", "Sitemap"],
    copyright: "© 2026 PrimeCore Investment Advisors. All Rights Reserved.",
  },
  header: {
    tagline: "Invest Today. A Stronger Tomorrow.",
    socialLabels: ["LinkedIn", "Facebook", "Instagram", "YouTube"],
  },
  navigation: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  missionVision: {
    description: "Guided by purpose, driven by people, focused on a brighter financial future.",
    missionAlt: "Wooden blocks with financial icon symbols",
    visionAlt: "Businessman standing looking over city skyline",
    missionFeatures: [["Client", "First"], ["Excellence", "in Advice"], ["Positive", "Impact"]] as const,
    visionFeatures: [["Innovative", "Solutions"], ["Sustainable", "Growth"], ["A Better", "Tomorrow"]] as const,
  },
  privacyPolicy: {
    description: "At PrimeCore, we are committed to protecting your personal information and maintaining your trust. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
    contactId: "09",
    contactDescription: "If you have any questions or concerns about this Privacy Policy or how we handle your information, please feel free to contact us.",
  },
  service: {
    getInTouchDescription: "Connect with our experts today and get personalized financial guidance based on your goals.",
    overviewDescription: [
      "Our wealth management services are designed to help you achieve your financial goals through personalized strategies, expert guidance, and a long-term approach. We take the time to understand your unique needs and create tailored solutions that grow, protect, and preserve your wealth across every stage of life.",
      "Whether you are planning for retirement, funding your children's education, or building a legacy, our experienced advisors are here to simplify complex financial decisions and give you confidence in your financial future.",
    ],
    overviewImageAlt: "Wealth Management",
    expertAdviceDescription: "Let's discuss how our wealth management solutions can help you achieve your financial goals.",
    serviceGoalDescription: "From wealth creation to risk management, our services are designed to meet your unique financial needs at every stage of life.",
  },
  team: {
    listDescription: "A team of experienced professionals, committed to helping you achieve your financial goals.",
    viewProfile: "View Profile",
    detailImageAlt: "Mary Merrill",
    detailDescription: "Mary Merrill brings over a decade of experience in investment advisory and financial services. With a strong focus on operational excellence, client satisfaction, and strategic growth, Mary plays a key role in ensuring that PrimeCore delivers consistent value and a seamless experience to every client.",
    socialLabels: ["LinkedIn", "Facebook", "Twitter/X", "Copy Link"],
    connectDescription: "Get in touch to discuss how we can work together.",
    contactCta: "Contact Now",
    previousMembers: "Previous team members",
    nextMembers: "Next team members",
    aboutDescription: "Mary Merrill has been an integral part of PrimeCore Investment Advisors, leading operational strategy and client engagement initiatives. With a deep understanding of market dynamics and a passion for helping individuals achieve their financial goals, Mary ensures that our processes, people, and technology work together to deliver exceptional client outcomes.",
    biography: "Mary believes in building long-term relationships based on trust, transparency, and performance. Her leadership and commitment continue to drive PrimeCore's mission of empowering clients with smarter investment solutions.",
    quote: "Success in investing comes from discipline, clarity, and a client-first mindset.",
    education: ["Master of Business Administration (MBA)", "Delhi University, India | 2010"],
  },
  testimonials: {
    description: "Trusted by individuals and businesses to achieve their financial goals. Here's what our clients have to say about their experience with PrimeCore.",
    showPrefix: "Show testimonial from",
    quoteMark: "\"",
  },
  ui: {
    heroNotFound: "Hero data not found",
    breadcrumbHome: "Home",
  },
  metadata: {
    title: "PrimeCore Investment Advisors",
    description: "Smart investments. Brighter possibilities.",
  },
};

// ================= SINGLE SOURCE OF TRUTH =================
export const data = {
  hero,
  footer,
  home,
  partners,
  reviews,
  faqs,
  blog,
  awards,
  consultationSteps,
  policySections,
  team,
  processSteps,
  services,
  counters,
  content,
  copy,
};

export const investmentTemplateData = {
  Investment: {
    templateComponents: {
      "template-1": {
        shared: {
          Header: "InvestmentHeader1",
          Footer: "InvestmentFooter1",
        },
        pages: {
          home: {
            components: [
              { key: "Hero", component: "InvestmentHomeHero1" },
              { key: "About", component: "InvestmentAbout1" },
              { key: "Services", component: "InvestmentServices1" },
              { key: "HowItWorks", component: "InvestmentHowItWorks1" },
              { key: "Trusted", component: "InvestmentTrusted1" },
              { key: "Partners", component: "InvestmentPartners1" },
              { key: "Testimonials", component: "InvestmentTestimonials1" },
              { key: "Blog", component: "InvestmentBlog1" },
            ],
          },
          investment: {
            components: [
              { key: "Hero", component: "InvestmentProcessHero1" },
              { key: "Process", component: "InvestmentProcess1" },
              { key: "ProcessWork", component: "InvestmentProcessWork1" },
            ],
          },
          about: {
            components: [
              { key: "Hero", component: "InvestmentAboutHero1" },
              { key: "About", component: "InvestmentAboutPage1" },
              { key: "Values", component: "InvestmentValues1" },
            ],
          },
          awards: {
            components: [
              { key: "Hero", component: "InvestmentAwardsHero1" },
              { key: "Achievements", component: "InvestmentAwards1" },
            ],
          },
          blog: {
            components: [
              { key: "Hero", component: "InvestmentBlogHero1" },
              { key: "BlogPage", component: "InvestmentBlogPage1" },
            ],
          },
          contact: {
            components: [
              { key: "Hero", component: "InvestmentContactHero1" },
              { key: "ContactForm", component: "InvestmentContactForm1" },
              { key: "Location", component: "InvestmentLocation1" },
            ],
          },
          faq: {
            components: [
              { key: "Hero", component: "InvestmentFaqHero1" },
              { key: "Faq", component: "InvestmentFaq1" },
            ],
          },
          ourTeam: {
            components: [
              { key: "Hero", component: "InvestmentOurTeamHero1" },
              { key: "Team", component: "InvestmentTeam1" },
            ],
          },
          testimonials: {
            components: [
              { key: "Hero", component: "InvestmentTestimonialsHero1" },
              { key: "Reviews", component: "InvestmentReviews1" },
            ],
          },
          privacyPolicy: {
            components: [
              { key: "Hero", component: "InvestmentPrivacyHero1" },
              { key: "Policy", component: "InvestmentPrivacyPolicy1" },
            ],
          },
        },
      },
    },
    sections: {
      Hero: {
        variants: {
          InvestmentHomeHero1: {
            title: "Home",
            image: "/banner.png",
          },
          InvestmentAboutHero1: {
            title: "About Us",
            image: "/banner.png",
          },
          InvestmentContactHero1: {
            title: "Contact Us",
            image: "/banner.png",
          },
          InvestmentBlogHero1: {
            title: "Blogs",
            image: "/banner.png",
          },
          InvestmentServicesHero1: {
            title: "Our Services",
            image: "/banner.png",
          },
          InvestmentProcessHero1: {
            title: "Investment Process",
            image: "/banner.png",
          },
          InvestmentBlogDetailHero1: {
            title: "Blog Detail",
            image: "/banner.png",
          },
          InvestmentServiceDetailHero1: {
            title: "Service Detail",
            image: "/banner.png",
          },
          InvestmentMissionVisionHero1: {
            title: "Mission & Vision",
            image: "/banner.png",
          },
          InvestmentWhyChooseUsHero1: {
            title: "Why Choose Us",
            image: "/banner.png",
          },
          InvestmentOurTeamHero1: {
            title: "Our Team",
            image: "/banner.png",
          },
          InvestmentTeamDetailsHero1: {
            title: "Team Detail",
            image: "/banner.png",
          },
          InvestmentPartnersHero1: {
            title: "Our Partners",
            image: "/banner.png",
          },
          InvestmentTestimonialsHero1: {
            title: "Testimonials",
            image: "/banner.png",
          },
          InvestmentFaqHero1: {
            title: "FAQ",
            image: "/banner.png",
          },
          InvestmentAwardsHero1: {
            title: "Awards & Achievements",
            image: "/banner.png",
          },
          InvestmentPrivacyHero1: {
            title: "Privacy & Policy",
            image: "/banner.png",
          },
          InvestmentConsultationHero1: {
            title: "Book Consultation",
            image: "/banner.png",
          },
        },
      },
      HomeHero: {
        variants: {
          InvestmentHomeHero1: {
            image: "/hero.png",
            imageAlt: "PrimeCore Investment Advisor",
            badge: "SMART INVESTMENTS. BRIGHTER POSSIBILITIES.",
            titleStart: "Build Wealth",
            titleBeforeHighlight: "with",
            titleHighlight: "Clarity",
            titleEnd: "and Confidence.",
            description:
              "At PrimeCore, we provide expert investment advisory services designed to help you achieve your financial goals and create a more secure tomorrow.",
            primaryButton: "Book a Consultation",
            primaryLink: "/bookConsultation",
            secondaryButton: "Explore Our Services",
            secondaryLink: "/service",
            features: [
              { title: "Personalized Strategies", description: "Tailored to your unique goals." },
              { title: "Trusted Expertise", description: "Guidance from experienced financial advisors." },
              { title: "Long-Term Focus", description: "Building sustainable wealth for future generations." },
            ],
            sidebar: {
              topWords: ["PLAN", "INVEST", "GROW", "ACHIEVE"],
              brand: "PRIMECORE",
              bottomLines: ["A STRONGER", "TOMORROW", "STARTS", "TODAY."],
            },
          },
        },
      },
      About: {
        variants: {
          InvestmentAbout1: {
            image: "/about.png",
            imageAlt: "PrimeCore Investment Advisors",
            badge: "ABOUT US",
            titleStart: "Empowering Businesses",
            titleMiddle: "To Grow",
            titleHighlight: "Smarter",
            description:
              "At PrimeCore, we are committed to helping businesses and individuals make informed financial decisions. With deep market knowledge and a client-first approach, we provide tailored investment advisory solutions designed to create long-term value and sustainable growth.",
            features: [
              { icon: "BarChart3", title: "Strategic", subtitle: "Advisory", description: "Data-driven strategies for measurable growth." },
              { icon: "ShieldCheck", title: "Trusted", subtitle: "Partnership", description: "A relationship built on integrity and trust." },
              { icon: "Users", title: "Client-Centric", subtitle: "Approach", description: "Your goals, our priority in every decision." },
            ],
            buttonText: "Know More",
            buttonLink: "/aboutus",
            callout: "Turn Your Financial Goals\nInto Real Opportunities.",
          },
        },
      },
      Services: {
        variants: {
          InvestmentServices1: {
            image: "/service.png",
            imageAlt: "PrimeCore Financial Services",
            badge: "OUR SERVICES",
            titleStart: "Tailored Financial Solutions\nFor Your",
            titleHighlight: "Greater Tomorrow",
            description:
              "At PrimeCore, we deliver expert-driven financial services to help you plan, grow, and secure what matters most. Our solutions are designed around your goals, with clarity and confidence.",
            serviceLink: "/service",
            items: [
              { icon: "BarChart3", title: "Investment", subtitle: "Advisory", description: "Data-driven strategies to grow your wealth." },
              { icon: "Shield", title: "Wealth", subtitle: "Management", description: "Preserve, grow, and transfer your wealth." },
              { icon: "FileText", title: "Financial", subtitle: "Planning", description: "Personalized plans for every life stage." },
              { icon: "Globe2", title: "Global", subtitle: "Opportunities", description: "Access international markets with confidence." },
              { icon: "Users", title: "Retirement", subtitle: "Planning", description: "Build a secure and independent future." },
              { icon: "PieChart", title: "Risk", subtitle: "Management", description: "Identify, assess, and minimize financial risks." },
              { icon: "Sprout", title: "Tax", subtitle: "Consulting", description: "Smarter tax solutions for higher savings." },
              { icon: "Handshake", title: "Business", subtitle: "Advisory", description: "Strategic support to accelerate growth." },
            ],
            servicePage: {
              badge: "OUR SERVICES",
              titleStart: "Financial Solutions for",
              titleHighlight: "Every Goal",
              description:
                "From wealth creation to risk management, our services are designed to meet your unique financial needs at every stage of life.",
              readMoreText: "Read More",
              items: [
                { icon: "BarChart3", title: "Wealth Management", description: "Personalized strategies to grow and preserve your wealth for the long term.", image: "/service1.png", href: "/service/serviceDetail" },
                { icon: "Shield", title: "Retirement Planning", description: "Plan today for a financially independent and comfortable tomorrow.", image: "/service2.png", href: "/service/serviceDetail" },
                { icon: "Users", title: "Financial Planning", description: "Holistic financial plans tailored to your goals, lifestyle, and future aspirations.", image: "/service3.png", href: "/service/serviceDetail" },
                { icon: "TrendingUp", title: "Investment Advisory", description: "Expert guidance to help you make informed and confident investment decisions.", image: "/service.png", href: "/service/serviceDetail" },
                { icon: "Scale", title: "Risk Management", description: "Protect what matters most with customized risk management solutions.", image: "/service4.png", href: "/service/serviceDetail" },
                { icon: "FileText", title: "Tax Planning", description: "Strategic tax planning to maximize savings and enhance returns.", image: "/service5.png", href: "/service/serviceDetail" },
                { icon: "UsersRound", title: "Estate Planning", description: "Ensure a smooth transfer of your wealth for future generations.", image: "/service6.png", href: "/service/serviceDetail" },
                { icon: "BriefcaseBusiness", title: "Business Financial Advisory", description: "Tailored financial strategies to help your business grow and stay resilient.", image: "/service1.png", href: "/service/serviceDetail" },
              ],
            },
            getInTouch: {
              image: "/contact.png",
              badge: "LET'S PLAN A BRIGHTER TOMORROW",
              title: "Ready to Take the Next Step?",
              description: "Connect with our experts today and get personalized financial guidance based on your goals.",
              buttonText: "Get in Touch",
              href: "/contact",
            },
          },
        },
      },
      HowItWorks: {
        variants: {
          InvestmentHowItWorks1: {
            badge: "HOW IT WORKS",
            titleStart: "Connect, Collaborate, & Create",
            titleHighlight: "Limitless Opportunities.",
            description:
              "Our simple and streamlined process helps you turn your goals into real results — with the right strategy, the right people, and the right support.",
            steps: [
              { number: "01", image: "/goal1.png", title: "Understand Your Goals", description: "We start by learning about your business, objectives, and challenges to understand what truly matters to you." },
              { number: "02", image: "/goal2.png", title: "Plan & Strategize", description: "Our experts analyze insights and develop a customized strategy tailored to your goals." },
              { number: "03", image: "/goal3.png", title: "Collaborate & Execute", description: "We work closely with your team to implement the plan, ensuring seamless execution at every step." },
              { number: "04", image: "/team1.png", title: "Achieve Greater Results", description: "We track progress, optimize performance, and help you unlock new opportunities for long-term growth." },
            ],
          },
        },
      },
      Trusted: {
        variants: {
          InvestmentTrusted1: {
            image: "/building.png",
            badge: "OUR IMPACT IN NUMBERS",
            titleStart: "Trusted Today,",
            titleHighlight: "Building A Brighter Tomorrow",
            description:
              "Our numbers reflect the trust of our clients, the strength of our partnerships, and our commitment to creating real growth.",
            stats: [
              { icon: "Users", number: "500+", label: "Happy Clients" },
              { icon: "FileText", number: "1,200+", label: "Projects Completed" },
              { icon: "Trophy", number: "30+", label: "Years of Experience" },
              { icon: "Handshake", number: "98%", label: "Client Satisfaction" },
            ],
          },
        },
      },
      WhyChooseUs: {
        variants: {
          InvestmentWhyChooseUs1: {
            badge: "WHY CHOOSE US",
            titleLines: ["Why You Should", "Choose Our", "Company?"],
            description:
              "We are committed to delivering exceptional solutions that help your business grow. Our customer-focused approach, industry expertise, and innovative strategies set us apart from the rest.",
            trustedTitle: "Trusted by 500+ Happy Clients",
            trustedDescription: "Your success is our priority, and we're with you every step of the way.",
            buttonText: "Get In Touch",
            buttonLink: "/contact",
            decorativeImages: [
              { image: "/team1.png", alt: "Financial consultation" },
              { image: "/hero.png", alt: "Business meeting" },
            ],
            services: [
              { image: "/team1.png", imageAlt: "Financial consultation", title: "Personalized Strategies", description: "Tailored financial guidance for your unique goals." },
              { image: "/hero.png", imageAlt: "Business meeting", title: "Insurance\nManagements", description: "Secure your future with\nreliable coverage\nsolutions." },
              { title: "Strategic\nInvestments", description: "Build wealth with\nsmart and sustainable\nstrategies." },
            ],
          },
        },
      },
      Testimonials: {
        variants: {
          InvestmentTestimonials1: {
            badge: "TESTIMONIALS",
            titleStart: "What Our",
            titleHighlight: "Clients Say",
            mainImage: "/testimonials.png",
            previousLabel: "Previous testimonial",
            nextLabel: "Next testimonial",
            sideLabels: ["REAL STORIES", "REAL IMPACT"],
            items: [
              { id: 1, name: "Rahul Mehta", role: "BUSINESS OWNER", image: "/profile1.png", rating: 4, quote: "The team provided exceptional support and guidance throughout the entire process. Their expertise and professionalism made everything simple and hassle-free. Highly recommended!" },
              { id: 2, name: "Priya Sharma", role: "ENTREPRENEUR", image: "/profile2.png", rating: 5, quote: "Their personalized approach and attention to detail made a real difference. The entire experience was smooth, transparent, and focused on achieving our goals." },
              { id: 3, name: "Ananya Kapoor", role: "COMPANY DIRECTOR", image: "/profile3.png", rating: 5, quote: "I truly appreciated the team's professionalism and commitment. They understood our requirements and provided practical solutions at every step." },
              { id: 4, name: "Arjun Malhotra", role: "INVESTOR", image: "/profile4.png", rating: 4, quote: "The guidance we received was clear, reliable, and easy to understand. Their team made the entire process comfortable and straightforward." },
              { id: 5, name: "Neha Verma", role: "BUSINESS CONSULTANT", image: "/profile.png", rating: 5, quote: "Excellent communication and strong expertise. They stayed involved throughout the process and delivered exactly what we needed." },
            ],
          },
        },
      },
      Blog: {
        variants: {
          InvestmentBlog1: {
            badge: "OUR LATEST BLOGS",
            titleStart: "Insights That Drive",
            titleHighlight: "Your Financial Growth",
            description: "Explore our latest articles, market trends, and expert advice to help you make smarter investment decisions.",
            readMoreText: "Read More",
            items: [
              { id: 1, date: "15", month: "AUG", year: "2026", category: "INVESTMENT STRATEGY", title: "5 Smart Investment Strategies for Long-Term Wealth", description: "Discover practical investment strategies that can help you build a stronger financial future and achieve your goals with confidence.", image: "/step1.png" },
              { id: 2, date: "10", month: "AUG", year: "2026", category: "FINANCIAL PLANNING", title: "How to Plan Your Finances in a Changing Economy", description: "Learn how to adapt your financial plan to economic changes and stay on track toward your life goals.", image: "/blog.png" },
              { id: 3, date: "05", month: "AUG", year: "2026", category: "WEALTH MANAGEMENT", title: "Key Benefits of Working with a Financial Advisor", description: "Explore how a professional advisor can help you make informed decisions and create a more secure tomorrow.", image: "/step2.png" },
            ],
          },
        },
      },
      Partners: {
        variants: {
          InvestmentPartners1: {
            badge: "OUR PARTNERS",
            titleStart: "Stronger Together\nWith Our",
            titleHighlight: "Trusted Partners",
            description: "We collaborate with leading organizations to deliver greater value, innovation, and opportunities for our clients.",
            items: [
              { id: 1, name: "Allianz", image: "/partners/allianz.png" },
              { id: 2, name: "AXA", image: "/partners/axa.png" },
              { id: 3, name: "HDFC Life", image: "/partners/hdfc-life.png" },
              { id: 4, name: "ICICI Lombard", image: "/partners/icici-lombard.png" },
              { id: 5, name: "Bajaj Allianz", image: "/partners/bajaj-allianz.png" },
              { id: 6, name: "TATA AIA", image: "/partners/tata-aia.png" },
              { id: 7, name: "SBI Life", image: "/partners/sbi-life.png" },
              { id: 8, name: "Max Life", image: "/partners/max-life.png" },
              { id: 9, name: "Reliance General Insurance", image: "/partners/reliance-general-insurance.png" },
              { id: 10, name: "Kotak General Insurance", image: "/partners/kotak-general-insurance.png" },
              { id: 11, name: "Bharti AXA", image: "/partners/bharti-axa.png" },
              { id: 12, name: "LIC", image: "/partners/lic.png" },
              { id: 13, name: "Digit", image: "/partners/digit.png" },
              { id: 14, name: "Kotak Life Insurance", image: "/partners/kotak-life-insurance.png" },
              { id: 15, name: "Policybazaar", image: "/partners/policybazaar.png" },
            ],
          },
        },
      },
      Faq: {
        variants: {
          InvestmentFaq1: {
            badge: "FAQs",
            titleStart: "Your Questions,",
            titleHighlight: "Our Answers",
            description:
              "We've answered some of the most common questions to help you better understand our services and how we can support your financial goals.",
            faqs: [
              { id: 1, number: "01", question: "What services does PrimeCore offer?", answer: "We offer a comprehensive range of investment advisory services including wealth management, retirement planning, financial planning, tax planning, estate planning, and risk management. Our solutions are tailored to meet the unique goals and needs of each client." },
              { id: 2, number: "02", question: "How do I get started with PrimeCore?", answer: "Getting started is easy. Simply reach out to us through our contact form or give us a call. We will schedule an initial consultation to understand your financial goals and recommend a tailored strategy." },
              { id: 3, number: "03", question: "Are your investment strategies suitable for long-term goals?", answer: "Absolutely. Our investment strategies are designed with a long-term perspective in mind, focusing on sustainable growth and wealth preservation aligned with your future objectives." },
              { id: 4, number: "04", question: "What makes PrimeCore different from other advisory firms?", answer: "We pride ourselves on transparency, personalized service, and a client-first approach. Unlike many firms, we take the time to deeply understand your unique situation before recommending any financial products." },
              { id: 5, number: "05", question: "Do you offer personalized financial plans?", answer: "Yes, every financial plan we create is 100% personalized. We analyze your income, expenses, risk tolerance, and future goals to build a strategy that works specifically for you." },
              { id: 6, number: "06", question: "How do you manage risk in investments?", answer: "We use a diversified approach to risk management, spreading investments across various asset classes based on your risk profile. We also conduct regular portfolio reviews to ensure alignment with market conditions and your goals." },
              { id: 7, number: "07", question: "Can you help with retirement planning?", answer: "Yes, retirement planning is one of our core services. We help you estimate future expenses, optimize your savings, and choose the right retirement accounts to ensure a comfortable post-retirement life." },
              { id: 8, number: "08", question: "What is the minimum investment amount?", answer: "Our minimum investment requirements vary depending on the specific services and strategies. Please contact us directly to discuss your situation and find a plan that fits your budget." },
              { id: 9, number: "09", question: "How often will I receive updates on my investments?", answer: "You will receive regular quarterly reports, as well as annual comprehensive reviews. Additionally, we provide timely updates whenever there are significant market shifts or changes to your portfolio." },
              { id: 10, number: "10", question: "Do you provide support for tax planning?", answer: "Yes, we offer integrated tax planning services to help minimize your tax liability and maximize your returns, ensuring your investment strategy is tax-efficient." },
            ],
            contact: {
              titleStart: "Still Have",
              titleHighlight: "Questions?",
              description: "Our team is here to help you. Get in touch and we'll be happy to assist you.",
              phoneLabel: "Call Us",
              phone: "+91 98765 43210",
              emailLabel: "Email Us",
              email: "info@primecoreadvisors.com",
              chatLabel: "Live Chat",
              chatDescription: "Chat with our support team",
              buttonText: "Get in Touch",
              buttonLink: "/contact",
            },
            promo: {
              image: "/faq.png",
              imageAlt: "Financial Advisor",
              title: "Let's Build a Brighter Financial Future",
              description: "Expert guidance for every step of your journey.",
            },
          },
        },
      },
      Awards: {
        variants: {
          InvestmentAwards1: {
            featureBadge: "Our Achievements",
            intro:
              "At PrimeCore, our work is driven by a simple belief — our clients' success matters. Over the years, our commitment to transparency, innovation, and client-centric solutions has been recognized by industry leaders and esteemed organizations.",
            titleStart: "Recognized for",
            titleMiddle: "Creating",
            titleHighlight: "Brighter Financial Futures",
            featureItems: [
              { title: "Industry Recognition", description: "Honored for excellence in financial advisory services." },
              { title: "Client Trust", description: "Awarded for outstanding client satisfaction." },
              { title: "Innovation in Advisory", description: "Recognized for innovative wealth management solutions." },
              { title: "Commitment to Excellence", description: "Celebrated for ethics, transparency, and long-term impact." },
            ],
            awardsTitle: "Our Awards & Recognition",
            filterAriaLabel: "Filter awards by category",
            categories: ["All", "Industry Awards", "Client Recognition", "Corporate Excellence"],
            awards: [
              { id: 1, image: "/award1.png", title: "Best Investment Advisory Firm", year: "2024", organization: "Global Finance Summit", category: "Industry Awards" },
              { id: 2, image: "/award2.png", title: "Excellence in Wealth Management", year: "2023", organization: "National Financial Awards", category: "Industry Awards" },
              { id: 3, image: "/award3.png", title: "Client Satisfaction Award", year: "2023", organization: "Wealth & Finance Forum", category: "Client Recognition" },
              { id: 4, image: "/award4.png", title: "Innovation in Financial Solutions", year: "2022", organization: "Business Leadership Awards", category: "Corporate Excellence" },
              { id: 5, image: "/award5.png", title: "Trusted Advisory Partner", year: "2022", organization: "Investment Business Review", category: "Client Recognition" },
              { id: 6, image: "/award6.png", title: "Excellence in Client Service", year: "2021", organization: "Financial Services Network", category: "Client Recognition" },
              { id: 7, image: "/award7.png", title: "Rising Firm of the Year", year: "2021", organization: "Business Growth Awards", category: "Corporate Excellence" },
              { id: 8, image: "/award8.png", title: "Contribution to Financial Literacy", year: "2020", organization: "Financial Education Council", category: "Corporate Excellence" },
            ],
          },
        },
      },
      Reviews: {
        variants: {
          InvestmentReviews1: {
            badge: "Testimonials",
            titleStart: "What Our",
            titleHighlight: "Clients Say",
            description:
              "Trusted by individuals and businesses to achieve their financial goals. Here's what our clients have to say about their experience with PrimeCore.",
            items: [
              { id: 1, name: "Rahul Mehta", location: "New Delhi, India", image: "/profile1.png", rating: 5, text: "PrimeCore helped me create a clear investment plan tailored to my goals. Their advice is practical, transparent, and truly client-focused. I now feel more confident about my financial future." },
              { id: 2, name: "Priya Sharma", location: "Gurgaon, India", image: "/profile2.png", rating: 5, text: "The team at PrimeCore made the entire process simple and easy to understand. They explained every option clearly and helped me choose the right investment strategy for my needs." },
              { id: 3, name: "Amit Verma", location: "Mumbai, India", image: "/profile3.png", rating: 5, text: "Excellent service and genuine guidance. PrimeCore takes time to understand your goals and provides solutions that actually work. I highly recommend them to anyone looking for trustworthy financial advisors." },
              { id: 4, name: "Neha Kapoor", location: "Bangalore, India", image: "/profile3.png", rating: 5, text: "I've been investing with PrimeCore for over 3 years now, and the experience has been great. Their insights and regular updates help me stay on track with my financial goals." },
              { id: 5, name: "Vikram Soni", location: "Pune, India", image: "/profile4.png", rating: 5, text: "Professional, knowledgeable, and always available to answer questions. PrimeCore has been a valuable partner in my wealth creation journey." },
              { id: 6, name: "Anjali Desai", location: "Ahmedabad, India", image: "/profile.png", rating: 5, text: "PrimeCore's personalized approach made all the difference. They genuinely care about their clients and provide solutions that align with long-term financial growth." },
            ],
          },
        },
      },
      PrivacyPolicy: {
        variants: {
          InvestmentPrivacyPolicy1: {
            badge: "Our Privacy Policy",
            titleStart: "Your Trust",
            titleHighlight: "Matters",
            description:
              "At PrimeCore, we are committed to protecting your personal information and maintaining your trust. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
            policies: [
              { id: "01", title: "Information We Collect", content: "We may collect personal information such as your name, email address, phone number, and other details when you fill out a form, subscribe to our newsletter, or contact us. We may also collect non-personal information such as browser type, device information, and website usage data." },
              { id: "02", title: "How We Use Your Information", content: "We use your information to provide and improve our services, respond to your inquiries, send important updates, and offer personalized investment insights. We do not use your information for any unauthorized purpose." },
              { id: "03", title: "Information Sharing", content: "We do not sell, trade, or rent your personal information. We may share your information with trusted service providers who help us operate our website and deliver our services, under strict confidentiality agreements and only for legitimate business purposes." },
              { id: "04", title: "Data Security", content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, no method of transmission over the internet is 100% secure." },
              { id: "05", title: "Cookies & Tracking Technologies", content: "We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can manage your cookie preferences through your browser settings." },
              { id: "06", title: "Your Rights", content: "You have the right to access, update, or request deletion of your personal information. If you would like to exercise any of these rights, please contact us using the details provided below." },
              { id: "07", title: "Third-Party Links", content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing any personal information." },
              { id: "08", title: "Policy Updates", content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised effective date." },
            ],
            contactTitle: "Contact Us",
            contactDescription: "If you have any questions or concerns about this Privacy Policy or how we handle your information, please feel free to contact us.",
            email: "info@gmail.com",
            phone: "+91 xxxxx xxxxx",
            address: "123 Business Avenue, New Delhi, 110001, India",
          },
        },
      },
      Team: {
        variants: {
          InvestmentTeam1: {
            badge: "OUR TEAM",
            titleStart: "Meet Our",
            titleHighlight: "Experts",
            description: "A team of experienced professionals, committed to helping you achieve your financial goals.",
            profileButton: "View Profile",
            items: [
              { id: "1", name: "Amelia Margaret", role: "Director", description: "Leads our strategic vision with deep industry expertise and a client-first approach.", image: "/team1.png", profileUrl: "/teamDetails" },
              { id: "2", name: "Mary Merrill", role: "Operations Director", description: "Ensures seamless operations and delivers excellence across every client interaction.", image: "/team2.png", profileUrl: "/teamDetails" },
              { id: "3", name: "Andrew Cameron", role: "Team Leader", description: "Guides and motivates the team to deliver the best financial solutions for our clients.", image: "/team3.png", profileUrl: "/teamDetails" },
              { id: "4", name: "Sofia Charlotte", role: "Manager", description: "Brings expertise and dedication to help clients make confident financial decisions.", image: "/team4.png", profileUrl: "/teamDetails" },
              { id: "5", name: "Amelia Margaret", role: "Director", description: "Leads our strategic vision with deep industry expertise and a client-first approach.", image: "/team1.png", profileUrl: "/teamDetails" },
              { id: "6", name: "Mary Merrill", role: "Operations Director", description: "Ensures seamless operations and delivers excellence across every client interaction.", image: "/team2.png", profileUrl: "/teamDetails" },
              { id: "7", name: "Andrew Cameron", role: "Team Leader", description: "Guides and motivates the team to deliver the best financial solutions for our clients.", image: "/team3.png", profileUrl: "/teamDetails" },
              { id: "8", name: "Sofia Charlotte", role: "Manager", description: "Brings expertise and dedication to help clients make confident financial decisions.", image: "/team4.png", profileUrl: "/teamDetails" },
            ],
          },
        },
      },
      AboutPage: {
        variants: {
          InvestmentAboutPage1: {
            image: "/about.png",
            imageAlt: "PrimeCore Investment Advisors",
            badge: "ABOUT US",
            titleStart: "Empowering Businesses",
            titleMiddle: "To Grow",
            titleHighlight: "Smarter",
            description:
              "At PrimeCore, we are committed to helping businesses and individuals make informed financial decisions. With deep market knowledge and a client-first approach, we provide tailored investment advisory solutions designed to create long-term value and sustainable growth.",
          },
        },
      },
      BlogPage: {
        variants: {
          InvestmentBlogPage1: {
            badge: "OUR LATEST BLOGS",
            titleStart: "Insights That Drive",
            titleHighlight: "Your Financial Growth",
            description: "Explore our latest articles, market trends, and expert advice to help you make smarter investment decisions.",
            readMoreText: "Read More",
            detailLink: "/blog/BlogDetail",
            items: [
              { id: 1, date: "15", month: "AUG", year: "2026", category: "INVESTMENT STRATEGY", title: "5 Smart Investment Strategies for Long-Term Wealth", description: "Discover practical investment strategies that can help you build a stronger financial future and achieve your goals with confidence.", image: "/blog1.png" },
              { id: 2, date: "10", month: "AUG", year: "2026", category: "FINANCIAL PLANNING", title: "How to Plan Your Finances in a Changing Economy", description: "Learn how to adapt your financial plan to economic changes and stay on track toward your life goals.", image: "/blog2.png" },
              { id: 3, date: "05", month: "AUG", year: "2026", category: "WEALTH MANAGEMENT", title: "Key Benefits of Working with a Financial Advisor", description: "Explore how a professional advisor can help you make informed decisions and create a more secure tomorrow.", image: "/blog3.png" },
              { id: 4, date: "20", month: "AUG", year: "2026", category: "INVESTMENT STRATEGY", title: "5 Smart Investment Strategies for Long-Term Wealth", description: "Discover practical investment strategies that can help you build a stronger financial future and achieve your goals with confidence.", image: "/blog4.png" },
              { id: 5, date: "25", month: "AUG", year: "2026", category: "FINANCIAL PLANNING", title: "How to Plan Your Finances in a Changing Economy", description: "Learn how to adapt your financial plan to economic changes and stay on track toward your life goals.", image: "/blog5.png" },
              { id: 6, date: "13", month: "AUG", year: "2026", category: "WEALTH MANAGEMENT", title: "Key Benefits of Working with a Financial Advisor", description: "Explore how a professional advisor can help you make informed decisions and create a more secure tomorrow.", image: "/blog.png" },
            ],
          },
        },
      },
      BlogDetailContent: {
        variants: {
          InvestmentBlogDetail1: {
            date: "August 22, 2026",
            authorPrefix: "By",
            author: "Rahul Mehta",
            category: "Investment Planning",
            readTime: "5 Min Read",
            image: "/blogdetail.png",
            imageAlt: "Smart Investment Strategies",
            introduction: [
              "Investing is one of the most effective ways to build wealth and secure your financial future. However, with so many options available, it can be challenging to know where to start. In this article, we'll explore practical investment strategies that can help you make informed decisions and stay on track toward your goals.",
            ],
            sections: [
              {
                heading: "1. Understand Your Financial Goals",
                paragraphs: [
                  "Before making any investment, it's important to define what you want to achieve. Are you saving for retirement, a home, or your children's education? Clear goals help you choose the right investment options and set a realistic timeline.",
                ],
              },
              {
                heading: "2. Diversify Your Portfolio",
                paragraphs: [
                  "Diversification helps reduce risk by spreading your investments across different asset classes such as equities, bonds, mutual funds, and real estate. A well-diversified portfolio can provide more stable returns over the long term.",
                ],
              },
              {
                heading: "3. Focus on Long-Term Growth",
                paragraphs: [
                  "While short-term gains can be tempting, long-term investing typically offers greater rewards. Staying invested through market fluctuations allows you to benefit from the power of compounding.",
                ],
              },
              {
                heading: "4. Review and Adjust Regularly",
                paragraphs: [
                  "Your financial situation and market conditions can change over time. Regularly reviewing your portfolio ensures that your investments remain aligned with your goals and risk tolerance.",
                ],
              },
            ],
            quote: "A goal without a plan is just a wish. Define your goals, create a strategy, and take consistent action.",
            closing:
              "At PrimeCore, we help individuals and businesses create personalized investment strategies designed for long-term success. If you're ready to take control of your financial future, get in touch with our experts today.",
            recentPostsTitle: "Recent Posts",
            recentPosts: [
              { title: "Smart Investment Strategies for a Brighter Future", date: "August 22, 2026", image: "/blog1.png", href: "/contact" },
              { title: "How to Plan for a Secure Retirement", date: "August 15, 2026", image: "/blog2.png", href: "/contact" },
              { title: "Top 5 Ways to Build Wealth in 2026", date: "August 10, 2026", image: "/blog3.png", href: "/contact" },
              { title: "A Guide to Smart Tax Planning", date: "August 05, 2026", image: "/service.png", href: "/contact" },
            ],
            advice: {
              eyebrow: "Need Expert Advice?",
              titleLines: ["Let's Plan Your", "Financial Future", "Together"],
              description: "Get in touch with our advisors for personalized investment guidance.",
              buttonText: "Get in Touch",
              href: "/contact",
            },
            categoriesTitle: "Categories",
            categories: [
              { name: "Investment Planning", href: "/investment" },
              { name: "Retirement Planning", href: "/investment" },
              { name: "Wealth Management", href: "/investment" },
              { name: "Tax Planning", href: "/investment" },
              { name: "Financial Tips", href: "/investment" },
              { name: "Market Insights", href: "/investment" },
            ],
          },
        },
      },
      MissionVisionContent: {
        variants: {
          InvestmentMissionVision1: {
            badge: "OUR VALUES",
            headingStart: "Our Mission",
            headingHighlight: "&",
            headingEnd: "Vision",
            description: "Guided by purpose, driven by people, focused on a brighter financial future.",
            mission: {
              label: "OUR MISSION",
              titleStart: "To Create Meaningful",
              titleHighlight: "Financial Impact",
              titleEnd: "Every Day",
              description:
                "Our mission is to deliver trusted investment advisory solutions that empower individuals and businesses, build long-term relationships, and contribute to a stronger, more secure financial future.",
              image: "/value1.png",
              imageAlt: "Wooden blocks with financial icon symbols",
              features: [
                { icon: "Users", label: "Client First" },
                { icon: "Gem", label: "Excellence in Advice" },
                { icon: "Shield", label: "Positive Impact" },
              ],
            },
            vision: {
              label: "OUR VISION",
              titleStart: "To Be a Trusted Partner for a",
              titleHighlight: "Brighter Tomorrow",
              description:
                "Our vision is to be a leading and most trusted investment advisory firm, recognized for integrity, innovation, and excellence, creating opportunities and inspiring financial growth for generations to come.",
              image: "/value2.png",
              imageAlt: "Businessman standing looking over city skyline",
              features: [
                { icon: "Lightbulb", label: "Innovative Solutions" },
                { icon: "BarChart2", label: "Sustainable Growth" },
                { icon: "Star", label: "A Better Tomorrow" },
              ],
            },
          },
        },
      },
      SiteChromeContent: {
        variants: {
          InvestmentSiteChrome1: {
            logo: "/logo.png",
            brandName: "PrimeCore Investment Advisors",
            metadata: {
              title: "PrimeCore Investment Advisors",
              description: "Personalized investment and financial advisory solutions for a secure and prosperous future.",
            },
            heroDataMissingText: "Hero data not found",
            notFound: {
              titleStart: "Page Not",
              titleHighlight: "Found",
              descriptionLines: [
                "The page you're looking for doesn't exist or may have been moved.",
                "Let's get you back on track.",
              ],
              homeButtonText: "Back to Home",
              homeHref: "/",
              servicesPrompt: "Or explore our services",
              servicesHref: "/services",
            },
            header: {
              tagline: "Invest Today. A Stronger Tomorrow.",
              email: "info@gmail.com",
              emailHref: "mailto:info@primecore.com",
              phone: "+91 xxxxx xxxxx",
              phoneHref: "#",
              socials: [
                { platform: "LinkedIn", href: "#" },
                { platform: "Facebook", href: "#" },
                { platform: "Instagram", href: "#" },
                { platform: "YouTube", href: "#" },
              ],
              navigation: {
                items: [
                  { key: "home", label: "Home", href: "/", activePaths: ["/"], children: [] },
                  { key: "about", label: "About Us", href: "/aboutus", activePaths: ["/aboutus", "/whyChooseUs", "/MissionVision", "/ourTeam", "/teamDetails"], children: [
                    { label: "Why Choose Us", href: "/whyChooseUs" },
                    { label: "Mission & Vision", href: "/MissionVision" },
                    { label: "Our Team", href: "/ourTeam" },
                    { label: "Team Details", href: "/teamDetails" },
                  ] },
                  { key: "services", label: "Services", href: "/service", activePaths: ["/service", "/service/serviceDetail"], children: [
                    { label: "Services Details", href: "/service/serviceDetail" },
                  ] },
                  { key: "investment", label: "Investment Process", href: "/investment", activePaths: ["/investment", "/ourPartners", "/testimonials", "/awards", "/faqs"], children: [
                    { label: "Our Partners", href: "/ourPartners" },
                    { label: "Testimonials", href: "/testimonials" },
                    { label: "Awards", href: "/awards" },
                    { label: "FAQ", href: "/faqs" },
                  ] },
                  { key: "blog", label: "Blog", href: "/blog", activePaths: ["/blog", "/blog/BlogDetail"], children: [
                    { label: "Blog Details", href: "/blog/BlogDetail" },
                  ] },
                  { key: "contact", label: "Contact Us", href: "/contact", activePaths: ["/contact", "/consultation"], children: [
                    { label: "Book Consultation", href: "/bookConsultation" },
                  ] },
                ],
                consultationButton: { label: "Book a Consultation", href: "/bookConsultation" },
                openMenuLabel: "Open menu",
                closeMenuLabel: "Close menu",
              },
            },
            footer: {
              descriptionLines: [
                "Empowering individuals and businesses",
                "with strategic investment solutions for a",
                "secure and prosperous tomorrow.",
              ],
              quickLinksTitle: "Quick Links",
              quickLinks: [
                { name: "Home", href: "/" },
                { name: "About Us", href: "/aboutus" },
                { name: "Our Services", href: "/service" },
                { name: "Investment Solutions", href: "/investment" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ],
              servicesTitle: "Our Services",
              services: [
                { name: "Wealth Management", href: "/investment" },
                { name: "Financial Planning", href: "/investment" },
                { name: "Retirement Planning", href: "/investment" },
                { name: "Mutual Funds", href: "/investment" },
                { name: "Portfolio Management", href: "/investment" },
                { name: "Tax Planning", href: "/investment" },
              ],
              contactTitle: "Contact Us",
              addressLines: ["123 Business Avenue,", "New Delhi, 110001, India"],
              phone: "+91 xxxxx xxxxx",
              phoneHref: "#",
              email: "info@gmail.com.com",
              emailHref: "mailto:info@gmail.com.com",
              hours: "Mon - Sat: 9:00 AM - 6:00 PM",
              socials: [
                { platform: "LinkedIn", href: "#" },
                { platform: "Facebook", href: "#" },
                { platform: "Instagram", href: "#" },
                { platform: "YouTube", href: "#" },
              ],
              legalLinks: [
                { name: "Privacy Policy", href: "/privacyPolicy" },
                { name: "Terms & Conditions", href: "/privacyPolicy" },
                { name: "Disclaimer", href: "/privacyPolicy" },
                { name: "Sitemap", href: "/privacyPolicy" },
              ],
              copyright: "© 2026 PrimeCore Investment Advisors. All Rights Reserved.",
            },
          },
        },
      },
      ContactFormContent: {
        variants: {
          InvestmentContactForm1: {
            formBadge: "SEND US A MESSAGE",
            formTitleStart: "Let's Start a",
            formTitleHighlight: "Conversation",
            formDescription: "Fill out the form below and our team will get back to you shortly.",
            namePlaceholder: "Full Name *",
            emailPlaceholder: "Email Address *",
            phonePlaceholder: "Phone Number *",
            interestPlaceholder: "Select Your Interest",
            interestOptions: [
              { value: "general", label: "General Inquiry" },
              { value: "business", label: "Business Consultation" },
              { value: "support", label: "Support" },
              { value: "other", label: "Other" },
            ],
            messagePlaceholder: "Tell us how we can help you...",
            submitText: "Send Message",
            contactBadge: "CONTACT INFORMATION",
            contactTitleStart: "Reach Out to",
            contactTitleHighlight: "Us",
            contactDescription: "Feel free to contact us through any of the following channels. We're always happy to assist you.",
            callTitle: "Call Us",
            phone: "+91 98765 43210",
            phoneHref: "tel:+919876543210",
            callHours: "Mon - Sat, 9:00 AM - 6:00 PM",
            emailTitle: "Email Us",
            email: "info@primecoreadvisors.com",
            emailHref: "mailto:info@primecoreadvisors.com",
            emailResponse: "We typically respond within 24 hours.",
            officeTitle: "Visit Our Office",
            addressLines: ["123 Business Avenue, New Delhi,", "110001, India"],
            officeHours: "Mon - Sat, 9:00 AM - 6:00 PM",
            supportTitle: "Live Support",
            supportDescription: "Chat with our team for quick assistance.",
            supportButtonText: "Start a Live Chat",
          },
        },
      },
      ConsultationContent: {
        variants: {
          InvestmentConsultation1: {
            badge: "SCHEDULE YOUR MEETING",
            titleStart: "Let's Plan",
            titleHighlight: "Your Future Together",
            description: "Fill out the form below and our team will confirm your appointment.",
            namePlaceholder: "Full Name *",
            emailPlaceholder: "Email Address *",
            phonePlaceholder: "Phone Number *",
            typePlaceholder: "Select Consultation Type *",
            consultationTypes: [
              { value: "financial", label: "Financial Planning" },
              { value: "investment", label: "Investment Advisory" },
              { value: "tax", label: "Tax Optimization" },
            ],
            datePlaceholder: "Preferred Date *",
            timePlaceholder: "Preferred Time *",
            preferredTimes: [
              { value: "morning", label: "Morning (10:00 AM - 1:00 PM)" },
              { value: "afternoon", label: "Afternoon (1:00 PM - 5:00 PM)" },
              { value: "evening", label: "Evening (5:00 PM - 8:00 PM)" },
            ],
            goalsPlaceholder: "Tell us about your goals or any specific questions (Optional)",
            submitText: "Book My Consultation",
            submitHref: "/contact",
            privacyText: "Your information is safe with us. We respect your privacy.",
            image: "/consultation.png",
            imageAlt: "Expert Consultation",
            imageTitle: "Expert Advice for a Brighter Tomorrow",
            benefits: [
              { icon: "Calendar", title: "Personalized Session", description: "Get tailored advice based on your unique financial goals." },
              { icon: "Users", title: "Talk to Experts", description: "Consult with certified investment advisors." },
              { icon: "MapPin", title: "No Obligation", description: "It's a free consultation with no commitment." },
              { icon: "ShieldCheck", title: "Your Privacy Matters", description: "Your information is always secure with us." },
            ],
            processBadge: "WHAT TO EXPECT",
            processTitleStart: "A Simple",
            processTitleHighlight: "4-Step Process",
            processDescription: "We've made it easy to connect with our experts and get the guidance you need.",
            steps: [
              { number: "01.", title: "Book a Slot", description: "Choose a date and time that works for you.", icon: "Calendar" },
              { number: "02.", title: "Discuss Your Goals", description: "Share your financial goals and ask your questions.", icon: "MessageSquare" },
              { number: "03.", title: "Get Expert Advice", description: "Receive personalized recommendations.", icon: "UserCheck" },
              { number: "04.", title: "Plan for the Future", description: "Take confident steps toward your financial goals.", icon: "BarChart2" },
            ],
          },
        },
      },
      TeamProfileContent: {
        variants: {
          InvestmentTeamProfile1: {
            image: "/marry.png",
            imageAlt: "Mary Merrill",
            name: "Mary Merrill",
            role: "Operations Director",
            bio: "Mary Merrill brings over a decade of experience in investment advisory and financial services. With a strong focus on operational excellence, client satisfaction, and strategic growth, Mary plays a key role in ensuring that PrimeCore delivers consistent value and a seamless experience to every client.",
            metrics: [
              { target: 10, suffix: "+", labelLines: ["Years", "Experience"] },
              { target: 50, suffix: "+", labelLines: ["Client", "Portfolios"] },
              { target: 98, suffix: "%", labelLines: ["Client", "Satisfaction"] },
            ],
            phone: "+91 98765 43210",
            email: "mary.merrill@primecoreadvisors.com",
            location: "New Delhi, India",
            shareTitle: "Share Profile",
            socials: ["LinkedIn", "Facebook", "Twitter/X"],
            connect: {
              title: "Let's Connect",
              description: "Get in touch to discuss how we can work together.",
              buttonText: "Contact Now",
              href: "/contact",
            },
            aboutTitle: "About Mary Merrill",
            aboutParagraphs: [
              "Mary Merrill has been an integral part of PrimeCore Investment Advisors, leading operational strategy and client engagement initiatives. With a deep understanding of market dynamics and a passion for helping individuals achieve their financial goals, Mary ensures that our processes, people, and technology work together to deliver exceptional client outcomes.",
              "Mary believes in building long-term relationships based on trust, transparency, and performance. Her leadership and commitment continue to drive PrimeCore's mission of empowering clients with smarter investment solutions.",
            ],
            skillsTitle: "Key Skills",
            skillSuffix: "%",
            copyLinkLabel: "Copy Link",
            skills: [
              { name: "Strategic Planning", percentage: 90 },
              { name: "Client Engagement", percentage: 85 },
              { name: "Operations Management", percentage: 88 },
              { name: "Financial Analysis", percentage: 80 },
            ],
            expertiseTitle: "Areas of Expertise",
            expertise: [
              { icon: "Users", title: "Client Relationship Management" },
              { icon: "Settings", title: "Operational Strategy & Process Improvement" },
              { icon: "TrendingUp", title: "Investment Planning & Advisory" },
              { icon: "Award", title: "Team Leadership & Development" },
            ],
            quote: "Success in investing comes from discipline, clarity, and a client-first mindset.",
            quoteAuthor: "Mary Merrill",
            experienceTitle: "Experience & Education",
            experiences: [
              { period: "2018 - Present", company: "PrimeCore Investment Advisors", role: "Operations Director" },
              { period: "2014 - 2018", company: "FinTrust Capital", role: "Senior Operations Manager" },
              { period: "2010 - 2014", company: "Global Finance Solutions", role: "Operations Associate" },
            ],
            education: {
              degree: "Master of Business Administration (MBA)",
              institution: "Delhi University, India | 2010",
            },
          },
        },
      },
      ServiceDetailContent: {
        variants: {
          InvestmentServiceDetail1: {
            overviewBadge: "Overview",
            titleLine1: "Building Wealth",
            titlePrefix: "for",
            titleHighlight: "a Brighter Tomorrow",
            image: "/overview.png",
            imageAlt: "Wealth Management",
            overviewParagraphs: [
              "Our wealth management services are designed to help you achieve your financial goals through personalized strategies, expert guidance, and a long-term approach. We take the time to understand your unique needs and create tailored solutions that grow, protect, and preserve your wealth across every stage of life.",
              "Whether you are planning for retirement, funding your children's education, or building a legacy, our experienced advisors are here to simplify complex financial decisions and give you confidence in your financial future.",
            ],
            benefitsTitle: "Key Benefits",
            benefits: [
              { icon: "UserRound", title: "Personalized Strategies", description: "Solutions tailored to your unique financial goals." },
              { icon: "TrendingUp", title: "Long-Term Growth", description: "Focused on sustainable wealth creation." },
              { icon: "ShieldCheck", title: "Risk Management", description: "Protecting your assets in changing markets." },
              { icon: "UsersRound", title: "Expert Guidance", description: "Support from experienced financial advisors." },
            ],
            processTitle: "Our Process",
            process: [
              { number: "01", title: "Understand", description: "We learn about your goals and current financial situation." },
              { number: "02", title: "Plan", description: "We create a customized wealth management strategy." },
              { number: "03", title: "Implement", description: "We put the plan into action with continuous guidance." },
              { number: "04", title: "Grow", description: "We monitor and adjust to keep you on track for long-term success." },
            ],
            adviceTitle: "Get Expert Advice",
            adviceDescription: "Let's discuss how our wealth management solutions can help you achieve your financial goals.",
            adviceButtonText: "Get in Touch",
            adviceHref: "/contact",
            phone: "+91 98765 43210",
            phoneHref: "tel:+919876543210",
            email: "info@primecoreadvisors.com",
            emailHref: "mailto:info@primecoreadvisors.com",
            otherServicesTitle: "Our Other Services",
            serviceLinkAriaLabel: "View",
            otherServices: [
              { title: "Retirement Planning", image: "/blog1.png", href: "/service" },
              { title: "Financial Planning", image: "/blog2.png", href: "/service" },
              { title: "Investment Advisory", image: "/blog3.png", href: "/service" },
              { title: "Risk Management", image: "/blog4.png", href: "/service" },
              { title: "Tax Planning", image: "/blog5.png", href: "/service" },
              { title: "Estate Planning", image: "/goal1.png", href: "/service" },
              { title: "Business Financial Advisory", image: "/blogdetail.png", href: "/service" },
            ],
          },
        },
      },
      ContactLocation: {
        variants: {
          InvestmentLocation1: {
            badge: "OUR LOCATION",
            titleStart: "Find Us",
            titleHighlight: "Here",
            description: "Visit our office for a face-to-face consultation. We'd love to meet you and help you plan a brighter financial future.",
            mapUrl: "https://www.google.com/maps?q=New+Delhi,+India&output=embed",
            mapTitle: "PrimeCore Investment Advisors Location",
            image: "/contact/office.png",
            imageAlt: "PrimeCore Investment Advisors office",
            cardTitle: "Your Financial\nFuture Starts\nHere.",
            cardDescription: "Plan. Invest. Grow.\nWith Confidence.",
          },
        },
      },
      InvestmentProcess: {
        variants: {
          InvestmentProcess1: {
            badge: "OUR PROCESS",
            titleStart: "A Clear Path to",
            titleHighlight: "Financial Success",
            description:
              "We follow a simple, transparent, and client-focused process to understand your needs, create the right strategy, and help you achieve your financial goals.",
            steps: [
              { number: "01", title: "Understand", description: "We learn about your financial goals, current situation, and future aspirations." },
              { number: "02", title: "Plan", description: "We analyze your needs and create a personalized investment strategy." },
              { number: "03", title: "Implement", description: "We put your plan into action with the right investment solutions." },
              { number: "04", title: "Monitor", description: "We continuously track performance and make adjustments as needed." },
              { number: "05", title: "Grow", description: "We help you stay on track to achieve long-term financial success." },
            ],
          },
        },
      },
      ProcessWork: {
        variants: {
          InvestmentProcessWork1: {
            image: "/experience.png",
            imageAlt: "Investment planning discussion",
            imageTitle: "Your Goals\nOur Commitment",
            imageDescription: "A disciplined approach for\na brighter financial future.",
            titleStart: "Why Our",
            titleHighlight: "Process Works",
            description: "Our structured approach ensures clarity, confidence, and consistency at every step of your investment journey.",
            features: [
              { title: "Client-Centric Approach", description: "Your goals and needs are always our top priority." },
              { title: "Data-Driven Strategies", description: "We use insights and analysis to make informed decisions." },
              { title: "Transparent Communication", description: "You stay informed at every step." },
              { title: "Long-Term Partnership", description: "We are committed to your financial well-being, today and tomorrow." },
            ],
            stats: [
              { target: 500, suffix: "+", label: "Happy Clients" },
              { target: 15, suffix: "+", label: "Years of Experience" },
              { target: 98, suffix: "%", label: "Client Satisfaction" },
              { target: 1200, prefix: "₹", suffix: " Cr+", label: "Assets Under Guidance" },
            ],
          },
        },
      },
    },
  },
} as const;

export default data;
