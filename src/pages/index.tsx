import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type LinkItem = {
  label: string;
  to: string;
};

type StartCard = {
  number: string;
  title: string;
  body: string;
  to: string;
};

type Workflow = {
  title: string;
  links: LinkItem[];
};

type ReferenceGroup = {
  eyebrow: string;
  links: LinkItem[];
};

const startCards: StartCard[] = [
  {
    number: '01',
    title: 'Employers',
    body: 'Register an institution, prepare confidential payroll, fund it and manage scheduled payroll operations.',
    to: '/docs/employer/overview',
  },
  {
    number: '02',
    title: 'Employees',
    body: 'Understand confidential payroll claims, server-authorized withdrawals and on-chain settlement.',
    to: '/docs/employee/overview',
  },
  {
    number: '03',
    title: 'Developers',
    body: 'Integrate with Balary APIs, inspect the application architecture and follow prepared transaction flows.',
    to: '/docs/api-reference/overview',
  },
  {
    number: '04',
    title: 'Hackathon reviewers',
    body: 'Trace FCC execution, deployed Coston2 contracts, TEE lifecycle behavior and verification evidence.',
    to: '/docs/verification/test-evidence',
  },
];

const workflows: Workflow[] = [
  {
    title: 'Create private payroll',
    links: [
      { label: 'Employer workflow', to: '/docs/employer/overview' },
      { label: 'Create a payroll', to: '/docs/employer/create-payroll' },
      { label: 'Fund and activate', to: '/docs/employer/fund-and-activate' },
    ],
  },
  {
    title: 'Compute confidentially',
    links: [
      { label: 'FCC overview', to: '/docs/fcc-integration/overview' },
      { label: 'Instruction flow', to: '/docs/fcc-integration/instruction-flow' },
      { label: 'TEE lifecycle', to: '/docs/fcc-integration/tee-lifecycle' },
    ],
  },
  {
    title: 'Verify and withdraw',
    links: [
      { label: 'Private withdrawals', to: '/docs/employee/private-withdrawals' },
      { label: 'Privacy model', to: '/docs/security/privacy-model' },
      { label: 'Deployment evidence', to: '/docs/verification/deployed-contracts' },
    ],
  },
];

const quickReference: ReferenceGroup[] = [
  {
    eyebrow: 'PRODUCT',
    links: [
      { label: 'What is Balary?', to: '/docs/product-overview/what-is-balary' },
      { label: 'Why confidential payroll', to: '/docs/product-overview/why-confidential-payroll' },
      { label: 'User journeys', to: '/docs/product-overview/user-journeys' },
    ],
  },
  {
    eyebrow: 'BUILD',
    links: [
      { label: 'Architecture overview', to: '/docs/architecture/overview' },
      { label: 'API reference', to: '/docs/api-reference/overview' },
      { label: 'Frontend deployment', to: '/docs/deployment/frontend' },
    ],
  },
  {
    eyebrow: 'FLARE',
    links: [
      { label: 'Confidential Compute', to: '/docs/fcc-integration/overview' },
      { label: 'Coston2 deployment', to: '/docs/deployment/coston2' },
      { label: 'Contract verification', to: '/docs/verification/deployed-contracts' },
    ],
  },
];

function Arrow(): React.JSX.Element {
  return <span aria-hidden="true">↗</span>;
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Balary Developer Documentation"
      description="Technical documentation for Balary, confidential payroll computation powered by Flare Confidential Compute."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>BALARY DOCS</div>
            <h1>Balary developer<br />documentation</h1>
            <p className={styles.heroCopy}>
              Everything you need to understand Balary&apos;s confidential payroll workflow,
              integrate the APIs, follow FCC/TEE execution and verify settlement on Flare Coston2.
            </p>

            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} to="/docs/getting-started">
                Get started
              </Link>
              <Link className={styles.secondaryButton} to="/docs/fcc-integration/overview">
                Confidential Compute
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <span>Flare Coston2</span>
              <i />
              <span>FCC / TEE</span>
              <i />
              <span>Private payroll + verified on-chain settlement</span>
            </div>
          </div>

          <div className={styles.arc} aria-hidden="true">
            <div />
            <div />
          </div>
        </section>

        <div className={styles.contentWrap}>
          <section className={styles.section}>
            <div className={styles.sectionHeading}>
              <h2>Start here</h2>
              <p>Choose the role or technical surface you are working with.</p>
            </div>

            <div className={styles.startGrid}>
              {startCards.map((card) => (
                <Link key={card.number} to={card.to} className={styles.startCard}>
                  <div className={styles.cardTopline}>
                    <span>{card.number}</span>
                    <Arrow />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeading}>
              <h2>Core workflows</h2>
              <p>The shortest paths through Balary&apos;s confidential payroll system.</p>
            </div>

            <div className={styles.workflowGrid}>
              {workflows.map((workflow) => (
                <article key={workflow.title} className={styles.workflowCard}>
                  <h3>{workflow.title}</h3>
                  <div className={styles.workflowLinks}>
                    {workflow.links.map((link) => (
                      <Link key={link.label} to={link.to}>
                        <span>{link.label}</span>
                        <span aria-hidden="true">›</span>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={`${styles.section} ${styles.quickSection}`}>
            <div className={styles.sectionHeading}>
              <h2>Quick reference</h2>
              <p>Jump directly to the most-used product and technical pages.</p>
            </div>

            <div className={styles.quickGrid}>
              {quickReference.map((group) => (
                <div key={group.eyebrow} className={styles.quickGroup}>
                  <div>{group.eyebrow}</div>
                  {group.links.map((link) => (
                    <Link key={link.label} to={link.to}>{link.label}</Link>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
