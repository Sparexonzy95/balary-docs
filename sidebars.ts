import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Product Overview',
      collapsed: false,
      items: [
        'product-overview/what-is-balary',
        'product-overview/why-confidential-payroll',
        'product-overview/user-journeys',
      ],
    },
    {
      type: 'category',
      label: 'Employer Guide',
      collapsed: false,
      items: [
        'employer/overview',
        'employer/create-payroll',
        'employer/confidential-compute',
        'employer/fund-and-activate',
        'employer/schedules-and-audit',
      ],
    },
    {
      type: 'category',
      label: 'Employee Guide',
      collapsed: false,
      items: [
        'employee/overview',
        'employee/private-withdrawals',
      ],
    },
    {
      type: 'category',
      label: 'Flare Confidential Compute',
      collapsed: false,
      items: [
        'fcc-integration/overview',
        'fcc-integration/instruction-flow',
        'fcc-integration/tee-lifecycle',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        'api-reference/overview',
        'api-reference/auth-and-institutions',
        'api-reference/payrolls',
        'api-reference/withdrawals',
        'api-reference/operations',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: true,
      items: [
        'architecture/overview',
        'architecture/frontend',
        'architecture/backend',
        'architecture/confidential-engine',
        'architecture/contracts',
        'architecture/lifecycle-controller',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: true,
      items: [
        'security/privacy-model',
        'security/threat-model',
        'security/permissions',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsed: true,
      items: [
        'deployment/coston2',
        'deployment/backend-fcc',
        'deployment/frontend',
      ],
    },
    {
      type: 'category',
      label: 'Verification',
      collapsed: true,
      items: [
        'verification/deployed-contracts',
        'verification/test-evidence',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/common-errors',
        'troubleshooting/fcc-tee',
        'troubleshooting/blockchain',
      ],
    },
  ],
};

export default sidebars;
