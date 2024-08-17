/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "wt-blue": "#0f0e1b",
      },
      scrollBehavior: {
        smooth: "smooth",
      },
      fontFamily: {
        "red-hat-display": ["Red Hat Display Variable", "sans-serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "albert-sans": ["Albert Sans", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"],
        roboto: '"Roboto", sans-serif',
      },
    },
  },
  plugins: [],
}

