import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#0b1220',
        bg: '#f5f8ff',
        surface: '#ffffff',
        text: '#1e293b',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(15, 23, 42, 0.09)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
} satisfies Config
