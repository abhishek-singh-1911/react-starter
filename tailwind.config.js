/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false, // We are not using Tailwind's 'class' strategy for dark mode directly, but our own data-theme attribute.
  theme: {
    extend: {
      colors: {
        // These will be mapped to CSS variables
        'theme-primary': 'var(--color-primary)',
        'theme-secondary': 'var(--color-secondary)',
        'theme-background': 'var(--color-background)',
        'theme-surface': 'var(--color-surface)', // For cards, containers
        'theme-on-primary': 'var(--color-on-primary)',
        'theme-on-secondary': 'var(--color-on-secondary)',
        'theme-on-background': 'var(--color-on-background)',
        'theme-on-surface': 'var(--color-on-surface)',
      },
      backgroundImage: {
        'theme-rainbow-gradient': 'var(--gradient-rainbow)', // Specific for rainbow
      }
    },
  },
  plugins: [],
}

