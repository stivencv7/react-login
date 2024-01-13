/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  "darkMode":"class",

  theme: {
    extend: {
       boxShadow: {
        'left':'143px -44px 0px -44px #14181F,91px 0px 0px #E5D714'
      },
    },
  },
  plugins: [],
}

