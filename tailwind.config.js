module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '2.5rem',
        xl: '4rem',
        '2xl': '5rem',
        '3xl': '6rem',
      },
    },
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
      },
      colors: {
        'primary': '#3E7E80',
        'secondary': '#F17676',
        'dark': '#424545',
        'border-color': '#dddddd',
      },
      opacity: {
        '3': '.03',
        '15': '.15',
      }
    },
  },
  plugins: [],
}
