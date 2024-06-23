/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "720px",
      md: "1024px",
      lg: "1400px",
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("not-last-child", "& > *:not(:last-child)")
      addVariant("not-first-child", "& > *:not(:first-child)")
    },
  ],
};
