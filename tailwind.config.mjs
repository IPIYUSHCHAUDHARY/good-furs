/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        body: ['var(--font-nunito)', 'sans-serif'],
        heading: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
};
