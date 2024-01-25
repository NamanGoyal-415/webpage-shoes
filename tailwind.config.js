/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        myCustomShadow: "0px 2px 13px 0px rgba(0, 0, 0, 0.10);",
        mycustomshadow: "23px 44px 47px 0px rgba(0, 0, 0, 0.20)",
        mycustomsd: "0px 6px 16px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};