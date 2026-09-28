import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: "#071f14",
          900: "#0d3320",
          800: "#14522e",
          700: "#1a6e3c",
          600: "#217a44",
          500: "#2ea055",
          400: "#4abe72",
          300: "#7dd99a",
          200: "#b2edc4",
          100: "#d8f5e3",
          50:  "#f0fdf5",
        },
        ms: {
          blue:   "#0078d4",
          purple: "#7719aa",
          orange: "#d83b01",
          red:    "#f25022",
          yellow: "#ffb900",
          green:  "#7fba00",
        },
      },
      boxShadow: {
        glow:       "0 0 0 1px rgba(46, 160, 85, 0.2), 0 12px 40px rgba(46, 160, 85, 0.2)",
        "glow-blue":"0 0 0 1px rgba(0, 120, 212, 0.2), 0 12px 40px rgba(0, 120, 212, 0.18)",
      },
      animation: {
        "float": "floatOrb 8s ease-in-out infinite",
        "shimmer": "shimmer 2.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
