// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://romcom-creator.vercel.app";

// Import and set font for each variant
import { Montserrat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const heading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Montserrat({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | mint | rose | dusk | custom
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative | sharp
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "RomCom Creator - Tạo visual novel romcom tương tác",
    description:
      "Tạo thế giới romcom, thiết kế nữ chính và điều hướng câu chuyện bằng lựa chọn tương tác trong RomCom Creator.",
    image: "/images/og/home.jpg",
    canonical: "https://romcom-creator.vercel.app/",
    robots: "index,follow",
    alternates: [{ href: "https://romcom-creator.vercel.app/", hrefLang: "vi" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "RomCom Creator",
  description: meta.home.description,
  email: "",
};

// social links
const social = {
  twitter: "https://www.twitter.com/_onceui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { baseURL, fonts, style, meta, schema, social, dataStyle };
