import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9117E1',
          dark: '#7e0ecb',
        },
        background: {
          light: "var(--background-light)", // Light mode background
          dark: "var(--background-dark)", // Dark mode background
        },
        foreground: {
          light: "var(--foreground-light)", // Light mode foreground
          dark: "var(--foreground-dark)", // Dark mode foreground
        },
      },
      fontFamily: {
        parkinsans: ["ParkinSans", "sans-serif"],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 10px #9117E1' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 20px #9117E1' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
