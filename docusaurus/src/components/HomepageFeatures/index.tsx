import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// Import the images directly. Docusaurus will handle the paths.
import AdvancedRobotImg from '@site/static/img/advanced_robot.png';
import AestheticRobotImg from '@site/static/img/aesthetic_robot.jpg';
import ChildishRobotImg from '@site/static/img/childish_robot.jpg';

type FeatureItem = {
  title: string;
  image: string; // This will be the imported image URL
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Advanced Robotics",
    image: AdvancedRobotImg,
    description: (
      <>
        Explore advanced concepts in humanoid robotics, from design to
        programming and AI integration.
      </>
    ),
  },
  {
    title: "Aesthetic Design",
    image: AestheticRobotImg,
    description: (
      <>
        Learn about the principles of robot design, creating machines that are
        not only functional but also visually compelling.
      </>
    ),
  },
  {
    title: "Engaging for All",
    image: ChildishRobotImg,
    description: (
      <>
        This guide is designed to be accessible and engaging for learners of all
        levels, from beginners to experts.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} alt={title} />
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
