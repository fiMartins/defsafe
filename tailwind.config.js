/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif',],
      },
      screens: {
        xs: '376px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#22223B',
        'secondary': '#4A4E69',
        'purple': '#9A8C98',
        'nude': '#C9ADA7',
        'white': '#F2E9E4'
      },
    },
  },
  plugins: [],
}

