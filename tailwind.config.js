/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary": '#23BE0A'
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

