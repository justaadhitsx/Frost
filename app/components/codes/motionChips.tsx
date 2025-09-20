"use client";

/**
 * MotionChips Component
 *
 * This module renders a horizontal stack of user avatar "chips" that react to hover events
 * with animations and dynamic z-index stacking. Each chip displays the user's avatar and
 * shows the user's name above it on hover.
 *
 * Technologies used:
 * - React (Functional Components, Hooks)
 * - Next.js Image optimization
 * - motion/react for animations
 * - TailwindCSS for styling
 *
 * Author: [Your Name]
 * Created: 2025-09-19
 */

import { motion } from "motion/react";
import React, { useState } from "react";
import Image from "next/image";

/**
 * Props array for demonstration purposes.
 * Each object represents a user avatar chip.
 */
const props: { name: string; avatar: string }[] = [
  {
    name: "Patrick",
    avatar:
      "https://i.pinimg.com/1200x/8f/55/1c/8f551ce60ff80185c73cfde2edd3e4a1.jpg",
  },
  {
    name: "Sonny",
    avatar:
      "https://i.pinimg.com/736x/cf/8b/e9/cf8be98e83df1f26ebbcea99b8194eba.jpg",
  },
  {
    name: "Lucy",
    avatar:
      "https://i.pinimg.com/736x/27/79/81/27798111120e77b88c18158b552aa060.jpg",
  },
];

/**
 * Chip Component
 *
 * Renders a single user avatar with hover animation.
 *
 * Props:
 * @param name - The name of the user (displayed on hover).
 * @param avatar - URL of the user's avatar image.
 * @param index - Position index in the list of chips to calculate z-index and spacing.
 *
 * State:
 * @state hovered - Boolean representing whether the chip is hovered or not.
 *
 * Animation:
 * - Elevates chip on hover
 * - Fades in the name tag on hover
 */
const Chip: React.FC<{ name: string; avatar: string; index: number }> = ({
  name,
  avatar,
  index,
}) => {
  // Track hover state to control animations and z-index
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      // Container for avatar and name tag
      className="relative flex flex-col items-center justify-center w-auto h-auto"
      style={{
        zIndex: hovered ? 999 : props.length - index, // Bring hovered chip to front
        marginLeft: index !== 0 ? -15 : 0, // Overlap chips horizontally
      }}
      onMouseEnter={() => setHovered(true)} // Set hovered state to true
      onMouseLeave={() => setHovered(false)} // Reset hovered state
      whileHover={{ y: -7 }} // Move chip up slightly on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation
    >
      {/* Name tag appears above avatar on hover */}
      <motion.p
        className="absolute -top-6 text-black font-sans text-[12px] px-2 py-1"
        initial={{ opacity: 0 }} // Start hidden
        animate={{ opacity: hovered ? 1 : 0 }} // Fade in/out on hover
      >
        {name}
      </motion.p>

      {/* Avatar container */}
      <div className="flex w-[45px] aspect-square rounded-full overflow-hidden shadow-md border-[0.5px] border-black/10">
        <Image src={avatar} alt={name} width={45} height={45} />
      </div>
    </motion.div>
  );
};

/**
 * MotionChips Component
 *
 * Renders a horizontal stack of Chip components using the `props` array.
 * Automatically maps over props and assigns a unique key to each Chip.
 */
const MotionChips: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-auto h-[60px]">
      {props.map((item, index) => (
        <Chip
          key={index} // Key for React list rendering
          name={item.name}
          avatar={item.avatar}
          index={index}
        />
      ))}
    </div>
  );
};

export default MotionChips;
