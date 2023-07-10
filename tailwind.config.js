/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: ["light", "dark","cupcake","synthwave","halloween","garden","forest","aqua","lofi","pastel","wireframe","dracula","business","night","coffee"],
  }
};
