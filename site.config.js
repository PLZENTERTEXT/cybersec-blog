const CONFIG = {
  // Profile setting (required)
  profile: {
    name: "PLZ ENTER TEXT",
    image: "https://en.gravatar.com/userimage/233875469/41fb79392a437d503e597e1d389d869c?size=200",
    role: "CTF no sleep gang ᕕ( ᐛ )ᕗ",
    bio: "Sherpasec Founder | MCC & GCC Crew | Gamuda Scholar | Maybank Student Ambassador 2021 | APU Student Ambassador 2022 | FSEC-SS President & Challenge Creator | 2nd Year APU Cybersecurity Student",
    email: "shiauhuei.csh@gmail.com",
    linkedin: "chang-shiau-huei",
    github: "PLZENTERTEXT",
    instagram: "",
  },
  // Blog setting (required)
  blog: {
    title: "PLZ ENTER TEXT",
    description: "Welcome to PLZ ENTER TEXT's Cybersec Blog :D,
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
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
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
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
