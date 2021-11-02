module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#EAF4FB',
          medium: '#3498DB'
        },
        gray: {
          light: '#F8F8F8'
        },
        green: {
          light: '#76A713',
          dark: '#1f5c0c',
          hover: '#8BB538'
        },
        orange: {
          500: '#FF6600'
        },
        salmon: {
          light: '#FFEFE5'
        }
      },
      inset: {
        '18': '4.5rem'
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
