import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Link to="/docs/introduction-foundations-of-physical-ai/00-introduction-01-from-digital-brains-to-physical-bodies">
          <Heading as="h1" className="hero__title" style={{color: 'var(--ifm-font-color-base)'}}>
            Physical AI & Humanoid Robotics
          </Heading>
        </Link>
        <p className="hero__subtitle">Build robots that see, think, and act. Complete guide to humanoid robotics with modern AI tools and hands-on projects.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction-foundations-of-physical-ai/00-introduction-01-from-digital-brains-to-physical-bodies">
            Start Reading 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
