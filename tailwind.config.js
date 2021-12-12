const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921"
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
