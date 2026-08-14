import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const BALARY_LOGO = 'img/balary-logo.png';
const BALARY_FAVICON = 'https://res.cloudinary.com/dsbmr3xin/image/upload/v1786656190/bi_scp3ev.png';

const config: Config = {
  title: 'Balary Docs',
  tagline: 'Private payroll powered by confidential compute.',
  favicon: BALARY_FAVICON,

  // Override DOCS_SITE_URL on Vercel if the docs are hosted somewhere else.
  url: process.env.DOCS_SITE_URL || 'https://docs.balary.lol',
  baseUrl: '/',

  organizationName: 'balary',
  projectName: 'balary-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: BALARY_LOGO,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Balary Docs',
      logo: {
        alt: 'Balary B logo',
        src: BALARY_LOGO,
        srcDark: BALARY_LOGO,
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        {
          label: 'Product',
          position: 'left',
          items: [
            { to: '/docs/product-overview/what-is-balary', label: 'What is Balary?' },
            { to: '/docs/product-overview/why-confidential-payroll', label: 'Why confidential payroll' },
            { to: '/docs/product-overview/user-journeys', label: 'User journeys' },
          ],
        },
        {
          label: 'Confidential Compute',
          position: 'left',
          items: [
            { to: '/docs/fcc-integration/overview', label: 'FCC overview' },
            { to: '/docs/fcc-integration/instruction-flow', label: 'Instruction flow' },
            { to: '/docs/fcc-integration/tee-lifecycle', label: 'TEE lifecycle' },
          ],
        },
        {
          label: 'Build',
          position: 'left',
          items: [
            { to: '/docs/api-reference/overview', label: 'API reference' },
            { to: '/docs/architecture/overview', label: 'Architecture' },
            { to: '/docs/deployment/coston2', label: 'Deployment' },
          ],
        },
        {
          href: 'https://github.com/Sparexonzy95/balary',
          label: 'GitHub ↗',
          position: 'right',
        },
        {
          href: 'https://balary.lol',
          label: 'Open Balary ↗',
          position: 'right',
          className: 'navbar-open-balary',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting started', to: '/docs/getting-started' },
            { label: 'Employer guide', to: '/docs/employer/overview' },
            { label: 'Employee guide', to: '/docs/employee/overview' },
          ],
        },
        {
          title: 'Build',
          items: [
            { label: 'API reference', to: '/docs/api-reference/overview' },
            { label: 'Architecture', to: '/docs/architecture/overview' },
            { label: 'Security', to: '/docs/security/privacy-model' },
            { label: 'Verification', to: '/docs/verification/test-evidence' },
          ],
        },
        {
          title: 'Network',
          items: [
            { label: 'Developer Hub', href: 'https://dev.flare.network/' },
            { label: 'FCC overview', href: 'https://dev.flare.network/fcc/overview' },
            { label: 'Coston2 explorer', href: 'https://coston2-explorer.flare.network' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Balary`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
