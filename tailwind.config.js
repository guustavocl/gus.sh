const defaultTheme = require("tailwindcss/defaultTheme");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "445px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    {
      handler: tw => {
        tw.matchComponents(
          {
            "bg-grid": value => ({
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
          }
        );

        tw.matchUtilities(
          {
            "text-glow": value => ({
              "text-shadow": `0 0 7px ${value}, 0 0 150px ${value}`,
            }),
            "glow": value => ({
              filter: `drop-shadow(0px 0px 4px ${value})`,
            }),
          },
          {
            values: flattenColorPalette(tw.theme("colors")),
            type: "color",
          }
        );
      },
    },
  ],
};
