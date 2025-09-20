"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { IconClipboard, IconClipboardCheck } from "@tabler/icons-react";
import CodeBlock from "../codeblock/codeblock";

/* ------------------------------------------------------------------
   Clipboard code for preview inside CodeBlock
------------------------------------------------------------------ */
const clipboardCode = `"use client";
import { motion } from "motion/react";
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
      <motion.p
        className="absolute -top-6 text-black font-sans text-[12px] px-2 py-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
      >
        {name}
      </motion.p>
      <div className="flex w-[45px] aspect-square rounded-full overflow-hidden shadow-md border-[0.5px] border-black/10">
        <Image src={avatar} alt={name} width={45} height={45} />
      </div>
    </motion.div>
  );
};

const props = [
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

const MotionChips: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-auto h-[60px]">
      {props.map((item, index) => (
        <Chip key={index} name={item.name} avatar={item.avatar} index={index} />
      ))}
    </div>
  );
};

export default MotionChips;`;

/* ------------------------------------------------------------------
   Chip Component (Single Avatar)
------------------------------------------------------------------ */
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
      {/* Name tag */}
      <motion.p
        className="absolute -top-6 text-black font-sans text-[12px] px-2 py-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
      >
        {name}
      </motion.p>

      {/* Avatar */}
      <div className="flex w-[40px] sm:w-[45px] md:w-[55px] aspect-square rounded-full overflow-hidden shadow-md border-[0.5px] border-black/10">
        <Image src={avatar} alt={name} width={55} height={55} />
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------
   Props (Demo Avatars)
------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------
   MotionChips Component (Stack of Chips)
------------------------------------------------------------------ */
const MotionChips: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-auto h-[60px] gap-1">
      {props.map((item, index) => (
        <Chip key={index} name={item.name} avatar={item.avatar} index={index} />
      ))}
    </div>
  );
};

/* ------------------------------------------------------------------
   Main Component (Chips Showcase)
------------------------------------------------------------------ */
const Chips: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white px-4 sm:px-6 md:px-12">
      <div className="flex flex-col w-full max-w-[1100px] min-h-screen pt-12 sm:pt-16 pb-20 gap-10">
        {/* Heading */}
        <div className="flex flex-col items-start w-full gap-2">
          <h1 className="font-neue text-[18px] sm:text-[22px] md:text-[26px] text-black leading-snug">
            Micro Chips
          </h1>
          <h3 className="font-neue text-[13px] sm:text-[15px] md:text-[17px] text-black/50 leading-relaxed">
            An animated component which is simple, but highly usable for
            previewing avatars.
          </h3>
        </div>

        {/* Motion Chips Demo Box */}
        <div className="flex items-center justify-center w-full h-[280px] sm:h-[600px] bg-[#ECEAEA] rounded-[10px] shadow-sm">
          <MotionChips />
        </div>

        {/* Description */}
        <div className="flex flex-col items-start">
          <h3 className="font-neue text-[13px] sm:text-[15px] md:text-[16px] text-black/60 leading-relaxed tracking-wide">
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
            Micro-interactions are the smallest details that create the biggest
            impact. They are the subtle animations, hover effects, transitions,
            or feedback responses that occur when a user takes even the most
            minimal action — like hovering over an avatar, clicking a button, or
            loading a page element. While they may seem minor at first glance,
            these interactions form the emotional layer of digital products,
            shaping how intuitive, trustworthy, and enjoyable an interface
            feels.
          </h3>
        </div>

        {/* Clipboard + Status */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="font-mono text-black/40 text-[11px] sm:text-[12px]">
            {`[COPIED STATUS : <boolean>(${copied})]`}
          </p>
          {copied ? (
            <IconClipboardCheck
              size={22}
              opacity={100}
              className="cursor-pointer select-none"
              stroke="#000000"
            />
          ) : (
            <IconClipboard
              size={22}
              stroke="black"
              className="cursor-pointer select-none"
              onClick={() => {
                navigator.clipboard.writeText(clipboardCode);
                setCopied(true);
              }}
            />
          )}
        </div>

        {/* Code Block */}
        <div className="w-full overflow-x-auto rounded-lg">
          <CodeBlock code={clipboardCode} />
        </div>
      </div>
    </div>
  );
};

export default Chips;
