/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "var(--background)",
        textColor: "var(--textColor)",
        header: "var(--header)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
};
