/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      firacode: ['Fira Code', 'serif'],
    },
    extend: {
      colors: {
        brand: {
          'light': 'var(--clr-background)',
          'black': 'var(--clr-foreground)',
          'border': 'var(--clr-border)',
          'borderDM': 'var(--clr-border-dm)',
        }
      },
      backgroundColor: {
        brand: {
          'foreground': 'var(--clr-foreground)',
          'background': 'var(--clr-background)',
        }
      },
      fontFamily: {
        default: 'var(--ff-default)',
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
    }
  }
}