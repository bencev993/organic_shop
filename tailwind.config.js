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
          light: '#F8F8F8',
          medium: '#EBEBEB'
        },
        green: {
          light: '#76A713',
          medium: '#016401',
          dark: '#1f5c0c',
          hover: '#8BB538'
        },
        orange: {
          light: '#FD9F13',
          500: '#FF6600'
        },
        salmon: {
          light: '#FFEFE5'
        }
      },
      inset: {
        '18': '4.5rem'
      },
      letterSpacing: {
        tightest: '-0.1em',
      },
      zIndex: {
        '-10': '-10',
      },
      gridTemplateColumns: {
        'fit-12': 'repeat(auto-fit, 3rem)',
        'fit-16': 'repeat(auto-fit, 4rem)',
        'fit-40': 'repeat(auto-fit, 10rem)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
