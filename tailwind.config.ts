import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f7f6f3',
        'paper-pure': '#ffffff',
        'paper-elev': '#fbfaf7',
        ink: '#111111',
        'ink-soft': '#1f1f1f',
        muted: '#6b6b66',
        'muted-2': '#9a9a93',
        hairline: '#e7e4dd',
        'hairline-soft': '#efebe2',
        accent: '#2f5d50',
        'accent-soft': '#d9e3df',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        editorial: '1280px',
      },
      letterSpacing: {
        tightish: '-0.018em',
        editorial: '-0.025em',
      },
    },
  },
  plugins: [],
};
export default config;
