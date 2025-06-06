import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Cormorant', 'serif'],
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      colors: {
        // Enhanced brand colors with modern palette
        'light-mint': '#F0FDFA',
        'primary-mint': '#5EEAD4', 
        'primary-mint-dark': '#2DD4BF',
        'charcoal': '#0F172A',
        'accent-mint': '#14B8A6',
        'accent-mint-dark': '#0F766E',
        'navy-blue': '#1E293B',
        'light-gray': '#F8FAFC',
        'sage': '#6EE7B7',
        'slate': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Shadow UI colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          dark: 'hsl(var(--primary-dark))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          dark: 'hsl(var(--secondary-dark))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.5rem',    /* 8px */
        'md': '0.75rem',   /* 12px */
        'lg': '1rem',      /* 16px */
        'xl': '1.5rem',    /* 24px */
        '2xl': '2rem',     /* 32px */
        'full': '9999px',
      },
      spacing: {
        'xs': '0.5rem',    /* 8px */
        'sm': '0.75rem',   /* 12px */
        'md': '1rem',      /* 16px */
        'lg': '1.5rem',    /* 24px */
        'xl': '2rem',      /* 32px */
        '2xl': '3rem',     /* 48px */
        '3xl': '4rem',     /* 64px */
        '4xl': '5rem',     /* 80px */
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': '0.75rem',    /* 12px */
        'sm': '0.875rem',   /* 14px */
        'base': '1rem',     /* 16px */
        'lg': '1.125rem',   /* 18px */
        'xl': '1.25rem',    /* 20px */
        '2xl': '1.5rem',    /* 24px */
        '3xl': '1.875rem',  /* 30px */
        '4xl': '2.25rem',   /* 36px */
        '5xl': '3rem',      /* 48px */
        '6xl': '3.75rem',   /* 60px */
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;