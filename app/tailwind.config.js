/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'bbva-blue-1': '#072146',
        'bbva-blue-2': '#004481',
        'bbva-blue-3': '#1464A5',
        'white-1': '#F4F4F4',
        'white-2': '#FFFFFF',
        'gray-1': '#666666',
        'gray-2': '#121212',
        'green-common': '#48AE64',
        'purple-rare': '#AD53A1',
        'yellow-epic': '#C49735'
      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
