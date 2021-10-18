module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  extend: {
    zIndex: {
     '-100': '-100',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
