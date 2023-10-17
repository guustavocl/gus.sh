/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1.5rem",
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e0e11",
        },
        secondary: {
          DEFAULT: "#d9286c",
        },
      },
    },
  },
  // plugins: [],
  plugins: [
    require("@tailwindcss/forms"),
    {
      handler: (tw: any) => {
        tw.matchComponents(
          {
            "bg-grid": (value: string) => ({
              backgroundSize: "90px 90px",
              backgroundImage: `
								linear-gradient(to right, ${value} 1px, transparent 1px),
								linear-gradient(to bottom, ${value} 1px, transparent 1px)
							`,
            }),
          },
          {
            values: flattenColorPalette(tw.theme("colors")),
            type: "color",
          },
        );

        tw.matchUtilities(
          {
            "text-glow": (value: string) => ({
              "text-shadow": `0 0 7px ${value}, 0 0 150px ${value}`,
            }),
            "glow": (value: string) => ({
              filter: `drop-shadow(0px 0px 4px ${value})`,
            }),
          },
          {
            values: flattenColorPalette(tw.theme("colors")),
            type: "color",
          },
        );
      },
    },
  ],
};
