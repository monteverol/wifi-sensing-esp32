/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        text_primary: 'var(--text-primary)',
        text_secondary: 'var(--text-secondary)',
        text_tertiary: 'var(--text-tertiary)',
        icon: 'var(--icon)',
        esp32: 'var(--esp32)',
        esp32_light: 'var(--esp32-light)',
        person: 'var(--person)',
        person_light: 'var(--person-light)',
        device: 'var(--device)',
        device_light: 'var(--device-light)',
      },
      dropShadow: {
        'icon': '2px 2px 1px rgba(0, 0, 0, 0.15)',
        'toggle': '0 4px 4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}