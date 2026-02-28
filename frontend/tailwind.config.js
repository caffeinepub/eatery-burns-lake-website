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
                heading: ['Oswald', 'Impact', 'sans-serif'],
                body: ['Nunito', 'system-ui', 'sans-serif'],
                sans: ['Nunito', 'system-ui', 'sans-serif'],
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
                /* Luna's Kitchen brand palette */
                chili: {
                    50:  'oklch(0.97 0.02 22)',
                    100: 'oklch(0.92 0.05 22)',
                    200: 'oklch(0.82 0.10 22)',
                    300: 'oklch(0.68 0.15 22)',
                    400: 'oklch(0.55 0.18 22)',
                    500: 'oklch(0.42 0.18 22)',
                    600: 'oklch(0.35 0.16 22)',
                    700: 'oklch(0.28 0.13 22)',
                    800: 'oklch(0.20 0.09 22)',
                    900: 'oklch(0.14 0.06 22)',
                },
                salsa: {
                    50:  'oklch(0.97 0.03 48)',
                    100: 'oklch(0.93 0.07 48)',
                    200: 'oklch(0.87 0.11 48)',
                    300: 'oklch(0.80 0.15 48)',
                    400: 'oklch(0.72 0.18 48)',
                    500: 'oklch(0.64 0.18 46)',
                    600: 'oklch(0.55 0.17 44)',
                    700: 'oklch(0.45 0.15 42)',
                    800: 'oklch(0.35 0.12 40)',
                    900: 'oklch(0.25 0.09 38)',
                },
                cream: {
                    50:  'oklch(0.99 0.005 80)',
                    100: 'oklch(0.97 0.018 80)',
                    200: 'oklch(0.94 0.025 78)',
                    300: 'oklch(0.90 0.03 75)',
                    400: 'oklch(0.85 0.035 72)',
                    500: 'oklch(0.78 0.04 68)',
                },
                ink: {
                    50:  'oklch(0.92 0.01 30)',
                    100: 'oklch(0.80 0.02 28)',
                    200: 'oklch(0.65 0.03 28)',
                    300: 'oklch(0.50 0.03 28)',
                    400: 'oklch(0.35 0.03 28)',
                    500: 'oklch(0.22 0.03 28)',
                    600: 'oklch(0.16 0.03 28)',
                    700: 'oklch(0.12 0.02 28)',
                    800: 'oklch(0.09 0.02 28)',
                    900: 'oklch(0.06 0.01 28)',
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
                spicy: '0 4px 24px -4px rgba(120, 30, 10, 0.22)',
                'spicy-lg': '0 8px 40px -8px rgba(120, 30, 10, 0.32)',
                'spicy-xl': '0 16px 60px -12px rgba(120, 30, 10, 0.40)',
                glow: '0 0 30px rgba(200, 80, 20, 0.30)',
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
