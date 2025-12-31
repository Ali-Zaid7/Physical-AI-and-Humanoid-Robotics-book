const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      link: {
        type: 'generated-index',
        slug: '/001-ros2-nervous-system',
      },
      items: [
        '001-ros2-nervous-system/01-introduction',
        '001-ros2-nervous-system/02-core-concepts',
        '001-ros2-nervous-system/03-python-and-ros',
        '001-ros2-nervous-system/04-urdf-modeling',
      ],
    },

    {
      type: 'category',
      label: 'Module 2: Digital Twin (Gazebo & Unity)',
      link: {
        type: 'generated-index',
        slug: '/002-digital-twin-simulation',
      },
      items: [
        '002-digital-twin-simulation/01-why-simulate',
        '002-digital-twin-simulation/02-gazebo-unity-roles',
        '002-digital-twin-simulation/03-simulation-concepts',
      ],
    },

    {
      type: 'category',
      label: 'Module 3: AI-Robot Brain (NVIDIA Isaac)',
      link: {
        type: 'generated-index',
        slug: '/002-ai-robot-brain-isaac',
      },
      items: [
        '002-ai-robot-brain-isaac/01-isaac-sim-overview',
        '002-ai-robot-brain-isaac/02-isaac-ros-vslam',
        '002-ai-robot-brain-isaac/03-nav2-for-humanoids',
      ],
    },

    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      link: {
        type: 'generated-index',
        slug: '/003-vision-language-action',
      },
      items: [
        '003-vision-language-action/01-introduction-to-vla',
        '003-vision-language-action/02-vla-pipeline',
        '003-vision-language-action/03-cognitive-planning',
        '003-vision-language-action/04-capstone-and-conclusion',
      ],
    },
  ],
};

module.exports = sidebars;
