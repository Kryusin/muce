import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'top-background': 'url("/top.jpg")',
      },
      backgroundColor: {
        'gray-theme': '#F5F5F5',
        'blue-theme': '#227dEE',
      },
      textColor: {
        'gray-theme': '#BEBEBE',
        'gray-theme-2': '#ACACAC',
        'blue-theme': '#227dEE',
        'orange-theme': '#EE9322',
      },
      borderColor: {
        'blue-theme': '#227dEE',
      },
      borderRadius: {
        '4xl': '30px',
      },
      animation: {
        'fade-out': 'fadeOut 2s ease 0s 1 forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': {
            opacity: 1,
            zIndex: 50,
          },
          '100%': {
            opacity: 0,
            zIndex: -1,
          },
        }
      }
    },
  },
  plugins: [],
}
export default config
