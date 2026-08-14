import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1db'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2d3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1ac'),
            routes: [
              {
                path: '/docs/api-reference/auth-and-institutions',
                component: ComponentCreator('/docs/api-reference/auth-and-institutions', 'dfa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/operations',
                component: ComponentCreator('/docs/api-reference/operations', 'df0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/overview',
                component: ComponentCreator('/docs/api-reference/overview', '9bb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/payrolls',
                component: ComponentCreator('/docs/api-reference/payrolls', 'ab0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/withdrawals',
                component: ComponentCreator('/docs/api-reference/withdrawals', '2c5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/architecture/backend',
                component: ComponentCreator('/docs/architecture/backend', '3a4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/architecture/confidential-engine',
                component: ComponentCreator('/docs/architecture/confidential-engine', 'a67'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/architecture/contracts',
                component: ComponentCreator('/docs/architecture/contracts', 'e8a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/architecture/frontend',
                component: ComponentCreator('/docs/architecture/frontend', '0a2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/architecture/lifecycle-controller',
                component: ComponentCreator('/docs/architecture/lifecycle-controller', '785'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/architecture/overview',
                component: ComponentCreator('/docs/architecture/overview', '8f4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/deployment/backend-fcc',
                component: ComponentCreator('/docs/deployment/backend-fcc', '34f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/deployment/coston2',
                component: ComponentCreator('/docs/deployment/coston2', '793'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/deployment/frontend',
                component: ComponentCreator('/docs/deployment/frontend', '87d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/employee/overview',
                component: ComponentCreator('/docs/employee/overview', '8b7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/employee/private-withdrawals',
                component: ComponentCreator('/docs/employee/private-withdrawals', 'fbd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/employer/confidential-compute',
                component: ComponentCreator('/docs/employer/confidential-compute', '945'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/employer/create-payroll',
                component: ComponentCreator('/docs/employer/create-payroll', '807'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/employer/fund-and-activate',
                component: ComponentCreator('/docs/employer/fund-and-activate', 'e01'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/employer/overview',
                component: ComponentCreator('/docs/employer/overview', 'c2a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/employer/schedules-and-audit',
                component: ComponentCreator('/docs/employer/schedules-and-audit', 'a58'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/fcc-integration/instruction-flow',
                component: ComponentCreator('/docs/fcc-integration/instruction-flow', '098'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/fcc-integration/overview',
                component: ComponentCreator('/docs/fcc-integration/overview', '4b4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/fcc-integration/tee-lifecycle',
                component: ComponentCreator('/docs/fcc-integration/tee-lifecycle', 'b79'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '3fb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '69a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/product-overview/user-journeys',
                component: ComponentCreator('/docs/product-overview/user-journeys', 'e62'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/product-overview/what-is-balary',
                component: ComponentCreator('/docs/product-overview/what-is-balary', '0d9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/product-overview/why-confidential-payroll',
                component: ComponentCreator('/docs/product-overview/why-confidential-payroll', '131'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/security/permissions',
                component: ComponentCreator('/docs/security/permissions', '2c2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/security/privacy-model',
                component: ComponentCreator('/docs/security/privacy-model', '23e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/security/threat-model',
                component: ComponentCreator('/docs/security/threat-model', '628'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/blockchain',
                component: ComponentCreator('/docs/troubleshooting/blockchain', 'b69'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/common-errors',
                component: ComponentCreator('/docs/troubleshooting/common-errors', 'f18'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/fcc-tee',
                component: ComponentCreator('/docs/troubleshooting/fcc-tee', '234'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/verification/deployed-contracts',
                component: ComponentCreator('/docs/verification/deployed-contracts', '850'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/verification/test-evidence',
                component: ComponentCreator('/docs/verification/test-evidence', '2d6'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
