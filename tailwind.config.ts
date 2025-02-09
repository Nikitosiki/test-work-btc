import { heroui } from '@heroui/react'

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#50627a',
        'custom-bg': '#112135',
        'custom-bg-light': '#18283c',
        'custom-budge': '#fb9818',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ],
}
