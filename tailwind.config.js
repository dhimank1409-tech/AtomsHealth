/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#05070c',
          900: '#0a0f18',
          850: '#101826',
          800: '#182233',
          700: '#243044',
          600: '#334155',
        },
        accent: {
          cyan: '#5ee7f0',
          emerald: '#3dd6a3',
          amber: '#f0b45a',
          crimson: '#f07178',
          rust: '#f08a5a',
        },
        navy: {
          DEFAULT: '#0a0f18',
          dark: '#05070c',
          deep: '#05070c',
        },
        muted: {
          navy: '#8b97ad',
          beige: '#8b97ad',
        }
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        grotesk: ['Sora', 'system-ui', 'sans-serif'],
        anton: ['Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 60px -32px rgba(0,0,0,0.85)',
      }
    },
  },
  plugins: [],
}
