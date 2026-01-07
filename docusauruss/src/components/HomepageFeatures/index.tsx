import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy GuideBook',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A carefully designed, module-based textbook that teaches Physical AI and
        Humanoid Robotics step by step, from foundations to real-world applications.
      </>
    ),
  },
  {
    title: 'AI-Native & Interactive Learning',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Powered by modern AI tooling, interactive diagrams, and an integrated
        chatbot to help you understand, explore, and apply robotics concepts efficiently.
      </>
    ),
  },
  {
    title: 'From Digital AI to Physical Intelligence',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn how AI systems move beyond screens into the physical world using
        ROS 2, Digital Twins, simulation, and embodied intelligence.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
