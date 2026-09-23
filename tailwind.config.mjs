/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          marine: '#132539',
          orange: '#E05A35',
          lightblue: '#AACFDF',
        },
        status: {
          green: '#10B981',
        },
        surface: {
          white: '#FFFFFF',
          gray: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
