module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          light: '#76A713',
          dark: '#1f5c0c',
          hover: '#8BB538'
        } 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
