/* eslint-disable prettier/prettier */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      // eslint-disable-next-line prettier/prettier
      'full': '100%',
    },
    extend: {},
  },
  plugins: [],
}
