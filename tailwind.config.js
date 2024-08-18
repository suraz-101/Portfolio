/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "var(--background)",
        secondaryBg: "var(--secondaryBackground)",
        // secondaryBg: "var(--secondaryBg)",
        textColor: "var(--textColor)",
        header: "var(--header)",
        secondary: "var(--secondary)",
      },
    },
    keyframes: {
      "slide-left": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "slide-left": "slide-left 14s linear infinite",
    },
  },
  plugins: [],
};
