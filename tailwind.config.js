/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pink: '#F7CFDA',
      rose: '#EBB0CD',
      lime: '#EFFBE2',
      cream: '#FCEFD2',
      yellow: '#FBFACA',
      beige: '#FAE0CF',
      salmon: '#F7CDBF',
      purple: '#5D3394',
      greyPurple: '#9B82B4',
    },
    fontSize: {
      base: '1.25rem',
      xs: '0.75rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.25rem',
      '2xl': '3rem',
      'display2': '5.625rem',
      'display1': '7.5rem',
    },
    screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1650px',
      // => @media (min-width: 1650px) { ... }
    },
    fontFamily: {
      sans: ["var(--font-family)"]
    }
  },
  plugins: [],
}

