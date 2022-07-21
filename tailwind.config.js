module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand)',
        text1: 'var(--text1)',
        text2: 'var(--text2)',
        link: 'var(--link)',
        surface1: 'var(--surface1)',
        surface2: 'var(--surface2)',
        surface3: 'var(--surface3)',
        surface4: 'var(--surface4)',
      },
    },
  },
  plugins: [],
}
