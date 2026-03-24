const CONFIG = {
  // profile setting (required)
  profile: {
    name: "PLZ ENTER TEXT",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "CTF no sleep gang ᕕ( ᐛ )ᕗ",
    bio: "Sherpasec Founder | HTB CDSA | CEH | Gamuda Cybersecurity Executive | MCC & GCC Crew | Maybank Student Ambassador 2021 | APU Student Ambassador 2022 | Ex FSEC-SS President & Challenge Creator",
    email: "shiauhuei.csh@gmail.com",
    linkedin: "changshiauhuei",
    github: "PLZENTERTEXT",
    instagram: "",
  },
  projects: [
    {
      name: `SherpaSec`,
      href: "https://sherpasec.org/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "PLZ ENTER TEXT",
    description: "Cybersecurity Blog",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://cybersec-blog-plzentertext.vercel.app,
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
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
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
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
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
