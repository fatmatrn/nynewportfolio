import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        wiggle:'wiggle 1s ease-in-out infinite',
        moveUpDown: 'moveUpDown 3s ease-in-out infinite',
      },
     keyframes:{
      wiggle:{
        '0%,100%':{transform:'rotate(-4deg)'},
        '50%':{transform:'rotate(4deg)'}
      },
      moveUpDown: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' }, // Yukarı hareket
      },
     }
    },
  },
  plugins: [],
}
export default config
