module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        skcolor: {
          DEFAULT: '#7b99b9',
          dark: '#517dad'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}