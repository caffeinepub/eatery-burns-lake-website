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
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
                display: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['"General Sans"', 'system-ui', 'sans-serif'],
                sans: ['"General Sans"', 'system-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
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

                /* ILONA Pasta brand palette */
                /* Terracotta / Burgundy */
                terracotta: {
                    50:  'oklch(0.97 0.018 32)',
                    100: 'oklch(0.93 0.04 32)',
                    200: 'oklch(0.82 0.09 32)',
                    300: 'oklch(0.68 0.13 32)',
                    400: 'oklch(0.55 0.16 32)',
                    500: 'oklch(0.42 0.17 32)',
                    600: 'oklch(0.35 0.15 32)',
                    700: 'oklch(0.27 0.12 32)',
                    800: 'oklch(0.19 0.08 32)',
                    900: 'oklch(0.12 0.05 32)',
                },
                /* Warm ivory / cream */
                ivory: {
                    50:  'oklch(0.99 0.005 82)',
                    100: 'oklch(0.97 0.018 78)',
                    200: 'oklch(0.95 0.028 76)',
                    300: 'oklch(0.91 0.038 74)',
                    400: 'oklch(0.86 0.042 72)',
                    500: 'oklch(0.80 0.045 70)',
                },
                /* Olive green */
                olive: {
                    300: 'oklch(0.70 0.10 138)',
                    400: 'oklch(0.62 0.11 138)',
                    500: 'oklch(0.55 0.10 138)',
                    600: 'oklch(0.46 0.09 138)',
                    700: 'oklch(0.37 0.08 138)',
                },
                /* Rich dark brown / charcoal */
                espresso: {
                    50:  'oklch(0.91 0.012 34)',
                    100: 'oklch(0.78 0.025 34)',
                    200: 'oklch(0.62 0.030 34)',
                    300: 'oklch(0.48 0.030 34)',
                    400: 'oklch(0.34 0.025 34)',
                    500: 'oklch(0.22 0.020 34)',
                    600: 'oklch(0.16 0.015 34)',
                    700: 'oklch(0.11 0.012 34)',
                    800: 'oklch(0.08 0.010 34)',
                    900: 'oklch(0.05 0.008 34)',
                },
                /* Gold accent */
                gold: {
                    300: 'oklch(0.88 0.12 80)',
                    400: 'oklch(0.80 0.14 72)',
                    500: 'oklch(0.72 0.15 68)',
                    600: 'oklch(0.62 0.14 62)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                warm: '0 4px 24px -4px rgba(120, 50, 30, 0.20)',
                'warm-lg': '0 8px 40px -8px rgba(120, 50, 30, 0.28)',
                'warm-xl': '0 16px 60px -12px rgba(120, 50, 30, 0.36)',
                glow: '0 0 30px rgba(140, 60, 30, 0.25)',
                'terracotta': '0 4px 20px rgba(100, 40, 20, 0.22)',
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
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                'slide-right': {
                    from: { opacity: '0', transform: 'translateX(-20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.96)' },
                    to: { opacity: '1', transform: 'scale(1)' }
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.7s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'slide-right': 'slide-right 0.6s ease-out forwards',
                'scale-in': 'scale-in 0.5s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
