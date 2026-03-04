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
                heading: ['"Fraunces"', 'Georgia', 'serif'],
                display: ['"Fraunces"', 'Georgia', 'serif'],
                body: ['"Outfit"', 'system-ui', 'sans-serif'],
                sans: ['"Outfit"', 'system-ui', 'sans-serif'],
                serif: ['"Fraunces"', 'Georgia', 'serif'],
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

                /* Op's Kitchen brand palette */
                /* Soft warm red */
                crimson: {
                    50:  'oklch(0.97 0.018 27)',
                    100: 'oklch(0.93 0.04 27)',
                    200: 'oklch(0.82 0.09 27)',
                    300: 'oklch(0.68 0.14 27)',
                    400: 'oklch(0.55 0.17 27)',
                    500: 'oklch(0.48 0.18 27)',
                    600: 'oklch(0.40 0.16 27)',
                    700: 'oklch(0.31 0.13 27)',
                    800: 'oklch(0.22 0.09 27)',
                    900: 'oklch(0.14 0.05 27)',
                },
                /* Warm cream / ivory */
                cream: {
                    50:  'oklch(0.99 0.004 82)',
                    100: 'oklch(0.972 0.012 82)',
                    200: 'oklch(0.955 0.022 78)',
                    300: 'oklch(0.935 0.032 75)',
                    400: 'oklch(0.91 0.040 72)',
                    500: 'oklch(0.87 0.046 70)',
                },
                /* Near-black ink */
                ink: {
                    50:  'oklch(0.90 0.010 28)',
                    100: 'oklch(0.76 0.018 28)',
                    200: 'oklch(0.62 0.022 28)',
                    300: 'oklch(0.48 0.020 28)',
                    400: 'oklch(0.35 0.016 28)',
                    500: 'oklch(0.24 0.014 28)',
                    600: 'oklch(0.18 0.012 28)',
                    700: 'oklch(0.15 0.015 25)',
                    800: 'oklch(0.11 0.010 25)',
                    900: 'oklch(0.07 0.008 25)',
                },
                /* Warm gray */
                stone: {
                    100: 'oklch(0.95 0.010 72)',
                    200: 'oklch(0.91 0.014 70)',
                    300: 'oklch(0.84 0.016 68)',
                    400: 'oklch(0.72 0.018 65)',
                    500: 'oklch(0.62 0.018 62)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '0.75rem',
                '3xl': '1.25rem',
                '4xl': '2rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                warm: '0 4px 24px -4px rgba(80, 20, 10, 0.18)',
                'warm-lg': '0 8px 40px -8px rgba(80, 20, 10, 0.24)',
                'warm-xl': '0 16px 60px -12px rgba(80, 20, 10, 0.30)',
                card: '0 2px 16px rgba(0,0,0,0.08)',
                'card-hover': '0 8px 32px rgba(0,0,0,0.14)',
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
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.7s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
