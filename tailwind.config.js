module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-2' : '-1rem',
        '-5' : '-2.5rem',
        '-10' : '-5rem',
        '-20' : '-10rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
