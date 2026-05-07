/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      serif: ['"Playfair Display"', 'Georgia', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    extend: {
      colors: {
        accent: 'var(--accent)',
        surface: 'var(--bg)',
        'surface-2': 'var(--bg2)',
        ink: 'var(--text)',
        'ink-muted': 'var(--text-muted)',
        border: 'var(--border)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--text)',
            a: { color: 'var(--accent)' },
            h1: { fontFamily: '"Playfair Display", serif', color: 'var(--text)' },
            h2: { fontFamily: '"Playfair Display", serif', color: 'var(--text)' },
            h3: { fontFamily: '"Playfair Display", serif', color: 'var(--text)' },
            blockquote: { color: 'var(--text-muted)', borderColor: 'var(--accent)' },
            code: { color: 'var(--accent)' },
            'pre code': { color: 'var(--text)' },
          },
        },
      }),
    },
  },
  plugins: [],
};
