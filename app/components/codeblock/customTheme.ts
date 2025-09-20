import { PrismTheme } from "prism-react-renderer";

const customTheme: PrismTheme = {
  plain: {
    color: "#000000", // default text color
    backgroundColor: "#ffffff", // editor background
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#6e7781",
        fontStyle: "italic",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#FF2AAA", // purple (const, return, etc.)
      },
    },
    {
      types: ["string"],
      style: {
        color: "#3fb950", // green (URLs, text)
      },
    },
    {
      types: ["function"],
      style: {
        color: "#9670FF", // blue (functions, arrow funcs)
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#0288d1", // JSX tags <LogoCarousel />
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#000000", // commas, brackets, etc.
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#000000", // =, =>, etc.
      },
    },
    {
      types: ["number"],
      style: {
        color: "#f44336", // numbers
      },
    },
  ],
};

export default customTheme;
