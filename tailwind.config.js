/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/images/**/*.(png,jpg,jpeg}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
