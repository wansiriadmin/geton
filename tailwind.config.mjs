/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5C518',
          'yellow-hover': '#E0B20E',
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
