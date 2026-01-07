import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 00: Introduction – Foundations of Physical AI',
      items: [
        'introduction-foundations-of-physical-ai/00-introduction-01-from-digital-brains-to-physical-bodies',
        'introduction-foundations-of-physical-ai/00-introduction-02-embodied-intelligence',
        'introduction-foundations-of-physical-ai/00-introduction-03-the-physical-ai-stack',
        'introduction-foundations-of-physical-ai/00-introduction-04-course-overview-and-learning-outcomes',
      ],
    },
    {
      type: 'category',
      label: 'Module 01: The Robotic Nervous System (ROS 2)',
      items: [
        'ros2-nervous-system/001-ros2-nervous-system-01-introduction',
        'ros2-nervous-system/001-ros2-nervous-system-02-core-concepts',
        'ros2-nervous-system/001-ros2-nervous-system-03-python-and-ros',
        'ros2-nervous-system/001-ros2-nervous-system-04-urdf-modeling',
      ],
    },
    {
      type: 'category',
      label: 'Module 02: Digital Twin Simulation',
      items: [
        'digital-twin-simulation/002-digital-twin-simulation-01-why-simulate',
        'digital-twin-simulation/002-digital-twin-simulation-02-gazebo-unity-roles',
        'digital-twin-simulation/002-digital-twin-simulation-03-simulation-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Module 03: AI Robot Brain (Isaac Sim)',
      items: [
        'ai-robot-brain-isaac/002-ai-robot-brain-isaac-01-isaac-sim-overview',
        'ai-robot-brain-isaac/002-ai-robot-brain-isaac-02-isaac-ros-vslam',
        'ai-robot-brain-isaac/002-ai-robot-brain-isaac-03-nav2-for-humanoids',
      ],
    },
    {
      type: 'category',
      label: 'Module 04: Vision Language Action',
      items: [
        'vision-language-action/003-vision-language-action-01-introduction-to-vla',
        'vision-language-action/003-vision-language-action-02-vla-pipeline',
        'vision-language-action/003-vision-language-action-03-cognitive-planning',
        'vision-language-action/003-vision-language-action-04-capstone-and-conclusion',
      ],
    },
  ],
};

export default sidebars;