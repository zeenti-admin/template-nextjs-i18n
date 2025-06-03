/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSizes: {
        'title-h1': '2.5rem', // 40px
        'title-h2': '2rem', // 32px
        'description-dark': '1.125rem', // 18px
        'description-light': '1rem', // 16px
        'cta-text': '1.125rem', // 18px
      },
      colors: {

        'title-h1': '#000000',
        'title-h2': '#000000',
        'description-dark': '#000000',
        'description-light':'#000000',


        'background': '#000000',
        'background-light': '#FFFFFF',
        'background-secondary': '#FFFFFF',


        'cta-bg': '#000000',
        'cta-bg-hover': '#000000',
        'cta-text': '#FFFFFF',
        'cta-text-hover': '#FFFFFF',
        'cta-text-disabled': '#FFFFFF',
        'cta-text-hover-disabled': '#FFFFFF',


        'secondary-cta-bg': '#000000',
        'secondary-cta-bg-hover': '#000000',
        'secondary-cta-text': '#FFFFFF',
        'secondary-cta-text-hover': '#FFFFFF',
        'secondary-cta-text-disabled': '#FFFFFF',

      },
    },
  },
  plugins: [],
};