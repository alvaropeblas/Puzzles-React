/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        P_COLOR: '#495867',
        S_COLOR: '#577399',
        T_COLOR: '#BDD5EA',
        EXTRA_COLOR: '#F7F7FF',
        BUTTON_COLOR: '#FE5F55',
      },
      fontFamily: {
        'lilita': ['Lilita One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
'#BDD5EA'