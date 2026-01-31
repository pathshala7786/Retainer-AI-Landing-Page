import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "#000000", // Pitch Black
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#EC4899", // Pink-500
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#A855F7", // Purple-500
                    foreground: "#ffffff",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "#111111", // Very dark gray
                    foreground: "#A1A1AA",
                },
                accent: {
                    DEFAULT: "#1F1F1F",
                    foreground: "#ffffff",
                },
                card: {
                    DEFAULT: "#111111",
                    foreground: "#ffffff",
                },
                surface: {
                    DEFAULT: "#000000",
                },
                cta: {
                    DEFAULT: "#EC4899",
                    hover: "#DB2777",
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
                teko: ["var(--font-teko)", "sans-serif"],
            },
            boxShadow: {
                'sm': 'var(--shadow-sm)',
                'md': 'var(--shadow-md)',
                'lg': 'var(--shadow-lg)',
                'xl': 'var(--shadow-xl)',
                'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
                'glow-pink-strong': '0 0 40px rgba(236, 72, 153, 0.7)',
                'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
                'glow-purple-strong': '0 0 40px rgba(168, 85, 247, 0.7)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "breathing-glow": "breathing-glow 4s ease-in-out infinite alternate",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "breathing-glow": {
                    "0%": { opacity: "0.4", transform: "scale(1)" },
                    "100%": { opacity: "0.8", transform: "scale(1.1)" },
                }
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
};
export default config;
