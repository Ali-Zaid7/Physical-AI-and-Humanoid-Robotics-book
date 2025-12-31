# Conceptual Contracts: AI-Robot Brain Interaction (NVIDIA Isaac)

This document defines the conceptual "API" and interaction patterns for the NVIDIA Isaac components covered in this module.

### 1. Isaac Sim - External Interface

- **Contract**: Provides a photorealistic simulation environment and tools for synthetic data generation.
- **Inputs**:
  - Robot Models (USD/URDF): Description of robot's visual and physical properties.
  - Environment Assets: 3D models of the scene.
  - Simulation Scenarios: Definitions of tasks, object placements, lighting.
- **Outputs**:
  - Rendered Sensor Data: High-fidelity RGB, depth, semantic segmentation images.
  - Physics Data: Ground truth poses, velocities, contact forces.
  - Synthetic Datasets: Annotated data packages for AI model training.
- **Purpose**: High-fidelity virtual testing and robust data generation for AI perception.

### 2. Isaac ROS - Perception Pipeline Interfaces

- **Contract**: Provides GPU-accelerated ROS 2 packages for robotics perception.
- **Inputs**:
  - Raw Sensor Data (ROS 2 Topics): e.g., camera images, LiDAR point clouds.
- **Outputs**:
  - Processed Sensor Data (ROS 2 Topics): e.g., rectified images, filtered point clouds.
  - Perception Outputs (ROS 2 Topics): e.g., object detections, feature maps, localized poses (from VSLAM).
- **Purpose**: Real-time, efficient processing of sensor data for environmental understanding.

### 3. VSLAM (Visual SLAM) - Module Interface

- **Contract**: Simultaneously estimates the robot's pose and builds a map of the environment using visual input.
- **Inputs**:
  - Camera Images (from `Isaac ROS` pipeline via ROS 2 Topics).
  - IMU Data (optional, for improved robustness).
- **Outputs**:
  - Robot Pose: Localized position and orientation (ROS 2 TF).
  - Map Data: Point clouds or occupancy grids of the environment.
- **Purpose**: Provide accurate localization and mapping information for navigation.

### 4. Nav2 (ROS 2 Navigation Stack) - System Interface

- **Contract**: Provides a complete framework for autonomous mobile robot navigation, adapted for bipedal motion.
- **Inputs**:
  - Robot Pose (from `VSLAM` via ROS 2 TF).
  - Goal Pose: Target location for the robot.
  - Environmental Map: Occupancy grid (from `VSLAM` or pre-built).
  - Sensor Data: For local obstacle avoidance.
- **Outputs**:
  - Velocity Commands: Controls for robot movement (ROS 2 Topics, e.g., `/cmd_vel`).
  - Navigation Status: Feedback on current goal progress.
- **Purpose**: Enable autonomous movement, path planning, and obstacle avoidance.