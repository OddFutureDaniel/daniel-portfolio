/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "754px" },              // ≤ 754
      mid: { min: "755px", max: "1279px" },  // 755–1279
      desktop: { min: "1280px" },            // ≥ 1280
    },
    extend: {
      fontFamily: {
        moderat: ["Moderat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;