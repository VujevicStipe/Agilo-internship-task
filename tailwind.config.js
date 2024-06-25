/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "720px",
      md: "1024px",
      lg: "1400px",
    },
    extend: {
      maxWidth: {
        1350: "1350px",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        purple: "#AA92C2",
      },
    },
  },
  plugins: [
    function ({ addUtilities, addVariant, addBase, theme }) {
      addVariant("child", "& > *");
      addVariant("last-child", "& > *:last-child");
      addVariant("child-hover", "& > *:hover");
      addVariant("not-last-child", "& > *:not(:last-child)");
      addVariant("not-first-child", "& > *:not(:first-child)");

      addUtilities({
        ".container": {
          "@apply w-full h-fit flex flex-col items-center child:mb-14": {},
        },
        ".wrapper": {
          "@apply w-full max-w-1350 h-fit flex flex-col px-4 child:mb-14": {},
        },
        ".absolute-center": {
          "@apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":
            {},
        },
      });

      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
          "@screen sm": {
            fontSize: theme("fontSize.5xl"),
          },
          "@screen md": {
            fontSize: theme("fontSize.6xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.7xl"),
          },
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.light"),
          lineHeight: theme("lineHeight.tight"),
          "@screen sm": {
            fontSize: theme("fontSize.3xl"),
          },
          "@screen md": {
            fontSize: theme("fontSize.4xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.5xl"),
          },
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
          "@screen sm": {
            fontSize: theme("fontSize.2xl"),
          },
          "@screen md": {
            fontSize: theme("fontSize.3xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.3xl"),
          },
        },
        h4: {
          fontSize: theme("fontSize.l"),
          "@screen sm": {
            fontSize: theme("fontSize.l"),
          },
          "@screen md": {
            fontSize: theme("fontSize.xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.xl"),
          },
        },
        h5: {
          fontSize: theme("fontSize.m"),
          "@screen sm": {
            fontSize: theme("fontSize.m"),
          },
          "@screen md": {
            fontSize: theme("fontSize.l"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.l"),
          },
        },
        h6: {
          fontSize: theme("fontSize.s"),
          "@screen sm": {
            fontSize: theme("fontSize.s"),
          },
          "@screen md": {
            fontSize: theme("fontSize.m"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.m"),
          },
        },
      });
    },
  ],
};
