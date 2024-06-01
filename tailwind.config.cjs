/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      margin: { para: '1.4rem' },
      lineHeight: { semiloose: '1.75' },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"BIZ UDPGothic"',
          'Meiryo',
          'sans-serif',
        ],
        mono: [
          '"Fira Code"',
          '"Fira Code (remote)"',
          'SFMono-Regular',
          'Consolas',
          '"Liberation Mono"',
          'Menlo',
          'Courier',
          '"BIZ UDGothic"',
          'monospace',
        ],
        emoji: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI Emoji',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
