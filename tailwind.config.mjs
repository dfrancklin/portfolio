/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "counter-spin": {
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 120s linear infinite",
        "counter-spin-slow": "counter-spin 120s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
