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
                heading: ['Poppins', 'system-ui', 'sans-serif'],
                body: ['Poppins', 'system-ui', 'sans-serif'],
                korean: ['Noto Sans KR', 'system-ui', 'sans-serif'],
                sans: ['Poppins', 'system-ui', 'sans-serif'],
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
                /* Bunsik Korean Restaurant brand palette */
                /* Warm red */
                gochujang: {
                    50:  'oklch(0.97 0.015 25)',
                    100: 'oklch(0.92 0.04 25)',
                    200: 'oklch(0.82 0.09 25)',
                    300: 'oklch(0.68 0.14 25)',
                    400: 'oklch(0.56 0.18 25)',
                    500: 'oklch(0.44 0.20 25)',
                    600: 'oklch(0.37 0.18 25)',
                    700: 'oklch(0.29 0.14 25)',
                    800: 'oklch(0.20 0.09 25)',
                    900: 'oklch(0.13 0.05 25)',
                },
                /* Cream / warm white */
                cream: {
                    50:  'oklch(0.99 0.005 80)',
                    100: 'oklch(0.97 0.012 75)',
                    200: 'oklch(0.94 0.020 73)',
                    300: 'oklch(0.90 0.028 70)',
                    400: 'oklch(0.85 0.032 68)',
                    500: 'oklch(0.78 0.038 65)',
                },
                /* Near-black / charcoal */
                charcoal: {
                    50:  'oklch(0.92 0.008 28)',
                    100: 'oklch(0.80 0.015 28)',
                    200: 'oklch(0.65 0.020 28)',
                    300: 'oklch(0.50 0.022 28)',
                    400: 'oklch(0.35 0.020 28)',
                    500: 'oklch(0.22 0.018 28)',
                    600: 'oklch(0.16 0.015 28)',
                    700: 'oklch(0.12 0.012 28)',
                    800: 'oklch(0.09 0.010 28)',
                    900: 'oklch(0.06 0.008 28)',
                },
                /* Gold accent */
                gold: {
                    300: 'oklch(0.88 0.12 75)',
                    400: 'oklch(0.82 0.14 68)',
                    500: 'oklch(0.75 0.15 62)',
                    600: 'oklch(0.65 0.14 58)',
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
                korean: '0 4px 24px -4px rgba(160, 30, 20, 0.22)',
                'korean-lg': '0 8px 40px -8px rgba(160, 30, 20, 0.32)',
                'korean-xl': '0 16px 60px -12px rgba(160, 30, 20, 0.40)',
                glow: '0 0 30px rgba(180, 40, 20, 0.28)',
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
                'slide-in': {
                    from: { opacity: '0', transform: 'translateX(-20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'slide-in': 'slide-in 0.5s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
