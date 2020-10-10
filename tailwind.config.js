module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      light: {
        default: '#ffffff',
        primary: '#7009f6',
        secondary: '#340eac',
        accent: '#d2c4ff',
        danger: '#a68aff'
      },
      dark: {
        default: '#2d3748',
        primary: '#3adbb9',
        secondary: '#29998b',
        accent: '#d0fff9',
        danger: '#a1fff3'
      }
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}