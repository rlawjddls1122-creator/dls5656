import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 차분한 다크 베이스
        ink: {
          950: "#0a0a0c",
          900: "#101014",
          850: "#16161c",
          800: "#1c1c24",
          700: "#26262f",
          600: "#33333f",
        },
        // 몰입감을 주는 은은한 액센트
        glow: {
          DEFAULT: "#8b7cff",
          soft: "#a99bff",
          dim: "#5b4fd1",
        },
        mist: "#8a8a99",
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          "Pretendard",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      // 모든 글자 크기의 행간을 140%로 통일
      fontSize: {
        xs: ["0.75rem", "1.4"],
        sm: ["0.875rem", "1.4"],
        base: ["1rem", "1.4"],
        lg: ["1.125rem", "1.4"],
        xl: ["1.25rem", "1.4"],
        "2xl": ["1.5rem", "1.4"],
        "3xl": ["1.875rem", "1.4"],
        "4xl": ["2.25rem", "1.4"],
        "5xl": ["3rem", "1.4"],
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(139, 124, 255, 0.45)",
        card: "0 8px 30px -12px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out both",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
