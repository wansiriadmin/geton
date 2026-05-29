/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD500',
          'yellow-hover': '#FFCB05',
          dark: '#1E2128',
          'dark-soft': '#2A2E36',
        },
      },
      fontFamily: {
        sans: ['Kanit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
