import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                heading: ['Playfair Display', 'Georgia', 'serif'],
                body: ['Lato', 'system-ui', 'sans-serif'],
                sans: ['Lato', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                /* Semantic warm palette tokens */
                wood: {
                    50:  'oklch(0.97 0.015 75)',
                    100: 'oklch(0.93 0.025 70)',
                    200: 'oklch(0.87 0.04 65)',
                    300: 'oklch(0.78 0.07 60)',
                    400: 'oklch(0.65 0.09 52)',
                    500: 'oklch(0.52 0.10 48)',
                    600: 'oklch(0.42 0.09 46)',
                    700: 'oklch(0.32 0.07 45)',
                    800: 'oklch(0.24 0.05 43)',
                    900: 'oklch(0.18 0.04 40)',
                },
                amber: {
                    50:  'oklch(0.97 0.03 90)',
                    100: 'oklch(0.94 0.06 85)',
                    200: 'oklch(0.90 0.09 82)',
                    300: 'oklch(0.86 0.12 80)',
                    400: 'oklch(0.82 0.14 77)',
                    500: 'oklch(0.76 0.15 74)',
                    600: 'oklch(0.68 0.14 70)',
                    700: 'oklch(0.58 0.12 65)',
                    800: 'oklch(0.46 0.10 58)',
                    900: 'oklch(0.36 0.08 52)',
                },
                terra: {
                    50:  'oklch(0.95 0.04 42)',
                    100: 'oklch(0.88 0.07 40)',
                    200: 'oklch(0.80 0.10 39)',
                    300: 'oklch(0.72 0.12 38)',
                    400: 'oklch(0.62 0.14 38)',
                    500: 'oklch(0.54 0.14 36)',
                    600: 'oklch(0.46 0.13 35)',
                    700: 'oklch(0.38 0.11 34)',
                    800: 'oklch(0.30 0.09 33)',
                    900: 'oklch(0.22 0.07 32)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                warm: '0 4px 24px -4px rgba(80, 40, 10, 0.18)',
                'warm-lg': '0 8px 40px -8px rgba(80, 40, 10, 0.28)',
                'warm-xl': '0 16px 60px -12px rgba(80, 40, 10, 0.35)',
                glow: '0 0 30px rgba(180, 100, 30, 0.25)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.6s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
