// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xs': '400px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      header: '"Libre Baskerville", serif;',
      navbar: '"Montserrat", sans-serif',
      body: '"Public Sans", Helvetica, Arial, sans-serif',
      card: '"Dosis", sans-serif',
      title: '"Montserrat", sans-serif'
    },
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      primary: '#a67e58',
      secondary: '#8D7449',
      tertiary: '#725B32',
      green: '#777C50',
      green2: '#8fb360',
      'green-soft': '#7c854d',
      'green-small': '#a9d175',
      'green-button': '#435644',
      caqui: '#707070',
      slate: {
        100: '#C6D1DE',
        200: '#9CB6CC',
        300: '#719AB9',
        400: '#487EA6',
        500: '#236391',
        600: '#1A5276',
        700: '#143D5C',
        800: '#0D2742',
        900: '#051128'
      }
    },
    textColor: {
      gray: colors.coolGray,
      white: colors.white,
      slate: colors.slate,
      primary: '#a67e58',
      secondary: '#8D7449',
      tertiary: '#725B32',
      textNotes: '#2F4858',
      green: '#777C50',
      green2: '#8fb360',
      'green-soft': '#7c854d',
      'green-small': '#a9d175',
      caqui: '#707070'
    },
    extend: {
      maxWidth: {
        '8xl': '1340px',
        '9xl': '1520px',
        '10xl': '1750px'
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      },
      height: {
        '75vh': '75vh',
        '85vh': '85vh',
        '90vh': '90vh'
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    }
  },
  plugins: [require('@tailwindcss/line-clamp', '@tailwindcss/typography')]
};
