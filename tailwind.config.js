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
        default: '#1a202c',
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
      'responsive',
      'group-hover',
      'even',
      'odd'
    ],
    borderColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
      'dark-focus-within',
      'hover',
      'responsive',
      'group-hover'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'group-hover'],
    gradientColorStops: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'group-hover']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ]
}
