/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-yellow-200",
    "bg-blue-200",
    "bg-pink-200",
    "bg-purple-200",
    "bg-green-200",
    "hover:bg-yellow-200",
    "hover: bg-blue-200",
    "hover:bg-pink-200",
    "hover:bg-purple-200",
    "hover:bg-green-200",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

