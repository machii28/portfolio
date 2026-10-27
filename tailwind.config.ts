import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F4",
        panel: "#FFFFFF",
        ink: "#1F2A37",
        steel: "#5B6773",
        line: "#E2E3DE",
        signal: "#FF4D00",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        measure: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
