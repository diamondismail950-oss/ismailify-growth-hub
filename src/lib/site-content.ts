/**
 * ISMAILIFY editable content.
 * Replace statistics, portfolio items, testimonials and social links here.
 */

export const BRAND = {
  name: "ISMAILIFY",
  founder: "Ismail",
  tagline: "Digital Marketing • Branding • Growth",
  email: "ismaildigital929@gmail.com",
  phone: "08109988963",
  whatsapp: "2348109988963", // international format for wa.me links
  whatsappMessage: "Hello Ismailify, I'd like to discuss a digital marketing project.",
};

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/** Editable placeholder statistics — replace with real numbers. */
export const ABOUT_STATS = [
  { value: 50, suffix: "+", label: "Projects & Campaigns" },
  { value: 20, suffix: "+", label: "Brands Supported" },
  { value: 100, suffix: "%", label: "Growth Focused" },
  { value: 24, suffix: "/7", label: "Digital Mindset" },
];

/** Editable placeholder performance targets — not verified client data. */
export const RESULT_STATS = [
  { value: 150, prefix: "+", suffix: "%", label: "Organic Reach" },
  { value: 85, prefix: "+", suffix: "%", label: "Engagement" },
  { value: 120, prefix: "+", suffix: "%", label: "Qualified Leads" },
  { value: 65, prefix: "+", suffix: "%", label: "Conversion Growth" },
];

export const SERVICES = [
  {
    number: "01",
    icon: "share",
    title: "Social Media Marketing",
    description:
      "Build a strong social presence through strategic content, audience growth, engagement, and consistent brand communication.",
  },
  {
    number: "02",
    icon: "search",
    title: "Search Engine Optimization",
    description:
      "Improve your online visibility and help potential customers discover your business through search engines.",
  },
  {
    number: "03",
    icon: "target",
    title: "Paid Advertising",
    description:
      "Create targeted advertising campaigns designed to generate awareness, leads, customers, and measurable business results.",
  },
  {
    number: "04",
    icon: "pen",
    title: "Content Strategy",
    description:
      "Create strategic content that educates your audience, builds authority, increases engagement, and drives action.",
  },
  {
    number: "05",
    icon: "gem",
    title: "Brand Strategy",
    description:
      "Develop a stronger brand identity, positioning, messaging, and digital presence that makes your business stand out.",
  },
  {
    number: "06",
    icon: "trending",
    title: "Digital Growth Strategy",
    description:
      "Build a customized digital marketing roadmap based on your business goals, audience, competitors, and opportunities.",
  },
] as const;

export const WHY_FEATURES = [
  {
    icon: "compass",
    title: "Strategy First",
    description: "Every marketing decision starts with a clear strategy.",
  },
  {
    icon: "chart",
    title: "Data Driven",
    description:
      "Use performance data and analytics to identify what works and what needs improvement.",
  },
  {
    icon: "sparkles",
    title: "Creative Execution",
    description: "Turn strategies into content and campaigns that people notice and remember.",
  },
  {
    icon: "rocket",
    title: "Growth Focused",
    description: "Focus on meaningful business outcomes rather than vanity metrics.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, audience, competitors, challenges, and goals.",
  },
  { number: "02", title: "Strategize", description: "Develop a customized digital marketing strategy." },
  {
    number: "03",
    title: "Create",
    description: "Develop the content, campaigns, branding, and creative assets.",
  },
  { number: "04", title: "Launch", description: "Execute the strategy across the right digital channels." },
  { number: "05", title: "Optimize", description: "Track performance, analyze data, and improve campaigns." },
  { number: "06", title: "Scale", description: "Double down on what works and build sustainable growth." },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Social Media",
  "Branding",
  "SEO",
  "Advertising",
  "Content",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

/** Sample projects — illustrative placeholders, not real client work. */
export const PORTFOLIO = [
  {
    id: "aurum-retail",
    name: "Aurum Retail",
    category: "Social Media" as PortfolioCategory,
    industry: "Fashion Retail",
    services: "Content Calendar • Community • Creative",
    description:
      "A sample social media system built around consistent storytelling and a repeatable content engine.",
    results: "Sample outcome: stronger posting consistency and audience growth",
    image: "social",
  },
  {
    id: "north-lane",
    name: "North Lane Studio",
    category: "Branding" as PortfolioCategory,
    industry: "Professional Services",
    services: "Positioning • Identity • Messaging",
    description:
      "A sample brand refresh covering positioning, tone of voice, and a cohesive digital identity.",
    results: "Sample outcome: clearer positioning and premium brand perception",
    image: "branding",
  },
  {
    id: "verdant-clinic",
    name: "Verdant Clinic",
    category: "SEO" as PortfolioCategory,
    industry: "Healthcare",
    services: "Technical SEO • Content • Local Search",
    description:
      "A sample search visibility programme built on keyword mapping and helpful service content.",
    results: "Sample outcome: improved search visibility for core services",
    image: "seo",
  },
  {
    id: "orbit-tech",
    name: "Orbit Tech",
    category: "Advertising" as PortfolioCategory,
    industry: "SaaS",
    services: "Paid Social • Search Ads • Landing Pages",
    description:
      "A sample acquisition campaign pairing tight audience targeting with conversion-focused pages.",
    results: "Sample outcome: lower cost per qualified lead",
    image: "ads",
  },
  {
    id: "brew-house",
    name: "Brew House Co.",
    category: "Content" as PortfolioCategory,
    industry: "Hospitality",
    services: "Content Strategy • Photography Direction",
    description:
      "A sample content programme translating brand personality into a consistent monthly narrative.",
    results: "Sample outcome: higher engagement per post",
    image: "content",
  },
  {
    id: "summit-growth",
    name: "Summit Growth",
    category: "Social Media" as PortfolioCategory,
    industry: "Finance",
    services: "Growth Roadmap • Analytics • Channel Mix",
    description:
      "A sample growth roadmap sequencing channels, offers, and measurement over two quarters.",
    results: "Sample outcome: clearer growth priorities and tracking",
    image: "growth",
  },
];

/** Placeholder testimonials — replace with genuine client feedback. */
export const TESTIMONIALS = [
  {
    name: "Placeholder Client",
    role: "Marketing Lead",
    company: "Sample Company",
    quote:
      "Working with a strategy-first marketer changed how we think about our channels. Every decision had a reason behind it.",
  },
  {
    name: "Placeholder Client",
    role: "Founder",
    company: "Sample Studio",
    quote:
      "The brand direction finally matched the quality of the work we deliver. Our audience noticed the difference immediately.",
  },
  {
    name: "Placeholder Client",
    role: "Operations Director",
    company: "Sample Group",
    quote:
      "Clear reporting, creative campaigns and a focus on outcomes rather than vanity metrics. Exactly what we needed.",
  },
];

export const SERVICE_OPTIONS = [
  "Social Media Marketing",
  "Search Engine Optimization",
  "Paid Advertising",
  "Content Strategy",
  "Brand Strategy",
  "Digital Growth Strategy",
];

export const BUDGET_OPTIONS = [
  "Under ₦100,000",
  "₦100,000 – ₦300,000",
  "₦300,000 – ₦700,000",
  "₦700,000+",
  "Not sure yet",
];
