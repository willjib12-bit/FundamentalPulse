/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode (for mockup)
        surface: '#0A0A0A',
        'surface-raised': '#111111',
        'surface-border': '#1A1A1A',
        'text-primary': '#E8E8E8',
        'text-secondary': '#888888',
        'text-muted': '#555555',
        'bias-bullish': '#22C55E',
        'bias-bearish': '#EF4444',
        'bias-neutral': '#6B7280',
        'confidence-high': '#E8E8E8',
        'confidence-medium': '#A3A3A3',
        'confidence-low': '#555555',
        accent: '#3B82F6',
        
        // Light mode (for landing)
        'landing-bg': '#FAFAF9',
        'landing-surface': '#FFFFFF',
        'landing-border': '#E5E5E3',
        'landing-text': '#1C1C1C',
        'landing-text-secondary': '#6B6B6B',
        'landing-text-muted': '#9CA3AF',
        'landing-accent': '#2563EB',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.08em',
      },
    },
  },
  plugins: [],
}
