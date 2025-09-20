"use client";
import React, { useState } from "react";
import MotionChips from "../codes/motionChips";
import CodeBlock from "../codeblock/codeblock";
import { IconClipboard, IconClipboardCheck } from "@tabler/icons-react";

const clipboardCode = `"use client";

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
 * Renders a horizontal stack of Chip components using the <props> array.
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
`;

const Chips: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white h-auto">
      <div className="flex flex-col w-[750px] min-h-screen pt-16 pb-17 gap-10">
        <div className="flex flex-col items-start w-full gap-1">
          <h1 className="font-neue text-[22px] text-black">Micro Chips</h1>
          <h3 className="font-neue text-[15px] text-black/40">
            An animated component which is simple, but highly usable for
            previewing avatars.
          </h3>
        </div>
        <div className="flex items-center justify-center w-full h-[460px] bg-[#ECEAEA] rounded-[7px]">
          <MotionChips />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-neue text-[15px] text-black/40">
            This component is a modern, lightweight, and highly versatile
            solution for displaying and previewing user avatars in any web
            application. Designed with simplicity and usability at its core, it
            combines the efficiency of Tailwind CSS for clean, scalable styling
            with the power of Framer Motion to deliver smooth, visually
            appealing hover animations.
            <br />
            <br />
            This animated avatar component is designed with the principle that
            every minute interaction matters. It goes beyond being a simple
            display element, transforming avatar previews into engaging
            micro-experiences that subtly guide and delight users.
            <br />
            <br />
            .Micro-interactions are the smallest details that create the biggest
            impact. They are the subtle animations, hover effects, transitions,
            or feedback responses that occur when a user takes even the most
            minimal action — like hovering over an avatar, clicking a button, or
            loading a page element. While they may seem minor at first glance,
            these interactions form the emotional layer of digital products,
            shaping how intuitive, trustworthy, and enjoyable an interface
            feels.
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-mono text-black/40 text-[12px]">
            {` [COPIED STATUS :<boolean>(${copied})]`}
          </p>
          {copied ? (
            <IconClipboardCheck
              size={22}
              opacity={100}
              className="cursor-pointer select-none outline-none border-none"
              stroke="#000000"
            />
          ) : (
            <IconClipboard
              size={22}
              stroke="black"
              className="cursor-pointer select-none outline-none border-none"
              onClick={() => {
                navigator.clipboard.writeText(clipboardCode);
                setCopied(true);
              }}
            />
          )}
        </div>
        <CodeBlock
          code={`import { motion } from "motion/react";
import React, { useState } from "react";
import Image from "next/image";

const Chip: React.FC<{ name: string; avatar: string; index: number }> = ({
  name,
  avatar,
  index,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-auto h-auto"
      style={{
        zIndex: hovered ? 999 : props.length - index,
        marginLeft: index !== 0 ? -15 : 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
   ...
`}
        />
      </div>
    </div>
  );
};

export default Chips;
