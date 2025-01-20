// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1e3a8a',
          800: '#1e40af',
          600: '#2563eb',
          100: '#dbeafe',
        },
        orange: {
          600: '#ea580c',
          500: '#f97316',
          400: '#fb923c',
        }
      }
    }
  },
  plugins: []
}
