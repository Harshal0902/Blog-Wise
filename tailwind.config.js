module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        homeImg: '#DCE4F7',
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      dancingScript: ['Dancing Script'],
      sourceSerifPro: ['Source Serif Pro'],
      fontVollkorn: ['Vollkorn'],
      body: ['Open Sans'],
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
