const CONFIG = {
  // Profile setting (required)
  profile: {
    name: "PLZ ENTER TEXT",
    image: "/POP CAT.jpg",
    role: "CTF no sleep gang ᕕ( ᐛ )ᕗ",
    bio: "Sherpasec Founder | MCC & GCC Crew | Gamuda Scholar | Maybank Student Ambassador 2021 | APU Student Ambassador 2022 | FSEC-SS President & Challenge Creator | 2nd Year APU Cybersecurity Student",
    email: "shiauhuei.csh@gmail.com",
    linkedin: "chang-shiau-huei",
    github: "PLZENTERTEXT",
    instagram: "",
  },
  projects: [
    {
      name: `SherpaSec Call for Speakers`,
      href: "https://forms.gle/dFt5FHd9VGBmeLEZ8",
    },
    {
      name: `SherpaSec Call for Venue`,
      href: "https://forms.gle/7jt48AwZiPNwJwot6",
    },
  ],
  // Blog setting (required)
  blog: {
    title: "PLZ ENTER TEXT",
    description: "Ello! Welcome to PLZ ENTER TEXT's CyberSec Blog :D",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configuration (required)
  link: "https://cybersec-blog-plzentertext.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // Notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // Plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "PLZENTERTEXT/cybersec-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
