// import { defaultTheme } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default {
  sourceDir: "src",
  dest: "docs/",
  title: "RADKA",
  description: "TODO",
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'diginori loG' }],
    ['meta', { property: 'og:description', content: 'TODO' }],
    ['meta', { property: 'og:image', content: 'TODO' }],
    ['meta', { property: 'og:url', content: 'https://radka.life' }],
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
      // title: 'TODO',
      // description: 'TODO',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  plugins: [
    searchPlugin({
      // options
    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-TODO",
      debug: true,
    }),
  ],

  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'Korean',
      },
      '/en/': {
        selectLanguageName: 'English',
        sidebar: {
          "/en/logs/": [
            {
              text: "Technology",
              collapsible: true,
              children: [
                "/en/logs/tech/nhn-forward/",
                "/en/logs/tech/naver-cloud-summit/",
                "/en/logs/tech/google-cloud-innovators-hive/",
    
                "/en/logs/tech/1784/",
                "/en/logs/tech/sre/",
                "/en/logs/tech/seo/",
    
                "/en/logs/tech/ai/",
              ],
            },
            {
              text: "Travel",
              collapsible: true,
              children: [
                "/en/logs/travel/meplace.md",
                "/en/logs/travel/정숙성.md",
    
                "/en/logs/travel/diet/",
              ],
            },
          ],
        },
      },
    },

    home: "/index.md",

    logo: "/images/plum-logo-1.svg",
    logoDark: "/images/plum-logo-2.svg",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "LIFE", link: "/logs/" },
      { text: "meplace", link: "/logs/travel/meplace.md" },
    ],

    // collapsible sidebar
    sidebar: {
      "/logs/": [
        {
          text: "Technology",
          collapsible: true,
          children: [
            "/logs/tech/nhn-forward/",
            "/logs/tech/naver-cloud-summit/",
            "/logs/tech/google-cloud-innovators-hive/",

            "/logs/tech/1784/",
            "/logs/tech/sre/",
            "/logs/tech/seo/",

            "/logs/tech/ai/",
            
            "/logs/tech/drone/",
          ],
        },
        {
          text: "Travel",
          collapsible: true,
          children: [
            "/logs/travel/meplace.md",
            "/logs/travel/정숙성.md",

            "/logs/travel/diet/",
          ],
        },
      ],
    },
  }),
};
