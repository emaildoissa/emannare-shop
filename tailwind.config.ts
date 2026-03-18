import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF8F5',
          text: '#2D2926',
          primary: '#6B8F71',
          secondary: '#9B7B5E',
          surface: '#FFFFFF',
        }
      },
      // ... resto das configs (fontes, animações)
    },
  },
  plugins: [],
} satisfies Config