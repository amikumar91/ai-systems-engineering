// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Systems Engineering',
  tagline: 'The full stack of production AI — 136 topics from inference to governance',
  favicon: 'img/logo.svg',
  url: 'https://amikumar91.github.io',
  baseUrl: '/ai-systems-engineering/',
  organizationName: 'amikumar91',
  projectName: 'ai-systems-engineering',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'topics',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: ['**/learning-paths/extras/**'],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI Systems Engineering',
        hideOnScroll: false,
        items: [
          {
            to: '/docs/learning-paths',
            label: 'Learning Paths',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'topicsSidebar',
            position: 'left',
            label: 'Topics',
          },
          {
            href: 'https://github.com/amikumar91/ai-systems-engineering',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `AI Systems Engineering · Built with Docusaurus`,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'python'],
      },
    }),
};

module.exports = config;
