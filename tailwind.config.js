module.exports = {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ide: {
          bg: 'var(--bg-color)',
          surface: 'var(--bg-surface)',
          'surface-hover': 'var(--bg-surface-hover)',
          border: 'var(--border-color)',
          text: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          heading: 'var(--text-heading)',
          green: 'var(--accent-green)',
          blue: 'var(--accent-blue)',
          purple: 'var(--accent-purple)',
          amber: 'var(--accent-amber)',
          red: 'var(--accent-red)'
        }
      }
    }
  },
  plugins: []
};
