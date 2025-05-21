/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Blue color that matches the theme
        secondary: '#0047AB',
        accent: '#39FF14',
        dark: '#0F172A',
        darker: '#020617',
        light: '#F0F9FF',
        'neon-blue': '#00BFFF',
        'placeholder-blue': {
          light: '#e1f5fe',
          DEFAULT: '#b3e5fc',
          dark: '#4fc3f7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(0, 191, 255, 0.5)',
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.5s linear infinite',
      },
      keyframes: {
        glow: {
          from: { textShadow: '0 0 5px #00BFFF, 0 0 10px #00BFFF' },
          to: { textShadow: '0 0 10px #00BFFF, 0 0 20px #00BFFF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}